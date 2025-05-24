import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getEmailTemplate } from './utils';

export async function POST(request: Request) {
  console.log('Contact form submission received');
  
  try {
    const { name, email, subject, message } = await request.json();
    console.log('Form data:', { name, email, subject, messageLength: message?.length });

    // Validate form data
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Hardcoded SMTP credentials for testing
    const smtpConfig = {
      host: 'smtp-relay.brevo.com',
      port: 587,
      user: '8da524001@smtp-brevo.com',
      pass: '9JxcD0Fmy67Z1pP3',
      to: 'aditya.manoj.shinde@gmail.com'
    };
    
    console.log('Using SMTP configuration:', {
      host: smtpConfig.host,
      port: smtpConfig.port,
      user: smtpConfig.user,
      // Password hidden for security
      to: smtpConfig.to
    });

    try {
      // Create transporter with direct configuration
      const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: false,
        auth: {
          user: smtpConfig.user,
          pass: smtpConfig.pass,
        },
        debug: true, // Enable debug output
        logger: true // Log information to the console
      });
      
      // Verify connection configuration
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
      
      // Prepare template replacements
      const replacements = {
        name,
        email,
        subject,
        message: message.replace(/\n/g, '<br>'),
        timestamp: new Date().toLocaleString()
      };
      
      // Get HTML template with replacements
      const htmlContent = getEmailTemplate('email-template.html', replacements);
      
      // Email content
      const mailOptions = {
        from: `"Portfolio Contact Form" <${smtpConfig.user}>`,
        to: smtpConfig.to,
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
        html: htmlContent,
      };

      console.log('Attempting to send email to:', smtpConfig.to);
      
      // Send email and wait for result
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info);
      
      // Close the connection after sending
      transporter.close();

      return NextResponse.json(
        { 
          message: 'Email sent successfully', 
          id: info.messageId,
          response: info.response 
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { 
          error: `Failed to send email: ${emailError.message || 'Unknown error'}`,
          stack: emailError.stack
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request' + (error.message ? `: ${error.message}` : ''),
        stack: error.stack
      },
      { status: 500 }
    );
  }
}

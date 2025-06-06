// Test script using Gmail SMTP as an alternative
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function main() {
  console.log('Testing with Gmail SMTP as an alternative...');
  
  // Get recipient email from environment
  const emailTo = process.env.EMAIL_TO || 'aditya.manoj.shinde@gmail.com';
  
  // Prompt for Gmail credentials
  console.log('\nNOTE: You need to use an "App Password" for your Gmail account.');
  console.log('To create one: Google Account > Security > 2-Step Verification > App passwords');
  
  // Get Gmail credentials from command line arguments
  const gmailUser = process.argv[2];
  const gmailPass = process.argv[3];
  
  if (!gmailUser || !gmailPass) {
    console.error('\n❌ Error: Gmail username and password are required.');
    console.log('Usage: node test-gmail-smtp.js your.email@gmail.com "your-app-password"');
    process.exit(1);
  }

  console.log('\nGmail SMTP Configuration:');
  console.log(`- Host: smtp.gmail.com`);
  console.log(`- Port: 587`);
  console.log(`- User: ${gmailUser}`);
  console.log(`- To: ${emailTo}`);

  try {
    // Create transporter with Gmail settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
      debug: true
    });
    
    // Verify connection
    console.log('\nVerifying Gmail SMTP connection...');
    await transporter.verify();
    console.log('✅ Gmail SMTP connection verified successfully');
    
    // Current timestamp for subject line to track emails
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    // Send test email
    console.log('\nSending test email via Gmail...');
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Test" <${gmailUser}>`,
      to: emailTo,
      subject: `Test Email via Gmail SMTP ${timestamp}`,
      text: `This is a test email sent via Gmail SMTP to verify that your contact form email service is working correctly. Timestamp: ${timestamp}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #4f46e5;">Gmail SMTP Test Successful</h2>
          <p>This is a test email sent via Gmail SMTP to verify that your contact form email service is working correctly.</p>
          <p>If you're seeing this, your Gmail SMTP configuration is working properly!</p>
          <p><strong>Test ID:</strong> ${timestamp}</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666;">Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });
    
    console.log('✅ Email sent successfully via Gmail!');
    console.log(`Message ID: ${info.messageId}`);
    console.log(`Response: ${info.response}`);
    console.log('\nImportant Notes:');
    console.log('1. Check your spam/junk folder');
    console.log('2. Some email providers may delay delivery');
    console.log('3. Look for an email with subject containing:', timestamp);
    
  } catch (error) {
    console.error('❌ Error:', error);
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check your Gmail username and app password.');
      console.error('Make sure you\'re using an App Password if you have 2FA enabled on your Google account.');
    } else if (error.code === 'ESOCKET') {
      console.error('Connection error. Please check your internet connection.');
    }
  }
}

main().catch(console.error);

// More detailed email test script with additional logging
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function main() {
  console.log('Testing email configuration with detailed logging...');
  
  // Get environment variables
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const emailTo = process.env.EMAIL_TO || 'aditya.manoj.shinde@gmail.com';

  console.log('SMTP Configuration:');
  console.log(`- Host: ${smtpHost}`);
  console.log(`- Port: ${smtpPort}`);
  console.log(`- User: ${smtpUser}`);
  console.log(`- To: ${emailTo}`);

  try {
    // Create transporter with more detailed logging
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      debug: true,
      logger: true
    });
    
    // Verify connection
    console.log('\nVerifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    
    // Current timestamp for subject line to track emails
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    // Send test email
    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: `"Portfolio Test ${timestamp}" <${smtpUser}>`,
      to: emailTo,
      subject: `Test Email from Portfolio ${timestamp}`,
      text: `This is a test email to verify that your contact form email service is working correctly. Timestamp: ${timestamp}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #4f46e5;">Email Test Successful</h2>
          <p>This is a test email to verify that your contact form email service is working correctly.</p>
          <p>If you're seeing this, your SMTP configuration is working properly!</p>
          <p><strong>Test ID:</strong> ${timestamp}</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666;">Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      headers: {
        'X-Test-ID': timestamp
      }
    });
    
    console.log('✅ Email sent successfully!');
    console.log(`Message ID: ${info.messageId}`);
    console.log(`Response: ${info.response}`);
    console.log('\nImportant Notes:');
    console.log('1. Check your spam/junk folder');
    console.log('2. Some email providers may delay delivery');
    console.log('3. Look for an email with subject containing:', timestamp);
    console.log('\nFull email details:', JSON.stringify(info, null, 2));
    
  } catch (error) {
    console.error('❌ Error:', error);
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check your SMTP username and password.');
    } else if (error.code === 'ESOCKET') {
      console.error('Connection error. Please check your SMTP host and port.');
    }
  }
}

main().catch(console.error);

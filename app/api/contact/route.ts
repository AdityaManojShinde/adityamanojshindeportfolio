import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailTemplate } from "./utils";

export async function POST(request: Request) {
  console.log("Contact form submission received");

  try {
    const { name, email, subject, message } = await request.json();
    console.log("Form data:", {
      name,
      email,
      subject,
      messageLength: message?.length,
    });

    // Validate form data
    if (!name || !email || !subject || !message) {
      console.log("Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const emailTo = "aditya.manoj.shinde@gmail.com";

    // Validate environment variables
    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error("Missing SMTP configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("Using SMTP configuration:", {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      to: emailTo,
    });

    try {
      // Create transporter with environment variables
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: true,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
        debug: true, // Enable debug output
        logger: true, // Log information to the console
      });

      // Verify connection configuration
      console.log("Verifying SMTP connection...");
      await transporter.verify();
      console.log("SMTP connection verified successfully");

      // Prepare template replacements
      const replacements = {
        name,
        email,
        subject,
        message: message.replace(/\n/g, "<br>"),
        timestamp: new Date().toLocaleString(),
      };

      // Get HTML template with replacements
      const htmlContent = getEmailTemplate("email-template.html", replacements);

      // Email content
      const mailOptions = {
        from: `"Portfolio Contact Form" <${smtpUser}>`,
        to: emailTo,
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

      console.log("Attempting to send email to:", emailTo);

      // Send email and wait for result
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);

      // Close the connection after sending
      transporter.close();

      return NextResponse.json(
        {
          message: "Email sent successfully",
          id: info.messageId,
          response: info.response,
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        {
          error: `Failed to send email: ${
            emailError.message || "Unknown error"
          }`,
          stack: emailError.stack,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        error:
          "Failed to process request" +
          (error.message ? `: ${error.message}` : ""),
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}

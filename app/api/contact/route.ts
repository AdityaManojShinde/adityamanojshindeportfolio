import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables.
// Using '|| ""' ensures it's always a string, even if the env variable isn't set,
// which Resend's constructor expects.
const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(request: Request) {
  try {
    // Parse the request body to extract form data.
    const { name, email, subject, message } = await request.json();

    // --- Input Validation ---
    // Basic validation to ensure all required fields are present.
    if (!name || !email || !subject || !message) {
      console.error("Validation Error: Missing required fields.", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 } // Bad Request status code
      );
    }

    // Optional: Basic email format validation (can be more robust with regex)
    if (!email.includes("@") || !email.includes(".")) {
      console.error("Validation Error: Invalid email format.", { email });
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // --- Send Email using Resend API ---
    // The 'from' address must be a domain you've verified with Resend,
    // or 'onboarding@resend.dev' for initial testing.
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // IMPORTANT: For production, change this to a verified domain email.
      to: ["gitpushforcev2@gmail.com"], // Recipient email address
      subject: `Portfolio Contact: ${subject}`, // Subject line for the email
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New User Message</title>
    <style>
        /* Reset styles for email clients */
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        body {
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 15px !important;
            }
        }
    </style>
</head>
<body style="background-color: #f8fafc; margin: 0; padding: 20px 0;">
    <!-- Container table -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px; margin: 0 auto;">
        <tr>
            <td align="center" style="padding: 30px 0;">
                <!-- Header with accent color -->
                <table width="100%" style="background-color: #4361ee; border-radius: 10px 10px 0 0;">
                    <tr>
                        <td style="padding: 25px 30px; text-align: center;">
                            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Message Received</h1>
                        </td>
                    </tr>
                </table>

                <!-- Content Card -->
                <table width="100%" style="background-color: #ffffff; border-radius: 0 0 10px 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <tr>
                        <td class="container" style="padding: 35px 40px;">
                            <!-- Sender Info -->
                            <table width="100%">
                                <tr>
                                    <td style="padding-bottom: 20px;">
                                        <div style="font-size: 18px; color: #2d3748; font-weight: 600; margin-bottom: 5px;">From:</div>
                                        <div style="font-size: 20px; color: #1e40af; margin-bottom: 3px;">${name}</div>
                                        <a href="mailto:${email}" style="font-size: 16px; color: #4361ee; text-decoration: none;">${email}</a>
                                    </td>
                                </tr>
                                
                                <!-- Message Header -->
                                <tr>
                                    <td style="padding: 25px 0 15px 0; border-top: 1px solid #edf2f7;">
                                        <h2 style="font-size: 20px; color: #2d3748; margin: 0; font-weight: 600;">Message:</h2>
                                    </td>
                                </tr>
                                
                                <!-- Message Content -->
                                <tr>
                                    <td style="padding: 20px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                                        <p style="font-size: 16px; line-height: 1.6; color: #4a5568; margin: 0;">
                                            ${message.replace(/\n/g, "<br>")}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 25px 40px; background-color: #f1f5f9; border-radius: 0 0 10px 10px; border-top: 1px solid #e2e8f0; text-align: center;">
                            <p style="font-size: 14px; color: #718096; margin: 0;">
                                This message was sent via your website contact form
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>

      `,
    });

    // --- Success Response ---
    console.log("Email sent successfully.", data);
    return NextResponse.json(
      {
        message: "Email sent successfully",
        response: data, // Include Resend's response data for debugging/logging
      },
      { status: 200 } // OK status code
    );
  } catch (error: any) {
    // --- Error Handling ---
    // Log the full error details to the server console for debugging.
    console.error("Failed to send email:", {
      errorMessage: error.message,
      errorStack: error.stack,
      errorName: error.name,
      // You might want to stringify error if it's a complex object for better logging
      fullErrorObject: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    });

    // Return a JSON response with the error message and stack trace.
    return NextResponse.json(
      {
        error: error.message || "Failed to send email", // User-friendly error message
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined, // Only expose stack in development
      },
      { status: 500 } // Internal Server Error status code
    );
  }
}

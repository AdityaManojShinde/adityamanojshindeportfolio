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
      from: "onboarding@resend.dev", // IMPORTANT: For production, change this to a verified domain email.
      to: ["gitpushforcev2@gmail.com"], // Recipient email address
      subject: `Portfolio Contact: ${subject}`, // Subject line for the email
      html: `
      <div>
        <h1><strong>Name:</strong> ${name}</h1>
        <h2><strong>Email:</strong> ${email}</h2>
        <h2><strong>Message:</strong></h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
        </div> <!-- Replaces newlines with <br> for HTML rendering -->
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

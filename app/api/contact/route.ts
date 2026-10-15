import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = result.data;

    // Bot detection: If honeypot is populated, pretend success
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message sent." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "srajeshs021@gmail.com";

    // If API key is not configured, gracefully trigger mailto fallback
    if (!apiKey || apiKey === "your_resend_api_key_here") {
      const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject}`
      )}&body=${encodeURIComponent(
        `From: ${name} (${email})\n\nMessage:\n${message}`
      )}`;

      return NextResponse.json({
        success: false,
        fallbackMailto: true,
        mailtoUrl,
        message:
          "RESEND_API_KEY is not configured in this environment. Opening your default mail client...",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e3ddcc; border-radius: 12px;">
          <h2 style="color: #1f5130; margin-top: 0;">New Portfolio Message</h2>
          <p><strong>Sender:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #e3ddcc; margin: 16px 0;" />
          <p style="white-space: pre-wrap; color: #1c2b1f; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email via Resend service.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

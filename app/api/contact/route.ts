import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, address, service, message } = body as Record<
    string,
    string | undefined
  >;

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set — contact form submission was not emailed:",
      { name, phone, email, address, service, message }
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't finished being set up yet. Please call or email us directly.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Apex Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New estimate request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Project address: ${address || "N/A"}`,
        `Service needed: ${service || "N/A"}`,
        "",
        "Details:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact form email", err);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please call or email us directly." },
      { status: 500 }
    );
  }
}

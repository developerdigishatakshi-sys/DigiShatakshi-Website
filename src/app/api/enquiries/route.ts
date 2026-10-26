import { NextResponse } from "next/server";
import { Resend } from "resend";


const services = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Paid Advertising",
  "Content Marketing",
  "Website & Landing Pages",
  "Branding & Creative",
  "Lead Generation",
  "Marketing Automation",
  "Other",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^(?:(?:\+91|91)[ -]?)?[6-9][0-9]{9}$/;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    const data: unknown = await request.json();

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 }
      );
    }

    body = data as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Please submit valid form data." },
      { status: 400 }
    );
  }

  const name = clean(body.name);
  const company = clean(body.company);
  const email = clean(body.email).toLowerCase();
  const phone = clean(body.phone);
  const website = clean(body.website);
  const service = clean(body.service);
  const message = clean(body.message);

  if (
    name.length < 2 || name.length > 100 ||
    company.length < 2 || company.length > 160 ||
    email.length > 254 || !emailPattern.test(email) ||
    phone.length > 15 || !mobilePattern.test(phone) ||
    website.length > 2048 ||
    service.length === 0 || !services.includes(service) ||
    message.length < 20 || message.length > 2000
  ) {
    return NextResponse.json(
      { error: "Please check all required fields and try again." },
      { status: 400 }
    );
  }

  if (website) {
    try {
      const url = new URL(website);
      if (url.protocol !== "https:" && url.protocol !== "http:") {
        throw new Error("Invalid protocol");
      }
    } catch {
      return NextResponse.json(
        { error: "Please enter a valid website URL." },
        { status: 400 }
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_TO_EMAIL;
  const sender = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Enquiry email configuration is incomplete.");
    return NextResponse.json(
      { error: "Enquiry delivery is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `New website enquiry: ${company}`,
      text: [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Business: ${company}`,
        `Email: ${email}`,
        `Mobile: ${phone}`,
        `Website: ${website || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Business description:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected an enquiry email.");
      return NextResponse.json(
        { error: "We couldn't send your enquiry right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Thank you! Your enquiry has been sent successfully." },
      { status: 200 }
    );
  } catch {
    console.error("Enquiry email delivery failed.");
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please try again later." },
      { status: 502 }
    );
  }
}



"use client";

import { useState, type FormEvent } from "react";

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

type ContactFormProps = {
  defaultService?: string;
};

export function ContactForm({
  defaultService = "",
}: ContactFormProps) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity() || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: { message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        setStatus(
          result.error ||
            "We couldn't submit your enquiry. Please try again."
        );
        return;
      }

      setStatus(
        result.message || "Your enquiry has been sent successfully."
      );
      form.reset();
    } catch {
      setStatus(
        "Unable to connect right now. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__heading">
        <span className="contact-eyebrow">Enquiry Form</span>
        <h3>Tell us about your business.</h3>
        <p>Fields marked with * are required.</p>
      </div>

      <div className="contact-form__grid">
        <label className="contact-field">
          <span>Name *</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            minLength={2}
            maxLength={100}
            required
          />
        </label>

        <label className="contact-field">
          <span>Business name *</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Enter your business name"
            minLength={2}
            maxLength={160}
            required
          />
        </label>

        <label className="contact-field">
          <span>Email address *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={254}
            required
          />
        </label>

        <label className="contact-field">
          <span>Indian mobile number *</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel-national"
            placeholder="9876543210 or +91 9876543210"
            inputMode="tel"
            pattern="(?:(?:\+91|91)[ -]?)?[6-9][0-9]{9}"
            title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9. You may add the +91 country code."
            maxLength={15}
            required
          />
        </label>

        <label className="contact-field contact-field--full">
          <span>Website URL (optional)</span>
          <input
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://yourwebsite.com"
            maxLength={2048}
          />
        </label>

        <label className="contact-field contact-field--full">
          <span>What service are you interested in? *</span>
          <select
            name="service"
            defaultValue={defaultService}
            required
          >
            <option value="" disabled>
              Select a service
            </option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="contact-field contact-field--full">
          <span>Describe your business *</span>
          <textarea
            name="message"
            placeholder="Tell us what your business does. For example: I run a bakery shop, a real estate business, interior and exterior design services, or a freelancing business. Who are your customers, and what would you like to achieve?"
            rows={5}
            minLength={20}
            maxLength={2000}
            required
          />
        </label>
      </div>

      <button
        className="contact-button contact-button--primary contact-form__submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Enquiry"}{" "}
        <span aria-hidden="true">→</span>
      </button>

      <p className="contact-form__privacy">
        Please share only information relevant to your enquiry.
      </p>

      {status && (
        <p
          className="contact-form__status"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      )}
    </form>
  );
}


"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import CircularCarousel from "@/components/CircularCarousel";

const items = [
  {
    src: "/images/services/seo-growth-illustration.png",
    alt: "Search engine optimisation and organic visibility",
    title: "SEO",
    subtitle: "Grow organic visibility",
  },
  {
    src: "/images/services/social-media-collage.png",
    alt: "Social media engagement and customer enquiries",
    title: "Social Media",
    subtitle: "Build your community",
  },
  {
    src: "/images/services/paid-ads-right.png",
    alt: "Paid advertising and campaign performance",
    title: "Paid Ads",
    subtitle: "Reach the right audience",
  },
  {
    src: "/images/services/content-marketing-strategy.png",
    alt: "Content marketing strategy and planning",
    title: "Content",
    subtitle: "Turn ideas into value",
  },
  {
    src: "/images/services/seo-growth-dashboard.png",
    alt: "Website optimisation and landing pages",
    title: "Websites",
    subtitle: "Convert more visitors",
  },
  {
    src: "/images/services/lead-generation-right.png",
    alt: "Lead generation marketing funnel",
    title: "Lead Generation",
    subtitle: "Turn interest into enquiries",
  },
];
function GeniePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  async function handleGenieSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setFormStatus(
          result.error || "We couldn't submit your enquiry. Please try again."
        );
        return;
      }

      setFormStatus(
        result.message || "Thanks! Your enquiry has been submitted."
      );
      form.reset();
    } catch {
      setFormStatus(
        "Unable to connect right now. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const storageKey = "df-genie-popup-dismissed";

    try {
      if (window.sessionStorage.getItem(storageKey) === "1") {
        return;
      }

      setDismissed(false);
    } catch {
      setDismissed(false);
    }

    const delay = window.setTimeout(() => setVisible(true), 1800);

    return () => window.clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!showTerms) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowTerms(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showTerms]);

  const dismissPopup = () => {
    setShowTerms(false);

    try {
      window.sessionStorage.setItem("df-genie-popup-dismissed", "1");
    } catch {
      // Dismissal still works for the current component instance.
    }

    setDismissed(true);
  };

  if (!visible || dismissed) return null;

  return createPortal(
    <div
      className="genie-popup-backdrop"
      onClick={dismissPopup}
    >
      <aside
        className="genie-popup"
        aria-label="Digital marketing enquiry"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="genie-popup__close"
          onClick={dismissPopup}
          aria-label="Close enquiry popup"
        >
          ×
        </button>

        <div className="genie-popup__smoke" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="genie-popup__content">
          <div className="genie-popup__eyebrow">
            <span aria-hidden="true">✦</span> A LITTLE MARKETING MAGIC
          </div>

          <h2>
            Ready to make
            <span> your brand shine?</span>
          </h2>

          <p>Tell us a little about your business and goals.</p>

          <form
            className="genie-enquiry-form"
            onSubmit={handleGenieSubmit}
          >
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
              />
            </label>

            <label>
              Business name
              <input
                name="company"
                autoComplete="organization"
                minLength={2}
                maxLength={160}
                required
              />
            </label>

            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>

            <label>
              Mobile number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={15}
                pattern="(?:(?:\+91|91)[ -]?)?[6-9][0-9]{9}"
                title="Enter a valid Indian mobile number."
                required
              />
            </label>

            <label className="genie-enquiry-full">
              What do you need help with?
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Search Engine Optimization</option>
                <option>Social Media Marketing</option>
                <option>Paid Advertising</option>
                <option>Content Marketing</option>
                <option>Website &amp; Landing Pages</option>
                <option>Branding &amp; Creative</option>
                <option>Lead Generation</option>
                <option>Marketing Automation</option>
                <option>Other</option>
              </select>
            </label>

            <label className="genie-enquiry-full">
              Your goals
              <textarea
                name="message"
                minLength={20}
                maxLength={2000}
                rows={2}
                placeholder="Tell us what you'd like to improve (20+ characters)."
                required
              />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request a Consultation"}
              {!isSubmitting && (
                <span aria-hidden="true"> →</span>
              )}
            </button>

            <button
              type="button"
              className="genie-terms-link"
              onClick={() => setShowTerms(true)}
            >
              Terms &amp; Conditions
            </button>

            {formStatus && (
              <p
                className="genie-enquiry-status"
                role="status"
                aria-live="polite"
              >
                {formStatus}
              </p>
            )}
          </form>
        </div>

        <div
          className="genie-popup__genie genie-popup__brand"
          aria-hidden="true"
        >
          <img
            src="/images/digi-shatakshi-glossy-growth-logo.png"
            alt=""
            className="genie-popup__brand-logo"
          />
        </div>

        {showTerms && (
          <div
            className="genie-terms-backdrop"
            onClick={() => setShowTerms(false)}
          >
            <section
              className="genie-terms-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="genie-terms-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="genie-terms-close"
                onClick={() => setShowTerms(false)}
                aria-label="Close terms and conditions"
                autoFocus
              >
                ×
              </button>

              <p className="genie-terms-eyebrow">
                DIGI SHATAKSHI
              </p>

              <h3 id="genie-terms-title">
                Terms &amp; Conditions
              </h3>

              <p className="genie-terms-copy">
                By submitting this form, you agree that Digi Shatakshi
                may use the information provided to respond to your
                enquiry and discuss relevant services. Your details
                will be handled responsibly and will not be sold to
                third parties. Please ensure all submitted information
                is accurate. These placeholder terms may be updated
                before launch.
              </p>

              <button
                type="button"
                className="genie-terms-done"
                onClick={() => setShowTerms(false)}
              >
                I Understand
              </button>
            </section>
          </div>
        )}
      </aside>
    </div>,
    document.body
  );
}

export function HeroVisual() {
  return (
    <>
      <div
        className="campaign-circular-wrap"
        style={{ height: 460, minHeight: 460 }}
      >
        <CircularCarousel
          items={items}
          preset="cylinder"
          intro="rise"
          cardWidth={260}
          aspectRatio={1.12}
          gap={32}
          curve={undefined}
          tilt={undefined}
          perspective={undefined}
          onChange={undefined}
          onItemClick={undefined}
          style={{}}
          autoplay="step"
          interval={4}
          speed={7}
          pauseOnHover
          draggable
          momentum={0.45}
          snap
          captions
          depthFade={0.42}
          fadeColor="#08090d"
          cornerRadius={16}
          className="campaign-circular-carousel"
        />
      </div>

      <GeniePopup />
    </>
  );
}

export default HeroVisual;

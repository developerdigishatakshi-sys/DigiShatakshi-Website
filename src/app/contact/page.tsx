import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to DF Digital Marketing Agency about your business goals, digital marketing challenges, and opportunities for growth.",
};

const reasons = [
  {
    number: "01",
    title: "Strategy-Focused",
    description:
      "We start by understanding your business objectives and current digital position.",
  },
  {
    number: "02",
    title: "Customized Approach",
    description:
      "Your marketing approach should be relevant to your goals, audience, and business requirements.",
  },
  {
    number: "03",
    title: "Multi-Channel Expertise",
    description:
      "Explore the channels relevant to your objectives, from SEO and social media to paid ads, content, and websites.",
  },
  {
    number: "04",
    title: "Performance-Oriented",
    description:
      "We focus on measurable activities and use performance insights to improve marketing efforts.",
  },
] as const;

const faqs = [
  {
    question: "How can I get started with your company?",
    answer:
      "Submit an enquiry with your business details and marketing requirements. The next steps can then be discussed with the team.",
  },
  {
    question: "What information should I provide in my inquiry?",
    answer:
      "Share your business name, contact details, the service you are interested in, and a brief description of your goals.",
  },
  {
    question: "Do you provide customized digital marketing strategies?",
    answer:
      "Requirements vary by business. The appropriate approach can be discussed based on your objectives, audience, and current digital presence.",
  },
  {
    question: "Can I enquire about more than one service?",
    answer:
      "Yes. Select the closest matching service and describe any additional requirements in the optional message field.",
  },
  {
    question: "Can I discuss my requirements before starting a project?",
    answer:
      "An initial conversation can help both sides understand your requirements and possible next steps.",
  },
  {
    question: "Do I need to know which service I need before contacting you?",
    answer:
      "No. Describe your business goals or challenges and discuss which services may be relevant with the team.",
  },
] as const;

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="contact-hero">
        <div className="contact-container contact-hero__inner">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow__dot" />
            Let&apos;s start a conversation
          </span>
          <h1>Contact Us</h1>
          <h2>Let&apos;s Talk About Your Digital Growth</h2>
          <p>
            Have a digital marketing goal, a business challenge, or simply want
            to understand where your online presence can improve?
          </p>
          <p>
            Get in touch with our team to discuss your requirements and explore
            a digital marketing approach built around your business objectives.
          </p>
          <Link className="contact-button contact-button--primary" href="#enquiry">
            Send an Enquiry <span aria-hidden="true">↘</span>
          </Link>
          <span className="contact-hero__index">DF / CONTACT</span>
        </div>
      </section>

      <section className="contact-section contact-enquiry" id="enquiry">
        <div className="contact-container contact-enquiry__grid">
          <div className="contact-enquiry__copy">
            <span className="contact-eyebrow">Start a Conversation</span>
            <h2>Tell Us What Your Business Needs</h2>
            <p>
              Whether you are looking to improve search visibility, generate
              more enquiries, strengthen your social media presence, improve
              your website, or scale your paid campaigns, share your
              requirements with us.
            </p>
            <p>
              Our team can understand your goals and discuss the next steps
              with you.
            </p>

            <div className="contact-prompt">
              <span className="contact-prompt__mark" aria-hidden="true">↗</span>
              <div>
                <strong>Start with your goal.</strong>
                <p>You don&apos;t need to have every answer before reaching out.</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="contact-section contact-reasons">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">Why Connect With Us?</span>
            <h2>Let&apos;s Find the Right Digital Marketing Approach for Your Business</h2>
            <p>
              Every business has different goals, audiences, and challenges.
              Our initial conversation is focused on understanding your
              requirements before discussing relevant digital marketing
              opportunities.
            </p>
          </div>
          <div className="contact-reason-grid">
            {reasons.map((reason) => (
              <article className="contact-reason-card" key={reason.number}>
                <span className="contact-reason-card__number">{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section contact-office" id="office">
        <div className="contact-container contact-office__grid">
          <div className="contact-office__copy">
            <span className="contact-eyebrow">Find Us</span>
            <h2>Visit Our Office</h2>
            <p>
              If you would like to connect with us in person, contact our team
              to confirm the office location and arrange your visit.
            </p>
            <div className="contact-office-details">
              <div>
                <span>Office email</span>
                <strong>To be confirmed</strong>
              </div>
              <div>
                <span>Office phone</span>
                <strong>To be confirmed</strong>
              </div>
              <div>
                <span>Office address</span>
                <strong>Verified address needed</strong>
              </div>
              <div>
                <span>Business hours</span>
                <strong>To be confirmed</strong>
              </div>
            </div>
            <p className="contact-office-note">
              Office details are intentionally not guessed. Add verified
              company information before publishing this section.
            </p>
          </div>
          <div className="contact-map-placeholder">
            <span className="contact-map-placeholder__icon" aria-hidden="true">⌖</span>
            <h3>Find Our Office</h3>
            <p>
              A verified Google Maps location can be embedded here once the
              official office address is confirmed.
            </p>
            <span className="contact-map-placeholder__label">MAP LOCATION PENDING</span>
          </div>
        </div>
      </section>

      <section className="contact-section contact-faq" id="contact-faq">
        <div className="contact-container contact-faq__grid">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">Frequently Asked Questions</span>
            <h2>Contact &amp; Consultation FAQs</h2>
            <p>What to know before starting a conversation with our team.</p>
          </div>
          <div className="contact-faq-list">
            {faqs.map((faq, index) => (
              <details className="contact-faq-item" key={faq.question}>
                <summary>
                  <span className="contact-faq-item__number">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <span className="contact-faq-item__icon" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-final">
        <div className="contact-container contact-final__inner">
          <span className="contact-eyebrow">Your Next Move Starts Here</span>
          <h2>Ready to Start the Conversation?</h2>
          <p>
            Whether you have a specific digital marketing requirement or are
            still exploring your options, let&apos;s discuss your business goals
            and identify where digital marketing can support your growth.
          </p>
          <div className="contact-final__actions">
            <Link className="contact-button contact-button--light" href="#enquiry">
              Get a Free Consultation <span aria-hidden="true">↗</span>
            </Link>
            <Link className="contact-button contact-button--glass" href="/services">
              Explore Our Services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
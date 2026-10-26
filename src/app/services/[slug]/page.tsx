import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./service-detail.css";
import { SeoServiceCards } from "@/components/services/seo-service-cards";

const services = {
  "seo-services-lucknow": {
    title: "SEO Services in Lucknow",
    heading: "Improve Your Search Visibility. Reach the Right Audience Looking for Your Business.",
    intro: "Improve search visibility, attract relevant visitors, and build long-term organic growth through a considered SEO strategy.",
    services: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO", "SEO Content", "SEO Audits & Reporting"],
    steps: ["Understand", "Research", "Audit", "Optimize", "Monitor", "Improve"],
    closing: "Build a Stronger Organic Presence"
  },
  "social-media-marketing-lucknow": {
    title: "Social Media Marketing Services in Lucknow",
    heading: "Build a Stronger Social Presence. Connect With Your Local Audience.",
    intro: "Build awareness, communicate your value, and engage potential customers through social media marketing aligned with your business goals.",
    services: ["Social Media Strategy", "Content Planning & Creation", "Social Media Content Creation", "Social Media Management", "Social Media Campaigns", "Social Media Analytics & Reporting"],
    steps: ["Understand", "Strategize", "Plan", "Create", "Publish & Monitor", "Analyze & Improve"],
    closing: "Grow Your Social Presence in Lucknow"
  },
  "paid-advertising-lucknow": {
    title: "Paid Advertising Services in Lucknow",
    heading: "Reach the Right Audience With Targeted Digital Advertising",
    intro: "Build targeted campaigns with clear strategy, relevant creative, audience targeting, and ongoing performance optimization.",
    services: ["Campaign Strategy", "Google Ads", "Meta Advertising", "Ad Creative & Messaging", "Tracking & Optimization"],
    steps: ["Define", "Strategize", "Build", "Launch", "Monitor", "Optimize"],
    closing: "Reach More Relevant Customers in Lucknow"
  },
  "content-marketing-lucknow": {
    title: "Content Marketing Services in Lucknow",
    heading: "Create Content That Attracts, Informs, and Supports Business Growth",
    intro: "Create useful, relevant content that communicates expertise, answers customer questions, and supports your digital marketing goals.",
    services: ["Content Strategy", "Blog & Website Content", "Social Media Content", "Content Optimization"],
    steps: ["Research", "Plan", "Create", "Optimize", "Publish", "Measure"],
    closing: "Build a Stronger Content Presence in Lucknow"
  },
  "website-landing-pages-lucknow": {
    title: "Website & Landing Page Services in Lucknow",
    heading: "Turn Your Website Into a Clear, Conversion-Focused Customer Journey",
    intro: "Create a professional online experience that communicates your value, builds trust, and guides visitors toward meaningful action.",
    services: ["Website Strategy & Structure", "Landing Page Design", "Responsive Website Development", "Conversion-Focused Content", "Forms & Enquiry Journeys", "Performance & Usability Improvements"],
    steps: ["Discover", "Plan", "Design", "Develop", "Test & Launch", "Measure & Improve"],
    closing: "Build a Website That Works Harder for Your Business"
  },  "lead-generation-lucknow": {
    title: "Lead Generation Services in Lucknow",
    heading: "Turn Digital Interest Into Meaningful Business Enquiries",
    intro: "Website traffic and social media engagement are valuable, but businesses also need opportunities to connect with potential customers. We provide lead generation services in Lucknow that connect audience targeting, digital campaigns, landing pages, and conversion-focused communication.",
    services: ["Lead Generation Strategy", "Landing Pages & Lead Forms", "Paid Lead Generation", "Lead Tracking & Analysis"],
    steps: ["Understand", "Research", "Plan", "Build", "Launch", "Measure & Optimize"],
    closing: "Generate More Meaningful Enquiries in Lucknow"
  },  "branding-creative-lucknow": {
    title: "Branding & Creative Services in Lucknow",
    heading: "Build a Consistent and Recognizable Brand Identity",
    intro: "Develop consistent visual communication and a recognizable digital identity across the channels where your customers encounter your business.",
    services: ["Brand Identity", "Social Media Creatives", "Marketing & Campaign Creatives", "Visual Content"],
    steps: ["Understand", "Define", "Create", "Refine", "Deliver", "Maintain"],
    closing: "Build a More Recognizable Brand in Lucknow"
  }
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!Object.hasOwn(services, slug)) return {};
  return { title: services[slug as ServiceSlug].title };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!Object.hasOwn(services, slug)) notFound();
  const service = services[slug as ServiceSlug];

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="detail-wrap">
          <p className="detail-eyebrow">{service.title}</p>
          <h1>{service.heading}</h1>
          <p className="detail-intro">{service.intro}</p>
          <div className="detail-actions">
            <Link className="detail-button" href="/#contact">Get a Free Consultation â†—</Link>
            <Link className="detail-button detail-button-light" href="/services">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {slug === "lead-generation-lucknow" && (
        <section className="detail-section lead-benefits">
          <div className="detail-wrap lead-benefits-grid">
            <div>
              <p className="detail-eyebrow">THE OPPORTUNITY</p>
              <h2>Why Lead Generation Matters</h2>
              <p className="lead-section-copy">A structured lead generation strategy can help your business turn relevant digital interest into genuine opportunities.</p>
            </div>
            <ul className="lead-benefit-list">
              {[
                "Reach relevant prospects",
                "Generate business inquiries",
                "Create focused conversion journeys",
                "Connect marketing with business goals",
                "Identify effective lead sources",
                "Measure campaign performance",
                "Improve acquisition efforts"
              ].map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
          </div>
        </section>
      )}
      <section className="detail-section">

        <div className="detail-wrap">
          <p className="detail-eyebrow">WHAT WE DO</p>
          <h2>Services designed around your goals</h2>
          {slug === "seo-services-lucknow" ? (
            <SeoServiceCards />
          ) : (
            <div className="detail-grid">
              {service.services.map((name, index) => (
                <article className="detail-card" key={name}>
                  <span>0{index + 1}</span>
                  <h3>{name}</h3>
                  <Link href="/#contact">Discuss this service</Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="detail-section detail-process">
        <div className="detail-wrap">
          <p className="detail-eyebrow">OUR APPROACH</p>
          <h2>A clear process, from insight to improvement</h2>
          <ol className="detail-steps">
            {service.steps.map((step, index) => (
              <li key={step}><span>0{index + 1}</span><h3>{step}</h3></li>
            ))}
          </ol>
        </div>
      </section>

      {slug === "lead-generation-lucknow" && (
        <section className="detail-section lead-integration">
          <div className="detail-wrap lead-integration-grid">
            <div>
              <p className="detail-eyebrow">CONNECTED MARKETING</p>
              <h2>Lead Generation That Works With Your Digital Marketing</h2>
              <div className="lead-integration-list">
                <article>
                  <h3>Lead Generation + Paid Advertising</h3>
                  <p>Reach targeted audiences through relevant advertising campaigns.</p>
                </article>
                <article>
                  <h3>Lead Generation + Landing Pages</h3>
                  <p>Create focused pages designed around conversion objectives.</p>
                </article>
                <article>
                  <h3>Lead Generation + SEO</h3>
                  <p>Connect organic search traffic with relevant service pages and enquiry opportunities.</p>
                </article>
                <article>
                  <h3>Lead Generation + Social Media</h3>
                  <p>Use social content and campaigns to create opportunities for inquiries.</p>
                </article>
              </div>
            </div>
            <div className="lead-visual" role="img" aria-label="Illustration representing digital leads moving through a conversion funnel">
              <span className="lead-visual-label">INTEREST â†’ ENQUIRY</span>
              <div className="lead-funnel lead-funnel-one"><span>Relevant audience</span></div>
              <div className="lead-funnel lead-funnel-two"><span>Engaged visitors</span></div>
              <div className="lead-funnel lead-funnel-three"><span>Business enquiries</span></div>
              <div className="lead-visual-foot">A clearer path from discovery to contact</div>
            </div>
          </div>
        </section>
      )}
      <section className="detail-cta">
        <div className="detail-wrap">
          <p className="detail-eyebrow">LET'S TALK</p>
          <h2>{service.closing}</h2>
          <p>Discuss your goals and explore an approach suited to your business.</p>
          <div className="detail-actions">
            <Link className="detail-button" href="/#contact">Get a Free Consultation â†—</Link>
            <Link className="detail-button detail-button-light" href="/#contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
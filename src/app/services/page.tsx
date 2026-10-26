import type { Metadata } from "next";
import Link from "next/link";
import CrystalizedBall from "@/components/CrystalizedBall";
import "./services.css";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Explore DF Digital Marketing Agency services across SEO, social media, paid advertising, content, websites, branding, and lead generation.",
};

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    description: "Improve organic visibility and attract relevant search traffic.",
    cta: "Explore SEO",
    tone: "lavender",
    symbol: "↗",
    tag: "Organic visibility",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description: "Strengthen your social presence, engage relevant audiences, and communicate your brand consistently.",
    cta: "Explore Social Media Marketing",
    tone: "sage",
    symbol: "◎",
    tag: "Audience connection",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description: "Reach relevant audiences and support measurable campaign objectives.",
    cta: "Explore Paid Advertising",
    tone: "peach",
    symbol: "✳",
    tag: "Campaign performance",
  },
  {
    number: "04",
    title: "Content Marketing",
    description: "Build visibility, communicate expertise, and engage audiences through relevant content.",
    cta: "Explore Content Marketing",
    tone: "blue",
    symbol: "⌘",
    tag: "Useful communication",
  },
  {
    number: "05",
    title: "Website & Landing Pages",
    description: "Create a stronger digital experience that communicates value and encourages meaningful actions.",
    cta: "Explore Website & Landing Pages",
    tone: "sand",
    symbol: "▤",
    tag: "Digital experience",
  },
  {
    number: "06",
    title: "Branding & Creative",
    description: "Create consistent and recognizable communication across digital channels.",
    cta: "Explore Branding & Creative",
    tone: "rose",
    symbol: "✧",
    tag: "Brand identity",
  },
  {
    number: "07",
    title: "Lead Generation",
    description: "Create a stronger flow of relevant enquiries and improve the digital conversion journey.",
    cta: "Explore Lead Generation",
    tone: "mint",
    symbol: "⌁",
    tag: "Relevant enquiries",
  },
];

const process = [
  ["01", "Discover", "Understand your business, objectives, audience, and current digital presence."],
  ["02", "Research", "Study relevant audiences, competitors, market conditions, search behavior, and opportunities."],
  ["03", "Strategize", "Develop a digital marketing approach based on identified opportunities and business priorities."],
  ["04", "Execute", "Implement the selected campaigns, content, and digital marketing activities."],
  ["05", "Measure", "Monitor relevant performance indicators to understand campaign and channel performance."],
  ["06", "Optimize", "Use performance insights to refine campaigns, content, targeting, and digital experiences."],
];

const reasons = [
  ["Business-Focused", "We begin by understanding business objectives before selecting the most relevant marketing activities.", "01"],
  ["Audience-Centric", "We consider the people you want to reach and the needs, questions, and behaviors that influence their decisions.", "02"],
  ["Integrated", "Different digital channels can be connected to create a more consistent customer journey.", "03"],
  ["Performance-Oriented", "Relevant performance data helps inform decisions and ongoing optimization.", "04"],
  ["Customized", "Marketing activities can be adapted according to business requirements, audience, and objectives.", "05"],
  ["Continuously Improved", "Digital marketing changes constantly, so strategies should be reviewed and refined over time.", "06"],
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="services-page">
      <section className="services-hero">
        <div className="services-wrap services-hero__grid">
          <div className="services-hero__copy">
            <p className="services-eyebrow"><span /> DIGITAL MARKETING SERVICES</p>
            <h1>Strategies that connect your business with <span>the right audience.</span></h1>
            <p className="services-hero__lead">
              Digital marketing works best when different activities are connected
              to a clear business objective. We bring together strategy, creativity,
              technology, and performance-focused marketing to help businesses
              strengthen their digital presence, reach relevant audiences, and
              create meaningful opportunities.
            </p>
            <div className="services-actions">
              <Link className="services-button" href="/#contact">
                Get a Free Consultation <span aria-hidden="true">↗</span>
              </Link>
              <Link className="services-button services-button--light" href="#services">
                Explore Our Services <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <div className="services-hero__meta">
              <span>STRATEGY WITH PURPOSE</span>
              <span>CREATIVITY WITH CLARITY</span>
            </div>
          </div>
          <div className="services-hero__visual" aria-label="A connected digital marketing strategy">
            <div className="services-crystal-stage" aria-hidden="true">
              <CrystalizedBall
                preset="plasma"
                color="#9D96FF"
                theme="light"
                size={0.7}
                strands={5}
                crackle={0.65}
                flares={0.5}
                glow={0.75}
                sparks={0.42}
                particleCount={1800}
                fill={0.42}
                motion="rise"
                particleShape="square"
                className="services-crystal-canvas"
              />
              <div className="services-crystal-copy">
                <div className="services-crystal-words" aria-label="Creativity, Clarity, Conversion">
                  <span className="services-crystal-word">CREATIVITY.</span>
                  <span className="services-crystal-word">CLARITY.</span>
                  <span className="services-crystal-word">CONVERSION.</span>
                </div>
              </div>
            </div>
            <div className="services-float services-float--top"><span>↗</span><div><b>Reach</b><small>Relevant audiences</small></div></div>
            <div className="services-float services-float--left"><span>✳</span><div><b>Connect</b><small>Meaningful content</small></div></div>
            <div className="services-float services-float--bottom"><span>⌁</span><div><b>Improve</b><small>Performance insights</small></div></div>
          </div>
        </div>
        <div className="services-wrap services-hero__foot"><span>01 / STRATEGY</span><span>02 / EXECUTION</span><span>03 / OPTIMIZATION</span></div>
      </section>

      <section className="services-section services-offerings" id="services">
        <div className="services-wrap">
          <div className="services-heading">
            <div>
              <p className="services-eyebrow">OUR SERVICES</p>
              <h2>Digital marketing solutions built around <span>your business goals.</span></h2>
            </div>
            <p>Every business has different audiences, challenges, and objectives. You can use our services individually or combine them into an integrated digital marketing strategy based on your requirements.</p>
          </div>
          <div className="services-card-grid">
            {services.map((service) => (
              <article className={`services-card services-card--${service.tone}`} key={service.number}>
                <div className="services-card__top"><span>{service.number} / SERVICE</span><span className="services-card__arrow" aria-hidden="true">↗</span></div>
                <div className="services-card__symbol" aria-hidden="true">{service.symbol}</div>
                <span className="services-card__tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  className="services-card__link"
                  href={
                    {
                      "Search Engine Optimization": "/services/seo-services-lucknow",
                      "Social Media Marketing": "/services/social-media-marketing-lucknow",
                      "Paid Advertising": "/services/paid-advertising-lucknow",
                      "Content Marketing": "/services/content-marketing-lucknow",
                      "Branding & Creative": "/services/branding-creative-lucknow",
                      "Lead Generation": "/services/lead-generation-lucknow"
                    }[service.title] ?? "/#contact"
                  }
                >
                  {service.cta} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <p className="services-offerings__note">Not sure where to start? Let&apos;s discuss your goals and identify the services most relevant to your business.</p>
        </div>
      </section>

      <section className="services-bridge">
        <div className="services-wrap services-bridge__inner">
          <div><p className="services-eyebrow">YOUR NEXT MOVE</p><h2>Ready to build a digital strategy around your goals?</h2></div>
          <Link className="services-button" href="/#contact">Let&apos;s Talk <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="services-section services-process">
        <div className="services-wrap">
          <div className="services-heading">
            <div><p className="services-eyebrow">OUR PROCESS</p><h2>From business goals to <span>digital execution.</span></h2></div>
            <p>We follow a structured approach to keep marketing activities connected to the objectives they support.</p>
          </div>
          <div className="services-process-grid">
            {process.map(([number, title, description], index) => (
              <article className={`services-process-card services-process-card--${index % 4}`} key={number}>
                <div className="services-process-card__top"><span>{number}</span><span aria-hidden="true">{["◎", "⌕", "↗", "✳", "⌁", "↻"][index]}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <span className="services-process-card__line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-why">
        <div className="services-wrap">
          <div className="services-heading">
            <div><p className="services-eyebrow">WHY CHOOSE OUR SERVICES?</p><h2>A business-first approach to <span>digital marketing.</span></h2></div>
            <p>Our approach is designed to keep your business objectives, audience, and performance in focus.</p>
          </div>
          <div className="services-why-grid">
            {reasons.map(([title, description, number], index) => (
              <article className={`services-why-card services-why-card--${index % 4}`} key={title}>
                <span className="services-why-card__number">{number}</span>
                <span className="services-why-card__mark" aria-hidden="true">{["↗", "◎", "⌘", "⌁", "✳", "↻"][index]}</span>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-final">
        <div className="services-wrap services-final__inner">
          <p className="services-eyebrow"><span /> LET&apos;S TALK ABOUT YOUR NEXT MOVE</p>
          <h2>Let&apos;s discuss your business goals and explore the digital marketing opportunities relevant to your business.</h2>
          <p>Start with a conversation about where you are today, what you want to achieve, and which digital activities could support your next step.</p>
          <div className="services-actions services-actions--center">
            <Link className="services-button" href="/#contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link>
            <Link className="services-button services-button--light" href="/#contact">Contact Us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
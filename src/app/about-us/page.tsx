import type { Metadata } from "next";
import Link from "next/link";
import CrystalizedBall from "@/components/CrystalizedBall";
import "./about-us.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover DF Digital Marketing Agency: a business-first approach to strategy, creativity, and measurable digital performance.",
};

const services = [
  ["01", "Search Engine Optimization", "Build organic visibility with search strategies shaped around your audience."],
  ["02", "Social Media Marketing", "Create a consistent social presence that connects your brand with the right people."],
  ["03", "Paid Advertising", "Reach relevant audiences with focused campaigns and performance measurement."],
  ["04", "Content Marketing", "Share useful, engaging content that communicates your value."],
  ["05", "Website & Landing Pages", "Create clear digital experiences designed to support enquiries and action."],
  ["06", "Branding & Creative", "Build a recognizable brand through thoughtful design and communication."],
  ["07", "Lead Generation", "Develop relevant opportunities through connected digital channels."],
];

const steps = [
  ["01", "Understand", "We learn about your business, audience, objectives, and current digital presence."],
  ["02", "Strategize", "We identify relevant opportunities and create a marketing approach aligned with your goals."],
  ["03", "Execute", "We implement the strategy across the appropriate digital channels."],
  ["04", "Measure", "We track relevant performance indicators to understand what is working."],
  ["05", "Optimize", "We use insights and performance data to improve the approach continuously."],
];

const values = [
  ["Client-Centricity", "We keep business objectives and audience needs at the center of our approach."],
  ["Integrity", "We believe in clear communication, realistic expectations, and responsible marketing practices."],
  ["Creativity", "We use creative thinking to make brands and their communication more distinctive."],
  ["Data-Informed Decisions", "We use relevant performance insights to understand results and improve marketing activities."],
  ["Adaptability", "Digital platforms and customer behavior continue to evolve, and our approach evolves with them."],
  ["Collaboration", "Strong marketing requires communication between the business, marketing team, and other stakeholders."],
];

const differentiators = [
  ["Business-First Thinking", "We begin by understanding the business objective rather than selecting a marketing channel first."],
  ["Audience Understanding", "Marketing becomes more effective when you understand who you are communicating with and what they need."],
  ["Integrated Execution", "Different digital channels can work together instead of functioning as isolated activities."],
  ["Creative + Performance", "Creative communication helps capture attention, while performance insights help guide optimization."],
  ["Transparent Communication", "Clear communication and understandable reporting help keep marketing activities aligned with business expectations."],
  ["Continuous Improvement", "Digital marketing changes constantly, so strategies need to be reviewed, measured, and improved over time."],
];

const highlights = [
  ["XX+", "Projects Delivered"],
  ["XX+", "Clients Served"],
  ["XX+", "Years of Experience"],
  ["XX+", "Industries Served"],
];

export default function AboutUsPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero">
        <div className="about-wrap about-hero__grid">
          <div className="about-hero__copy">
            <p className="about-eyebrow"><span /> ABOUT DF DIGITAL</p>
            <h1>Digital marketing built around <span>your business goals.</span></h1>
            <p className="about-lead">
              Digital marketing should do more than create an online presence.
              It should help your business reach the right audience, communicate
              its value, and create meaningful opportunities.
            </p>
            <p className="about-body">
              We bring together strategy, creativity, technology, and
              performance-focused marketing to help businesses build a stronger
              and more effective digital presence.
            </p>
            <Link className="about-button" href="/#contact">
              Let&apos;s Work Together <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="about-hero__art" aria-label="Strategy, creativity, and digital performance">
            <div className="about-crystal-stage" aria-hidden="true">
              <CrystalizedBall
                preset="aurora"
                color="#A5A1FF"
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
                className="about-crystal-canvas"
              />
              <div className="about-crystal-copy">
                <div className="about-crystal-words" aria-label="Strategy, Execution, Optimization">
                  <span className="about-crystal-word">STRATEGY</span>
                  <span className="about-crystal-word">EXECUTION</span>
                  <span className="about-crystal-word">OPTIMIZATION</span>
                </div>
              </div>
            </div>
            <div className="about-float about-float--top"><span>↗</span><div><b>Purpose first</b><small>Start with the goal</small></div></div>
            <div className="about-float about-float--bottom"><span>✳</span><div><b>Progress with clarity</b><small>Measure what matters</small></div></div>
          </div>
        </div>
        <div className="about-wrap about-hero__bottom"><span>STRATEGY WITH PURPOSE</span><span>CREATIVITY WITH CLARITY</span><span>GROWTH WITH DIRECTION</span></div>
      </section>

      <section className="about-section about-intro">
        <div className="about-wrap about-intro__grid">
          <div><p className="about-eyebrow">WHO WE ARE</p><h2>More than marketing.<br /><span>A business-focused</span><br />digital approach.</h2></div>
          <div className="about-prose">
            <p>A digital marketing company focused on helping businesses navigate an increasingly competitive digital environment.</p>
            <p>We understand that every business has different goals, audiences, and challenges. Instead of applying the same marketing approach to every client, we focus on understanding the business first and then developing digital strategies around its specific requirements.</p>
            <p>From improving search visibility and building an engaging social media presence to running paid campaigns, creating content, and developing conversion-focused digital experiences, our approach connects different areas of digital marketing to support business growth.</p>
            <p>Our focus is not simply on being visible online. It is on making that visibility meaningful to the business.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-services" id="expertise">
        <div className="about-wrap">
          <div className="about-section__heading"><div><p className="about-eyebrow">OUR EXPERTISE</p><h2>Connecting strategy, creativity,<br /><span>and digital performance.</span></h2></div><p>Seven connected capabilities. One focus: your business goals.</p></div>
          <div className="about-service-grid">
            {services.map(([number, title, description], index) => (
              <article className={`about-service-card about-tone-${index % 4}`} key={number}>
                <div className="about-card-top"><span>{number}</span><span aria-hidden="true">{["↗", "✳", "◌", "⌘"][index % 4]}</span></div>
                <div className="about-service-card__shape" aria-hidden="true"><span>{["S", "S", "P", "C", "W", "B", "L"][index]}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <span className="about-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-approach">
        <div className="about-wrap">
          <div className="about-section__heading"><div><p className="about-eyebrow">OUR APPROACH</p><h2>Strategy before <span>execution.</span></h2></div><p>Effective digital marketing starts with understanding.</p></div>
          <p className="about-approach__intro">Before selecting a platform, creating a campaign, or producing content, we look at the bigger picture—your business objectives, target audience, market environment, competitors, and existing digital presence. Our approach follows a simple principle: understand first, act with purpose, and improve with insight.</p>
          <div className="about-step-grid">
            {steps.map(([number, title, description], index) => (
              <article className={`about-step about-tone-${index % 5}`} key={number}>
                <span className="about-step__number">{number}</span><span className="about-step__symbol" aria-hidden="true">{["◎", "↗", "✳", "⌁", "↻"][index]}</span>
                <h3>{title}</h3><p>{description}</p><span className="about-step__rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-mission">
        <div className="about-wrap">
          <div className="about-section__heading"><div><p className="about-eyebrow">OUR MISSION & VISION</p><h2>Clear purpose.<br /><span>Long-term perspective.</span></h2></div></div>
          <div className="about-mission-grid">
            <article className="about-mission-card about-mission-card--mission"><p className="about-eyebrow">OUR MISSION</p><span className="about-mission-card__symbol" aria-hidden="true">↗</span><h3>Making digital marketing more meaningful for businesses.</h3><p>Our mission is to help businesses make better use of digital channels by combining strategic thinking, creative communication, and measurable marketing practices.</p><p>We aim to build digital marketing strategies that are relevant to the business, useful to its audience, and capable of evolving with changing market needs.</p></article>
            <article className="about-mission-card about-mission-card--vision"><p className="about-eyebrow">OUR VISION</p><span className="about-mission-card__symbol" aria-hidden="true">✳</span><h3>Building smarter digital growth.</h3><p>Our vision is to create a digital marketing approach where businesses can connect with the right audiences, communicate their value effectively, and build sustainable digital growth through informed strategies.</p></article>
          </div>
        </div>
      </section>

      <section className="about-section about-values">
        <div className="about-wrap">
          <div className="about-section__heading"><div><p className="about-eyebrow">OUR CORE VALUES</p><h2>The principles <span>behind our work.</span></h2></div><p>The standards that shape how we think, communicate, and work together.</p></div>
          <div className="about-values-grid">
            {values.map(([title, description], index) => (
              <article className={`about-value-card about-tone-${index % 4}`} key={title}><span className="about-value-card__index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="about-value-card__dot" /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-different">
        <div className="about-wrap">
          <div className="about-section__heading"><div><p className="about-eyebrow">WHAT SETS OUR APPROACH APART?</p><h2>We look beyond individual <span>marketing channels.</span></h2></div><p>Connected thinking helps each activity contribute to a clearer business objective.</p></div>
          <div className="about-different-grid">
            {differentiators.map(([title, description], index) => (
              <article className="about-different-card" key={title}><span className="about-different-card__index">0{index + 1} / APPROACH</span><h3>{title}</h3><p>{description}</p><span className="about-different-card__arrow" aria-hidden="true">↗</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-highlights" aria-label="Agency highlights">
        <div className="about-wrap about-highlights__grid">
          {highlights.map(([value, label]) => <div className="about-highlight" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <p className="about-wrap about-highlights__note">Replace XX+ with verified agency figures before publishing.</p>
      </section>

      <section className="about-final-cta">
        <div className="about-wrap about-final-cta__inner">
          <p className="about-eyebrow">LET&apos;S BUILD SOMETHING THAT WORKS</p>
          <h2>Your business has goals.<br /><span>Your digital marketing should support them.</span></h2>
          <p>Whether you want to improve your search visibility, generate more inquiries, strengthen your social media presence, build a stronger website, or improve your paid campaigns, the first step is understanding where your business currently stands.</p>
          <p>Let&apos;s discuss your goals and explore the digital opportunities that can support them.</p>
          <div className="about-final-cta__actions"><Link className="about-button" href="/#contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link><Link className="about-button about-button--secondary" href="/#services">Explore Our Services <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
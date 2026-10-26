"use client";

import { useState, type FormEvent } from "react";

const problems = [
  { number: "01", title: "Not Getting Found?", description: "Improve your organic visibility through SEO and content strategies.", label: "Visibility", accent: "sage" },
  { number: "02", title: "Getting Traffic but Few Enquiries?", description: "Strengthen landing pages, messaging, and conversion journeys.", label: "Conversion", accent: "blue" },
  { number: "03", title: "Spending on Ads Without Clarity?", description: "Build campaigns with proper targeting, tracking, and ongoing optimization.", label: "Performance", accent: "lime" },
] as const;

export function ProblemCarousel() {
  const [active, setActive] = useState(0);
  const current = problems[active];

  function move(direction: number) {
    setActive((index) => (index + direction + problems.length) % problems.length);
  }

  return (
    <div className={`problem-carousel problem-carousel--${current.accent}`}>
      <div className="problem-carousel__main" aria-live="polite">
        <div className="problem-carousel__meta"><span>{current.number} / 03</span><span>{current.label}</span></div>
        <div className="problem-carousel__art" aria-hidden="true"><span className="problem-carousel__ring problem-carousel__ring--one" /><span className="problem-carousel__ring problem-carousel__ring--two" /><span className="problem-carousel__spark">✳</span><span className="problem-carousel__art-label">Find your next move</span></div>
        <div className="problem-carousel__copy"><p className="eyebrow">A common challenge</p><h3>{current.title}</h3><p>{current.description}</p></div>
      </div>
      <div className="problem-carousel__controls">
        <div className="problem-carousel__dots" aria-label="Choose a challenge">
          {problems.map((problem, index) => <button key={problem.number} type="button" className={active === index ? "is-active" : ""} aria-label={`Show slide ${index + 1}: ${problem.title}`} aria-pressed={active === index} onClick={() => setActive(index)} />)}
        </div>
        <div className="problem-carousel__arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous challenge">{"\u2190"}</button><button type="button" onClick={() => move(1)} aria-label="Next challenge">{"\u2192"}</button></div>
      </div>
    </div>
  );
}

const faqs = [
  { question: "What digital marketing services do you provide?", answer: "We provide SEO, social media marketing, paid advertising, content marketing, website and landing page support, branding and creative, and lead generation." },
  { question: "How long does SEO take to show results?", answer: "SEO is a long-term investment. Timelines depend on your website, competition, technical health, content, and target search terms. We establish priorities and measure progress over time." },
  { question: "Do you manage Google Ads and Meta Ads?", answer: "Paid advertising is one of our services. Campaign scope, platforms, tracking, and budgets should be agreed around your goals before launch." },
  { question: "Can you create social media content?", answer: "Yes. Social media marketing can include a planned content approach, creative direction, and consistent communication aligned with your brand and audience." },
  { question: "Do you provide customized digital marketing strategies?", answer: "Yes. We begin by understanding your business objectives, audience, current digital presence, and priorities before recommending relevant activities." },
  { question: "How do you measure campaign performance?", answer: "We track relevant performance indicators against agreed objectives and use the results to report progress and identify opportunities for optimization." },
] as const;

export function HomeFaqs() {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details className="faq-item" key={faq.question} open={index === 0}>
          <summary><span>{faq.question}</span><span className="faq-item__icon" aria-hidden="true">+</span></summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitted(true);
    form.reset();
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label>Your Name<input name="name" type="text" autoComplete="name" placeholder="Enter your name" required /></label>
      <label>What service can we provide you?
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Search Engine Optimization</option><option>Social Media Marketing</option><option>Paid Advertising</option><option>Content Marketing</option><option>Website & Landing Pages</option><option>Branding & Creative</option><option>Lead Generation</option><option>Not sure yet</option>
        </select>
      </label>
      <div className="inquiry-form__row"><label>Your Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label>Your Phone Number<input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" /></label></div>
      <button className="button button--primary inquiry-form__submit" type="submit">Submit <span aria-hidden="true">{"\u2197"}</span></button>
      {submitted && <p className="inquiry-form__notice" role="status">Your form passed local validation. To deliver enquiries, connect this form to your email or backend submission endpoint.</p>}
      <p className="inquiry-form__fineprint">Your details should only be submitted once a secure form endpoint and privacy notice are configured.</p>
    </form>
  );
}

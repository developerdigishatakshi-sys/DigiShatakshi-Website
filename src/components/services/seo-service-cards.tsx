
"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/contact/contact-form";

const cards = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand your business, audience, goals, and vision to define the right direction.",
    features: ["Business Goals", "Audience", "Vision"],
    tone: "lavender",
    symbol: "⌘",
    service: "Search Engine Optimization",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Explore your market, competitors, and customer behavior to uncover opportunities.",
    features: ["Market Research", "Competitors", "Customer Behavior"],
    tone: "peach",
    symbol: "✳",
    service: "Search Engine Optimization",
  },
  {
    number: "03",
    title: "Audit",
    description:
      "Evaluate your digital presence to identify gaps, strengths, and areas for improvement.",
    features: ["Digital Presence", "Identify Gaps", "Opportunities"],
    tone: "blue",
    symbol: "▦",
    service: "Search Engine Optimization",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Refine your strategy, content, and user experience to drive better results.",
    features: ["Strategy", "Content", "User Experience"],
    tone: "pink",
    symbol: "⌁",
    service: "Search Engine Optimization",
  },
  {
    number: "05",
    title: "Monitor",
    description:
      "Track performance, measure key metrics, and uncover actionable insights.",
    features: ["Performance", "Key Metrics", "Insights"],
    tone: "mint",
    symbol: "⌕",
    service: "Search Engine Optimization",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Turn insights into smarter decisions and continuously improve your growth.",
    features: ["Insights", "Decisions", "Growth"],
    tone: "yellow",
    symbol: "◎",
    service: "Search Engine Optimization",
  },
] as const;

export function SeoServiceCards() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  function toggleCard(number: string) {
    setFlippedCards((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number]
    );
  }

  return (
    <>
      <div className="seo-reference-grid">
        {cards.map((card) => {
          const isFlipped = flippedCards.includes(card.number);

          return (
            <article
              className={`seo-reference-card seo-reference-card--${card.tone}${
                isFlipped ? " is-flipped" : ""
              }`}
              key={card.number}
              onMouseEnter={() => {
                setFlippedCards((current) =>
                  current.includes(card.number)
                    ? current
                    : [...current, card.number]
                );
              }}
              onMouseLeave={() => {
                setFlippedCards((current) =>
                  current.filter((item) => item !== card.number)
                );
              }}
            >
              <div className="seo-reference-card__inner">
                <div className="seo-reference-card__face seo-reference-card__front">
                  <div className="seo-reference-card__top">
                    <span className="seo-reference-card__number">
                      {card.number}
                    </span>

                    <span
                      className="seo-reference-card__symbol"
                      aria-hidden="true"
                    >
                      {card.symbol}
                    </span>
                  </div>

                  <div className="seo-reference-card__front-content">
                    <span className="seo-reference-card__step">
                      OUR PROCESS
                    </span>
                    <h3>{card.title}</h3>
                    <p>Discover how we move your business forward.</p>
                  </div>

                  <button
                    type="button"
                    className="seo-reference-card__flip-hint"
                    aria-label={`Show details for ${card.title}`}
                    aria-expanded={isFlipped}
                    onClick={() => toggleCard(card.number)}
                  >
                    Explore this step <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <div
                  className="seo-reference-card__face seo-reference-card__back"
                  aria-hidden={!isFlipped}
                >
                  <div className="seo-reference-card__back-top">
                    <span className="seo-reference-card__number">
                      {card.number}
                    </span>
                    <span className="seo-reference-card__back-label">
                      THE PROCESS
                    </span>
                  </div>

                  <h3>{card.title}</h3>
                  <p className="seo-reference-card__description">
                    {card.description}
                  </p>

                  <div className="seo-reference-card__features">
                    {card.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>

                  <button
                    className="seo-reference-card__cta"
                    type="button"
                    onClick={() => setSelectedService(card.service)}
                  >
                    Discuss this service{" "}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selectedService && (
        <div
          className="seo-enquiry-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedService(null);
            }
          }}
        >
          <section
            className="seo-enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="seo-enquiry-title"
          >
            <button
              type="button"
              className="seo-enquiry-modal__close"
              aria-label="Close enquiry form"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>

            <p className="detail-eyebrow">
              LET&apos;S DISCUSS YOUR PROJECT
            </p>

            <h2 id="seo-enquiry-title">
              Tell us what you have in mind.
            </h2>

            <ContactForm
              key={selectedService}
              defaultService={selectedService}
            />
          </section>
        </div>
      )}
    </>
  );
}

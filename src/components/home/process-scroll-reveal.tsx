"use client";

import { useEffect } from "react";

export function ProcessScrollReveal() {
  useEffect(() => {
    const section = document.querySelector(".approach-section");
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".process-card")
    );

    if (!cards.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    cards.forEach((card) => card.classList.add("process-card--reveal"));

    const reveal = () => {
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 130}ms`;
        card.classList.add("is-visible");
      });
    };

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return null;
}

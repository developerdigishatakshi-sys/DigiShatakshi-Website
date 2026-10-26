
"use client";

import { useEffect } from "react";

export function HeroScrollEffect() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const content = hero?.querySelector<HTMLElement>(".hero__content");
    const bottom = hero?.querySelector<HTMLElement>(".hero__bottom");
    const ambient = hero?.querySelector<HTMLElement>(".hero__ambient");

    if (!hero || !content) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Fade progressively over the first 65% of the hero's scroll distance.
        const scrollDistance = Math.max(
          Math.min(hero.offsetHeight * 0.65, viewportHeight * 0.9),
          1,
        );

        const progress = Math.min(
          1,
          Math.max(0, -rect.top / scrollDistance),
        );

        const opacity = 1 - progress * 0.85;
        const translateY = -progress * 36;

        content.style.opacity = String(opacity);
        content.style.transform = `translate3d(0, ${translateY}px, 0)`;

        if (bottom) {
          bottom.style.opacity = String(
            Math.max(0, 1 - progress * 1.5),
          );
        }

        if (ambient) {
          ambient.style.opacity = String(1 - progress * 0.65);
        }
      });
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);

      content.style.opacity = "";
      content.style.transform = "";

      if (bottom) bottom.style.opacity = "";
      if (ambient) ambient.style.opacity = "";
    };
  }, []);

  return null;
}

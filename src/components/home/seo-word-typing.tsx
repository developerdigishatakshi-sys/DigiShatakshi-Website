"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  side: "left" | "right";
};

const wordColors = [
  "#b91c1c",
  "#166534",
  "#9a3412",
  "#1d4ed8",
  "#6d28d9",
  "#172554",
];

export function SeoWordTyping({ text, side }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    let frame = 0;
    let previousActive = false;

    const updateActive = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const ownCard = ref.current?.closest(".crystal-service");
        const ownSphere = ownCard?.querySelector(
          ".crystal-service__visual"
        );

        if (!ownSphere) {
          setActive(false);
          return;
        }

        const spheres = Array.from(
          document.querySelectorAll(".crystal-service__visual")
        );

        const targetY = window.innerHeight * 0.5;
        let nearest: Element | null = null;
        let nearestDistance = Infinity;

        for (const sphere of spheres) {
          const rect = sphere.getBoundingClientRect();

          if (rect.bottom <= 0 || rect.top >= window.innerHeight) continue;

          const centerY = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - targetY);

          if (distance <= nearestDistance) {
            nearestDistance = distance;
            nearest = sphere;
          }
        }

        const nextActive = nearest === ownSphere;

        if (nextActive !== previousActive) {
          previousActive = nextActive;
          setCount(0);
          setActive(nextActive);
        }
      });
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(words.length);
      return;
    }

    let next = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      next += 1;
      setCount(next);

      if (next < words.length) {
        timer = setTimeout(tick, 300);
      } else {
        timer = setTimeout(() => {
          next = 0;
          setCount(0);
          timer = setTimeout(tick, 500);
        }, 1600);
      }
    };

    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [active, text, words.length]);

  return (
    <span
      ref={ref}
      className={`seo-word-typing seo-word-typing--${side}`}
      aria-label={active ? text : undefined}
      aria-hidden={!active}
      style={{
        opacity: active ? 1 : 0,
        visibility: active ? "visible" : "hidden",
        pointerEvents: "none",
        transition: "opacity 180ms ease",
      }}
    >
      <span className="seo-word-typing__words" aria-hidden="true">
        {words.slice(0, count).map((word, index) => (
          <span
            key={`${index}-${word}`}
            className="seo-word-typing__word"
            style={{ color: wordColors[index % wordColors.length] }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}

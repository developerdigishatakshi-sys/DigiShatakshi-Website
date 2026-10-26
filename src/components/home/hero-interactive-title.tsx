
"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const PALETTE = [
  "#FFE44D", // Electric yellow
  "#7CFF6B", // Vivid green
  "#FF5C7A", // Rose red
  "#40E8FF", // Bright cyan
  "#FF9B42", // Warm orange
  "#C9A0FF", // Violet
];

type InteractiveWordProps = {
  text: string;
  startIndex: number;
  activeIndex: number;
  activeColor: string;
};

function InteractiveWord({
  text,
  startIndex,
  activeIndex,
  activeColor,
}: InteractiveWordProps) {
  return (
    <span className="hero-interactive-word">
      {Array.from(text).map((character, index) => {
        const letterIndex = startIndex + index;
        const active = activeIndex === letterIndex;

        return (
          <span
            key={`${letterIndex}-${character}`}
            className={`hero-letter${active ? " is-active" : ""}`}
            data-letter-index={letterIndex}
            aria-hidden="true"
            style={
              {
                "--hero-hover-color": active ? activeColor : "inherit",
                color: active ? activeColor : undefined,
                WebkitTextFillColor: active ? activeColor : undefined,
                transform: active
                  ? `translateY(-3px) rotate(${
                      letterIndex % 2 === 0 ? -5 : 5
                    }deg) scale(1.06)`
                  : undefined,
                textShadow: active
                  ? `0 0 18px ${activeColor}66`
                  : undefined,
              } as CSSProperties
            }
          >
            {character}
          </span>
        );
      })}
    </span>
  );
}

export function HeroInteractiveTitle() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverCount, setHoverCount] = useState(0);

  let nextIndex = 0;

  const renderWord = (text: string) => {
    const startIndex = nextIndex;
    nextIndex += Array.from(text).length;

    return (
      <InteractiveWord
        text={text}
        startIndex={startIndex}
        activeIndex={activeIndex}
        activeColor={PALETTE[hoverCount % PALETTE.length]}
      />
    );
  };

  return (
    <h1
      className="hero-title hero-title--kinetic"
      aria-label="Grow Your Business With Digital Marketing That Drives Real Results"
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;

        const target = event.target;
        if (!(target instanceof Element)) return;

        const letter = target.closest<HTMLElement>("[data-letter-index]");
        const nextIndex = letter
          ? Number(letter.dataset.letterIndex)
          : -1;

        setActiveIndex((current) => {
          if (current !== nextIndex && nextIndex !== -1) {
            setHoverCount((count) => count + 1);
          }
          return nextIndex;
        });
      }}
      onPointerLeave={() => setActiveIndex(-1)}
    >
      <span className="hero-title__line">
        <span className="hero-title__word hero-title__word--line-one">
          <span className="hero-word hero-word--white" aria-hidden="true">
            {renderWord("Grow")}{" "}
            {renderWord("Your")}{" "}
            {renderWord("Business")}
          </span>
        </span>
      </span>

      <span className="hero-title__line">
        <span className="hero-title__word hero-title__word--line-two">
          <span className="hero-word hero-word--white" aria-hidden="true">
            {renderWord("With")}
          </span>{" "}
          <span className="hero-word hero-word--gradient" aria-hidden="true">
            {renderWord("Digital")}{" "}
            {renderWord("Marketing")}
          </span>
        </span>
      </span>

      <span className="hero-title__line">
        <span className="hero-title__word hero-title__word--line-three">
          <span className="hero-word hero-word--white" aria-hidden="true">
            {renderWord("That")}{" "}
            {renderWord("Drives")}{" "}
            {renderWord("Real")}{" "}
            {renderWord("Results")}
          </span>
        </span>
      </span>
    </h1>
  );
}

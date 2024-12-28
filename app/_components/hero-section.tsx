"use client";

import { useRef, useEffect, useState } from "react";

const TypewriterText = ({
  text,
  onComplete,
}: {
  text: string;
  onComplete?: () => void;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <span className="inline-block text-foreground">
      <span className="inline-block min-w-[1ch]">{displayText}</span>
      <span 
        className="inline-block w-[1ch] animate-pulse"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
};

export default function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Imagine a new web, minimalistic and creative.",
    "Innovative, aesthetic and useful.",
    "Crafting digital experiences that speak volumes with less.",
    "Where every pixel has a purpose.",
    "Simple. Elegant. Effective.",
  ];

  const lineClasses = [
    "text-4xl md:text-5xl lg:text-6xl font-bold",
    "text-2xl md:text-3xl",
    "text-xl md:text-2xl",
    "text-xl md:text-2xl",
    "text-xl md:text-xl",
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden p-4 md:p-8 z-0"
    >
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center max-w-4xl mx-auto space-y-4 md:space-y-8 z-0">
        {lines.map((line, index) => (
          <div 
            key={index} 
            className="w-full"
          >
            <p 
              className={`${lineClasses[index]} text-center md:text-left transition-opacity duration-300`}
              style={{ opacity: currentLine >= index ? 1 : 0 }}
            >
              {currentLine === index ? (
                <TypewriterText
                  text={line}
                  onComplete={() => setCurrentLine((prev) => prev + 1)}
                />
              ) : (
                <span>{line}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


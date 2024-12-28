"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

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
    <span className="inline-block text-foreground min-w-[1ch]">
      {displayText}
      {displayText.length < text.length && (
        <span className="inline-block w-[1ch] animate-pulse">|</span>
      )}
    </span>
  );
};

export default function OptimizedPortfolioHero() {
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

  const lineHeights = [
    "min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]",
    "min-h-[3rem] md:min-h-[4rem]",
    "min-h-[3rem] md:min-h-[3.5rem]",
    "min-h-[3rem] md:min-h-[3.5rem]",
    "min-h-[3rem] md:min-h-[3rem]",
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[600px] h-[90vh] flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-4xl w-full mx-auto">
        {lines.map((line, index) => (
          <div 
            key={index}
            className={`relative ${lineHeights[index]} flex items-center`}
          >
            <motion.div
              className={`${lineClasses[index]} absolute w-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: currentLine >= index ? 1 : 0, 
                y: currentLine >= index ? 0 : 20 
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {currentLine > index ? (
                <span className="block">{line}</span>
              ) : currentLine === index ? (
                <TypewriterText
                  text={line}
                  onComplete={() => setCurrentLine((prev) => prev + 1)}
                />
              ) : null}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
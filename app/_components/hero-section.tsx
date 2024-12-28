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
    <span className="inline-block text-foreground">
      {displayText}
      {displayText.length < text.length && (
        <span className="animate-pulse">|</span>
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

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-4xl mx-auto">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className={`${lineClasses[index]} mb-4 h-[1.2em] overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: currentLine >= index ? 1 : 0, 
              y: currentLine >= index ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {currentLine > index ? (
              line
            ) : currentLine === index ? (
              <TypewriterText
                text={line}
                onComplete={() => setCurrentLine((prev) => prev + 1)}
              />
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}


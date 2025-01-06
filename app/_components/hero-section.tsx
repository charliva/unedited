"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

interface LineConfig {
  text: string;
  delay: number;
  gradient: string;
}

const LINES: LineConfig[] = [
  {
    text: "Imagine a new web, minimalistic and creative.",
    delay: 1500,
    gradient: "from-purple-300/80 to-pink-300/80"
  },
  {
    text: "Innovative, aesthetic and useful.",
    delay: 1500,
    gradient: "from-blue-300/80 to-green-300/80"
  },
  {
    text: "Where every pixel has a purpose.",
    delay: 1300,
    gradient: "from-yellow-300/80 to-red-300/80"
  },
  {
    text: "Simple. Elegant. Effective.",
    delay: 1000,
    gradient: "from-indigo-300/80 to-purple-300/80"
  }
];

const GradientBackground = ({ gradient, isActive }: { gradient: string; isActive: boolean }) => (
  <div 
    className={`
      absolute inset-0 
      grid place-items-center 
      transition-all duration-1000 ease-in-out
      ${isActive ? 'opacity-100' : 'opacity-0'}
    `}
  >
    <div 
      className={`
        w-[300px] h-[300px] md:w-[400px] md:h-[400px]
        bg-gradient-to-r ${gradient}
        opacity-30
        blur-[60px]
        transform scale-100
        transition-all duration-700 ease-in-out
        animate-subtle-pulse
      `}
    />
  </div>
);

function PortfolioHeroContent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure DOM is ready before showing gradients
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLineComplete = useCallback(() => {
    if (currentLine === LINES.length - 1) {
      setTimeout(() => setIsComplete(true), 1000);
    } else {
      setTimeout(
        () => setCurrentLine((prev) => prev + 1),
        LINES[currentLine].delay
      );
    }
  }, [currentLine]);

  useEffect(() => {
    if (!isComplete) {
      handleLineComplete();
    }
  }, [currentLine, isComplete, handleLineComplete]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {LINES.map((line, index) => (
        isLoaded && (
          <GradientBackground 
            key={index}
            gradient={line.gradient}
            isActive={currentLine === index && !isComplete}
          />
        )
      ))}
      <div className="relative z-10 text-center">
        {!isComplete ? (
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-mono font-bold">
            {LINES[currentLine].text}
          </p>
        ) : (
          <p className="text-5xl font-mono font-bold">Unedited</p>
        )}
      </div>
    </div>
  );
}

export default function PortfolioHero() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PortfolioHeroContent />
    </Suspense>
  );
}

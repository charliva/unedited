"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from 'lucide-react';
import { useCursor } from "./cursorContext";

interface LineConfig {
  text: string;
  delay: number;
  gradient: string;
}

const LINES: LineConfig[] = [
  {
    text: "Imagine a new web.",
    delay: 1500,
    gradient: "from-purple-300/80 to-pink-300/80"
  },
  {
    text: "Innovative and useful.",
    delay: 1500,
    gradient: "from-blue-300/80 to-green-300/80"
  },
  {
    text: "Every pixel has purpose.",
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
  <motion.div 
    className="absolute inset-0 grid place-items-center"
    initial={false}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
  >
    <div 
      className={`w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r ${gradient} opacity-30 blur-[60px]`}
    />
  </motion.div>
);

const ScrollIndicator = () => {
  const { setIsHovering } = useCursor();
  
  return (
    <motion.div
      className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center gap-2 w-full max-w-xs"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 3,
        duration: 0.3, 
        ease: [0.4, 0.0, 0.2, 1]
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })}
    >
      <motion.p 
        className="text-sm text-gray-300 font-medium text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Scroll to explore
      </motion.p>
      <motion.div
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
};


function PortfolioHeroContent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setIsHovering } = useCursor();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLineComplete = useCallback(() => {
    if (currentLine >= LINES.length - 1) {
      setTimeout(() => setIsComplete(true), 2000);
    } else {
      const delay = LINES[currentLine]?.delay ?? 1500;
      setTimeout(
        () => setCurrentLine((prev) => prev + 1),
        delay
      );
    }
  }, [currentLine]);

  useEffect(() => {
    if (!isComplete && currentLine < LINES.length) {
      handleLineComplete();
    }
  }, [currentLine, isComplete, handleLineComplete]);

  const currentLineText = LINES[currentLine]?.text ?? '';

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {LINES.map((line, index) => (
        isLoaded && (
          <GradientBackground 
            key={index}
            gradient={line.gradient}
            isActive={currentLine === index && !isComplete}
          />
        )
      ))}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <AnimatePresence>
          {!isComplete ? (
            <>
              {LINES.slice(0, currentLine).map((line, index) => (
                <motion.p
                  key={index}
                  className="text-lg md:text-xl lg:text-2xl mb-2 font-mono text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  {line.text}
                </motion.p>
              ))}
              {currentLineText && (
                <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-mono font-bold">
                  {currentLineText}
                </p>
              )}
            </>
          ) : (
            <motion.p
              className="text-5xl font-mono font-bold"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            >
              Unedited
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <ScrollIndicator />
    </div>
  );
}

export default function PortfolioHero() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <PortfolioHeroContent />
    </Suspense>
  );
}


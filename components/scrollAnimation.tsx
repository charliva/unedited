"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function ScrollAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  if (!isClient) return null; 

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-transparent"
      style={{
        opacity,
      }}
    >
      <motion.div
        className="h-full bg-violet-600"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
        }}
      />
    </motion.div>
  );
}

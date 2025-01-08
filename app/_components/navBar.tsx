"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Rubik_Mono_One } from "next/font/google";
import { useCursor } from "../_components/cursorContext";

export const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: "400",
});

function AnimatedLogo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rippleIndices, setRippleIndices] = useState<number[]>([]);
  const letters = "Unedited".split("");
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  const { setIsHovering } = useCursor();

  const startRipple = useCallback(
    (index: number) => {
      let rippleTimeout: NodeJS.Timeout;
      const startRippleEffect = (currentIndex: number) => {
        const distance = Math.abs(currentIndex - index);
        const delay = distance * 60; 

        rippleTimeout = setTimeout(() => {
          setRippleIndices((prev) => [...prev, currentIndex]);
          setTimeout(() => {
            setRippleIndices((prev) => prev.filter((i) => i !== currentIndex));
          }, 160); 
        }, delay);
      };

      setRippleIndices([]);
      for (let i = 0; i < letters.length; i++) {
        startRippleEffect(i);
      }

      return () => clearTimeout(rippleTimeout);
    },
    [letters.length]
  );

  const getDisplayChar = (index: number) => {
    if (rippleIndices.includes(index)) {
      return specialChars[Math.floor(Math.random() * specialChars.length)];
    }
    return letters[index];
  };

  return (
    <div className="flex">
      {letters.map((letter, index) => (
        <Link
          key={index}
          className={`${rubik.className} text-xl transition-all duration-150`}
          onMouseEnter={() => {
            setHoveredIndex(index);
            startRipple(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setIsHovering(false);
          }}
          onClick={() => setIsHovering(false)}
          href="/"
        >
          {getDisplayChar(index)}
        </Link>
      ))}
    </div>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsHovering } = useCursor();

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "https://blog.unedited.site/", label: "Blog" },
    { href: "/experience", label: "Experience" },
  ];

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, [isOpen]);

  return (
    <nav className="fixed mb-6 top-4 left-1/2 transform -translate-x-1/2 mr-8 gap-8 max-w-2xl flex items-center justify-between px-6 py-2 z-50 bg-gradient-to-b from-purple-100/40 to-transparent backdrop-blur-[4px] border-[1.5px] border-neutral-300/40 rounded-2xl shadow-sm">
      <AnimatedLogo />
      <div className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-3 py-2 transition-colors duration-200 font-medium"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsOpen(false)}
          >
            <span className="text-sm tracking-wide">{item.label}</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] bg-background/80 backdrop-blur-md sm:w-[300px]"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  passHref
                  legacyBehavior
                  className="group p-5 mr-8"
                >
                  <a
                    className={`${rubik.className} w-full justify-start text-lg text-foreground hover:text-primary`}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

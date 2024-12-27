"use client";
import Link from "next/link";
import { useCursor } from "./cursorContext";

export default function Footer() {
  const { setIsHovering } = useCursor();

  return (
    <footer className="w-full mb-8">
      <div className="container mx-auto px-4 flex flex-col gap-4 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col gap-1">
            <Link 
              href="/" 
              className="font-mono text-xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              UNEDITED
            </Link>
            <p className="text-sm text-gray-600">
              Crafting digital experiences that speak volumes with less.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 py-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} UNEDITED. Simple. Elegant. Effective.</p>
            <div className="flex gap-4">
              {['Privacy', 'Terms'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-gray-600 transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
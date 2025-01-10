"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from 'lucide-react';
import { useCursor } from "./cursorContext";

interface BlogCardProps {
  title: string;
  description: string;
  imagePath: string;
  date: string;
  blogUrl: string;
}

export function BlogCard({
  title,
  description,
  imagePath,
  date,
  blogUrl,
}: BlogCardProps) {
  const { setIsHovering } = useCursor();

  return (
    <Link href={blogUrl}>
      <motion.div 
        className="group relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/40 flex flex-col md:flex-row"
        whileHover={{ 
          y: -4,
          transition: { 
            duration: 0.3,
            ease: [0.2, 0, 0, 1]
          }
        }}
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105"
          />
        </div>
        <div className="relative p-6 md:w-2/3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>
              <p className="text-xs text-gray-500">
                {date}
              </p>
            </div>
            <ArrowUpRight 
              className="w-5 h-5 text-gray-400 transition-colors group-hover:text-gray-900" 
              strokeWidth={1.5}
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}


"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import { useCursor } from "./cursorContext";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
  sizes?: string;
}

export function ProjectCard({
  title,
  description,
  imagePath,
  projectUrl,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ProjectCardProps) {
  const { setIsHovering } = useCursor();

  return (
    <Link href={projectUrl}>
      <motion.div 
        className="group relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/40"
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
        <div className="relative h-64">
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105"
          />
        </div>
        <div className="relative p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600">
                {description}
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


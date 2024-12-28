"use client";
import Image from "next/image";
import Link from "next/link";
import { useCursor } from "./cursorContext";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
}

export function ProjectCard({
  title,
  description,
  imagePath,
  projectUrl,
}: ProjectCardProps) {
  const { setIsHovering } = useCursor();

  return (
    <Link
      href={projectUrl}
      className="group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(false)}
    >
      <div className="overflow-hidden mb-4">
        <Image
          src={imagePath}
          alt={title}
          width={800}
          height={400}
          className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-semibold">{description}</p>
    </Link>
  );
}

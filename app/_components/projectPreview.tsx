"use client"
import { useCursor } from "./cursorContext";
import Image from "next/image";
import Link from "next/link";

export function ProjectPreview({ project }: { project: { name: string } }) {
    const { setIsHovering } = useCursor();
    return (
      <article className="border-b border-border pb-8 last:border-b-0">
        <Link
          href={`/projects/posts/${project.name}`}
          className="group block"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setIsHovering(false)}
        >
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={`/${project.name}.png`}
              alt={project.name}
              width={800}
              height={400}
              className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <h2
            className={`text-2xl font-semibold mb-2 group-hover:text-underline`}
          >
            {project.name}
          </h2>
          <p className="text-muted-foreground">View Project</p>
        </Link>
      </article>
    );
  }
  
import React from "react";
import fs from "fs";
import path from "path";
import { ProjectPreview } from "../_components/projectPreview";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
});

export default function ProjectsPage() {
  const projectsDirectory = path.join(process.cwd(), "app/projects/posts");
  const projectFolders = fs
    .readdirSync(projectsDirectory)
    .filter((folder) =>
      fs.statSync(path.join(projectsDirectory, folder)).isDirectory()
    );

  const projects = projectFolders.map((folder) => {
    return {
      name: folder,
    };
  });

  return (
    <div className={`container mx-auto px-4 max-w-4xl ${oswald.className}`}>
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectPreview key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}


"use client";
import Link from "next/link";
import { useCursor } from "./cursorContext";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { CloudIcon } from "lucide-react";

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
                {[
                { name: 'Privacy', path: '/privacy', icon: null },
                { name: 'LinkedIn', path: 'https://www.linkedin.com/in/tjalling-van-abbema-8430811a8/', icon: <LinkedInLogoIcon className="w-4 h-4" /> },
                { name: 'GitHub', path: 'https://github.com/charliva', icon: <GitHubLogoIcon className="w-4 h-4" /> },
                { name: 'Mail', path: 'mailto:charlie@unedited.site?&subject=Work together&body=Hello Charlie, I would like to work with you on a project.', icon: <EnvelopeClosedIcon className="w-4 h-4" /> },
                { name: 'BlueSky', path: 'https://bsky.app/profile/unedited.site', icon: <CloudIcon className="w-4 h-4" /> }
                ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="hover:text-gray-600 transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {item.icon ? item.icon : item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

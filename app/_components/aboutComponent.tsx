"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Be_Vietnam_Pro } from "next/font/google";
import { motion } from "motion/react";
import {
  CodeIcon,
  GlobeIcon,
  PersonIcon,
  CalendarIcon,
  MixerVerticalIcon,
  CameraIcon,
  SpeakerLoudIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface TimelineItem {
  year: string;
  event: string;
}

interface Skill {
  name: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const timeline: TimelineItem[] = [
  { year: "2014", event: "Started coding at age 5" },
  { year: "2019", event: "Began learning web development" },
  { year: "2023", event: "Started freelancing" },
  { year: "2023", event: "Mastered Next.js and Tailwind CSS" },
];

const skills: Skill[] = [
  { name: "React", icon: CodeIcon },
  { name: "Next.js", icon: GlobeIcon },
  { name: "Tailwind CSS", icon: CodeIcon },
  { name: "TypeScript", icon: CodeIcon },
  { name: "Swift", icon: CodeIcon },
  { name: "Golang", icon: CodeIcon },
];

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2 space-y-8">
          <h1
            className={`text-4xl font-bold ${beVietnamPro.className} mb-4 bg-clip-text`}
          >
            About Charlie VA
          </h1>
          <p className="text-lg leading-relaxed">
            I'm Charlie, a 15-year-old freelance web and application developer
            based in Denmark. My curiousity for coding came early, at just 5
            years old I was coding behind my parents iMac building python
            applications and solving basic math problems. Now I build full-stack
            and native applications for clients around the world.
          </p>
          <p className="text-lg leading-relaxed">
            Specializing in Next.js and Tailwind CSS, I create responsive
            applications that not only meet client needs but also provide an
            engaging user experience. My approach marries technical expertise
            with a keen eye for design, ensuring every project is both
            functional and visually appealing.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it's developing a sleek website or an intuitive application,
            I thrive on tackling challenges and finding innovative solutions to
            complex problems. I'm always eager to learn, grow, and take on new
            opportunities in the ever-evolving field of software development.
          </p>
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${beVietnamPro.className}`}>
              My Journey
            </h2>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-16 text-right font-bold">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div>{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <Card className="p-6 backdrop-blur-lg bg-primary/10 dark:bg-primary/5 border-none shadow-xl">
          <h2 className={`text-2xl font-bold ${beVietnamPro.className} mb-4`}>
            Charlie VA
          </h2>
          <div className={`text-md ${beVietnamPro.className} space-y-4`}>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="text-primary" />
              <span>
                Age: <b>15</b>
              </span>
            </div>
            <Separator />
            <div className="flex items-center space-x-2">
              <GlobeIcon className="text-primary" />
              <span>
                Location: <b>Denmark</b>
              </span>
            </div>
            <Separator />
            <div>
              <h3 className="font-bold mb-2 flex items-center space-x-2">
                <MixerVerticalIcon className="text-primary" />
                <span>Skills</span>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/10 dark:bg-secondary/5"
                  >
                    <skill.icon className="text-2xl mb-1 text-primary" />
                    <span className="text-xs">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-bold mb-2 flex items-center space-x-2">
                <PersonIcon className="text-primary" />
                <span>Hobbies</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3">
                <span className="flex items-center text-sm">
                  <CodeIcon className="mr-1 flex-shrink-1" /> Coding
                </span>
                <span className="flex items-center text-sm">
                  <CameraIcon className="mr-1 flex-shrink-1" /> Photography
                </span>
                <span className="flex items-center text-sm">
                  <SpeakerLoudIcon className="mr-1 flex-shrink-1" /> Music
                </span>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-bold mb-2 flex items-center space-x-2">
                <PersonIcon className="text-primary" />
                <span>Links</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="mailto:charlie@unedited.site?&subject=Work together&body=Hello Charlie, I would like to work with you on a project.">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/10 dark:bg-secondary/5"
                  >
                    <EnvelopeClosedIcon className="text-2xl mb-1 text-primary" />
                    <span className="text-xs">Contact me</span>
                  </motion.div>
                </Link>

                <Link href="https://www.github.com/charliva">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/10 dark:bg-secondary/5"
                  >
                    <GitHubLogoIcon className="text-2xl mb-1 text-primary" />
                    <span className="text-xs">My Projects</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

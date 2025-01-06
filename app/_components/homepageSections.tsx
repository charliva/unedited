"use client";

import { type LucideIcon, Globe, Smartphone, Code2, Palette, HardDrive } from 'lucide-react';
import { motion } from "motion/react";

interface ServiceCardProps {
  iconType: "web" | "mobile" | "backend" | "palette" | "cms";
  title: string;
  description: string;
}

const iconMap: Record<ServiceCardProps["iconType"], LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  backend: Code2,
  palette: Palette,
  cms: HardDrive,
};

export function ServiceCard({
  iconType,
  title,
  description,
}: ServiceCardProps) {
  const Icon = iconMap[iconType];

  return (
    <motion.div
      className="p-6 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-full bg-secondary/30 backdrop-blur-sm">
          <Icon className="w-6 h-6 font-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-muted-foreground dark:text-neutral-400">{description}</p>
      </div>
    </motion.div>
  );
}

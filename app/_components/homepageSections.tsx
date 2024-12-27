"use client";

import { type LucideIcon, Globe, Smartphone, Code2, Palette, HardDrive } from 'lucide-react';
import { motion } from "framer-motion";

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
      className="p-6 rounded-lg bg-white"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">{title}</h3>
        <p className="text-muted-foreground dark:text-neutral-400">{description}</p>
      </div>
    </motion.div>
  );
}

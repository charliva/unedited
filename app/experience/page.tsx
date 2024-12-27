'use client'

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  story: string
  projectUrl: string
  image: string
}

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    date: "June 2023 - Present",
    title: "Unedited v2",
    description: "A minimal portfolio built with Next.js and TailwindCSS",
    story: "Building a modern portfolio...",
    projectUrl: "/projects/posts/Unedited",
    image: "/Unedited.png"
  },
  {
    id: "2",
    date: "March 2024 - October 2024", 
    title: "Bitless hosting dashboard",
    description: "Built a hosting dashboard for user management",
    story: "This was my first project!",
    projectUrl: "/projects/posts/Bitless",
    image: "/Bitless.png"
  },
]

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Experience
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            A collection of my projects and experiences, hover over them to see more details.
          </p>
        </motion.header>

        <motion.div 
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {timelineItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Link 
                href={item.projectUrl}
                className="group relative block overflow-hidden rounded-lg"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-900">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 p-6">
                    <p className="text-sm font-medium text-neutral-300 mb-2">
                      {item.date}
                    </p>
                    <h2 className="text-2xl text-neutral-100 font-bold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
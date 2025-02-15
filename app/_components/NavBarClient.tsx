'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { useCursor } from "../_components/cursorContext"
import { rubik } from "./navBar"

interface NavBarClientProps {
  menuItems: { href: string; label: string }[]
}

export function NavBarClient({ menuItems }: NavBarClientProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { setIsHovering } = useCursor()
  const pathname = usePathname()

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", closeMenuOnResize)
    return () => window.removeEventListener("resize", closeMenuOnResize)
  }, [isOpen])

  useEffect(() => {
    if (pathname === '/') {
      const timer = setTimeout(() => {
        setIsExpanded(true)
      }, 6200)

      return () => clearTimeout(timer)
    } else {
      setIsExpanded(false)
    }
  }, [pathname])

  return (
    <>
      <div className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-3 py-2 transition-colors duration-200 font-medium"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="text-sm tracking-wide">{item.label}</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
          </Link>
        ))}
        {isExpanded && (
          <Button
            asChild
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            variant="outline"
          >
            <Link href="/start">Start</Link>
          </Button>
        )}
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] bg-background/80 backdrop-blur-md sm:w-[300px]"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${rubik.className} w-full justify-start text-lg text-foreground hover:text-primary group p-5 mr-8`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isExpanded && (
                <Button
                  asChild
                  className="mt-8 text-white"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Link href="/start">Start</Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}


'use client'

import React, { useEffect, useState } from 'react'
import { useCursor } from '../_components/cursorContext'

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const { isHovering } = useCursor()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (!isMobile) {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener('mousemove', updateMousePosition)

      const style = document.createElement('style')
      style.textContent = `
        * {
          cursor: none !important;
        }
      `
      document.head.appendChild(style)

      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
        document.head.removeChild(style)
        window.removeEventListener('resize', checkMobile)
      }
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  const style = {
    height: isHovering ? 18 : 18,
    width: isHovering ? 18 : 18,
    left: mousePosition.x - (isHovering ? 9 : 9),
    top: mousePosition.y - (isHovering ? 9 : 9),
    zIndex: 200,
    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'white',
    border: isHovering ? '2px solid white' : '2px solid black',
    mixBlendMode: 'difference' as 'difference',
  }

  return (
    <div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-100"
      style={style}
    />
  )
}

export default CustomCursor
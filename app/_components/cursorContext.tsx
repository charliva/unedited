'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

type CursorContextType = {
  isHovering: boolean
  setIsHovering: (isHovering: boolean) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}


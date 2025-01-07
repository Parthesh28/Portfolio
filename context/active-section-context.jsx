'use client'

import React, { useState, createContext, useContext } from 'react'

export const ActiveSectionContext = createContext(null);
export default function ActiveSectionContextProvider({ children}) {
    
    const [activeSection, setActiveSection] = useState("Home")
  const [lastclicktime, setLastClickTime] = useState(0)
    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection, lastclicktime, setLastClickTime}}>
            {children}
        </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
      throw new Error('useActiveSection must be used within an ActiveSectionContextProvider')
    }
    return context
  }

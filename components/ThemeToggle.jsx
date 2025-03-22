'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  const isLight = theme === 'light' || theme === 'system-light'

  return (
    <div className="fixed top-4 right-4 z-50 sm:bottom-6 sm:right-6 sm:top-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative"
      >
        <motion.button
          onClick={toggleTheme}
          className="flex items-center justify-center p-3 rounded-xl bg-zinc-200/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-custom"
          aria-label="Toggle theme"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isLight ? 'light' : 'dark'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isLight ?
                <Sun className="h-[1.2rem] w-[1.2rem]" /> :
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              }
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  )
}
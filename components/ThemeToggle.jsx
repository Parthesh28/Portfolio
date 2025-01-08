'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.button
      className="fixed top-4 sm:top-auto sm:bottom-4 right-4 p-3 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 text-zinc-800 dark:text-zinc-200 shadow-lg hover:shadow-xl z-10 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50"
      onClick={toggleTheme}
      whileHover={{
        scale: 1.05,
        rotate: 5,
      }}
      whileTap={{
        scale: 0.95,
        rotate: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === 'dark' ? (
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <Sun size={24} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Moon size={24} />
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}
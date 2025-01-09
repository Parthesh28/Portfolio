'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useSectionInView from '../hooks/useSectionInView'
import { Download } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../app/components/ui/avatar'

const words = ["Parthesh", "Developer", "Engineer"]

export default function Home() {
  const [index, setIndex] = useState(0)
  const { ref } = useSectionInView("Home", 0.3)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen relative overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-full blur-2xl opacity-30 animate-pulse" />
          <Avatar className="relative h-40 w-40 ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-xl">
            <AvatarImage
              src='/assets/Profile_Picture.jpg'
              alt="Parthesh Purohit"
              className="object-cover"
            />
            <AvatarFallback className="text-4xl font-bold bg-zinc-400 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              PP
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <div className="text-center space-y-10">
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-6xl sm:text-7xl font-bold"
              >
                {words[index].split('').map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-light tracking-wide"
          >
            Web Developer | Tech Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="/assets/Resume.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-zinc-800 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10"
              aria-label="Download Resume"
            >
              <div className="absolute inset-0 bg-zinc-700 dark:bg-zinc-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <Download className="w-5 h-5 mr-3 relative z-10" />
              <span className="font-medium relative z-10 tracking-wide">
                Resume
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
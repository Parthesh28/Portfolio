'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import useSectionInView from '../hooks/useSectionInView'

const words = ["Parthesh Purohit", "Developer", "Engineer"]

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
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-24 mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-zinc-900 dark:text-zinc-50 text-5xl md:text-6xl font-bold"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="text-xl md:text-2xl mb-8 text-zinc-700 dark:text-zinc-300">
          Web Developer | Tech Enthusiast
        </p>
        <motion.div
          className="flex justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/assets/Resume.pdf"
            className="group relative inline-flex items-center justify-center w-48 px-6 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            aria-label="Download Resume"
          >
            <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <HiDownload className="w-5 h-5 mr-2 relative z-10 text-zinc-700 dark:text-zinc-300" />
            <span className="font-medium relative z-10 text-zinc-900 dark:text-zinc-100">
              Resume
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import useSectionInView from '../hooks/useSectionInView'
import { Avatar, AvatarFallback, AvatarImage } from '../app/components/ui/avatar'

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

  // Modern letter animation variants
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Avatar className="h-32 w-32 ring-4 ring-zinc-400 dark:ring-zinc-700">
          <AvatarImage src='/assets/Profile_Picture.jpg' alt="Parthesh Purohit" className="object-cover" />
          <AvatarFallback className="text-2xl">PP</AvatarFallback>
        </Avatar>
      </motion.div>

      <div className="text-center space-y-6">
        <div className="h-24 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              className="flex justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {words[index].split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  custom={i}
                  className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300"
        >
          Web Developer | Tech Enthusiast
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/assets/Resume.pdf"
            className="group relative inline-flex items-center justify-center px-6 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            aria-label="Download Resume"
          >
            <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <HiDownload className="w-5 h-5 mr-2 relative z-10 text-zinc-700 dark:text-zinc-300" />
            <span className="font-medium relative z-10 text-zinc-900 dark:text-zinc-100">
              Resume
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
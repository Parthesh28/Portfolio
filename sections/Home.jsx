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
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="flex flex-col items-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          className="relative"
        >
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full opacity-75 bg-zinc-400 dark:bg-zinc-600 blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.5,
                }}
              />
            ))}
            <Avatar className="relative h-36 w-36 ring-4 ring-zinc-200 dark:ring-zinc-700">
              <AvatarImage src='/assets/Profile_Picture.jpg' alt="Parthesh Purohit" className="object-cover" />
              <AvatarFallback className="text-3xl bg-zinc-300 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-300">PP</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

        <div className="text-center space-y-8">
          <div className="h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl font-bold relative"
              >
                {words[index].split('').map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-block relative"
                  >
                    <span className="relative z-10 text-zinc-800 dark:text-zinc-200">{char}</span>
                    
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium"
          >
            Web Developer | Tech Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <a
              href="/assets/Resume.pdf"
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-zinc-800 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-zinc-300/25 dark:hover:shadow-zinc-700/25"
              aria-label="Download Resume"
            >
              <div className="absolute inset-0 bg-zinc-700 dark:bg-zinc-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Download className="w-5 h-5 mr-2 relative z-10" />
              <span className="font-medium relative z-10">
                Resume
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useSectionInView from '../hooks/useSectionInView'
import { Download, Github, Linkedin } from 'lucide-react'
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
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20, rotateZ: -5 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateZ: 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative"
          >
            <div className="h-44 w-44 rounded-full p-1 bg-gradient-to-tr from-primary via-primary/40 to-transparent animate-gradient-rotate">
              <div className="h-full w-full rounded-full p-1 bg-zinc-100 dark:bg-zinc-900">
                <Avatar className="h-full w-full relative overflow-hidden shadow-lg">
                  <AvatarImage
                    src='/assets/Profile_Picture.jpg'
                    alt="Parthesh Purohit"
                    className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    PP
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center space-y-10">
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-6xl sm:text-7xl font-bold text-zinc-900 dark:text-zinc-100"
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
            className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light tracking-wide"
          >
            Web Developer | Tech Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/assets/Resume.pdf"
              className="relative inline-flex items-center justify-center px-7 py-3.5 
              bg-gradient-to-tr from-zinc-800 to-zinc-700 dark:from-zinc-200 dark:to-zinc-300
              text-white dark:text-zinc-900 font-medium rounded-xl overflow-hidden 
              shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300
              group"
              aria-label="Download Resume"
              download
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r 
              from-primary/40 via-transparent to-transparent opacity-0 
              group-hover:opacity-100 group-hover:animate-shimmer 
              transition-opacity"></span>

              <Download className="w-5 h-5 mr-2.5 transition-transform group-hover:translate-y-[-2px]" />
              <span className="tracking-wide">
                Resume
              </span>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
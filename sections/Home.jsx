'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useSectionInView from '../hooks/useSectionInView'
import { Dialog } from '../app/components/ui/dialog'
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../app/components/ui/dialog'
import Image from 'next/image'
import { Coffee } from 'lucide-react'

const words = ["Parthesh Purohit", "Developer", "Engineer"]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const { ref } = useSectionInView("Home", 0.3);

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-24 mb-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-zinc-950 dark:text-zinc-50 text-5xl md:text-6xl font-bold"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="text-xl md:text-2xl mb-8">Web Developer | Tech Enthusiast</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Me a Coffee
          </motion.button>
          <motion.a
            href="/path-to-your-cv.pdf"
            download="./path-to-your-cv.pdf"
            className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition duration-300 border-2 border-black dark:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='bg-zinc-200 dark:bg-zinc-900'>
          <DialogHeader  >
            <div className='flex items-center '>
              <Coffee className='mr-3 mb-1' />
              <DialogTitle>Buy Me a Coffee</DialogTitle>
           </div>
            <DialogDescription>
              Scan the QR code or use the UPI ID below to support my work!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/QR_Code.png"
              alt="QR Code for payment"
              width={300}
              height={200}
              className="rounded-sm"
            />
            <p className="text-lg font-semibold">UPI ID: partheshpurohit@pingpay</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-6 px-4 mt-12 pb-20 sm:pb-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="h-px w-16 bg-zinc-300 dark:bg-zinc-700 mb-1"></div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center tracking-wide">
            &copy; {new Date().getFullYear()}  Parthesh Purohit.
          </p>
          <p className="text-xs text-zinc-400 font-bold dark:text-zinc-500 text-center tracking-wider pt-1">
            Made with pain  T_T
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
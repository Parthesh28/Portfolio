'use client'

import Link from 'next/link'
import { House, User, BriefcaseBusiness, Link2 } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useActiveSection } from '../context/active-section-context'

const navItems = [
  {
    name: "Home",
    hash: "#home",
    Icon: House
  },
  {
    name: "About",
    hash: "#about",
    Icon: User
  },
  {
    name: "Projects",
    hash: "#projects",
    Icon: BriefcaseBusiness
  },
  {
    name: "Connect",
    hash: "#connect",
    Icon: Link2
  },
]

export default function Navbar() {
  const { activeSection, setActiveSection, setLastClickTime } = useActiveSection()

  return (
    <header className='z-40 relative'>
      <motion.div
        className='fixed bottom-4 sm:bottom-auto sm:top-6 left-1/2 -translate-x-1/2 h-[3.5rem] w-[20rem] sm:w-[32rem] rounded-2xl 
          bg-zinc-100/90 dark:bg-zinc-600/30 backdrop-blur-md
          border border-slate-300 dark:border-slate-800
          hover:border-black/10 dark:hover:border-white/10 

          transition-all duration-300'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed bottom-[1.35rem] sm:bottom-auto sm:top-0 left-1/2 h-12 -translate-x-1/2 sm:h-[5.5rem]">
        <ul className="flex w-[19rem] sm:w-[31rem] items-center justify-between px-3 text-[0.9rem] font-medium">
          {navItems.map((link) => (
            <motion.li
              className="h-3/4 flex items-center sm:mt-[1rem] justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex w-full items-center justify-center px-4 py-2.5 transition-all duration-200",
                  activeSection === link.name
                    ? "text-gray-950 dark:text-white"
                    : "text-gray-600/90 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-200"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClickTime(Date.now())
                }}
              >
                {link.name === activeSection && (
                  <motion.span
                    className='absolute inset-0 bg-zinc-950/[0.15] dark:bg-zinc-100/[0.15] rounded-xl -z-10
                      shadow-[inset_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_1px_rgba(255,255,255,0.1)]'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span className="hidden sm:block font-medium tracking-wide">
                  {link.name}
                </span>
                <link.Icon
                  className={clsx(
                    "block sm:hidden h-5 w-5 transition-transform duration-200",
                    activeSection === link.name
                      ? "scale-110"
                      : "scale-100"
                  )}
                  strokeWidth={2}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
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
        className='fixed bottom-4 sm:top-6 left-1/2 -translate-x-1/2 h-[3.5rem] w-[20rem] sm:w-[35rem] rounded-2xl 
          bg-zinc-100/80 dark:bg-zinc-900/95 backdrop-blur-sm border-[1.5px] border-zinc-300 dark:border-zinc-700/50 shadow-md'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed bottom-[1.35rem] sm:top-0 left-1/2 h-12 -translate-x-1/2 sm:h-[5.5rem]">
        <ul className="flex w-[19rem] sm:w-[34rem] items-center justify-between px-4 text-[1rem] font-medium">
          {navItems.map((link) => (
            <motion.li
              className="h-3/4 flex items-center sm:mt-[1rem] justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex w-full items-center justify-center px-4 py-3 transition-custom rounded-lg ",
                  activeSection === link.name
                    ? "text-black dark:text-white font-semibold"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClickTime(Date.now())
                }}
              >
                {link.name === activeSection && (
                  <motion.span
                    className='absolute inset-0 bg-zinc-400/40 dark:bg-zinc-700 rounded-2xl -z-10'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span className="hidden sm:block font-semibold tracking-tight">
                  {link.name}
                </span>
                <link.Icon
                  className={clsx(
                    "block sm:hidden h-[1.2rem] w-[1.2rem] transition-transform duration-200",
                    activeSection === link.name
                      ? "scale-110 text-black dark:text-white"
                      : "scale-100"
                  )}
                  strokeWidth={2.5}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
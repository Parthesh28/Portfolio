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
    name: "Contact",
    hash: "#contact",
    Icon: Link2
  },
]

export default function Navbar() {

  const { activeSection, setActiveSection, setLastClickTime } = useActiveSection()

  return (
    <header className='z-40 relative'>
      <motion.div
        className='fixed bottom-4 sm:bottom-auto sm:top-6 left-1/2 -translate-x-1/2 h-[3.5rem] w-[23rem] rounded-full border border-slate-500 border-opacity-40 bg-zinc-50 bg-opacity-50 dark:bg-zinc-900 dark:bg-opacity-50 shadow-lg shadow-black/[0.03] dark:shadow-white/[0.03] backdrop-blur-xl sm:h-[3.25rem] sm:w-[36rem]'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed bottom-[1.35rem] sm:bottom-auto sm:top-[1.7rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {navItems.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex w-full items-center justify-center px-7 py-3 hover:text-gray-600 transition dark:text-gray-200 dark:hover:text-gray-500",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClickTime(Date.now())
                }}
              >
                {link.name === activeSection && (
                  <motion.span className='absolute inset-0 bg-gray-200 rounded-full h-9 top-[0.28rem] -z-10 dark:bg-zinc-800'
                    layoutId='activeSection'
                    transition={
                      {
                        type: 'spring',
                        stiffness: 400,
                        damping: 50
                      }
                    }
                  ></motion.span>
                )}
                <span className="hidden sm:block">{link.name}</span>
                <link.Icon className="block sm:hidden h-5 w-5" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
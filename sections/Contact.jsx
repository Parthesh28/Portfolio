'use client'

import { motion } from 'framer-motion'
import { Instagram, Github, Linkedin, Coffee, Mail, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../app/components/ui/card'
import { Separator } from '../app/components/ui/separator'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../app/components/ui/tooltip'
import { Button } from '../app/components/ui/button'
import useSectionInView from '../hooks/useSectionInView'

export default function Contact() {
  const { ref } = useSectionInView("Connect", 0.3)
  const email = 'partheshpurohit23@gmail.com'

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/parthesh28/',
      label: '@parthesh28',
    },
    {
      icon: Github,
      href: 'https://github.com/Parthesh28',
      label: 'Parthesh28',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/partheshpurohit',
      label: 'partheshpurohit',
    },
    {
      icon: Coffee,
      href: 'https://www.buymeacoffee.com/parthesh28',
      label: 'Support Me!',
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="connect" className="py-24" ref={ref}>
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Card className="overflow-hidden bg-zinc-100/70 dark:bg-zinc-900/70  backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-8">
                <motion.h2
                  className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
                  variants={itemVariants}
                >
                  Let's Connect
                </motion.h2>

                <motion.p
                  className="text-zinc-600 dark:text-zinc-400 text-center text-lg"
                  variants={itemVariants}
                >
                  Feel free to reach out through any of these channels!
                </motion.p>

                <Separator className="w-full max-w-md bg-zinc-300 dark:bg-zinc-700" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <a
                    href={`mailto:${email}`}
                    aria-label="Send email"
                    className="group relative inline-flex items-center justify-center px-6 py-3 bg-zinc-400/80 dark:bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-zinc-300/25 dark:hover:shadow-zinc-700/25"
                  >
                    <div className="absolute inset-0 bg-zinc-500 dark:bg-zinc-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <Mail className="w-5 h-5 mr-2 relative z-10" />
                    <span className="underline underline-offset-1 font-medium relative z-10">
                      Email Me!
                    </span>
                  </a>
                </motion.div>

                <Separator className="w-full max-w-md bg-zinc-300 dark:bg-zinc-700" />

                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  variants={itemVariants}
                >
                  <TooltipProvider delayDuration={200}>
                    {socialLinks.map((link, index) => (
                      <SocialLink key={index} link={link} />
                    ))}
                  </TooltipProvider>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({ link }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-zinc-300 dark:bg-zinc-800 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
        </motion.a>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 px-3 py-1.5 rounded-lg text-sm font-medium"
      >
        {link.label}
      </TooltipContent>
    </Tooltip>
  )
}


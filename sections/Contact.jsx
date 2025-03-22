'use client'

import { motion } from 'framer-motion'
import { Instagram, Github, Linkedin, Coffee, Mail, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../app/components/ui/card'
import { Separator } from '../app/components/ui/separator'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../app/components/ui/tooltip'
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
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-md mx-auto"
        >
          <Card className="overflow-hidden bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10">
            <CardContent className="p-0">
              {/* Email Section */}
              <motion.div
                className="px-8 py-6 relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-zinc-300/30 after:via-primary/60 after:to-zinc-300/30 dark:after:from-zinc-700/60 dark:after:via-primary/50 dark:after:to-zinc-700/60 after:shadow-sm"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center flex-wrap gap-4">
                  <motion.a
                    href={`mailto:${email}`}
                    aria-label="Send email"
                    className="relative inline-flex items-center justify-center px-7 py-3.5 
                    bg-gradient-to-tr from-zinc-800 to-zinc-700 dark:from-zinc-200 dark:to-zinc-300
                    text-white dark:text-zinc-900 font-medium rounded-xl overflow-hidden 
                    shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300
                    group"
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r 
                    from-primary/40 via-transparent to-transparent opacity-0 
                    group-hover:opacity-100 group-hover:animate-shimmer 
                    transition-opacity"></span>

                    <Mail className="w-5 h-5 mr-2.5 transition-transform group-hover:translate-y-[-2px]" strokeWidth={2} />
                    <span className="tracking-wide">Email</span>
                  </motion.a>
                </div>
              </motion.div>
              {/* Social Links */}
              <div className="px-8 py-6">
                <motion.div
                  className="flex justify-center items-center gap-6"
                  variants={containerVariants}
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
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 
          hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300"
          aria-label={link.label}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 }
          }}
        >
          <link.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
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


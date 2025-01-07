'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Gamepad2, Instagram } from 'lucide-react'
import useSectionInView from '../hooks/useSectionInView'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../app/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from '../app/components/ui/avatar'
import { Separator } from '../app/components/ui/separator'
import WobbleCard from '../components/WobbleCard'

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const email = 'partheshpurohit23@gmail.com';

  const socialLinks = [
    { icon: Mail, href: `mailto:${email}`, label: email },
    { icon: Instagram, href: 'https://www.instagram.com/parthesh28/', label: '@parthesh28' },
    { icon: Github, href: 'https://github.com/Parthesh28', label: 'Parthesh28' },
    { icon: Gamepad2, href: 'https://discordapp.com/users/764456744755003443', label: '@parthesh28' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/partheshpurohit', label: 'Parthesh Purohit' }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-zinc-50/50 dark:bg-zinc-950/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <WobbleCard>
            <Card className="w-full border-0 shadow-xl bg-white dark:bg-zinc-900">
              <CardHeader className="space-y-3 pb-6">
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-2">
                    <AvatarImage src='/assets/Profile_Picture.jpg
' />
                    <AvatarFallback className="text-lg">PP</AvatarFallback>
                  </Avatar>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 125 }}
                  >
                    <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                      Connect with Me!
                    </h2>
                  </motion.div>
                </div>
                <CardDescription className="text-center text-zinc-600 dark:text-zinc-400 text-base">
                  Let&apos;s collaborate and create something amazing together
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-1">
                {socialLinks.map((link, index) => (
                  <div key={index}>
                    <motion.div
                      className="group px-4 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors" />
                          <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                            {link.label}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 opacity-0 group-hover:opacity-100 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.div>
                    {index < socialLinks.length - 1 && (
                      <Separator className="my-1 bg-zinc-200 dark:bg-zinc-800" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </WobbleCard>
        </motion.div>
      </div>
    </section>
  );
}
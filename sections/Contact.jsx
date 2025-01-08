'use client'

import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaDiscord, FaLinkedin, FaCoffee } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import { Avatar, AvatarImage, AvatarFallback } from '../app/components/ui/avatar';
import { Card, CardContent } from '../app/components/ui/card';
import { Separator } from '../app/components/ui/separator';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../app/components/ui/tooltip';
import WobbleCard from '../components/WobbleCard'
import useSectionInView from '../hooks/useSectionInView';

export default function () {
  const { ref } = useSectionInView("Connect", 0.3);
  const email = 'partheshpurohit23@gmail.com';

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/parthesh28/', label: '@parthesh28' },
    { icon: FaGithub, href: 'https://github.com/Parthesh28', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/partheshpurohit', label: 'partheshpurohit' },
    { icon: FaCoffee, href: 'https://www.buymeacoffee.com/parthesh28', label: 'Support Me' }
  ];

  return (
    <section
      id="connect"
      className="py-24"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <WobbleCard>
            <Card className="overflow-hidden shadow-lg bg-zinc-100 dark:bg-zinc-900">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-8">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Connect With Me!
                  </motion.h2>

                  <motion.p
                    className="text-zinc-500 dark:text-zinc-400 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Reach me out through following channels!
                  </motion.p>
                  <Separator className="w-full max-w-md bg-zinc-300 dark:bg-zinc-700" />
                  <motion.div
                    className="w-full max-w-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      href={`mailto:${email}`}
                      className="group relative flex items-center justify-center w-full p-4 bg-zinc-300 dark:bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                      aria-label="Send email"
                    >
                      <div className="absolute inset-0 bg-zinc-500 dark:bg-zinc-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <HiMail className="w-6 h-6 mr-3 text-zinc-600 dark:text-zinc-400 relative z-10" />
                      <span className="text-zinc-600 dark:text-zinc-400 font-medium relative z-10">
                        {email}
                      </span>
                    </a>
                  </motion.div>

                  <Separator className="w-full max-w-md bg-zinc-200 dark:bg-zinc-700" />

                  <motion.div
                    className="flex flex-wrap justify-center gap-6 mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <TooltipProvider>
                      {socialLinks.map((link, index) => (
                        <SocialLink key={index} link={link} />
                      ))}
                    </TooltipProvider>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </WobbleCard>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ link }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 transition-colors duration-200"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
        </a>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-zinc-800 text-white dark:bg-white dark:text-zinc-800"
      >
        <p>{link.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}


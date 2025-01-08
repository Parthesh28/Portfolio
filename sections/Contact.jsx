import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Coffee, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../app/components/ui/card';
import { Separator } from '../app/components/ui/separator';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../app/components/ui/tooltip';
import WobbleCard from '../components/WobbleCard';
import useSectionInView from '../hooks/useSectionInView';

export default function Contact() {
  const { ref } = useSectionInView("Connect", 0.3);
  const email = 'partheshpurohit23@gmail.com';

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
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="connect" className="py-24" ref={ref}>
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <WobbleCard>
            <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-8">
                  <motion.h2
                    className="text-3xl font-extrabold bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent"
                    variants={containerVariants}
                  >
                    Connect
                  </motion.h2>

                  <motion.p
                    className="text-zinc-600 dark:text-zinc-400 text-center"
                    variants={containerVariants}
                  >
                    Reach me out through any of these channels!
                  </motion.p>

                  <Separator className="w-full max-w-md bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent" />

                  <motion.div
                    className="w-full max-w-md"
                    variants={containerVariants}
                  >
                    <a
                      href={`mailto:${email}`}
                      className="group relative flex items-center justify-center w-full p-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      aria-label="Send email"
                    >
                      <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <Mail className="w-5 h-5 mr-3 text-zinc-700 dark:text-zinc-300 relative z-10 group-hover:rotate-6 transition-transform duration-300" />
                      <span className=" font-semibold underline underline-offset-1 relative z-10 group-hover:tracking-wider transition-all duration-300">
                        Email Me!
                      </span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-600 dark:text-zinc-400" />
                    </a>
                  </motion.div>

                  <Separator className="w-full max-w-md bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent" />

                  <motion.div
                    className="flex flex-wrap justify-center gap-6 mt-6"
                    variants={containerVariants}
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
        <motion.a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
          aria-label={link.label}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          <link.icon
            className={`w-5 h-5  relative z-10 transition-transform duration-300 group-hover:scale-110`}
          />
        </motion.a>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-zinc-800/95 text-white dark:bg-white/95 dark:text-zinc-800 px-3 py-1.5 rounded-lg shadow-lg border border-zinc-700/20 dark:border-zinc-300/20"
      >
        <p className="text-sm font-medium">{link.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
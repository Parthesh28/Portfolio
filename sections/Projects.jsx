import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSectionInView from '../hooks/useSectionInView';
import { Card, CardContent } from "../app/components/ui/card";
import { Badge } from '../app/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../app/components/ui/carousel";
import { Code, Eye, EyeOff, Link2Off } from 'lucide-react';

const projects = [
  {
    title: 'Pulp',
    description: 'An easy to use code-sharing platform for students',
    image: '/assets/Pulp.png',
    codebaseLink: 'https://github.com/sfitdevs/pulp-frontend',
    previewLink: 'https://pulp.yadav.id',
    techstack: ['Next.js', 'Cloudflare D1']
  },
  {
    title: 'BlockMart',
    description: 'A e-commerce platform built on Ethereum blockchain.',
    image: '/assets/BlockMart.png',
    codebaseLink: 'https://github.com/Viraj2722/Polyzon',
    previewLink: 'https://polyzon.vercel.app',
    techstack: ['Solidity', 'Ethereum', 'Next.js']
  },
  {
    title: 'CodeX',
    description: 'A fully responsive website designed for CodeX-SFIT',
    image: '/assets/CodeX.png',
    codebaseLink: '',
    previewLink: 'https://codex.sfit.ac.in',
    techstack: ['Next.js']
  },
  {
    title: 'Symphony Ledger',
    description: 'Ledger for music on Solana',
    image: '/assets/Symphony.png',
    codebaseLink: 'https://github.com/Parthesh28/Symphony_Ledger',
    previewLink: '',
    techstack: ['Vite.js', 'Solana']
  },
  {
    title: 'Portfolio',
    description: 'A modern portfolio website made with pain',
    image: '/assets/Portfolio.png',
    codebaseLink: '',
    previewLink: 'https://parthesh28.vercel.app',
    techstack: ['Next.js']
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="group h-full bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techstack.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {project.codebaseLink ? (
              <a
                href={project.codebaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-600
                text-zinc-900 dark:text-zinc-100 font-medium
                shadow-md hover:shadow-lg hover:scale-[1.02]
                transition-all duration-300 overflow-hidden relative
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-l 
                before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%]
                hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                <Code className="h-4 w-4 relative" strokeWidth={2.5} />
                <span className="relative">Code</span>
              </a>
            ) : (
              <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500
                cursor-not-allowed font-medium backdrop-blur-sm">
                <EyeOff className="h-4 w-4" strokeWidth={2.5} />
                <span>Private</span>
              </span>
            )}

            {project.previewLink ? (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-gradient-to-br from-primary/80 to-primary/100 text-primary-foreground font-medium
                shadow-md hover:shadow-lg hover:scale-[1.02]
                transition-all duration-300 overflow-hidden relative
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-l 
                before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%]
                hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                <Eye className="h-4 w-4 relative" strokeWidth={2.5} />
                <span className="relative">Demo</span>
              </a>
            ) : (
              <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500
                cursor-not-allowed font-medium backdrop-blur-sm">
                <Link2Off className="h-4 w-4" strokeWidth={2.5} />
                <span>Unhosted</span>
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);


export default function Projects() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const { ref } = useSectionInView("Projects", 0.3);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="projects" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-[-4rem] hover:bg-zinc-100 dark:hover:bg-zinc-800" />
            <CarouselNext className="right-[-4rem] hover:bg-zinc-100 dark:hover:bg-zinc-800" />
          </div>
        </Carousel>

        <div className="flex sm:hidden justify-center gap-4 mt-5">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${i === current
                ? 'bg-primary scale-125'
                : 'bg-zinc-300/70 dark:bg-zinc-700/70 hover:bg-zinc-400 dark:hover:bg-zinc-600 hover:scale-110'
                }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
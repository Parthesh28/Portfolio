import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSectionInView from '../hooks/useSectionInView';
import { Card, CardContent } from "../app/components/ui/card";
import { Badge } from '../app/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../app/components/ui/carousel";
import { Button } from "../app/components/ui/button";
import { Code, Eye, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'BlockMart',
    description: 'A e-commerce platform built on Ethereum blockchain.',
    image: '/assets/BlockMart.png',
    codebaseLink: 'https://github.com/Viraj2722/Polyzon',
    previewLink: 'https://polyzon.vercel.app',
    techstack: ['Solidity', 'Ethereum', 'Next.js']
  },
  {
    title: 'Pulp',
    description: 'An easy to use code-sharing platform utility for students',
    image: '/assets/Pulp.png',
    codebaseLink: 'https://github.com/sfitdevs/pulp-frontend',
    previewLink: 'https://pulp.yadav.id',
    techstack: ['Next.js', 'Cloudflare D1']
  },
  {
    title: 'CodeX',
    description: 'A fully responsive website designed for CodeX-SFIT',
    image: '/assets/CodeX.png',
    codebaseLink: '',
    previewLink: '',
    techstack: ['Next.js']
  },
  {
    title: 'Portfolio',
    description: 'A modern portfolio website that was made with pain',
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
    <Card className="group h-full bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
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

          <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <Button
              variant="outline"
              disabled={!project.codebaseLink}
              className="flex-1"
              asChild={!!project.codebaseLink}
            >
              {project.codebaseLink ? (
                <a
                  href={project.codebaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Code className="h-4 w-4" />
                  <span>Code</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Private</span>
                </span>
              )}
            </Button>

            <Button
              variant="default"
              disabled={!project.previewLink}
              className="flex-1"
              asChild={!!project.previewLink}
            >
              {project.previewLink ? (
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>No Preview</span>
                </span>
              )}
            </Button>
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
              className={`w-2 h-2 rounded-full transition-all ${i === current
                  ? 'bg-zinc-900 dark:bg-zinc-100'
                  : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
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
import { motion } from 'framer-motion'
import Image from 'next/image'
import useSectionInView from '../hooks/useSectionInView'
import { Card, CardContent } from "../app/components/ui/card"
import { Badge } from '../app/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../app/components/ui/carousel"
import { Button } from "../app/components/ui/button"
import { Code, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'

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
]

export default function Projects() {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section id="projects" ref={ref} className="py-20">
      <motion.h2
        className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12"
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
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-lg h-full flex flex-col">
                  <CardContent className="p-0 flex-grow flex flex-col">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techstack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="rounded-full bg-zinc-200 dark:bg-zinc-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4 flex-grow">{project.description}</p>
                      <div className="flex gap-3 mt-auto">
                        <Button
                          variant="outline"
                          disabled={!project.codebaseLink}
                          className={`flex-1 ${!project.codebaseLink ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-200 dark:hover:bg-zinc-800'} transition-colors duration-200`}
                          asChild={!!project.codebaseLink}
                        >
                          {project.codebaseLink ? (
                            <a
                              href={project.codebaseLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center"
                            >
                              <Code className="mr-2 h-4 w-4" />
                              Codebase
                            </a>
                          ) : (
                            <span className="inline-flex items-center justify-center">
                              <Code className="mr-2 h-4 w-4" />
                              Private
                            </span>
                          )}
                        </Button>
                        <Button
                          variant="default"
                          disabled={!project.previewLink}
                          className={`flex-1 ${!project.previewLink ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-700 dark:hover:bg-zinc-600'} transition-colors duration-200`}
                          asChild={!!project.previewLink}
                        >
                          {project.previewLink ? (
                            <a
                              href={project.previewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              Preview
                            </a>
                          ) : (
                            <span className="inline-flex items-center justify-center">
                              <Eye className="mr-2 h-4 w-4" />
                              No Preview
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === current
                ? 'bg-zinc-800 dark:bg-zinc-200'
                : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
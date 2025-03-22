'use client'

import { motion } from 'framer-motion'
import useSectionInView from '../hooks/useSectionInView'
import CodingStatsCard from '../components/CodingStatsCard'
import AboutMeCard from '../components/AboutMeCard'
import SkillsEducationSection from './Skills'
import { useEffect, useState } from 'react'

const skills = [
  'JavaScript', 'React', 'Next.js', 'Node.js', 'Express',
  'MongoDB', 'PostgreSQL'
]
const tools = ['VS-Code', 'Git', 'GitHub', 'Expo']

const education = [
  { 'Title': 'B.E in Computer Engineering', 'year': '2019-2026', 'institution': 'St.Francis Institute of Technology' },
  { 'Title': 'SSC', 'year': '2017', 'institution': 'Navbharat Eduction Society' },
  { 'Title': 'HSC', 'year': '2019', 'institution': 'Shubham Raje Institute' }
]

export default function About() {
  const { ref } = useSectionInView("About", 0.3);
  const [codingData, setCodingData] = useState([]);

  useEffect(() => {
    fetchCodingData();
  }, []);

  const fetchCodingData = async () => {
    try {
      const results = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const formattedDate = date.toISOString().split('T')[0];

        const response = await fetch(`/api/wakatime?date=${formattedDate}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        results.push(result);
      }

      setCodingData(results.reverse());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">About Me</h2>
          <div className="h-px w-20 bg-zinc-300 dark:bg-zinc-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <CodingStatsCard data={codingData} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <AboutMeCard />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SkillsEducationSection skills={skills} tools={tools} education={education} />
      </motion.div>
    </section>
  )
}


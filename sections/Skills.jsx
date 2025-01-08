import { Card, CardContent, CardHeader, CardTitle } from "../app/components/ui/card"
import { motion } from "framer-motion"
import { School, GraduationCap, BookOpen, Zap, Wrench, BookMarked } from 'lucide-react'

const educationTimeline = [
    {
        year: "2017",
        title: "SSC",
        description: "Secondary education from Mumbai",
        icon: School
    },
    {
        year: "2019",
        title: "HSC",
        description: "Higher Secondary education from Mumbai",
        icon: BookOpen
    },
    {
        year: "2022-2026",
        title: "B.E",
        description: "Computer Engineering from SFIT, Borivali",
        icon: GraduationCap
    }
]

const tools = [
     "Git", "GitHub", "Expo",
]

const skills = [
 "React-Native", "Express/Hono", "Next.js",
]

const MotionCard = motion(Card)

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

export default function Skills() {
    return (
        <section className=" px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills and Education
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MotionCard variants={itemVariants} className="bg-zinc-100 dark:bg-zinc-900 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold flex items-center gap-2 text-primary">
                                <BookMarked className="h-6 w-6" />
                                <span>Education</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div className="relative" variants={containerVariants}>
                                <div className="absolute left-6 h-full w-0.5 bg-primary/20"></div>
                                {educationTimeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="mb-6 flex"
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex flex-col items-center mr-4 z-10">
                                            <motion.div
                                                className="flex items-center justify-center w-12 h-12 bg-secondary-foreground rounded-full"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <item.icon className="w-6 h-6 text-secondary" />
                                            </motion.div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </MotionCard>

                    <div className="space-y-5">
                        <MotionCard variants={itemVariants} className="bg-zinc-100 dark:bg-zinc-900 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold flex items-center gap-2 text-primary">
                                    <Zap className="h-6 w-6" />
                                    <span>Skills</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.ul
                                    className="grid grid-cols-1 gap-2"
                                    variants={containerVariants}
                                >
                                    {skills.map((skill, index) => (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-center space-x-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span>-</span>
                                            <span className="text-sm font-normal">{skill}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </CardContent>
                        </MotionCard>

                        <MotionCard variants={itemVariants} className="bg-zinc-100 dark:bg-zinc-900 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold flex items-center gap-2 text-primary">
                                    <Wrench className="h-6 w-6" />
                                    <span>Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.ul
                                    className="grid grid-cols-1 gap-2"
                                    variants={containerVariants}
                                >
                                    {tools.map((tool, index) => (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-center space-x-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="font-bold">-</span>
                                            <span className="text-sm font-normal">{tool}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </CardContent>
                        </MotionCard>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


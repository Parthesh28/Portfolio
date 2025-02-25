import { Card, CardContent, CardHeader, CardTitle } from "../app/components/ui/card"
import { motion } from "framer-motion"
import { School, GraduationCap, Zap, Wrench, BookMarked } from 'lucide-react'
import { Badge } from "../app/components/ui/badge"

const educationTimeline = [
    {
        year: "2017 - 2019",
        title: "Schooling",
        description: "Cleared Secondary and Higher Secondary Exams",
        icon: School
    },
    {
        year: "2022-2026",
        title: "Degree",
        description: "B.E. in Computer Engineering",
        icon: GraduationCap
    }
]

const tools = [
    "Git", "GitHub", "Expo", "VS Code", "Android Studio",
]

const skills = [
    "TypeScript", "React-Native", "Next.js", "Express/Hono",  "Java"
]

const MotionCard = motion(Card)

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            duration: 0.8
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function Skills() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills & Education
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MotionCard
                        variants={itemVariants}
                        className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm ring-1 rounded-2xl ring-zinc-900/5 dark:ring-white/10"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                <BookMarked className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                                <span>Education</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div className="relative" variants={containerVariants}>
                                <div className="absolute left-6 h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>
                                {educationTimeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="mb-8 last:mb-0 flex group"
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex flex-col items-center mr-4 z-10">
                                            <motion.div
                                                className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 ring-4 ring-zinc-100 dark:ring-zinc-900 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 transition-colors duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <item.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                                            </motion.div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.year}</p>
                                            <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </MotionCard>

                    <div className="space-y-6">
                        <MotionCard
                            variants={itemVariants}
                            className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm ring-1 rounded-2xl ring-zinc-900/5 dark:ring-white/10"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                    <Zap className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                                    <span>Skills</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                >
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Badge className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700">
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            variants={itemVariants}
                            className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm ring-1 rounded-2xl ring-zinc-900/5 dark:ring-white/10"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                    <Wrench className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                                    <span>Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                >
                                    {tools.map((tool, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Badge className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700">
                                                {tool}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </MotionCard>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
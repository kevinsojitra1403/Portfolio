"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"
import { Database, LineChart, FileText, Code, GitBranch, Workflow, TestTube, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Business Analysis & Documentation",
      icon: <FileText className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["Requirements Gathering", "BRD Creation", "Functional Specifications", "Process Documentation"],
    },
    {
      title: "Data Analysis & Visualization",
      icon: <LineChart className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["SQL", "Tableau", "Power BI", "Python", "Pandas", "NumPy", "Data-Driven Decision Making"],
    },
    {
      title: "Database Management & Engineering",
      icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["Database Design", "Optimization", "Data Mapping", "Validation Protocols", "ETL Processes"],
    },
    {
      title: "Software Development",
      icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["Web Development", "JavaScript", "Cross-Device Functionality", "Usability"],
    },
    {
      title: "Agile Project Management",
      icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["Scrum", "Jira", "Confluence", "MS Project", "Timely Delivery"],
    },
    {
      title: "Process & Workflow Optimization",
      icon: <Workflow className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["Process Analysis", "Efficiency Improvement", "Operational Performance"],
    },
    {
      title: "Testing & Quality Assurance",
      icon: <TestTube className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["User Acceptance Testing (UAT)", "Test Case Creation", "System Quality Assurance"],
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />,
      skills: ["Problem-Solving", "Communication", "Teamwork", "Time Management", "Task Prioritization"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="My technical and professional expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="text-base md:text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


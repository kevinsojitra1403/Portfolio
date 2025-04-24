"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { Calendar, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "DAS Feasibility Analysis",
      company: "Goldensource International Pvt. Ltd",
      date: "Jun 2023",
      category: "data-analysis",
      description: [
        "Defined and tracked key performance metrics, boosting data accuracy by 30%.",
        "Developed interactive Tableau visualizations, enabling stakeholders to make data-driven decisions.",
      ],
    },
    {
      title: "Fund Master",
      company: "Goldensource International Pvt. Ltd",
      date: "May 2023",
      category: "database",
      description: [
        "Designed SQL-based data solutions for reporting and analysis, ensuring 100% accuracy.",
        "Led workshops on SQL techniques, increasing team proficiency and project scalability.",
      ],
    },
    {
      title: "Project for Nuveen",
      company: "Goldensource International Pvt. Ltd.",
      date: "Jan 2023",
      category: "data-engineering",
      description: [
        "Enhanced data mapping and validation protocols, improving reporting accuracy by 20%.",
        "Collaborated with cross-functional teams to meet project deadlines, achieving 100% stakeholder satisfaction.",
        "Automated data pipeline processes, reducing manual intervention by 30%.",
      ],
    },
    {
      title: "Car-Selling-Price-Prediction API",
      company: "Final Year Project, Bachelor of Science in IT - Pillai College",
      date: "Apr 2022",
      category: "machine-learning",
      description: [
        "Designed a web platform for predicting car prices, optimizing user flows and improving the customer experience by 30%.",
        "Conducted usability testing and incorporated feedback to enhance the platform's mobile-first functionality.",
      ],
    },
    {
      title: "Avishkar Participant",
      company: "University Of Mumbai",
      date: "Apr 2022",
      category: "research",
      description: [
        "Ranked in the top 10% out of 500+ participants in a data-driven research competition.",
        "Delivered a high-quality presentation, improving the clarity and impact of research findings.",
      ],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Projects" subtitle="Showcasing my work and achievements" />

        {/* Filter buttons - scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 mb-6 md:mb-8 md:justify-center md:flex-wrap md:space-x-2 gap-2 no-scrollbar">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            All
          </Button>
          <Button
            onClick={() => setFilter("data-analysis")}
            variant={filter === "data-analysis" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Data Analysis
          </Button>
          <Button
            onClick={() => setFilter("database")}
            variant={filter === "database" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Database
          </Button>
          <Button
            onClick={() => setFilter("data-engineering")}
            variant={filter === "data-engineering" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Data Engineering
          </Button>
          <Button
            onClick={() => setFilter("machine-learning")}
            variant={filter === "machine-learning" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Machine Learning
          </Button>
          <Button
            onClick={() => setFilter("research")}
            variant={filter === "research" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Research
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardDescription className="text-primary line-clamp-1">{project.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.description.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


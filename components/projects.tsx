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
      title: "Mallify – Capstone Project",
      company: "Fanshawe College",
      date: "Apr 2025",
      category: "web-development",
      description: [
        "Built an admin dashboard for a mall loyalty system using Firebase CRUD operations.",
        "Participated in sprint planning, version control, and peer reviews.",
        "Created UI storyboards and functional workflows to guide development and stakeholder feedback.",
      ],
      technologies: "React, Firebase, HTML/CSS/JS",
    },
    {
      title: "Business Solutions Architecture, Big Data Reporting & ERP Coursework",
      company: "Fanshawe College",
      date: "Apr 2025",
      category: "business-intelligence",
      description: [
        "Built KPI dashboards using Power BI and Tableau, applying data visualization best practices for business decision-making.",
        "Performed data cleansing and ETL with SSIS on AdventureWorks Data Warehouse 2019.",
        "Worked with SQL Server Analysis Services (SSAS) to manage multidimensional data models and cubes.",
        "Developed ETL pipelines in Visual Studio, integrating data sources to support enterprise reporting.",
        "Gained hands-on experience with SAP S/4HANA (Global Bike 3.3 dataset) in an ERP simulation environment via the SAP University Alliance.",
        "Executed real-world business transactions in SAP (Procurement, Sales, Inventory, and Financials) for process analysis and ERP understanding.",
      ],
      technologies: "Power BI, Tableau, SSIS, SQL Server Analysis Services (SSAS), SAP S/4HANA, Visual Studio",
    },
    {
      title: "DAS Feasibility Analysis - JNAM",
      company: "Goldensource International Pvt. Ltd",
      date: "Jun 2023",
      category: "data-analysis",
      description: [
        "Conducted data quality assessments, reducing errors in reporting by 30%.",
        "Developed KPI tracking matrices to improve visibility and decision-making efficiency.",
      ],
      technologies: "PostgreSQL, MDS (GoldenSource proprietary tool), Excel",
    },
    {
      title: "Fund Master - JNAM",
      company: "Goldensource International Pvt. Ltd",
      date: "May 2023",
      category: "database",
      description: [
        "Developed and optimized SQL scripts, improving fund data extraction efficiency by 40% and reducing manual intervention and processing errors.",
        "Created detailed test case documentation and performed UI testing, increasing pre-production defect detection by 25%.",
        "Supported UAT through data validation and cleansing, enhancing data accuracy by 30%, set up dev servers using Unix shell scripting, improving deployment speed by 20%, and contributed to procurement documentation for streamlined vendor evaluation.",
      ],
      technologies: "MDS (GoldenSource), PostgreSQL, WinSCP, Unix Shell Scripting",
    },
    {
      title: "ICOE Internal Team Member",
      company: "Goldensource International Pvt. Ltd",
      date: "Apr 2023",
      category: "business-intelligence",
      description: [
        "Created Power BI dashboards and automated internal workflows to improve reporting and analytics.",
        "Assisted in documentation and collaboration across multiple internal teams for data operations.",
      ],
      technologies: "Power BI, PowerApps, Power Automate, SharePoint, Confluence",
    },
    {
      title: "Car Selling Price Prediction API",
      company: "Final Year Project, Bachelor of Science in IT - Pillai College",
      date: "Apr 2022",
      category: "machine-learning",
      description: ["Built a machine learning model using Python & SQL for price prediction with a web interface."],
      technologies: "Python, JavaScript, Flask, SQL, HTML, CSS, Anaconda",
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
            onClick={() => setFilter("web-development")}
            variant={filter === "web-development" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Web Development
          </Button>
          <Button
            onClick={() => setFilter("business-intelligence")}
            variant={filter === "business-intelligence" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Business Intelligence
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
            onClick={() => setFilter("machine-learning")}
            variant={filter === "machine-learning" ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            Machine Learning
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 mt-8 md:mt-12">
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
                  {project.technologies && (
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{project.technologies}</p>
                  )}
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

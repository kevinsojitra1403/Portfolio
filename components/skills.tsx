"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"
import {
  LineChart,
  FileText,
  Code,
  GitBranch,
  TestTube,
  MessageSquare,
  PenToolIcon as Tool,
  Settings,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Business Analysis & Documentation",
      icon: <FileText className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Requirement Elicitation",
        "Stakeholder Interviews",
        "Workshops",
        "Process Mapping",
        "User Story Creation",
        "Business Requirements Documentation (BRD)",
        "Functional Specifications",
        "Agile User Story Writing",
        "Stakeholder Engagement",
        "Policy and Business Analysis",
      ],
    },
    {
      title: "Data Analysis & Reporting",
      icon: <LineChart className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Advanced SQL (PostgreSQL, MySQL, DB2)",
        "Power BI Dashboards",
        "KPI Tracking",
        "Data Validation and Cleansing",
        "Excel (Pivot Tables, Lookups, Charts)",
        "ETL Workflows using SSIS",
        "Data Flow and Process Modelling",
        "Business Intelligence Solutions",
        "Reporting Automation",
      ],
    },
    {
      title: "Systems Analysis & Integration",
      icon: <Settings className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Enterprise Applications",
        "Data Mapping and Validation",
        "Solution Requirement Definition",
        "Internal Documentation",
        "Integration Planning",
        "System Support",
        "Business Process Mapping",
        "Use Case Modelling",
        "UML Diagrams",
        "Workflow Design",
        "Privacy and Security Considerations",
      ],
    },
    {
      title: "QA & Testing",
      icon: <TestTube className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Test Case Design",
        "UI and Functional Testing",
        "Regression Testing",
        "UAT Support",
        "Defect Tracking and Reporting",
        "Agile Testing Cycles",
        "Test Suite Development and Execution",
        "User Acceptance Testing Strategy",
        "Testing Planning",
      ],
    },
    {
      title: "Technical Foundations",
      icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "SQL Scripting",
        "Unix Shell Scripting",
        "Basic Python",
        "JavaScript and React (Academic)",
        "CRUD Operations",
        "Data Pipeline Support",
        "DevOps Familiarity",
        "Version Control (Git/GitHub)",
      ],
    },
    {
      title: "Agile & Collaboration",
      icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Agile Methodology",
        "Sprint Planning",
        "Cross-Functional Team Communication",
        "Technical Documentation",
        "Stakeholder Communication",
        "User Training and Support",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Power BI",
        "Tableau",
        "PowerApps",
        "Power Automate",
        "SharePoint",
        "Confluence",
        "SSIS",
        "SAP S/4HANA",
        "SQL Server Analysis Services (SSAS)",
        "Visual Studio",
        "Jira",
        "Git/GitHub",
      ],
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />,
      skills: [
        "Analytical Thinking",
        "Attention to Detail",
        "Written Communication",
        "Problem-Solving",
        "Adaptability",
        "Time Management",
        "Teamwork",
        "Discretion in Handling Information",
        "Interpersonal and Negotiation Skills",
        "Leadership Experience",
      ],
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

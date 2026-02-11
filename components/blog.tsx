"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { motion } from "framer-motion"

// Function to generate a random date within the last year
const generateRandomDate = () => {
  const now = new Date()
  const pastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  const randomTime = pastYear.getTime() + Math.random() * (now.getTime() - pastYear.getTime())
  return new Date(randomTime).toISOString().split("T")[0]
}

// Function to generate blog posts dynamically
const generateBlogPosts = () => {
  const blogTopics = [
    {
      title: "The Future of Data Analysis in Business",
      excerpt:
        "Exploring how AI and machine learning are revolutionizing data analysis in the business world. As companies collect more data than ever before, advanced analytics techniques are becoming essential for extracting meaningful insights and driving strategic decisions.",
      category: "Data Analysis",
    },
    {
      title: "5 Essential SQL Techniques for Data Scientists",
      excerpt:
        "Mastering these SQL techniques will significantly boost your data manipulation capabilities. From window functions to common table expressions, these advanced SQL patterns help solve complex analytical problems with elegant and efficient code.",
      category: "Database",
    },
    {
      title: "Building Scalable Data Pipelines: Best Practices",
      excerpt:
        "Learn how to design and implement data pipelines that can handle growing data volumes efficiently. This article covers key architectural patterns, error handling strategies, and monitoring approaches to ensure your data infrastructure remains reliable as it scales.",
      category: "Data Engineering",
    },
    {
      title: "The Role of Business Analysts in Agile Development",
      excerpt:
        "Discover how business analysts contribute to the success of agile projects and drive value delivery. From facilitating requirement gathering to ensuring alignment between technical implementation and business needs, BAs play a crucial role in modern software development.",
      category: "Business Analysis",
    },
    {
      title: "Power BI vs. Tableau: Choosing the Right Visualization Tool",
      excerpt:
        "A comprehensive comparison of two leading data visualization platforms to help you make an informed decision for your organization's needs. This analysis covers pricing models, ease of use, integration capabilities, and visualization options.",
      category: "Data Visualization",
    },
    {
      title: "Effective Requirements Gathering Techniques",
      excerpt:
        "Explore proven methodologies for eliciting and documenting requirements that lead to successful project outcomes. This guide covers stakeholder interviews, workshops, observation, and documentation approaches that ensure clarity and completeness.",
      category: "Business Analysis",
    },
    {
      title: "Introduction to ETL Processes for Beginners",
      excerpt:
        "A step-by-step guide to understanding Extract, Transform, Load processes and their importance in modern data ecosystems. Learn about common ETL tools, design patterns, and how to avoid typical pitfalls in data integration projects.",
      category: "Data Engineering",
    },
    {
      title: "Leveraging SharePoint for Knowledge Management",
      excerpt:
        "How to build effective knowledge management systems using SharePoint's powerful collaboration features. This article explores document libraries, metadata, workflows, and search capabilities to create a centralized knowledge repository.",
      category: "Business Intelligence",
    },
    {
      title: "The Impact of AI on Database Management",
      excerpt:
        "Examining how artificial intelligence is transforming traditional database administration and optimization tasks. From automated indexing to predictive performance tuning, AI is changing how we manage and maintain database systems.",
      category: "Database",
    },
    {
      title: "Creating Effective Data Dashboards: Design Principles",
      excerpt:
        "Learn the key principles of dashboard design that enhance data comprehension and decision-making. This guide covers visual hierarchy, color theory, layout strategies, and interactivity options to create dashboards that communicate insights effectively.",
      category: "Data Visualization",
    },
  ]

  return blogTopics.map((topic) => ({
    ...topic,
    date: generateRandomDate(),
  }))
}

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3)
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    // Generate blog posts on component mount
    setBlogPosts(generateBlogPosts())
  }, [])

  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section id="blog" className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Blog" subtitle="Insights and thoughts on technology and business" />
        <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
          {sortedPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {visiblePosts < sortedPosts.length && (
          <div className="mt-6 md:mt-8 text-center">
            <Button onClick={() => setVisiblePosts((prevCount) => prevCount + 3)}>Load More Posts</Button>
          </div>
        )}
      </div>
    </section>
  )
}

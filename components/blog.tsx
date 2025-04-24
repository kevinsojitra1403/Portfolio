"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "The Future of Data Analysis in Business",
    excerpt: "Exploring how AI and machine learning are revolutionizing data analysis in the business world.",
    date: "2025-02-15",
    category: "Data Analysis",
  },
  {
    title: "5 Essential SQL Techniques for Data Scientists",
    excerpt: "Mastering these SQL techniques will significantly boost your data manipulation capabilities.",
    date: "2025-01-30",
    category: "Database",
  },
  {
    title: "Building Scalable Data Pipelines: Best Practices",
    excerpt: "Learn how to design and implement data pipelines that can handle growing data volumes efficiently.",
    date: "2024-12-10",
    category: "Data Engineering",
  },
  {
    title: "The Role of Business Analysts in Agile Development",
    excerpt: "Discover how business analysts contribute to the success of agile projects and drive value delivery.",
    date: "2024-11-22",
    category: "Business Analysis",
  },
]

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(2)

  return (
    <section id="blog" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Blog" subtitle="Insights and thoughts on technology and business" />
        <div className="mt-12 space-y-6">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {visiblePosts < blogPosts.length && (
          <div className="mt-8 text-center">
            <Button onClick={() => setVisiblePosts((prevCount) => prevCount + 2)}>Load More Posts</Button>
          </div>
        )}
      </div>
    </section>
  )
}


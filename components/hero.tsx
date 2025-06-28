"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import ThreeScene from "@/components/three-scene"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 md:px-6 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="absolute inset-0 -z-10">
        <ThreeScene />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-4 md:space-y-6 z-10 py-16 md:py-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          Hi, I&apos;m Kevin Sojitra
        </h1>
        <div className="h-8 md:h-12">
          {mounted && (
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Business Analyst",
                1000,
                "Data Analyst",
                1000,
                "Database Developer",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-lg sm:text-xl md:text-3xl font-medium text-blue-300 drop-shadow-lg"
              repeat={Number.POSITIVE_INFINITY}
            />
          )}
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-lg max-w-2xl mx-auto">
          Seeking Junior / Entry Level positions to leverage my skills in software development, business analysis, data
          analysis, and database management.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 text-white border-white hover:bg-white/20 text-sm sm:text-base"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>
        <div className="flex justify-center gap-6 pt-4 md:pt-6">
          <motion.a
            href="https://github.com/kevinsojitra1403"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kevin-sojitra-66428517b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:kevinsojitra2000@gmail.com"
            className="text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">Email</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

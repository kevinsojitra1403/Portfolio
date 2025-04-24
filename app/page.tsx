import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Blog from "@/components/blog"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 overflow-x-hidden">
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}


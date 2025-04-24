import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { Award, Calendar } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Advanced Prompt Engineering Techniques",
      issuer: "LinkedIn Learning",
      date: "Nov 2024",
      skills: "Artificial Intelligence (AI), Prompt Engineering",
    },
    {
      title: "Generative AI Course",
      issuer: "NVIDIA",
      date: "Aug 2024",
      skills:
        "Generative AI Basics, AI Trends and Technologies, AI in Real-World Applications, Introduction to Machine Learning, Understanding AI Applications",
    },
    {
      title: "Introduction to Packet Tracer",
      issuer: "Cisco",
      date: "Sep 2023",
      skills: "Packet Tracer",
    },
    {
      title: "Starting Your Career as a Financial Analyst",
      issuer: "LinkedIn Learning",
      date: "Sep 2022",
    },
    {
      title: "Cybersecurity at Work",
      issuer: "LinkedIn Learning",
      date: "Jul 2022",
    },
    {
      title: "Learning Java",
      issuer: "LinkedIn Learning",
      date: "Jun 2022",
    },
    {
      title: "Oracle Database 12c: Basic SQL",
      issuer: "LinkedIn Learning",
      date: "Jun 2022",
    },
    {
      title: "Programming Foundations: Databases",
      issuer: "LinkedIn Learning",
      date: "Jun 2022",
    },
    {
      title: "Unix Essential Training",
      issuer: "LinkedIn Learning",
      date: "Jun 2022",
    },
    {
      title: "Machine Learning",
      issuer: "Pillai College of Arts, Commerce and Science",
      date: "May 2022",
    },
    {
      title: "SQL and NOSQL Database",
      issuer: "Pillai College of Arts, Commerce and Science",
      date: "Apr 2022",
    },
    {
      title: "Data Science Using Python",
      issuer: "Remarkskill Education",
      date: "May 2021",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "Apr 2021",
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Certifications" subtitle="Professional development and learning" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{cert.title}</h3>
                    <p className="text-primary text-xs md:text-sm">{cert.issuer}</p>
                    <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2 text-xs md:text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.skills && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-1.5 md:mt-2 line-clamp-2">
                        <strong>Skills:</strong> {cert.skills}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


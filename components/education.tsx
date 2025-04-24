import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { GraduationCap, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Post-Grad Diploma in Business & Information Systems Architecture",
      institution: "Fanshawe College",
      location: "London, ON, CA",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Pillai's College Of Arts, Commerce & Science",
      location: "Mumbai, MH, IN",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Education" subtitle="My academic background" />
        <div className="mt-12 space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="bg-muted rounded-full p-4">
                      <GraduationCap className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-lg text-primary">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
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


import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Goldensource International Pvt. Ltd",
      companyDescription: "Enterprise Data Management Solutions for Global Financial Institutions",
      period: "Jan 2023 - Jun 2023",
      location: "Mumbai, MH, IN",
      description: [
        "Automated SQL-based data processes, improving operational efficiency by 40%.",
        "Collaborated with internal teams to streamline enterprise data workflows and support software delivery.",
        "Developed functional documentation, test cases, and user guides for enhanced team onboarding and UAT.",
        "Led cross-department collaboration to refine process mapping and stakeholder requirement alignment.",
        "Supported Unix shell scripting and server configuration, reducing deployment bottlenecks by 20%.",
      ],
    },
    {
      title: "Associate Trainee",
      company: "Goldensource International Pvt. Ltd",
      companyDescription: "Enterprise Data Management Solutions for Global Financial Institutions",
      period: "Jun 2022 - Dec 2022",
      location: "Mumbai, MH, IN",
      description: [
        "Built Power BI dashboards to automate reporting and improve internal data visibility.",
        "Integrated PowerApps and SharePoint for streamlined approval workflows.",
        "Contributed to continuous process improvements by gathering user feedback and updating data flows.",
      ],
    },
    {
      title: "Barista",
      company: "Starbucks Canada",
      period: "Feb 2025 - Present",
      location: "London, ON, CA",
      description: [
        "Served 100+ customers daily with 95%+ satisfaction, improving team workflow efficiency by 20% during peak hours.",
        "Collaborated with a 10+ member team to reduce order errors by 15% through effective communication and coordination.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />
        <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                    <p className="text-base md:text-lg text-primary">{exp.company}</p>
                    {exp.companyDescription && (
                      <p className="text-sm text-muted-foreground italic">{exp.companyDescription}</p>
                    )}
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm md:text-base text-muted-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm md:text-base text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm md:text-base">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

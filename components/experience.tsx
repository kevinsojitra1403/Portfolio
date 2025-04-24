import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Barista",
      company: "Starbucks Canada",
      period: "Feb 2025 - Present",
      location: "London, ON, CA",
      description: [
        "Delivered exceptional customer service, maintaining high standards in beverage preparation and ensuring customer satisfaction.",
        "Worked in a fast-paced team environment, demonstrating strong collaboration, time management, and adaptability.",
      ],
    },
    {
      title: "Customer Service Representative",
      company: "LCBO",
      period: "May 2024 - Sep 2024",
      location: "London, ON, CA",
      description: [
        "Delivered tailored recommendations to customers while managing operational workflows efficiently.",
        "Contributed to process improvements in inventory management, optimizing stock availability and accuracy.",
      ],
    },
    {
      title: "Store Associate / Cashier",
      company: "Dollarama",
      period: "Aug 2023 - Jan 2024",
      location: "London, ON, CA",
      description: [
        "Provided exceptional customer service and efficiently managed point-of-sale operations.",
        "Collaborated with team members to improve stock management processes, ensuring accurate inventory tracking.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Goldensource International Pvt. Ltd",
      period: "Jan 2023 - Jun 2023",
      location: "Mumbai, MH, IN",
      description: [
        "Defined and tracked key performance metrics, increasing data accuracy by 30%, and presented data insights through Tableau visualizations for informed decision-making.",
        "Spearheaded data validation and optimization initiatives, reducing manual intervention by 30%, and ensuring improved data integrity.",
        "Designed and implemented SQL-based data extraction solutions, ensuring 100% accuracy and empowering stakeholders with reliable insights.",
        "Collaborated with cross-functional teams to enhance data mapping and validation protocols, increasing reporting accuracy by 20%.",
        "Led UAT execution, providing test reports, and coordinating with stakeholders to ensure issues were resolved before final implementation.",
      ],
    },
    {
      title: "Associate Trainee",
      company: "Goldensource International Pvt. Ltd",
      period: "Jun 2022 - Dec 2022",
      location: "Mumbai, MH, IN",
      description: [
        "Assisted in process analysis and documentation, identifying inefficiencies and recommending solutions to optimize workflows.",
        "Supported the development of BRDs and functional specifications for system development.",
        "Contributed to maintaining data integrity, and assisting in data validation tasks during system enhancements.",
        "Participated in creating prototypes and training materials, helping stakeholders assess system solutions.",
        "Coordinated UAT activities, ensuring system quality and functionality before deployment.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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


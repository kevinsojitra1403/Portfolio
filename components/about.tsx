import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground">
              I am a Business Systems Analyst at the City of London, where I serve as the lead for the PeopleWorks
              platform -- managing service requests, incident resolution, and security operations across municipal
              enterprise systems. My work involves hands-on experience with SAP BTP, SAP IAS, and SAP IPS for identity
              management and platform integration.
            </p>
            <p className="text-lg text-muted-foreground">
              With a Post-Graduate Diploma in Business & Information Systems Architecture from Fanshawe College and a
              Bachelor of Science in Information Technology, I bring a strong foundation in both business and technology.
              My professional journey includes roles at Goldensource International, where I honed my skills in
              enterprise data management, SQL-based process automation, Power BI reporting, and cross-functional
              collaboration for global financial institutions.
            </p>
            <p className="text-lg text-muted-foreground">
              I am passionate about leveraging technology to solve complex business problems and drive data-informed
              decisions. My technical toolkit includes advanced SQL, Power BI, SAP platforms, data validation and ETL
              workflows, and agile project management. I thrive at the intersection of business analysis, systems
              integration, and quality assurance.
            </p>
            <p className="text-lg text-muted-foreground">
              I am committed to continuous learning and professional growth, always looking for opportunities to optimize
              processes, enhance system security, and deliver meaningful outcomes through technology and analytical
              thinking.
            </p>
          </div>
          <div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>London, ON, Canada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:kevinsojitra2000@gmail.com" className="hover:text-primary transition-colors">
                    kevinsojitra2000@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+15485771403" className="hover:text-primary transition-colors">
                    +1 (548) 577-1403
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

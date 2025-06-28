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
              I am a recent graduate with a Post-Graduate Diploma in Business & Information Systems Architecture from
              Fanshawe College, and a Bachelor's degree in Information Technology. My academic journey has equipped me
              with a strong foundation in both business and technology, allowing me to bridge the gap between these two
              crucial domains.
            </p>
            <p className="text-lg text-muted-foreground">
              My professional experience includes roles as a Junior Software Engineer and Associate Trainee at
              Goldensource International, where I honed my skills in data analysis, database management, and software
              development. I have a proven track record of improving data accuracy, implementing efficient data
              extraction solutions, and collaborating with cross-functional teams to enhance data mapping and validation
              protocols.
            </p>
            <p className="text-lg text-muted-foreground">
              I am passionate about leveraging technology to solve complex business problems and drive data-informed
              decisions. My technical skills include advanced SQL querying, data visualization using tools like Tableau
              and Power BI, and programming in Python with libraries such as Pandas and NumPy. I am also proficient in
              database design, optimization, ETL processes, and agile project management methodologies.
            </p>
            <p className="text-lg text-muted-foreground">
              As I embark on my career, I am eager to apply my skills and knowledge in a junior role where I can
              contribute to meaningful projects, continue learning, and grow as a professional in the dynamic field of
              technology and business analysis.
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

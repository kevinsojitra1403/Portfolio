interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
    </div>
  )
}

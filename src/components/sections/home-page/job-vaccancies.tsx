import Link from "next/link"

interface Vacancy {
  title: string
  openPositions: number
  href: string
}

const vacancies: Vacancy[] = [
  {
    title: "Anesthesiologists",
    openPositions: 45904,
    href: "/jobs/anesthesiologists"
  },
  {
    title: "Surgeons",
    openPositions: 50384,
    href: "/jobs/surgeons"
  },
  {
    title: "Obstetricians-Gynecologists",
    openPositions: 4339,
    href: "/jobs/obstetricians-gynecologists"
  },
  {
    title: "Orthodontists",
    openPositions: 20078,
    href: "/jobs/orthodontists"
  },
  {
    title: "Maxillofacial Surgeons",
    openPositions: 24875,
    href: "/jobs/maxillofacial-surgeons"
  },
  {
    title: "Software Developer",
    openPositions: 43939,
    href: "/jobs/software-developer"
  },
  {
    title: "Psychiatrists",
    openPositions: 18559,
    href: "/jobs/psychiatrists"
  },
  {
    title: "Data Scientist",
    openPositions: 28200,
    href: "/jobs/data-scientist",
  },
  {
    title: "Financial Manager",
    openPositions: 61341,
    href: "/jobs/financial-manager"
  },
  {
    title: "Management Analysis",
    openPositions: 93346,
    href: "/jobs/management-analysis"
  },
  {
    title: "IT Manager",
    openPositions: 50893,
    href: "/jobs/it-manager"
  },
  {
    title: "Operations Research Analysis",
    openPositions: 16627,
    href: "/jobs/operations-research-analysis"
  }
]

export function PopularVacancies() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Most Popular Vacancies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vacancies.map((vacancy) => (
            <Link
              key={vacancy.title}
              href={vacancy.href}
              className="group block space-y-1 p-3 rounded-lg transition-colors"
            >
              <h3 className={`font-medium group-hover:text-primary group-hover:underline group-hover:underline-offset-2`}>
                {vacancy.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {vacancy.openPositions.toLocaleString()} Open Positions
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


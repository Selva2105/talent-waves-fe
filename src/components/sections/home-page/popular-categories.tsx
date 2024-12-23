import Link from "next/link"
import { Paintbrush2, Code2, Megaphone, Play, Music2, BarChart3, Stethoscope, Database } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface Category {
  icon: React.ElementType
  title: string
  openPositions: number
  href: string
  isHighlighted?: boolean
}

const categories: Category[] = [
  {
    icon: Paintbrush2,
    title: "Graphics & Design",
    openPositions: 357,
    href: "/categories/graphics-design"
  },
  {
    icon: Code2,
    title: "Code & Programming",
    openPositions: 312,
    href: "/categories/programming"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    openPositions: 297,
    href: "/categories/digital-marketing"
  },
  {
    icon: Play,
    title: "Video & Animation",
    openPositions: 247,
    href: "/categories/video-animation"
  },
  {
    icon: Music2,
    title: "Music & Audio",
    openPositions: 204,
    href: "/categories/music-audio"
  },
  {
    icon: BarChart3,
    title: "Account & Finance",
    openPositions: 167,
    href: "/categories/account-finance"
  },
  {
    icon: Stethoscope,
    title: "Health & Care",
    openPositions: 125,
    href: "/categories/health-care"
  },
  {
    icon: Database,
    title: "Data & Science",
    openPositions: 57,
    href: "/categories/data-science",
    isHighlighted: true
  }
]

export function PopularCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular category</h2>
          <Link 
            href="#" 
            className="flex items-center text-primary hover:text-primary/70 font-medium"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className={`group flex items-center p-4 rounded-lg transition-colors hover:bg-primary/80 text-primary`}
            >
              <div className={`p-3 rounded-lg mr-4 bg-blue-50`}>
                <category.icon className={`w-6 h-6 text-primary`} />
              </div>
              <div>
                <h3 className="font-medium mb-1 group-hover:text-white">{category.title}</h3>
                <p className={`text-sm text-muted-foreground group-hover:text-white`}>
                  {category.openPositions} Open position
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


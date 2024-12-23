import { MapPin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Company {
  name: string
  location: string
  openPositions: number
  featured?: boolean
}

const companies: Company[] = Array(6).fill({
  name: "Dribbble",
  location: "Dhaka, Bangladesh",
  openPositions: 3,
  featured: true,
})

export default function CompanyGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl font-semibold mb-6">Top companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#EA4C89] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{company.name}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{company.name}</span>
                        {company.featured && (
                          <Badge variant="secondary" className="text-[#EA4C89] bg-pink-50">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {company.location}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full rounded-lg h-12 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    Open Position ({company.openPositions})
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


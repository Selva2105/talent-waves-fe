import { UserPlus, Search, CheckCircle, CloudUpload, BadgeCheck } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: UserPlus,
    title: "Create account",
    description: "Aliquam facilisis egestas sapien, nec tempor leo tristique at."
  },
  {
    icon: CloudUpload,
    title: "Upload CV/Resume",
    description: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales."
  },
  {
    icon: Search,
    title: "Find suitable job",
    description: "Phasellus quis eleifend ex. Morbi nec fringilla nibh."
  },
  {
    icon: BadgeCheck,
    title: "Apply job",
    description: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales quam."
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How Talent Waves work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="relative z-10 h-full bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full ${
                      index === 1 
                        ? "bg-primary text-white" 
                        : "border-2 border-primary text-primary"
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Connector lines */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px border-t-2 border-dashed border-primary/70 -translate-y-1/2 z-0">
                  <div className="absolute -right-2 -top-1 w-2 h-2 border-t-2 border-r-2 border-primary/70 transform rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


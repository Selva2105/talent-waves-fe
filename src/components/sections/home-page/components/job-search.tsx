import { Search, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function JobSearch() {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full max-w-4xl px-6 py-4 border rounded-lg shadow-sm bg-white" >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
        <Input
          placeholder="Job title, Keyword..."
          className="pl-10 border-none active:border-none focus-visible:ring-0 focus-visible:ring-white"
        />
      </div>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
        <Input
          placeholder="Your Location"
          className="pl-10 border-none active:border-none focus-visible:ring-0 focus-visible:ring-white"
        />
      </div>
      <Button size="sm" className="md:w-auto md:h-auto">
        Find Job
      </Button>
    </div>
  )
}


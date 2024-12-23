import Link from "next/link"
import { Bookmark, MapPin, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Job {
    id: string
    title: string
    type: "FULL-TIME" | "PART-TIME" | "INTERNSHIP"
    salary: string
    company: {
        name: string
        logo: string
    }
    location: string
    isFeatured: boolean
}

const jobs: Job[] = [
    {
        id: "1",
        title: "Technical Support Specialist",
        type: "PART-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: true
    },
    {
        id: "2",
        title: "Senior UX Designer",
        type: "FULL-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: true
    },
    {
        id: "3",
        title: "Marketing Officer",
        type: "INTERNSHIP",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: true
    },
    {
        id: "4",
        title: "Junior Graphic Designer",
        type: "INTERNSHIP",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: true
    },
    {
        id: "5",
        title: "Interaction Designer",
        type: "PART-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: false
    },
    {
        id: "6",
        title: "Project Manager",
        type: "FULL-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: false
    },
    {
        id: "7",
        title: "Software Engineer",
        type: "FULL-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: false
    },
    {
        id: "8",
        title: "Visual Designer",
        type: "FULL-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: false
    },
    {
        id: "9",
        title: "Project Manager",
        type: "FULL-TIME",
        salary: "Salary: $20,000 - $25,000",
        company: {
            name: "Google Inc.",
            logo: "/images/google.svg?height=40&width=40"
        },
        location: "Dhaka, Bangladesh",
        isFeatured: false
    }
]

export function FeaturedJobs() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Featured job</h2>
                    <Link
                        href="/jobs"
                        className="flex items-center text-primary hover:text-primary/70 font-medium"
                    >
                        View All
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className={`${job.isFeatured ? 'bg-gradient-to-r from-[#FFF6E6]' : 'bg-white'} border rounded-lg p-6 relative border-gray-300 transition-shadow`}
                        >
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    {job.title}
                                </h3>

                                <div className="flex items-center space-x-3">
                                    <Badge
                                        variant="secondary"
                                        className={`
                      font-semibold px-3 py-1
                      ${job.type === 'FULL-TIME' && 'bg-green-50 text-green-600 hover:bg-green-50 hover:text-green-600'}
                      ${job.type === 'PART-TIME' && 'bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600'}
                      ${job.type === 'INTERNSHIP' && 'bg-green-50 text-green-600 hover:bg-green-50 hover:text-green-600'}
                    `}
                                    >
                                        {job.type}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground">{job.salary}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white p-2 rounded-lg">
                                            <img
                                                src={job.company.logo}
                                                alt={job.company.name}
                                                className="h-8 w-8"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-medium">{job.company.name}</p>
                                            <div className="flex items-center text-muted-foreground">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                <span className="text-sm">{job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-blue-600"
                                    >
                                        <Bookmark className="size-6" />
                                    </Button>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


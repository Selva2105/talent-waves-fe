'use client'

import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Testimonial {
    id: number
    name: string
    role: string
    quote: string
    avatar: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Robert Fox",
        role: "UI/UX Designer",
        quote: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5
    },
    {
        id: 2,
        name: "Bessie Cooper",
        role: "Creative Director",
        quote: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5
    },
    {
        id: 3,
        name: "Jane Cooper",
        role: "Photographer",
        quote: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5
    }
]

export default function TestimonialsCarousel() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-semibold text-center mb-12">Clients Testimonial</h2>
                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="bg-white p-6">
                                        <CardContent className="space-y-4">
                                            <div className="flex text-yellow-400">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 line-clamp-3">{testimonial.quote}</p>
                                            <div className="flex items-center gap-3 pt-4">
                                                <Avatar>
                                                    <AvatarImage src={testimonial.avatar} alt="@shadcn" />
                                                    <AvatarFallback>{testimonial.name.slice(0,2).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-medium">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="absolute -left-12 top-1/2" />
                            <CarouselNext className="absolute -right-12 top-1/2" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}


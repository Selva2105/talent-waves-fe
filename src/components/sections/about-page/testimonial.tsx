'use client'

import { Quote, Star } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Testimonial {
    quote: string
    author: string
    role: string
}

const testimonials: Testimonial[] = [
    {
        quote: "Curabitur vitae aliquam risus. Mauris quis vehicula nisl, sed commodo ipsum. Praesent semper diam ut diam elementum, ut scelerisque nibh commodo. Integer faucibus porttitor vehicula. Maecenas venenatis dictum ligula. Orci varius natoque penatibus et magnis dis parturient montes",
        author: "John Wick",
        role: "Creative Director"
    },
    {
        quote: "Integer faucibus porttitor vehicula. Maecenas venenatis dictum ligula. Curabitur vitae aliquam risus. Mauris quis vehicula nisl, sed commodo ipsum. Praesent semper diam ut diam elementum, ut scelerisque nibh commodo.",
        author: "Sarah Connor",
        role: "Product Manager"
    },
    {
        quote: "Praesent semper diam ut diam elementum, ut scelerisque nibh commodo. Integer faucibus porttitor vehicula. Maecenas venenatis dictum ligula. Curabitur vitae aliquam risus. Mauris quis vehicula nisl, sed commodo ipsum.",
        author: "Tony Stark",
        role: "Technical Lead"
    }
]

export default function TestimonialCarouselWithImage() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Static Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden hidden lg:block">
                    <img
                        src="/images/testimonial.jpg"
                        alt="Team members in a meeting"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-start space-y-2.5">
                    {/* Carousel */}
                    <span className="text-blue-500 font-medium">Testimonial</span>
                    <h2 className="text-4xl font-bold">What our people says</h2>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <div className="space-y-6 relative">

                                        {/* Stars */}
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="text-gray-600 text-lg relative">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        {/* Author */}
                                        <div className="space-y-1 px-2 border-l-4 border-primary">
                                            <div className="font-semibold">{testimonial.author}</div>
                                            <div className="text-gray-500">{testimonial.role}</div>
                                        </div>

                                        {/* Decorative quote mark */}
                                        <div className="absolute right-0 bottom-0 text-gray-400 text-8xl font-serif leading-none">
                                            <Quote className='size-5' />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="flex gap-2 mt-8">
                            <CarouselPrevious className="relative h-8 w-8 border-2 border-blue-100 bg-blue-200 hover:bg-blue-100 left-0 top-0 !rounded-lg text-blue-900" />
                            <CarouselNext className="relative h-8 w-8 border-2 border-blue-100 bg-blue-200 hover:bg-blue-100 left-0 top-0 !rounded-lg text-blue-900" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}


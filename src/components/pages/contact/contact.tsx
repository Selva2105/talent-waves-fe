"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Send } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b bg-gray-100">
                <div className="container mx-auto px-8 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Contact</h1>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Contact</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="">
                <div className="grid gap-12 lg:grid-cols-2 mx-auto max-w-7xl px-4 py-12">
                    {/* Left Column */}
                    <div className="space-y-6 flex flex-col items-start justify-center">
                        <div className="space-y-4">
                            <span className="text-sm font-medium text-blue-600">Who we are</span>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                We care about customer services
                            </h2>
                            <p className="text-gray-600">
                                Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
                            </p>
                        </div>
                        <Button variant="default" className="min-w-[140px]">
                            Email Support
                        </Button>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                        <form className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Input placeholder="Name" />
                                    <Input type="email" placeholder="Email" />
                                </div>
                            </div>
                            <Input placeholder="Subjects" />
                            <Textarea
                                placeholder="Message"
                                className="min-h-[120px]"
                            />
                            <Button type="submit" className="w-full">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12 h-[400px] w-full rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.109140292062!2d77.03651787452024!3d11.030437654458103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857bc9b5ea9af%3A0x317ea10df48c4678!2sCoimbatore%20International%20Airport!5e0!3m2!1sen!2sin!4v1735028374219!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </main>

            {/* Footer */}
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-12">
                    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-2 max-w-md w-full">
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-800 border-gray-700"
                            />
                            <Button variant="default" className="min-w-[100px]">
                                Subscribe
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-8 sm:gap-12">
                            <div className="space-y-1">
                                <p className="text-2xl font-bold">1,75,324</p>
                                <p className="text-gray-400">Live Job</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-2xl font-bold">97,354</p>
                                <p className="text-gray-400">Companies</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-2xl font-bold">38,47,154</p>
                                <p className="text-gray-400">Candidates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


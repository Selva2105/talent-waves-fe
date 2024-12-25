import Image from "next/image"
import { Briefcase, Building2, Users } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { LogoCarouselDemo } from "@/components/sections/about-page/logo-section"
import ImageSection from "@/components/sections/about-page/image-section"
import MissionSection from "@/components/sections/about-page/mission-section"
import TestimonialCarousel from "@/components/sections/about-page/testimonial"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="border-b bg-white">
                <div className="mx-auto max-w-7xl px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">About us</h1>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>About us</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-4 py-12">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <div className="space-y-6">
                        <div className="text-sm font-medium text-blue-600">Who we are</div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            We&apos;re highly skilled and professionals team.
                        </h1>
                        <p className="text-gray-500 leading-relaxed">
                            Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam
                            metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum
                            maximus nec justo sed maximus.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">1,75,324</div>
                                <div className="text-gray-500">Live Job</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">97,354</div>
                                <div className="text-gray-500">Companies</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">38,47,154</div>
                                <div className="text-gray-500">Candidates</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Company Logos */}
                <div className="my-16">
                    <LogoCarouselDemo />
                </div>

                {/* Image Grid */}
                <ImageSection />

                {/* Mission */}
                <MissionSection />
                
                <TestimonialCarousel />

            </main>
        </div>
    )
}


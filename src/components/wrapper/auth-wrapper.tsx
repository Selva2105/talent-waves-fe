import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import { Building2, Users, Waves } from 'lucide-react'
import { Briefcase } from 'lucide-react'

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="grid lg:grid-cols-2">
            {/* Left Column */}
            <ScrollArea className="h-screen">
                <div className="p-8 lg:p-12 xl:p-16">
                    <div className="w-full max-w-md mx-auto">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 mb-12">
                            <div className="h-8 w-8 bg-primary text-primary-foreground grid place-items-center rounded">
                                <Waves className='size-6' />
                            </div>
                            <span className="text-xl font-bold">Talent Waves</span>
                        </Link>

                        {/* Childrens */}
                        {children}
                    </div>
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>

            {/* Right Column */}
            <div className="hidden lg:block relative bg-[#1B1B1B] text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/professional-team.jpg?height=1000&width=1000"
                        alt="Professional team"
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full object-top"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 " />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-12 xl:p-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">
                            Over 1,75,324 candidates<br />
                            waiting for good employees.
                        </h2>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="relative">
                                <div className="mb-2">
                                    <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="text-2xl font-semibold">1,75,324</div>
                                <div className="text-gray-400">Live Job</div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="text-2xl font-semibold">97,354</div>
                                <div className="text-gray-400">Companies</div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Users className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="text-2xl font-semibold">7,532</div>
                                <div className="text-gray-400">New Jobs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
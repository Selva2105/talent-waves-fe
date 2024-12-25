import { PlusCircle, Users } from 'lucide-react'
import { Building2 } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Briefcase } from 'lucide-react'
import { JobSearch } from './components/job-search'
import { StatsCard } from './components/stats-card'
const Hero = () => {
    return (
        <div className='bg-gray-50 py-12'>
            <section className="container mx-auto px-8 grid lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            Find a job that suits<br />your interest & skills.
                        </h1>
                        <p className="text-muted-foreground ">
                            Discover your dream career path with us. We connect talented professionals with outstanding opportunities, making your job search journey seamless and successful.
                        </p>
                    </div>
                    <JobSearch />
                    <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                            Suggestion:
                            <span className="text-primary"> Designer</span>,
                            <span className="text-muted-foreground"> Programming</span>,
                            <span className="text-primary"> Digital Marketing</span>,
                            <span className="text-muted-foreground"> Video, Animation</span>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center">
                    <Image
                        src="/images/hero_1.svg"
                        alt="HeroPage Illustration"
                        width={500}
                        height={400}
                        className="aspect-[4/3] object-contain"
                    />
                </div>
            </section>
            <section className="container mx-auto px-8 py-12">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        icon={<Briefcase className="h-6 w-6 text-primary" />}
                        value="1,75,324"
                        label="Live Job"
                    />
                    <StatsCard
                        icon={<Building2 className="h-6 w-6 text-primary" />}
                        value="97,354"
                        label="Companies"
                    />
                    <StatsCard
                        icon={<Users className="h-6 w-6 text-primary" />}
                        value="38,47,154"
                        label="Candidates"
                    />
                    <StatsCard
                        icon={<PlusCircle className="h-6 w-6 text-primary" />}
                        value="7,532"
                        label="New Jobs"
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero
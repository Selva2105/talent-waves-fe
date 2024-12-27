'use client';

import Link from "next/link"
import { Search, Phone, Waves } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import IndiaFlag from "@/components/SVG/IndiaFlag"
import UsaFlag from "@/components/SVG/UsaFlag"
import UkFlag from "@/components/SVG/UkFlag"
import { useAuth } from "@/context/auth-context";

export function SiteHeader() {
    const { user } = useAuth();
    return (
        <header className="w-full border-b">
            {/* Top row with navigation and contact info */}
            <div className="border-b container mx-auto px-8">
                <div className="container flex h-12 items-center justify-between">
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                            Home
                        </Link>
                        <Link href="/find-job" className="text-sm font-medium text-muted-foreground hover:text-primary">
                            Find Job
                        </Link>
                        <Link href="/employers" className="text-sm font-medium text-muted-foreground hover:text-primary">
                            Employers
                        </Link>
                        <Link href="/candidates" className="text-sm font-medium text-muted-foreground hover:text-primary">
                            Candidates
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
                            Pricing Plans
                        </Link>
                        <Link href="/support" className="text-sm font-medium text-muted-foreground hover:text-primary">
                            Customer Supports
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-base text-muted-foreground cursor-pointer hover:underline hover:underline-offset-2">+1-202-555-0178</span>
                        </div>
                        <Select defaultValue="en">
                            <SelectTrigger className="w-[130px]">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm">🇺🇸</span>
                                        <span>English</span>
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Bottom row with logo, search, and actions */}
            <div className="flex h-20 items-center justify-between container mx-auto px-8">
                <div className="flex items-center gap-x-6 w-3/4">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-primary text-primary-foreground grid place-items-center rounded">
                            <Waves className='size-6' />
                        </div>
                        <span className="text-xl font-bold">Talent Waves</span>
                    </Link>

                    <div className="hidden lg:flex flex-1 max-w-[600px] mx-8">
                        <div className="flex w-full items-center">
                            <Select defaultValue="india">
                                <SelectTrigger className="w-[120px] rounded-r-none">
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="india">
                                        <span className="flex items-center gap-x-2">
                                            <IndiaFlag className="size-5" />
                                            India
                                        </span>
                                    </SelectItem>
                                    <SelectItem value="usa">
                                        <span className="flex items-center gap-x-2">
                                            <UsaFlag className="size-5" />
                                            USA
                                        </span>
                                    </SelectItem>
                                    <SelectItem value="uk">
                                        <span className="flex items-center gap-x-2">
                                            <UkFlag className="size-5" />
                                            UK
                                        </span>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex-1 flex items-center">
                                <Input
                                    type="search"
                                    placeholder="Job title, keyword, company"
                                    className="flex-1 rounded-none"
                                />
                                <Button type="submit" size="icon" className="rounded-l-none">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Button variant="outline" asChild>
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/post-job">Post A Jobs</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}


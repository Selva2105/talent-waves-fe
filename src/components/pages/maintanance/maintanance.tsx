import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Waves } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Maintanance() {
    return (
        <div className="min-h-screen bg-white">
            {/* Logo */}
            <header className="mx-auto max-w-6xl p-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-primary text-primary-foreground grid place-items-center rounded">
                        <Waves className='size-6' />
                    </div>
                    <span className="text-xl font-bold">Talent Waves</span>
                </Link>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-6xl p-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                We're Currently Upgrading Our Platform
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                We're making TalentWaves even better! Our team is working on implementing new features and improvements to enhance your job search and recruitment experience. We'll be back online shortly.
                            </p>
                        </div>

                        {/* Subscribe Form */}
                        <form className="flex max-w-md gap-2">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1"
                                required
                            />
                            <Button type="submit">
                                Subscribe
                                <svg
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Button>
                        </form>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-medium">Follow us</h2>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-blue-600 hover:text-blue-600"
                                >
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a
                                    href="#"
                                    className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-blue-600 hover:text-blue-600"
                                >
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a
                                    href="#"
                                    className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-blue-600 hover:text-blue-600"
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a
                                    href="#"
                                    className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-blue-600 hover:text-blue-600"
                                >
                                    <Youtube className="h-5 w-5" />
                                    <span className="sr-only">YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative h-[400px] w-full lg:h-[500px]">
                        <Image
                            src="/images/maintanance.svg?height=500&width=500"
                            alt="Under Construction Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto border-t">
                <div className="mx-auto max-w-6xl px-6 py-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} TalentWaves - Connecting Talent with Opportunity. All rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    )
}


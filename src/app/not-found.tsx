'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Opps! Page not found
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Something went wrong. It's look like the link is broken or the page is removed.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button
                                onClick={() => router.push('/')}
                                className="min-w-[100px]"
                            >
                                Home
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => router.back()}
                                className="min-w-[100px]"
                            >
                                Go Back
                            </Button>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative h-[400px] w-full lg:h-[500px]">
                        <Image
                            src="/images/not_found.svg?height=500&width=500"
                            alt="404 Error Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


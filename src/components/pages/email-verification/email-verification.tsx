'use client'

import { useState } from 'react'
import { Eye, EyeOff, Globe, Waves } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams } from 'next/navigation'

export default function EmailVerification() {

    const router = useSearchParams();

    const email = router.get('email');

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <div className="w-full">
                <div className="container mx-auto px-4 py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center justify-center space-x-2">
                        <div className="h-8 w-8 bg-primary text-primary-foreground grid place-items-center rounded">
                            <Waves className='size-6' />
                        </div>
                        <span className="text-xl font-bold">Talent Waves</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-2">Email Verification</h1>
                        <p className="text-gray-500 max-w-sm mx-auto text-sm">
                            We've sent an Verification to <b>{email}</b> to verify your email address and activate your account
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Verification Code"
                                className="h-12"
                            />
                        </div>

                        <Button className="w-full h-12" type="submit">
                            Verify My Account
                        </Button>
                    </form>
                    <div className="">
                        <p className='text-sm text-gray-500 text-center'>Din't receive any code! <span className='text-blue-600'>Resends</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


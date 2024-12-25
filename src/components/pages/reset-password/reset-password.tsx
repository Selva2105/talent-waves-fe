'use client'

import { useState } from 'react'
import { Eye, EyeOff, Globe, Waves } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ResetPassword() {
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
                        <h1 className="text-2xl font-semibold mb-2">Reset Password</h1>
                        <p className="text-gray-500 max-w-sm mx-auto text-sm">
                            Enter your new password below. Make sure to use a strong password that includes a mix of letters, numbers, and special characters for better security.
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div className="relative">
                            <Input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="New Password"
                                className="h-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-3 text-gray-500"
                            >
                                {showNewPassword ? (
                                    <EyeOff className="h-6 w-6" />
                                ) : (
                                    <Eye className="h-6 w-6" />
                                )}
                            </button>
                        </div>

                        <div className="relative">
                            <Input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="h-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-gray-500"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-6 w-6" />
                                ) : (
                                    <Eye className="h-6 w-6" />
                                )}
                            </button>
                        </div>

                        <Button className="w-full h-12" type="submit">
                            Reset Password
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}


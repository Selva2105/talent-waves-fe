'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from '@/components/wrapper/auth-wrapper'

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <AuthLayout>
            {/* Sign In Form */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
                    <p className="text-gray-500">
                        Don't have account? {' '}
                        <Link href="/sign-up" className="text-blue-600 hover:underline underline-offset-2">
                            Create Account
                        </Link>
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email address"
                            className="h-12"
                        />
                    </div>

                    <div className="space-y-2 relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="h-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword ? (
                                <EyeOff className="h-6 w-6" />
                            ) : (
                                <Eye className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label
                                htmlFor="remember"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember Me
                            </label>
                        </div>
                        <Link
                            href="/forget-password"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password ?
                        </Link>
                    </div>

                    <Button className="w-full h-12" type="submit">
                        Sign In
                    </Button>
                </form>
            </div>
        </AuthLayout>
    )
}


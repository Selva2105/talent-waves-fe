import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthLayout from '@/components/wrapper/auth-wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
    return (
        <AuthLayout>
            <div className="space-y-6">
                <div className='space-y-6'>
                    <h2 className="text-2xl font-bold text-gray-900">Forget Password</h2>
                    <div className="mt-2 space-y-2">
                        <p className="text-sm text-gray-600">
                            Go back to{' '}
                            <Link href="/sign-in" className="text-blue-600 hover:text-blue-500">
                                Sign In
                            </Link>
                        </p>
                        <p className="text-sm text-gray-600">
                            Don't have account?{' '}
                            <Link href="/sign-up" className="text-blue-600 hover:text-blue-500">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email address"
                            className="h-12"
                        />
                    </div>

                    <Button className="w-full h-12" type="submit">
                        Reset Password
                    </Button>
                </form>

            </div>
        </AuthLayout >
    )
}

export default ForgetPassword
'use client'

import { useState } from 'react'
import { Eye, EyeOff, Building2, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from '@/components/wrapper/auth-wrapper'

type AccountType = 'candidate' | 'employers'

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [accountType, setAccountType] = useState<AccountType>('candidate')

  return (
    <AuthLayout>
      {/* Create Account Form */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Create account.</h1>
          <p className="text-gray-500">
            Already have account? {' '}
            <Link href="/sign-in" className="text-primary hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* Account Type Selection */}
        <div className="bg-gray-50 p-1 rounded-lg grid grid-cols-2 gap-1">
          <Button
            variant={accountType === 'candidate' ? 'default' : 'ghost'}
            className="w-full justify-center gap-2"
            onClick={() => setAccountType('candidate')}
          >
            <User className="h-4 w-4" />
            Candidate
          </Button>
          <Button
            variant={accountType === 'employers' ? 'default' : 'ghost'}
            className="w-full justify-center gap-2"
            onClick={() => setAccountType('employers')}
          >
            <Building2 className="h-4 w-4" />
            Employers
          </Button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Full Name"
              className="h-12"
            />
            <Input
              type="text"
              placeholder="Username"
              className="h-12"
            />
          </div>

          <Input
            type="email"
            placeholder="Email address"
            className="h-12"
          />

          <div className="relative">
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

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I've read and agree with your{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Services
              </Link>
            </label>
          </div>

          <Button className="w-full h-12" type="submit">
            Create Account
          </Button>
        </form>
      </div>
    </AuthLayout>
  )
}


'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from '@/components/wrapper/auth-wrapper'
import z from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AccountType from './components/account_type'
import { Form, FormControl, FormItem, FormField, FormMessage } from '@/components/ui/form'
import { Input2 } from '@/components/ui/input-2'
import { useState } from 'react';
import axios from 'axios';
import { handleSignup } from '@/service/auth.service';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export const accountTypeSchema = z.object({
  userType: z.enum(['EMPLOYER', 'CANDIDATE'], {
    required_error: 'Please select an account type',
    invalid_type_error: 'Invalid account type selected'
  }),
  fullName: z.string().min(2, { message: 'Full name must have 2 character' }).max(50, { message: 'Full name must not exceed 50 character' }),
  username: z.string().min(2, { message: 'Full name must have 2 character' }).max(50, { message: 'Full name must not exceed 50 character' }),
  email: z.string().email(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(14, 'Password must not exceed 14 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(14, 'Password must not exceed 14 characters')
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type AccountTypeSchema = z.infer<typeof accountTypeSchema>

export default function CreateAccount() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useRouter();

  const form = useForm<AccountTypeSchema>({
    resolver: zodResolver(accountTypeSchema),
    defaultValues: {
      userType: 'CANDIDATE',
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (data: AccountTypeSchema) => {
    setIsLoading(true);

    try {
      const response = await handleSignup(data);

      if (response.status === "success") {
        toast({
          title: 'User created successfully',
          description: 'Please check your email for verification',
        });
      }

      setTimeout(() => {
        push('/sign-in');
      }, 3000);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message || 'An error occurred';
        toast({
          title: 'Error',
          description: errorMessage,
          variant:'destructive'
        });
      } else {
        console.error(error);
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
          variant:'destructive'
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

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

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <AccountType value={field.value} onValueChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Full Name"

                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="User Name"

                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email address"

                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input2 type="password" placeholder="Password"

                      value={field.value}
                      onChange={field.onChange} >
                      <Input2.Group>
                        <Input2.PasswordToggle />
                      </Input2.Group>
                    </Input2>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input2 type="password" placeholder="Confirm Password"

                      value={field.value}
                      onChange={field.onChange} >
                      <Input2.Group>
                        <Input2.PasswordToggle />
                      </Input2.Group>
                    </Input2>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <Button className="w-full h-12" type="submit" disabled={isLoading}>
              {isLoading ? 'Create Account' : 'Creating Account'}
            </Button>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}


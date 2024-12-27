'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from '@/components/wrapper/auth-wrapper'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input2 } from '@/components/ui/input-2';
import { toast } from '@/hooks/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { handleSignin } from '@/service/auth.service'

export const accountTypeSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string().min(1, { message: 'Password is required' }),
})

type AccountTypeSchema = z.infer<typeof accountTypeSchema>

export default function SignIn() {

    const form = useForm<AccountTypeSchema>({
        resolver: zodResolver(accountTypeSchema),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { push } = useRouter();

    const onSubmit = async (data: AccountTypeSchema) => {
        setIsLoading(true);

        try {
            const response = await handleSignin(data);

            if (response.status === "success") {
                localStorage.setItem('accessToken', response.data.token);
                toast({
                    title: 'User created successfully',
                    description: 'Please check your email for verification',
                });
            }

            setTimeout(() => {
                push('/dashboard');
            }, 3000);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message || 'An error occurred';
                toast({
                    title: 'Error',
                    description: errorMessage,
                    variant: 'destructive'
                });
            } else {
                console.error(error);
                toast({
                    title: 'Error',
                    description: 'An unexpected error occurred',
                    variant: 'destructive'
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

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
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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

                        <div className="relative">
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

                        <Button className="w-full h-12" type="submit" disabled={isLoading}>
                           {isLoading ? 'Signing In' : 'Sign in'}
                        </Button>
                    </form>
                </Form>
            </div>
        </AuthLayout>
    )
}


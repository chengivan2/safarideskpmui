"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email })
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col lg:flex-row">
      
      <div className="hidden lg:block lg:w-1/2 relative bg-primary/10 dark:bg-primary/5">
        <Image
          src="/stockimages/resetpassimg.jpg"
          alt="Property Management"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/30 flex flex-col items-center justify-center text-white p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">Account Recovery</h2>
            <p className="text-lg">
              We understand that you might forget your password. Don't worry, we'll help you get back into your account
              safely.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {isSubmitted ? (
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl font-bold">Check your email</h1>
              <p className="text-muted-foreground">
                We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>. Please
                check your inbox and follow the instructions to reset your password.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Didn't receive the email? Check your spam folder or request another link.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
                >
                  Resend email
                </Button>
              </div>
              <div className="pt-6">
                <Link
                  href="/sign-in"
                  className="text-sm flex items-center justify-center gap-1 text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to sign in
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h1 className="text-3xl font-bold">Forgot password?</h1>
                <p className="mt-2 text-muted-foreground">No worries, we'll send you reset instructions.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll send a password reset link to this email address.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
                >
                  Reset password
                </Button>
              </form>

              <div className="text-center">
                <Link
                  href="/sign-in"
                  className="text-sm flex items-center justify-center gap-1 text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

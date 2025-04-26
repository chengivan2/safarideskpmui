"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { FaApple, FaGoogle, FaLinkedin, FaMicrosoft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    propertySize: "",
    password: "",
    agreeToTerms: false,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    console.log(formData);
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col lg:flex-row">
      {/* Left side - Image (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-primary/10 dark:bg-primary/5">
        <Image
          src="/stockimages/signupimage.jpg"
          alt="Property Management"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/30 flex flex-col items-center justify-center text-white p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Managing Your Properties Today
            </h2>
            <p className="text-lg">
              Join thousands of property managers who trust SafariDesk PM to
              streamline their operations and increase tenant satisfaction.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-white/20 p-1">
                  <Checkbox className="h-4 w-4 text-white" checked />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Easy Setup</p>
                  <p className="text-white/80">Get started in minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-white/20 p-1">
                  <Checkbox className="h-4 w-4 text-white" checked />
                </div>
                <div className="text-sm">
                  <p className="font-medium">14-Day Free Trial</p>
                  <p className="text-white/80">No credit card required</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-white/20 p-1">
                  <Checkbox className="h-4 w-4 text-white" checked />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Free Onboarding</p>
                  <p className="text-white/80">Personalized support</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-white/20 p-1">
                  <Checkbox className="h-4 w-4 text-white" checked />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Cancel Anytime</p>
                  <p className="text-white/80">No long-term contracts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="mt-2 text-muted-foreground">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="pl-10"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="Your company"
                  className="pl-10"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertySize">Number of properties</Label>
              <Select
                value={formData.propertySize}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, propertySize: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select property size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 units</SelectItem>
                  <SelectItem value="11-50">11-50 units</SelectItem>
                  <SelectItem value="51-100">51-100 units</SelectItem>
                  <SelectItem value="101-500">101-500 units</SelectItem>
                  <SelectItem value="500+">500+ units</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreeToTerms: checked as boolean,
                  }))
                }
                required
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the{" "}
                <Link href="/terms" className="text-accent hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
            >
              Create account
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full border-white/10 rounded-full hover:border-accent">
              <span>
                <FaGoogle />
              </span>
              Google
            </Button>
            <Button variant="outline" className="w-full border-white/10 rounded-full hover:border-accent">
              <span>
                <FaLinkedin />
              </span>
              LinkedIn
            </Button>
            <Button variant="outline" className="w-full border-white/10 rounded-full hover:border-accent">
              <span>
                <FaMicrosoft />
              </span>
              Microsoft
            </Button>
            <Button variant="outline" className="w-full border-white/10 rounded-full hover:border-accent">
              <span>
                <FaApple />
              </span>
              Apple
            </Button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-accent hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

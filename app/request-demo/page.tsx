"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Building, Calendar, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    propertySize: "",
    message: "",
    preferredDate: "",
    agreeToTerms: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Request a Demo</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how SafariDesk PM can transform your property management business. Fill out the form below and one of our
            product specialists will contact you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 sm:mt-20 lg:flex">
          {/* Left side - Form */}
          <div className="p-8 sm:p-10 lg:flex-auto">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <svg
                    className="h-10 w-10 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-6 text-2xl font-bold">Thank you for your interest!</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We've received your demo request and will contact you shortly to schedule a personalized
                  demonstration.
                </p>
                <Button
                  className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
                  onClick={() => setSubmitted(false)}
                >
                  Request Another Demo
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
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
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="pl-10"
                        value={formData.phone}
                        onChange={handleChange}
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
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, propertySize: value }))}
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
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="preferredDate">Preferred demo date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        className="pl-10"
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message">Additional information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your specific needs or questions"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))
                    }
                    required
                  />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to receive communications from SafariDesk PM
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
                >
                  Request Demo
                </Button>
              </form>
            )}
          </div>

          {/* Right side - Image */}
          <div className="lg:flex lg:w-1/3 lg:flex-shrink-0">
            <div className="relative h-full w-full">
              <Image
                src="/stockimages/scarfhouse.jpg"
                alt="Property Management Demo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex flex-col items-center justify-center text-white p-6">
                <div className="max-w-xs text-center">
                  <h3 className="text-xl font-bold mb-4">Why choose SafariDesk PM?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <Checkbox className="mt-1 h-4 w-4 text-white" checked />
                      <span>Streamline property management operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Checkbox className="mt-1 h-4 w-4 text-white" checked />
                      <span>Increase tenant satisfaction and retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Checkbox className="mt-1 h-4 w-4 text-white" checked />
                      <span>Reduce administrative workload by up to 40%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Checkbox className="mt-1 h-4 w-4 text-white" checked />
                      <span>Improve financial tracking and reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

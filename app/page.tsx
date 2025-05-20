import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building,
  Clock,
  CreditCard,
  Home,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

const features = [
  {
    name: "Property Management",
    description:
      "Manage all your properties in one place with our intuitive dashboard.",
    icon: Building,
  },
  {
    name: "Tenant Portal",
    description:
      "Give your tenants a dedicated portal to pay rent and submit maintenance requests.",
    icon: Users,
  },
  {
    name: "Financial Tracking",
    description:
      "Track rent payments, expenses, and generate financial reports with ease.",
    icon: BarChart3,
  },
  {
    name: "Maintenance Management",
    description:
      "Streamline maintenance requests and track their progress from start to finish.",
    icon: Home,
  },
  {
    name: "Automated Payments",
    description:
      "Set up automatic rent collection and never chase payments again.",
    icon: CreditCard,
  },
  {
    name: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to help you.",
    icon: Clock,
  },
];

const testimonials = [
  {
    content:
      "SafariDesk PM has transformed how we manage our properties. The automation features alone have saved us countless hours every month.",
    author: "Sarah Johnson",
    role: "Property Manager, Skyline Properties",
  },
  {
    content:
      "The tenant portal is a game-changer. Our satisfaction ratings have increased by 35% since implementing SafariDesk PM.",
    author: "Michael Chen",
    role: "Director of Operations, Urban Living",
  },
  {
    content:
      "As someone managing over 200 units, I can't imagine going back to our old system. SafariDesk PM pays for itself many times over.",
    author: "Rebecca Torres",
    role: "CEO, Coastal Management Group",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="overflow-hidden pt-20 sm:pt-32 mb-10 bg-background">
        <div className="absolute top-20 left-20 h-4 w-4 rounded-full bg-blue-500 animate-float-slow" />
        <div className="absolute top-40 right-40 h-4 w-4 rounded-full bg-red-500 animate-float-medium" />
        <div className="absolute bottom-20 left-1/4 h-4 w-4 rounded-full bg-orange-500 animate-float-fast" />
        <div className="absolute bottom-40 right-1/4 h-4 w-4 rounded-full bg-green-500 animate-float-medium" />

        <div className="px-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-gray-100 via-gray-400 to-gray-900 bg-clip-text text-transparent">
              Property Management Software Made Easy
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              SafariDesk PM's property management software helps manage, grow,
              and automate hundreds of thousands of properties in over 100
              countries.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/request-demo" className="cursor-pointer">
                <Button
                  size="lg"
                  className="cursor-pointer rounded-full bg-accent hover:bg-accent/80 text-accent-foreground orange-glow"
                >
                  Request a Demo
                </Button>
              </Link>
              <Link
                href="/features"
                className="text-sm font-semibold leading-6 flex items-center gap-1 text-primary"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent"></div>
      </section>

      {/* Dashboard Image Section */}
      <section className="pt-24 px-10 lg:px-24 mt-20 flex justify-center items-center">
        
          <div className="relative rounded-xl bg-accent/20 p-2 ring-1 ring-accent/10 dark:bg-accent/60 dark:ring-accent/10">
            <Image
              src="/stockimages/dashimage.png"
              alt="Dashboard screenshot"
              width={1100}
              height={300}
              className="h-[50vh] w-[90vw] lg:h-[110vh] rounded-lg"
            />
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">
              Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to manage your properties
            </p>
            <p className="mt-6 text-lg leading-8 text-primary/80">
              Our comprehensive suite of tools helps you streamline operations,
              reduce costs, and improve tenant satisfaction.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col feature-gradient rounded-xl p-6"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <div className="h-10 w-10 flex-none rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-primary/80">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Hear what our customers have to say
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl p-8 ring-1 ring-accent/20 bg-gradient-to-br from-accent/10 via-transparent to-accent/10"
              >
                <div>
                  <div className="flex gap-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-accent" />
                    ))}
                  </div>
                  <div className="mt-6 text-lg font-semibold leading-8">
                    "{testimonial.content}"
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <div className="text-base font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your property management?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join thousands of property managers who have streamlined their
              operations with SafariDesk PM.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/request-demo">
                <Button
                  size="lg"
                  className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
                >
                  Request a Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-accent/30 hover:bg-accent/10"
                >
                  <span className="text-accent">View Pricing</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

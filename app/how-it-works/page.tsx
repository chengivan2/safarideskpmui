import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Sign up for an account",
    description:
      "Create your SafariDesk PM account in minutes. No credit card required for the 14-day free trial. Just enter your basic information and you're ready to go.",
    icon: ClipboardCheck,
    image: "/stockimages/signupimage.jpg",
    imageAlt: "Sign up process illustration",
    align: "right",
  },
  {
    number: 2,
    title: "Add your properties",
    description:
      "Import your existing properties or add them manually. Enter property details, upload photos, and organize units into logical groups for easy management.",
    icon: Home,
    image: "/stockimages/handrealestate.jpg",
    imageAlt: "Property management dashboard",
    align: "left",
  },
  {
    number: 3,
    title: "Invite tenants and owners",
    description:
      "Send email invitations to your tenants and property owners. They'll create their own accounts and get instant access to their personalized portals.",
    icon: Users,
    image: "/stockimages/housekeys.jpg",
    imageAlt: "User management interface",
    align: "right",
  },
  {
    number: 4,
    title: "Configure your settings",
    description:
      "Customize your account settings, payment methods, notification preferences, and automation rules to match your business workflow.",
    icon: Settings,
    image: "/stockimages/resetpassimg.jpg",
    imageAlt: "Settings configuration screen",
    align: "left",
  },
  {
    number: 5,
    title: "Start managing properties",
    description:
      "Use the dashboard to track rent payments, handle maintenance requests, communicate with tenants, and generate reports—all from one central location.",
    icon: LayoutDashboard,
    image: "/stockimages/handproperty.jpg",
    imageAlt: "Property management dashboard",
    align: "right",
  },
];

export default function HowItWorks() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            How It Works
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            SafariDesk PM makes property management simple with our easy-to-use
            platform. Follow these steps to get started and transform your
            property management experience.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Vertical line connecting all steps */}
          <div className="absolute left-1/2 top-0 bottom-0 -ml-px w-0.5 bg-gradient-to-b from-primary/60 to-accent/60 hidden md:block" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative mb-24 last:mb-0">
              {/* Step content with alternating layout */}
              <div
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                  step.align === "left" ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Image section */}
                <div
                  className={`mt-8 md:mt-0 ${
                    step.align === "left" ? "md:order-last" : "md:order-first"
                  } relative rounded-xl overflow-hidden shadow-lg orange-border max-w-sm sm:max-w-md md:max-w-full lg:mx-auto`}
                >
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.imageAlt}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Text content */}
                <div
                  className={`relative mt-8 ${
                    step.align === "left"
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  }`}
                >
                  {/* Number dot on the line - visible on md and up */}
                  <div
                    className={`absolute hidden md:flex items-center justify-center top-0 w-12 h-12 rounded-full bg-primary text-white font-bold text-xl shadow-lg orange-glow z-10 ${
                      step.align === "left" ? "right-0" : "left-0"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Mobile number - visible below md */}
                  <div className="flex md:hidden items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                  </div>

                  {/* Desktop title - hidden on mobile */}
                  <h2 className="hidden md:block text-2xl font-bold mb-4">
                    {step.title}
                  </h2>

                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of property managers who have streamlined their
            operations with SafariDesk PM.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/request-demo">
              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground orange-glow"
              >
                Request a Demo
              </Button>
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              Start your free trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

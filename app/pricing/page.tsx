import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Basic",
    id: "tier-starter",
    price: { monthly: "$9.99", annually: "$470" },
    description: "Perfect for small property managers just getting started.",
    features: [
      "Manage 2 Property",
      "Add 1 Tenant",
      "Add 1 Maintainer",
      "1 Invoice Generate",
      "1 Auto Invoice Generate",
    ],
    cta: "Subscribe Now",
    mostPopular: false,
  },
  {
    name: "Standard",
    id: "tier-professional",
    price: { monthly: "$14.99", annually: "$950" },
    description: "Ideal for growing property management businesses.",
    features: [
      "Manage 5 Property",
      "Add 100 Tenant",
      "Add 10 Maintainer",
      "3000 Invoice Generate",
      "300 Invoice Generate",
      "Ticket Support",
      "Notice Support",
    ],
    cta: "Subscribe Now",
    mostPopular: true,
  },
  {
    name: "Silver",
    id: "tier-enterprise",
    price: { monthly: "$19.99", annually: "$2,390" },
    description: "For large property management companies with complex needs.",
    features: [
      "Manage 15 Property",
      "Add 200 Tenant",
      "Add 50 Maintainer",
      "5000 Invoice Generate",
      "5000 Auto Invoice Generate",
      "Ticket Support",
      "Notice Support",
    ],
    cta: "Subscribe Now",
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 rounded-md lg:rounded-lg">
        <div className="mx-auto max-w-2xl text-center bg-transparent">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8">
            Choose the plan that's right for your property management business.
            All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
                <div
                key={tier.id}
                className={`flex flex-col rounded-3xl p-8 ring-1 ring-accent/50 xl:p-10 backdrop-blur-lg ${
                  tier.mostPopular
                  ? "bg-gradient-to-tr from-accent/60 to-accent/50 dark:from-accent/70 dark:to-accent/50"
                  : "bg-gradient-to-br from-accent/30 to-accent/10 dark:from-accent/20 dark:to-accent/10"
                }`}
                >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.mostPopular ? "text-accent-foreground" : ""
                  }`}
                  >
                  {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                  <p className="rounded-full bg-accent/80 px-2.5 py-1 text-xs font-semibold leading-5">
                    Most popular
                  </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.mostPopular ? "text-accent-foreground" : ""
                  }`}
                  >
                  {tier.price.monthly}
                  </span>
                  <span
                  className={`text-sm font-semibold leading-6 ${
                    tier.mostPopular ? "text-accent-foreground" : ""
                  }`}
                  >
                  /month
                  </span>
                </div>
                {/* <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Billed annually ({tier.price.annually})
                </p> */}
                <Link
                  href={
                  tier.mostPopular
                    ? "/sign-up"
                    : tier.name === "Enterprise"
                    ? "/contact"
                    : "/sign-up"
                  }
                  className="mt-6"
                >
                  <Button
                  variant={tier.mostPopular ? "default" : "outline"}
                  className={`w-full rounded-full ${
                    tier.mostPopular
                    ? "bg-accent hover:bg-primary text-accent-foreground orange-glow"
                    : "border-accent/30 hover:bg-accent/10 text-accent hover:text-primary"
                  }`}
                  >
                  {tier.cta}
                  </Button>
                </Link>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                  {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircle
                    className="h-5 w-5 flex-none text-accent"
                    aria-hidden="true"
                    />
                    {feature}
                  </li>
                  ))}
                </ul>
                </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8">
            Have a different question? Contact our sales team for more
            information.
          </p>
          <div className="mt-10">
            <Link href="/faqs">
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:text-primary hover:bg-accent/10"
              >
                View all FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

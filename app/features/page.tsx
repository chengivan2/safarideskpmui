import { ArrowRight, BarChart3, Building, Clock, CreditCard, Home, Shield, Users } from "lucide-react"

const features = [
    {
      name: "Property Management",
      description: "Manage all your properties in one place with our intuitive dashboard.",
      icon: Building,
    },
    {
      name: "Tenant Portal",
      description: "Give your tenants a dedicated portal to pay rent and submit maintenance requests.",
      icon: Users,
    },
    {
      name: "Financial Tracking",
      description: "Track rent payments, expenses, and generate financial reports with ease.",
      icon: BarChart3,
    },
    {
      name: "Maintenance Management",
      description: "Streamline maintenance requests and track their progress from start to finish.",
      icon: Home,
    },
    {
      name: "Automated Payments",
      description: "Set up automatic rent collection and never chase payments again.",
      icon: CreditCard,
    },
    {
      name: "24/7 Support",
      description: "Our dedicated support team is available around the clock to help you.",
      icon: Clock,
    },
  ]

export default function page() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to manage your properties
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
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
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

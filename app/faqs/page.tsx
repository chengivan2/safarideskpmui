import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "What is SafariDesk PM?",
    answer:
      "SafariDesk PM is a comprehensive property management software designed to help property managers streamline their operations, reduce costs, and improve tenant satisfaction. Our platform includes features for property management, tenant portals, financial tracking, maintenance management, and more.",
  },
  {
    question: "How much does SafariDesk PM cost?",
    answer:
      "SafariDesk PM offers three pricing tiers: Starter ($49/month), Professional ($99/month), and Enterprise ($249/month). Each plan includes different features and unit limits. We offer a 14-day free trial for all plans, and discounts are available for annual billing.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a limit to how many properties I can manage?",
    answer:
      "The Starter plan allows up to 25 units, the Professional plan allows up to 100 units, and the Enterprise plan offers unlimited units. If you need a custom solution, please contact our sales team.",
  },
  {
    question: "Do you offer a mobile app?",
    answer:
      "Yes, SafariDesk PM offers mobile apps for both iOS and Android. Property managers can access all features on the go, while tenants can use the app to pay rent, submit maintenance requests, and communicate with management.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take security very seriously. SafariDesk PM uses bank-level encryption for all data, regular security audits, and complies with industry standards. We never share your data with third parties without your explicit permission.",
  },
  {
    question: "Can tenants pay rent through SafariDesk PM?",
    answer:
      "Yes, tenants can pay rent through our secure payment portal. We support various payment methods including credit/debit cards, ACH transfers, and even cash payments through our partnership with retail payment locations.",
  },
  {
    question: "How does the maintenance request system work?",
    answer:
      "Tenants can submit maintenance requests through their portal, including descriptions and photos. Property managers receive notifications and can assign tasks to maintenance staff, track progress, and communicate with tenants—all within the platform.",
  },
  {
    question: "Do you offer integration with accounting software?",
    answer:
      "Yes, SafariDesk PM integrates with popular accounting software like QuickBooks, Xero, and more. This allows for seamless financial tracking and reporting across your systems.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Support varies by plan. Starter includes email support, Professional adds chat support, and Enterprise includes 24/7 phone, email, and chat support plus a dedicated account manager. All customers have access to our knowledge base and video tutorials.",
  },
  {
    question: "Can I import data from my current system?",
    answer:
      "Yes, we offer data migration services to help you transition from your current property management system to SafariDesk PM. Our team will work with you to ensure a smooth transition with minimal disruption.",
  },
  {
    question: "Is training available for my team?",
    answer:
      "Yes, we offer comprehensive training resources including live webinars, on-demand video tutorials, and documentation. Enterprise customers also receive personalized onboarding and training sessions.",
  },
]

export default function FAQs() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find answers to common questions about SafariDesk PM's property management software.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight">Still have questions?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground orange-glow">
                Contact Support
              </Button>
            </Link>
            <Link href="/request-demo">
              <Button variant="outline" size="lg" className="border-accent/30 text-accent hover:text-primary hover:bg-accent/10">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

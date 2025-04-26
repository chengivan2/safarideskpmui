import { Building } from "lucide-react"

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
        <Building className="h-5 w-5" />
      </div>
      <span className="font-bold text-xl text-primary">SafariDesk PM</span>
    </div>
  )
}

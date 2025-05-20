import Image from "next/image";
interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logos/safarideskpmlogo.png"
        alt="SafariDesk PM Logo"
        width={40}
        height={40}
        className="rounded-sm"
      />

      <span
        className="font-bold text-3xl bg-gradient-to-r from-[#286fab] via-[#286fab] to-[#f69322] bg-clip-text text-transparent"
      >
        SafariDesk PM
      </span>
    </div>
  );
}

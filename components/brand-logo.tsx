import Link from "next/link"

type BrandLogoProps = { inverse?: boolean; compact?: boolean }

const logoSource = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-14%20at%2019.02.48-xAjhJyBWVAK28s1klGhqe48O24TcL3.png"

export function HelmetMark({ className = "" }: { className?: string }) {
  return <img src={logoSource} alt="" aria-hidden="true" className={className} />
}

export function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  return <Link href="/" className={`cc-brand${inverse ? " cc-brand-inverse" : ""}`} aria-label="Centurion Compliance home">
    <img src={logoSource} alt="Centurion Compliance helmet mark" className="cc-brand-mark" />
    {!compact && <span className="cc-brand-type"><span>CENTURION</span><small>COMPLIANCE</small></span>}
  </Link>
}

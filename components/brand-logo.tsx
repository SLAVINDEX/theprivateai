import Link from "next/link"

type BrandLogoProps = { inverse?: boolean; compact?: boolean }

const logoSource = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DTkwkuNFNGHLDNVBoARi6XArdTL2fo.png"

export function HelmetMark({ className = "" }: { className?: string }) {
  return <img src={logoSource} alt="" aria-hidden="true" className={className} />
}

export function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  return <Link href="/" className={`cc-brand${inverse ? " cc-brand-inverse" : ""}`} aria-label="Centurion Compliance home">
    <img src={logoSource} alt="Centurion Compliance" className="cc-brand-mark" />
    {!compact && <span className="cc-brand-type"><span>CENTURION</span><small>COMPLIANCE</small></span>}
  </Link>
}

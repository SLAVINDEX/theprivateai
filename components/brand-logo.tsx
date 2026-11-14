import Link from "next/link"

type BrandLogoProps = { inverse?: boolean; compact?: boolean }

export function HelmetMark({ className = "" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M13 48.5c2.1-4 2.8-8.3 2.8-14.4 0-13.7 7.6-23 20.3-23 10.4 0 17 7.2 17 17.7 0 4.3-1.1 8.4-3.3 11.6l-4.5 6.3H24l-4.4 5.5h-7.9v-3.7Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round"/>
    <path d="M16.2 31.6h11.1l3.7-7.1 4 7.1h15.6M18.6 43.4h27.1M24 48.7l2.5 5.7h14.6l3-7.7M27.3 31.6l-1.4 7.8M34 31.6l-.4 7.8M41.2 31.6l2.5 7.8M18.5 22.5l5.2 2.1M28 14.8l.1 6.1M38.2 14.2l-1.6 6.3M47.1 19l-3.6 4.3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 57.5h43" stroke="currentColor" strokeWidth="1" opacity=".55"/>
  </svg>
}

export function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  return <Link href="/" className={`cc-brand${inverse ? " cc-brand-inverse" : ""}`} aria-label="Centurion Compliance home">
    <HelmetMark className="cc-brand-mark" />
    {!compact && <span className="cc-brand-type"><span>CENTURION</span><small>COMPLIANCE</small></span>}
  </Link>
}

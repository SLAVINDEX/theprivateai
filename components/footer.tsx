"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { EyeBrandMark } from "./eye-brand-mark"

export function Footer() {
  return <footer className="private-home-footer border-t border-white/10 px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
    <div className="mx-auto max-w-[1280px]">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_1fr_1fr]">
        <div>
          <Link href="/" className="private-home-footer-brand" aria-label="Centurion Compliance home"><span className="private-home-footer-eye"><EyeBrandMark /></span><span><strong>CENTURION</strong><b>COMPLIANCE</b></span></Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Independent regulatory advisory. Clear thinking, considered action.</p>
        </div>
        <div><h2 className="footer-heading">Explore</h2><nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-3"><Link href="/#mandates" className="footer-link">Our mandate</Link><Link href="/#services" className="footer-link">Advisory</Link><Link href="/#approach" className="footer-link">Our approach</Link><Link href="/#contact" className="footer-link">Contact</Link></nav></div>
        <div><h2 className="footer-heading">United Kingdom</h2><a href="tel:+447360545993" className="footer-contact"><Phone aria-hidden="true" />+44 7360 545993</a><a href="mailto:theprivateai@protonmail.com" className="footer-contact"><Mail aria-hidden="true" />theprivateai@protonmail.com</a></div>
        <div><h2 className="footer-heading">Germany</h2><p className="footer-contact"><MapPin aria-hidden="true" /><span>Mainzer Landstraße 341<br />60326 Frankfurt am Main</span></p><a href="tel:+4915150174837" className="footer-contact"><Phone aria-hidden="true" />+49 1515 0174837</a></div>
      </div>
      <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Centurion Compliance. All rights reserved.</p><nav aria-label="Legal links" className="flex gap-5"><Link href="/privacy" className="footer-link">Privacy overview</Link><Link href="/terms" className="footer-link">Terms</Link><Link href="/contact" className="footer-link">Contact</Link></nav></div>
    </div>
  </footer>
}

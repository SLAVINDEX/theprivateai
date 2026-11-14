"use client"

import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { useLanguage } from "@/components/language-context"
import { siteConfig } from "@/site.config"

export function Footer() {
  const { messages } = useLanguage()
  const t = messages.footer

  return <footer className="cc-footer">
    <div className="cc-footer-grid">
      <div><BrandLogo inverse /><p className="cc-footer-note">{t.description}</p></div>
      <div><h2>{t.explore}</h2><Link href="/services">{t.services}</Link><Link href="/who-we-help">{t.clients}</Link><Link href="/jurisdictions">{t.jurisdictions}</Link><Link href="/about">{t.about}</Link><Link href="/insights">{t.insights}</Link></div>
      <div><h2>{t.contact}</h2><p>{t.location}</p><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><a href={`tel:${siteConfig.contactPhone.replaceAll(" ", "")}`}>{siteConfig.contactPhone}</a><a href={`tel:${siteConfig.ukContactPhone.replaceAll(" ", "")}`}>{siteConfig.ukContactPhone} (UK)</a><Link href="/contact">{t.private}</Link></div>
      <div><h2>{t.legal}</h2><Link href="/impressum">{t.impressum}</Link><Link href="/privacy">{t.privacy}</Link><Link href="/terms">{t.disclaimerLink}</Link><button className="cc-footer-settings" type="button" onClick={() => window.dispatchEvent(new Event("cc-open-cookie-settings"))}>{t.cookie}</button></div>
    </div>
    <div className="cc-footer-bottom"><p>© {new Date().getFullYear()} Centurion Compliance, Wiesbaden · {t.rights}</p><p>{t.disclaimer}</p></div>
  </footer>
}

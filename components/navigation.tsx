"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { BrandLogo } from "@/components/brand-logo"

export function Navigation() {
  const { language, setLanguage, messages } = useLanguage()
  const [open, setOpen] = useState(false)
  const t = messages.navigation
  const links = [
    ["/services", t.services], ["/who-we-help", t.clients], ["/jurisdictions", t.jurisdictions], ["/about", t.about], ["/insights", t.insights], ["/contact", t.contact],
  ]

  return <header className="cc-header">
    <div className="cc-header-inner">
      <BrandLogo />
      <nav className="cc-desktop-nav" aria-label={language === "de" ? "Hauptnavigation" : "Main navigation"}>{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="cc-header-actions">
        <button type="button" className="cc-language" onClick={() => setLanguage(language === "en" ? "de" : "en")} aria-label={t.language}><span className={language === "en" ? "is-current" : ""}>EN</span><span aria-hidden="true">/</span><span className={language === "de" ? "is-current" : ""}>DE</span></button>
        <Link href="/contact" className="cc-nav-cta">{t.consult}</Link>
        <button type="button" className="cc-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? t.close : t.menu} aria-expanded={open} aria-controls="cc-mobile-navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    {open && <nav id="cc-mobile-navigation" className="cc-mobile-nav" aria-label={language === "de" ? "Hauptnavigation" : "Main navigation"}>{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="cc-mobile-cta" href="/contact" onClick={() => setOpen(false)}>{t.consult}</Link></nav>}
  </header>
}

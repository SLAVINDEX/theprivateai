"use client"

import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { useLanguage } from "@/components/language-context"
import { siteConfig } from "@/site.config"

export function Footer() {
  const { language } = useLanguage()
  const t = language === "de" ? {
    explore: "Entdecken", services: "Leistungen", clients: "Für wen wir arbeiten", jurisdictions: "Jurisdiktionen", about: "Über Centurion", insights: "Einblicke", contact: "Kontakt", private: "Vertrauliches Erstgespräch", legal: "Rechtliches", impressum: "Impressum", privacy: "Datenschutzerklärung", disclaimerLink: "Website-Hinweise", cookie: "Cookie-Einstellungen", description: "Unabhängige regulatorische Beratung für Finanzunternehmen. Klare Einschätzungen, praktische Umsetzung und diskrete Begleitung auf Senior-Ebene.", location: "Wiesbaden, Hessen · London (FCA) · Frankfurt (BaFin, ESMA) · New York (SEC, FINRA)", emailLabel: "E-Mail", phoneLabel: "Telefon", rights: "Alle Rechte vorbehalten.", disclaimer: "Centurion Compliance erbringt regulatorische Beratungsleistungen. Diese Website stellt keine Rechtsberatung dar.", home: "Centurion Compliance Startseite",
  } : {
    explore: "Explore", services: "Services", clients: "Who we help", jurisdictions: "Jurisdictions", about: "About Centurion", insights: "Insights", contact: "Contact", private: "Request a private conversation", legal: "Legal", impressum: "Impressum", privacy: "Privacy policy", disclaimerLink: "Website disclaimer", cookie: "Cookie settings", description: "Independent regulatory consulting for financial services firms. Clear judgement, practical implementation and discreet senior-level attention.", location: "Wiesbaden, Hessen · London (FCA) · Frankfurt (BaFin, ESMA) · New York (SEC, FINRA)", emailLabel: "Email", phoneLabel: "Phone", rights: "All rights reserved.", disclaimer: "Centurion Compliance provides regulatory consulting services. Nothing on this website constitutes legal advice.", home: "Centurion Compliance home",
  }

  return <footer className="cc-footer">
    <div className="cc-footer-grid">
      <div><BrandLogo inverse /><p className="cc-footer-note">{t.description}</p></div>
      <div><h2>{t.explore}</h2><Link href="/services">{t.services}</Link><Link href="/who-we-help">{t.clients}</Link><Link href="/jurisdictions">{t.jurisdictions}</Link><Link href="/about">{t.about}</Link><Link href="/insights">{t.insights}</Link></div>
      <div><h2>{t.contact}</h2><p>{t.location}</p><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><a href={`tel:${siteConfig.contactPhone.replaceAll(" ", "")}`}>{siteConfig.contactPhone}</a><Link href="/contact">{t.private}</Link></div>
      <div><h2>{t.legal}</h2><Link href="/impressum">{t.impressum}</Link><Link href="/privacy">{t.privacy}</Link><Link href="/terms">{t.disclaimerLink}</Link><button className="cc-footer-settings" type="button" onClick={() => window.dispatchEvent(new Event("cc-open-cookie-settings"))}>{t.cookie}</button></div>
    </div>
    <div className="cc-footer-bottom"><p>© {new Date().getFullYear()} Centurion Compliance, Wiesbaden · {t.rights}</p><p>{t.disclaimer}</p></div>
  </footer>
}

"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import { siteConfig, whatsappHref } from "@/site.config"

const copy = {
  en: {
    eyebrow: "CONTACT",
    title: "A considered conversation starts here.",
    intro: "Wiesbaden, Hessen — advising clients in London, Frankfurt and New York.",
    name: "Name",
    company: "Company",
    email: "Email",
    service: "Service of interest",
    choose: "Choose an area",
    options: ["Consumer Duty & outcomes testing", "Price & value assessments", "MiFID II / MiFIR", "Regulatory gap analysis", "Compliance strategy", "Audit & monitoring", "AML/KYC & sanctions", "DORA & operational resilience", "Authorisation & expansion", "Fintech setup", "AI in compliance", "Other"],
    message: "Message",
    consent: "I understand this opens my email app with a draft addressed to Centurion Compliance. I can review and send it there.",
    submit: "Prepare email",
    privacy: "This website does not transmit or store your enquiry. Submitting opens your default email app with a draft; you must review and send it from there.",
    note: "Please do not include passwords, account credentials or confidential client records.",
    legal: "Read our privacy policy",
    emailStatus: "Your email app should open with a draft. If it does not, email sascha.wittig@icloud.com directly.",
  },
  de: {
    eyebrow: "KONTAKT",
    title: "Ein gutes Gespräch beginnt hier.",
    intro: "Wiesbaden, Hessen — Beratung für Mandanten in London, Frankfurt und New York.",
    name: "Name",
    company: "Unternehmen",
    email: "E-Mail",
    service: "Interessengebiet",
    choose: "Bereich auswählen",
    options: ["Consumer Duty & Kundenergebnisse", "Preis- und Werthaltigkeitsbewertungen", "MiFID II / MiFIR", "Regulatorische Gap-Analyse", "Compliance-Strategie", "Prüfung & Monitoring", "AML/KYC & Sanktionen", "DORA & operationelle Resilienz", "Erlaubnis & Expansion", "Fintech-Aufbau", "KI in der Compliance", "Sonstiges"],
    message: "Nachricht",
    consent: "Mir ist bewusst, dass meine E-Mail-App mit einem Entwurf an Centurion Compliance geöffnet wird. Ich kann ihn dort prüfen und absenden.",
    submit: "E-Mail vorbereiten",
    privacy: "Diese Website überträgt oder speichert Ihre Anfrage nicht. Beim Absenden öffnet sich Ihre Standard-E-Mail-App mit einem Entwurf, den Sie prüfen und selbst versenden.",
    note: "Bitte übermitteln Sie keine Passwörter, Zugangsdaten oder vertraulichen Kundendaten.",
    legal: "Datenschutzerklärung lesen",
    emailStatus: "Ihre E-Mail-App sollte sich mit einem Entwurf öffnen. Andernfalls schreiben Sie direkt an sascha.wittig@icloud.com.",
  },
}

export function CenturionContact() {
  const { language } = useLanguage()
  const t = copy[language]
  const [status, setStatus] = useState("")
  const [selectedService, setSelectedService] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const field = (name: string) => String(form.get(name) ?? "").trim()
    const serviceIndex = Number(field("service"))
    const service = Number.isInteger(serviceIndex) ? t.options[serviceIndex] ?? "" : ""
    const subject = `Centurion Compliance enquiry: ${service}`
    const body = [
      `Name: ${field("name")}`,
      `Company: ${field("company") || "Not provided"}`,
      `Reply email: ${field("email")}`,
      `Service of interest: ${service}`,
      "",
      field("message"),
    ].join("\n")

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus(t.emailStatus)
  }

  return (
    <main className="cc-site">
      <Navigation />
      <section className="cc-page-hero cc-contact-hero">
        <div className="cc-container">
          <p className="cc-eyebrow"><span className="cc-eyebrow-rule" />{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="cc-section">
        <div className="cc-container cc-contact-layout">
          <aside className="cc-contact-aside">
            <div className="cc-location-note"><MapPin aria-hidden="true" /><p>{t.intro}</p></div>
            <p><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p>
            <p><a href={`tel:${siteConfig.contactPhone.replaceAll(" ", "")}`}>{siteConfig.contactPhone}</a></p>
            <a className="cc-button cc-button-green" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              {language === "de" ? "Nachricht per WhatsApp" : "Message on WhatsApp"}<ArrowUpRight aria-hidden="true" />
            </a>
            <p>{t.note}</p>
            <Link href="/privacy" className="cc-text-link">{t.legal}</Link>
          </aside>
          <form className="cc-contact-form" onSubmit={handleSubmit}>
            <div className="cc-form-grid">
              <label>{t.name}<input name="name" autoComplete="name" maxLength={160} required /></label>
              <label>{t.company}<input name="company" autoComplete="organization" maxLength={200} /></label>
              <label>{t.email}<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
              <label>{t.service}<select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required><option value="" disabled>{t.choose}</option>{t.options.map((option, index) => <option key={index} value={String(index)}>{option}</option>)}</select></label>
            </div>
            <label>{t.message}<textarea name="message" required maxLength={4000} rows={6} /></label>
            <label className="cc-consent"><input type="checkbox" required /><span>{t.consent}</span></label>
            <button type="submit" className="cc-button cc-button-green">{t.submit}<ArrowUpRight aria-hidden="true" /></button>
            <p className="cc-form-privacy">{t.privacy}</p>
            {status && <p className="cc-form-status" role="status">{status}</p>}
          </form>
        </div>
      </section>
      <section className="cc-final-cta">
        <div className="cc-container cc-final-inner">
          <div><p className="cc-eyebrow">CENTURION COMPLIANCE</p><h2>{language === "de" ? "Vertraulich. Klar. Praxisnah." : "Discreet. Clear. Practical."}</h2></div>
          <span className="cc-contact-city">{language === "de" ? "Wiesbaden · Hessen · Deutschland" : "Wiesbaden · Hessen · Germany"}</span>
        </div>
      </section>
      <Footer />
    </main>
  )
}

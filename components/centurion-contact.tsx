"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import { getWhatsAppHref, siteConfig } from "@/site.config"

export function CenturionContact() {
  const { language, messages } = useLanguage()
  const t = messages.contact
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  function handleInvalid(event: FormEvent<HTMLFormElement>) {
    const field = event.target
    if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
      field.setCustomValidity(t.validation)
    }
  }

  function handleInput(event: FormEvent<HTMLFormElement>) {
    const field = event.target
    if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
      field.setCustomValidity("")
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const field = (name: string) => String(form.get(name) ?? "").trim()
    const serviceIndex = Number(field("service"))
    const service = Number.isInteger(serviceIndex) ? t.options[serviceIndex] ?? "" : ""
    const subject = `${t.emailSubject}: ${service}`
    const body = [
      `${t.name}: ${field("name")}`,
      `${t.companyLabel}: ${field("company") || t.notProvided}`,
      `${t.replyEmailLabel}: ${field("email")}`,
      `${t.serviceLabel}: ${service}`,
      "",
      field("message"),
    ].join("\n")

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
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
            <p><a href={`tel:${siteConfig.ukContactPhone.replaceAll(" ", "")}`}>{siteConfig.ukContactPhone} (UK)</a></p>
            <a className="cc-button cc-button-green" href={getWhatsAppHref(language)} target="_blank" rel="noopener noreferrer">
              {t.whatsapp}<ArrowUpRight aria-hidden="true" />
            </a>
            <p>{t.note}</p>
            <Link href="/privacy" className="cc-text-link">{t.legal}</Link>
          </aside>
          <form className="cc-contact-form" onSubmit={handleSubmit} onInvalid={handleInvalid} onInput={handleInput}>
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
            {submitted && <p className="cc-form-status" role="status">{t.emailStatus}</p>}
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

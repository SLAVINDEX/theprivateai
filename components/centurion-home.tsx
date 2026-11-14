"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HelmetMark } from "@/components/brand-logo"
import { getWhatsAppHref } from "@/site.config"

export function CenturionHome() {
  const { language, messages } = useLanguage()
  const t = messages.home
  return <main className="cc-site">
    <Navigation />
    <section className="cc-hero">
      <div className="cc-container cc-hero-grid">
        <div className="cc-hero-copy"><p className="cc-eyebrow"><span className="cc-eyebrow-rule" />{t.eyebrow}</p><h1>{t.title}</h1><p className="cc-hero-lead">{t.intro}</p>
          <div className="cc-actions"><Link className="cc-button cc-button-green" href="/contact">{t.book}<ArrowUpRight aria-hidden="true" /></Link><a className="cc-button cc-button-outline" href={getWhatsAppHref(language)} target="_blank" rel="noopener noreferrer">{t.whatsapp}<ArrowUpRight aria-hidden="true" /></a></div>
          <div className="cc-hero-proof"><span><Check aria-hidden="true" />{t.heroProof[0]}</span><span><Check aria-hidden="true" />{t.heroProof[1]}</span></div>
        </div>
        <figure className="cc-hero-image"><Image src="/images/centurion-colonnade.png" alt={t.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" /><div className="cc-image-caption"><span>{t.image}</span><span>{t.photo}</span></div><div className="cc-hero-mark"><HelmetMark /></div></figure>
      </div>
      <a href="#mandate" className="cc-scroll-cue"><span>{t.scrollCue}</span><ArrowDownRight aria-hidden="true" /></a>
    </section>

    <section id="mandate" className="cc-section cc-paper-section"><div className="cc-container cc-mandate-grid"><div><p className="cc-eyebrow">{t.mandate}</p><h2>{t.mandateTitle}</h2></div><p className="cc-lead-copy">{t.mandateBody}</p></div><div className="cc-laurel-divider" aria-hidden="true"><span>❧</span></div></section>

    <section id="expertise" className="cc-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.expertise}</p><h2>{t.expertiseTitle}</h2></div><p>{t.expertiseBody}</p></div><div className="cc-service-grid">{t.services.map((title, index) => <Link href="/services" className="cc-service-card" key={title}><span className="cc-roman">{["I", "II", "III", "IV", "V", "VI"][index]}</span><h3>{title}</h3><span className="cc-card-arrow"><ArrowUpRight aria-hidden="true" /></span></Link>)}</div><Link href="/services" className="cc-text-link">{t.allServices}<ArrowRight aria-hidden="true" /></Link></div></section>

    <section className="cc-section cc-green-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.jurisdictions}</p><h2>{t.jurisdictionsTitle}</h2></div></div><div className="cc-jurisdiction-grid">{t.countries.map(([name, details], index) => <article key={name}><span className="cc-roman">{["I", "II", "III"][index]}</span><h3>{name}</h3><p>{details}</p></article>)}</div></div></section>

    <section className="cc-section cc-clients-section"><div className="cc-container cc-clients-grid"><div><p className="cc-eyebrow">{t.clients}</p><h2>{t.clientsTitle}</h2><p className="cc-lead-copy">{t.clientsBody}</p><Link href="/who-we-help" className="cc-text-link">{t.clientsLink}<ArrowRight aria-hidden="true" /></Link></div><div className="cc-clients-list">{t.clientsList.map((item, i) => <div key={item}><span>{["I", "II", "III", "IV", "V"][i]}</span>{item}</div>)}</div></div></section>

    <section className="cc-section cc-paper-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.approach}</p><h2>{t.approachTitle}</h2></div></div><ol className="cc-approach-list">{t.steps.map(([title, text], i) => <li key={title}><span>{["I", "II", "III", "IV", "V"][i]}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

    <section className="cc-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.why}</p><h2>{t.whyTitle}</h2></div></div><div className="cc-reasons-grid">{t.reasons.map(([title, text], i) => <article key={title}><span className="cc-roman">{["I", "II", "III", "IV"][i]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cc-section cc-faq"><div className="cc-container cc-faq-grid"><div><p className="cc-eyebrow">{t.faq}</p><h2>{t.faqTitle}</h2></div><div>{t.questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className="cc-final-cta"><div className="cc-container cc-final-inner"><div><p className="cc-eyebrow">{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalBody}</p></div><Link href="/contact" className="cc-button cc-button-ivory">{t.book}<ArrowUpRight aria-hidden="true" /></Link></div></section>
    <p className="cc-disclaimer">{t.disclaimer}</p><Footer />
  </main>
}

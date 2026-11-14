"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HelmetMark } from "@/components/brand-logo"
import { whatsappHref } from "@/site.config"

const copy = {
  en: {
    eyebrow: "INDEPENDENT REGULATORY ADVISORY · WIESBADEN, GERMANY",
    title: "Regulatory confidence for financial firms.",
    intro: "FCA · BaFin · SEC — regulatory strategy, assurance and implementation across London, Frankfurt and New York.",
    book: "Book a consultation", whatsapp: "Message on WhatsApp", image: "Wiesbaden · Hessen", photo: "A considered view, across borders.",
    mandate: "OUR PURPOSE", mandateTitle: "Clarity where the stakes are real.", mandateBody: "Compliance should strengthen the business, not sit apart from it. We help financial firms interpret complex expectations, establish proportionate controls and turn policy into practices that can be evidenced.",
    expertise: "I. EXPERTISE", expertiseTitle: "Regulation, made workable.", expertiseBody: "Senior attention across the questions that matter—from first regulatory strategy through ongoing assurance.",
    services: ["Consumer Duty & outcomes", "MiFID II / MiFIR", "Regulatory gap analysis", "Compliance frameworks", "Audit & monitoring", "AI in compliance"],
    jurisdictions: "II. JURISDICTIONS", jurisdictionsTitle: "Local context. International perspective.", countries: [["London · United Kingdom", "FCA · Consumer Duty · SMCR"], ["Frankfurt · Germany & European Union", "BaFin · ESMA · MiFID II / MiFIR · EU AI Act"], ["New York · United States", "SEC · FINRA · cross-border considerations"]],
    clients: "III. CLIENTS WE SERVE", clientsTitle: "Built around your stage and model.", clientsBody: "Fintechs, payment and e-money firms, investment firms, wealth managers, crypto businesses and established financial institutions.",
    approach: "IV. OUR APPROACH", approachTitle: "A clear route from uncertainty to assurance.", steps: [["Discover", "Understand your products, people and obligations."], ["Analyse", "Identify material gaps and the evidence behind them."], ["Roadmap", "Agree priorities, ownership and proportionate milestones."], ["Implement", "Embed workable controls with the people who use them."], ["Assure", "Test outcomes and strengthen what comes next."]],
    why: "V. WHY CENTURION", whyTitle: "Senior counsel. Practical delivery.", reasons: [["International by perspective", "UK and German context, with cross-border questions handled carefully."], ["Proportionate by design", "Support for growing teams and established firms—without one-size-fits-all frameworks."], ["AI-enabled, human-led", "Thoughtful use of technology, with accountable human judgement at the centre."], ["Discreet attention", "Direct senior-level collaboration, built around the realities of your business."]],
    faq: "FREQUENT QUESTIONS", faqTitle: "A few useful starting points.", questions: [["Does Centurion provide legal advice?", "No. Centurion provides regulatory consulting. Legal opinions and representation should be obtained from appropriately qualified counsel."], ["Are you authorised by the FCA or registered with the SEC?", "This website does not claim FCA authorisation or SEC registration. Any regulated activity is outside scope unless independently verified and agreed in writing."], ["Where do you work?", "Centurion is based in Wiesbaden, Hessen and advises clients internationally, subject to the agreed scope and applicable local requirements."]],
    finalEyebrow: "A PRIVATE, INITIAL CONVERSATION", finalTitle: "Bring us the difficult question.", finalBody: "Begin with a short, discreet conversation about your priorities.", disclaimer: "Centurion Compliance provides regulatory consulting services. Nothing on this website constitutes legal advice or a representation of regulatory authorisation.",
  },
  de: {
    eyebrow: "UNABHÄNGIGE REGULATORISCHE BERATUNG · WIESBADEN, DEUTSCHLAND",
    title: "Regulatorische Sicherheit für Finanzunternehmen.",
    intro: "FCA · BaFin · SEC — regulatorische Strategie, Qualitätssicherung und Umsetzung in London, Frankfurt und New York.",
    book: "Beratung anfragen", whatsapp: "Nachricht per WhatsApp", image: "Wiesbaden · Hessen", photo: "Mit Weitblick und Augenmaß.",
    mandate: "UNSER ANSATZ", mandateTitle: "Klarheit, wenn es darauf ankommt.", mandateBody: "Compliance sollte das Unternehmen stärken, nicht von ihm getrennt sein. Wir unterstützen Finanzunternehmen dabei, komplexe Anforderungen einzuordnen, angemessene Kontrollen zu etablieren und Richtlinien in belegbare Praxis zu übersetzen.",
    expertise: "I. LEISTUNGEN", expertiseTitle: "Regulierung, die in der Praxis trägt.", expertiseBody: "Erfahrene Begleitung bei den entscheidenden Fragen – von der ersten Strategie bis zur laufenden Qualitätssicherung.",
    services: ["Consumer Duty & Kundenergebnisse", "MiFID II / MiFIR", "Regulatorische Gap-Analyse", "Compliance-Rahmenwerke", "Prüfung & Überwachung", "KI in der Compliance"],
    jurisdictions: "II. JURISDIKTIONEN", jurisdictionsTitle: "Lokale Einordnung. Internationaler Blick.", countries: [["London · Vereinigtes Königreich", "FCA · Consumer Duty · SMCR"], ["Frankfurt · Deutschland & Europäische Union", "BaFin · ESMA · MiFID II / MiFIR · EU-KI-Verordnung"], ["New York · Vereinigte Staaten", "SEC · FINRA · grenzüberschreitende Fragen"]],
    clients: "III. UNSERE MANDANTEN", clientsTitle: "Auf Ihre Phase und Ihr Geschäftsmodell abgestimmt.", clientsBody: "Fintechs, Zahlungs- und E-Geld-Institute, Wertpapierfirmen, Vermögensverwalter, Kryptounternehmen und etablierte Finanzinstitute.",
    approach: "IV. UNSER VORGEHEN", approachTitle: "Ein klarer Weg von der Unsicherheit zur Sicherheit.", steps: [["Verstehen", "Produkte, Menschen und Pflichten einordnen."], ["Analysieren", "Wesentliche Lücken und Nachweise erkennen."], ["Planen", "Prioritäten, Verantwortlichkeiten und Schritte abstimmen."], ["Umsetzen", "Praxistaugliche Kontrollen im Team verankern."], ["Absichern", "Ergebnisse prüfen und gezielt verbessern."]],
    why: "V. WARUM CENTURION", whyTitle: "Erfahrene Beratung. Umsetzbare Lösungen.", reasons: [["International geprägt", "Britischer und deutscher Kontext, grenzüberschreitend sorgfältig eingeordnet."], ["Angemessen gestaltet", "Unterstützung für wachsende Teams und etablierte Unternehmen – ohne Standardschablone."], ["KI-gestützt, menschlich geführt", "Sinnvoller Technologieeinsatz mit verantwortlicher menschlicher Beurteilung."], ["Diskrete Begleitung", "Direkte Zusammenarbeit auf Senior-Ebene, orientiert an der Unternehmensrealität."]],
    faq: "HÄUFIGE FRAGEN", faqTitle: "Einige hilfreiche erste Antworten.", questions: [["Erbringt Centurion Rechtsberatung?", "Nein. Centurion bietet regulatorische Beratung. Rechtsgutachten und Vertretung sollten qualifizierte Rechtsberater übernehmen."], ["Ist Centurion von der FCA zugelassen oder bei der SEC registriert?", "Diese Website behauptet weder eine FCA-Zulassung noch eine SEC-Registrierung. Regulierte Tätigkeiten sind ausgeschlossen, sofern sie nicht unabhängig geprüft und schriftlich vereinbart wurden."], ["Wo ist Centurion tätig?", "Centurion hat seinen Sitz in Wiesbaden, Hessen und berät international – im vereinbarten Umfang und unter Beachtung der lokalen Anforderungen."]],
    finalEyebrow: "EIN DISKRETES ERSTGESPRÄCH", finalTitle: "Bringen Sie die schwierige Frage mit.", finalBody: "Beginnen Sie mit einem kurzen, vertraulichen Gespräch über Ihre Prioritäten.", disclaimer: "Centurion Compliance erbringt regulatorische Beratungsleistungen. Diese Website stellt keine Rechtsberatung dar und behauptet keine aufsichtsrechtliche Zulassung.",
  },
}

export function CenturionHome() {
  const { language } = useLanguage()
  const t = copy[language]
  return <main className="cc-site">
    <Navigation />
    <section className="cc-hero">
      <div className="cc-container cc-hero-grid">
        <div className="cc-hero-copy"><p className="cc-eyebrow"><span className="cc-eyebrow-rule" />{t.eyebrow}</p><h1>{t.title}</h1><p className="cc-hero-lead">{t.intro}</p>
          <div className="cc-actions"><Link className="cc-button cc-button-green" href="/contact">{t.book}<ArrowUpRight aria-hidden="true" /></Link><a className="cc-button cc-button-outline" href={whatsappHref} target="_blank" rel="noopener noreferrer">{t.whatsapp}<ArrowUpRight aria-hidden="true" /></a></div>
          <div className="cc-hero-proof"><span><Check aria-hidden="true" />{language === "de" ? "Angemessene, praxisnahe Beratung" : "Practical, proportionate advice"}</span><span><Check aria-hidden="true" />{language === "de" ? "Diskrete Begleitung auf Senior-Ebene" : "Discreet senior-level attention"}</span></div>
        </div>
        <figure className="cc-hero-image"><Image src="/images/centurion-colonnade.png" alt={language === "de" ? "Historische Steinkolonnade im weichen Morgenlicht, umrahmt von grünen Bäumen" : "Historic stone colonnade framed by green trees in soft morning light"} fill priority sizes="(max-width: 900px) 100vw, 48vw" /><div className="cc-image-caption"><span>{t.image}</span><span>{t.photo}</span></div><div className="cc-hero-mark"><HelmetMark /></div></figure>
      </div>
      <a href="#mandate" className="cc-scroll-cue"><span>{language === "de" ? "WEITERLESEN" : "DISCOVER CENTURION"}</span><ArrowDownRight aria-hidden="true" /></a>
    </section>

    <section id="mandate" className="cc-section cc-paper-section"><div className="cc-container cc-mandate-grid"><div><p className="cc-eyebrow">{t.mandate}</p><h2>{t.mandateTitle}</h2></div><p className="cc-lead-copy">{t.mandateBody}</p></div><div className="cc-laurel-divider" aria-hidden="true"><span>❧</span></div></section>

    <section id="expertise" className="cc-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.expertise}</p><h2>{t.expertiseTitle}</h2></div><p>{t.expertiseBody}</p></div><div className="cc-service-grid">{t.services.map((title, index) => <Link href="/services" className="cc-service-card" key={title}><span className="cc-roman">{["I", "II", "III", "IV", "V", "VI"][index]}</span><h3>{title}</h3><span className="cc-card-arrow"><ArrowUpRight aria-hidden="true" /></span></Link>)}</div><Link href="/services" className="cc-text-link">{language === "de" ? "Alle Leistungen ansehen" : "Explore all services"}<ArrowRight aria-hidden="true" /></Link></div></section>

    <section className="cc-section cc-green-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.jurisdictions}</p><h2>{t.jurisdictionsTitle}</h2></div></div><div className="cc-jurisdiction-grid">{t.countries.map(([name, details], index) => <article key={name}><span className="cc-roman">{["I", "II", "III"][index]}</span><h3>{name}</h3><p>{details}</p></article>)}</div></div></section>

    <section className="cc-section cc-clients-section"><div className="cc-container cc-clients-grid"><div><p className="cc-eyebrow">{t.clients}</p><h2>{t.clientsTitle}</h2><p className="cc-lead-copy">{t.clientsBody}</p><Link href="/who-we-help" className="cc-text-link">{language === "de" ? "Mandanten entdecken" : "Who we help"}<ArrowRight aria-hidden="true" /></Link></div><div className="cc-clients-list">{(language === "de" ? ["Fintechs & Start-ups", "Zahlungs- & E-Geld-Institute", "Wertpapierfirmen & Vermögensverwalter", "Krypto- & MiCA-Unternehmen", "Banken & Versicherer"] : ["Fintechs & startups", "Payment & e-money firms", "Investment firms & wealth managers", "Crypto & MiCA businesses", "Banks & insurers"]).map((item, i) => <div key={item}><span>{["I", "II", "III", "IV", "V"][i]}</span>{item}</div>)}</div></div></section>

    <section className="cc-section cc-paper-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.approach}</p><h2>{t.approachTitle}</h2></div></div><ol className="cc-approach-list">{t.steps.map(([title, text], i) => <li key={title}><span>{["I", "II", "III", "IV", "V"][i]}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

    <section className="cc-section"><div className="cc-container"><div className="cc-section-heading"><div><p className="cc-eyebrow">{t.why}</p><h2>{t.whyTitle}</h2></div></div><div className="cc-reasons-grid">{t.reasons.map(([title, text], i) => <article key={title}><span className="cc-roman">{["I", "II", "III", "IV"][i]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cc-section cc-faq"><div className="cc-container cc-faq-grid"><div><p className="cc-eyebrow">{t.faq}</p><h2>{t.faqTitle}</h2></div><div>{t.questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className="cc-final-cta"><div className="cc-container cc-final-inner"><div><p className="cc-eyebrow">{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalBody}</p></div><Link href="/contact" className="cc-button cc-button-ivory">{t.book}<ArrowUpRight aria-hidden="true" /></Link></div></section>
    <p className="cc-disclaimer">{t.disclaimer}</p><Footer />
  </main>
}

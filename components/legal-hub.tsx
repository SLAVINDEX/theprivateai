"use client"

import Link from "next/link"
import type { KeyboardEvent } from "react"
import { useLanguage } from "@/components/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getLegalRoute } from "@/site.config"
import type { Language } from "@/messages/types"

type LegalTab = "impressum" | "privacy" | "terms" | "uk" | "cookies" | "disclaimer"
type LegalBlock = { heading: string; paragraphs: string[]; links?: Array<{ label: string; href: string }> }
type LegalContent = { label: string; title: string; blocks: LegalBlock[] }

const tabOrder: LegalTab[] = ["impressum", "privacy", "terms", "uk", "cookies", "disclaimer"]

const content: Record<Language, Record<LegalTab, LegalContent>> = {
  en: {
    impressum: {
      label: "German legal notice",
      title: "Impressum",
      blocks: [
        { heading: "Operator", paragraphs: ["Sascha Wittig, trading as Centurion Compliance (sole trader).", "Schwarzgasse 9, 65191 Wiesbaden, Germany."] },
        { heading: "Contact", paragraphs: ["Email: sascha.wittig@icloud.com", "Telephone: +49 152 92618660"] },
        { heading: "Responsible for editorial content", paragraphs: ["Sascha Wittig, Schwarzgasse 9, 65191 Wiesbaden, Germany, pursuant to section 18(2) of the German State Media Treaty (MStV)."] },
        { heading: "Professional status", paragraphs: ["Centurion Compliance provides regulatory consulting. No legal advice is provided, and no regulatory authorisation or registration is claimed."] },
      ],
    },
    privacy: {
      label: "Privacy policy",
      title: "Privacy policy",
      blocks: [
        { heading: "Controller and contact", paragraphs: ["The controller is Sascha Wittig, trading as Centurion Compliance (sole trader).", "5d High Street, St Albans AL3 4ED, United Kingdom.", "Email: sascha.wittig@icloud.com · Telephone: +447537144472."] },
        { heading: "Information and purposes", paragraphs: ["If you contact us by email or WhatsApp, we use the information you provide to respond, consider a proposed engagement and keep a record of the conversation. The lawful basis is taking steps at your request before a contract, and our legitimate interest in managing business correspondence.", "The website contact form prepares a message in your email application. It does not send the form to the website or store its contents. You can review the draft before sending it."] },
        { heading: "Service providers", paragraphs: ["Vercel hosts the website and may process request and diagnostic data to deliver and secure it. Resend may process business email content and delivery data when used to send or handle enquiry-related email. If you choose WhatsApp, Meta Platforms Ireland Limited and its group companies process the message under WhatsApp’s terms and privacy information.", "Vercel Analytics measures site usage only after you accept optional analytics. It is not loaded before consent. You can change your choice at any time using Cookie settings in the footer."] },
        { heading: "Retention", paragraphs: ["Email enquiry messages are kept for 24 months after the last substantive contact, unless a longer period is required to establish, exercise or defend legal claims or to meet a legal obligation.", "Technical and server logs are kept for 30 days. WhatsApp messages remain subject to the retention and deletion controls in the relevant WhatsApp account and Meta’s policies; we do not set a separate fixed retention period for messages held in WhatsApp."] },
        { heading: "International transfers", paragraphs: ["Vercel, Resend and Meta may process information outside the UK or European Economic Area. Where required, transfers rely on an applicable adequacy decision or appropriate safeguards such as the European Commission’s Standard Contractual Clauses and the UK International Data Transfer Addendum. You may request further information using the contact details above."] },
        { heading: "Your rights and complaints", paragraphs: ["Depending on the law that applies, you may request access, rectification, erasure, restriction, portability or object to processing. Where processing is based on consent, you may withdraw consent at any time; this does not affect earlier processing. You may also complain to the UK Information Commissioner’s Office or the Hessian Commissioner for Data Protection and Freedom of Information."] , links: [{ label: "Make a complaint to the ICO", href: "https://ico.org.uk/make-a-complaint/" }, { label: "Hessian data protection authority", href: "https://datenschutz.hessen.de/service/beschwerden" }] },
        { heading: "Updates", paragraphs: ["This notice was last updated on 14 November 2026. We will update it if our processing practices change."] },
      ],
    },
    terms: {
      label: "Website terms",
      title: "Website terms and information",
      blocks: [
        { heading: "General information", paragraphs: ["This website provides general information about Centurion Compliance and its regulatory consulting services. Website content is not legal advice, a legal opinion or a recommendation for a particular financial or regulatory decision."] },
        { heading: "No authorisation or registration claim", paragraphs: ["References to the FCA, BaFin, SEC, ESMA, FINRA or regulatory frameworks are descriptive only. They do not imply authorisation, registration, endorsement or representation by any regulator. Centurion Compliance does not claim FCA authorisation, SEC registration or any other regulatory status."] },
        { heading: "Engagements and outcomes", paragraphs: ["A consulting engagement begins only when its scope and terms have been agreed in writing. Website content is not an offer for a specific service. No approval, authorisation, supervisory outcome, commercial result or timeline is guaranteed."] },
        { heading: "Accuracy, links and intellectual property", paragraphs: ["We take reasonable care with website content but do not warrant that it is complete, current or suitable for a particular purpose. External websites remain under their operators’ control. Website text and materials may not be reproduced for commercial use without permission, except where permitted by law."] },
        { heading: "Applicable rights", paragraphs: ["Nothing in these terms limits rights that cannot be excluded under applicable law. Mandatory consumer protections remain unaffected."] },
      ],
    },
    uk: {
      label: "UK legal information",
      title: "UK legal information",
      blocks: [
        { heading: "Business operator", paragraphs: ["Sascha Wittig, trading as Centurion Compliance, sole trader in England and Wales.", "Business address: 5d High Street, St Albans AL3 4ED, United Kingdom."] },
        { heading: "Contact", paragraphs: ["Email: sascha.wittig@icloud.com", "Telephone: +447537144472"] },
        { heading: "Services and regulatory status", paragraphs: ["Centurion Compliance provides regulatory consulting services. It does not provide legal advice and makes no claim to FCA authorisation, SEC registration or another regulatory status. A specific engagement requires a separate written scope."] },
        { heading: "Electronic contact", paragraphs: ["This information is provided for the purposes of the Electronic Commerce (EC Directive) Regulations 2002. Please use the contact details above for questions about the business or this website."] },
      ],
    },
    cookies: {
      label: "Cookie policy",
      title: "Cookies and analytics",
      blocks: [
        { heading: "Essential preferences", paragraphs: ["The site uses a necessary preference cookie to remember whether you accepted or rejected optional analytics. It lasts for 12 months. A language preference may also be stored in your browser so the site can remember your selected language."] },
        { heading: "Optional analytics", paragraphs: ["Vercel Analytics is loaded only after you choose Accept optional cookies. No optional analytics are loaded before consent. Choosing Reject optional cookies keeps analytics disabled. You can reopen this choice at any time with Cookie settings in the footer."] },
        { heading: "Manage your choice", paragraphs: ["Use the Cookie settings control in the footer to reopen the preference panel. You can also clear site data in your browser, though the banner will then appear again."] },
      ],
    },
    disclaimer: {
      label: "Regulatory disclaimer",
      title: "Regulatory disclaimer",
      blocks: [
        { heading: "Regulatory consulting, not legal advice", paragraphs: ["Centurion Compliance provides regulatory consulting, not legal advice. Nothing on this website is a legal opinion or a substitute for advice from appropriately qualified legal counsel."] },
        { heading: "No regulatory status claimed", paragraphs: ["No FCA authorisation, SEC registration or other regulatory status is claimed. References to regulators and regulatory frameworks are informational and do not imply approval, endorsement or a regulated activity."] },
        { heading: "Scope and reliance", paragraphs: ["The website is general information and is not tailored to a particular firm or decision. Advice is provided only under a separately agreed written scope. Do not rely on website content as a substitute for legal, tax or other professional advice."] },
      ],
    },
  },
  de: {
    impressum: {
      label: "Impressum",
      title: "Impressum",
      blocks: [
        { heading: "Diensteanbieter", paragraphs: ["Sascha Wittig, handelnd unter Centurion Compliance (Einzelunternehmer).", "Schwarzgasse 9, 65191 Wiesbaden, Deutschland.", "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."] },
        { heading: "Kontakt", paragraphs: ["E-Mail: sascha.wittig@icloud.com", "Telefon: +49 152 92618660"] },
        { heading: "Verantwortlich für journalistisch-redaktionelle Inhalte", paragraphs: ["Sascha Wittig, Schwarzgasse 9, 65191 Wiesbaden, gemäß § 18 Abs. 2 Medienstaatsvertrag (MStV)."] },
        { heading: "Berufs- und Aufsichtsstatus", paragraphs: ["Centurion Compliance erbringt regulatorische Beratungsleistungen. Rechtsberatung wird nicht erbracht; eine aufsichtsrechtliche Zulassung oder Registrierung wird nicht behauptet."] },
      ],
    },
    privacy: {
      label: "Datenschutzerklärung",
      title: "Datenschutzerklärung",
      blocks: [
        { heading: "Verantwortlicher und Kontakt", paragraphs: ["Verantwortlicher ist Sascha Wittig, handelnd unter Centurion Compliance (Einzelunternehmer).", "Schwarzgasse 9, 65191 Wiesbaden, Deutschland.", "E-Mail: sascha.wittig@icloud.com · Telefon: +49 152 92618660."] },
        { heading: "Daten und Zwecke", paragraphs: ["Wenn Sie uns per E-Mail oder WhatsApp kontaktieren, verwenden wir Ihre Angaben, um zu antworten, ein mögliches Mandat zu prüfen und den Gesprächsverlauf zu verwalten. Rechtsgrundlage sind vorvertragliche Maßnahmen auf Ihre Anfrage sowie unser berechtigtes Interesse an der Bearbeitung geschäftlicher Korrespondenz.", "Das Kontaktformular erstellt eine Nachricht in Ihrer E-Mail-Anwendung. Es überträgt die Formulardaten nicht an die Website und speichert deren Inhalt nicht. Sie können den Entwurf vor dem Versand prüfen."] },
        { heading: "Dienstleister", paragraphs: ["Vercel hostet die Website und kann Anfrage- und Diagnosedaten zur Bereitstellung und Absicherung verarbeiten. Resend kann geschäftliche E-Mail-Inhalte und Zustelldaten verarbeiten, wenn es zum Versand oder zur Bearbeitung von Anfragen eingesetzt wird. Wenn Sie WhatsApp wählen, verarbeiten Meta Platforms Ireland Limited und verbundene Unternehmen die Nachricht nach den WhatsApp-Nutzungs- und Datenschutzhinweisen.", "Vercel Analytics misst die Nutzung der Website erst, nachdem Sie optionale Analyse akzeptiert haben. Vor Ihrer Einwilligung wird es nicht geladen. Sie können Ihre Auswahl jederzeit über Cookie-Einstellungen im Footer ändern."] },
        { heading: "Speicherdauer", paragraphs: ["E-Mail-Anfragen werden 24 Monate nach dem letzten inhaltlichen Kontakt gespeichert, sofern keine längere Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder aufgrund gesetzlicher Pflichten erforderlich ist.", "Technische Serverprotokolle werden 30 Tage gespeichert. Für WhatsApp-Nachrichten gelten die Speicher- und Löschmöglichkeiten des jeweiligen WhatsApp-Kontos und die Richtlinien von Meta; für Nachrichten in WhatsApp legen wir keine zusätzliche feste Speicherdauer fest."] },
        { heading: "Drittlandübermittlungen", paragraphs: ["Vercel, Resend und Meta können Daten außerhalb des Vereinigten Königreichs oder des Europäischen Wirtschaftsraums verarbeiten. Soweit erforderlich, stützen sich Übermittlungen auf einen Angemessenheitsbeschluss oder geeignete Garantien wie die Standardvertragsklauseln der Europäischen Kommission und den UK International Data Transfer Addendum. Weitere Informationen erhalten Sie über die oben genannten Kontaktdaten."] },
        { heading: "Ihre Rechte und Beschwerden", paragraphs: ["Je nach anwendbarem Recht können Sie Auskunft, Berichtigung, Löschung, Einschränkung oder Datenübertragbarkeit verlangen sowie der Verarbeitung widersprechen. Eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem können Sie sich bei der zuständigen Datenschutzaufsicht beschweren."] , links: [{ label: "Beschwerde beim Hessischen Datenschutzbeauftragten", href: "https://datenschutz.hessen.de/service/beschwerden" }, { label: "Beschwerde beim ICO", href: "https://ico.org.uk/make-a-complaint/" }] },
        { heading: "Aktualisierungen", paragraphs: ["Diese Datenschutzhinweise wurden zuletzt am 14. November 2026 aktualisiert. Bei Änderungen unserer Verarbeitung aktualisieren wir diesen Text."] },
      ],
    },
    terms: {
      label: "Website-Hinweise",
      title: "Website-Hinweise und Nutzungsbedingungen",
      blocks: [
        { heading: "Allgemeine Informationen", paragraphs: ["Diese Website enthält allgemeine Informationen über Centurion Compliance und regulatorische Beratungsleistungen. Die Inhalte sind keine Rechtsberatung, kein Rechtsgutachten und keine Empfehlung für eine konkrete finanzielle oder regulatorische Entscheidung."] },
        { heading: "Keine Zulassung oder Registrierung", paragraphs: ["Nennungen von FCA, BaFin, SEC, ESMA, FINRA oder Regelwerken dienen ausschließlich der Information. Sie behaupten weder eine Zulassung oder Registrierung noch eine Empfehlung oder Vertretung durch eine Aufsichtsbehörde. Centurion Compliance behauptet keine FCA-Zulassung, SEC-Registrierung oder sonstigen aufsichtsrechtlichen Status."] },
        { heading: "Mandate und Ergebnisse", paragraphs: ["Ein Beratungsmandat beginnt erst, wenn Leistungsumfang und Bedingungen schriftlich vereinbart wurden. Die Website ist kein Angebot für eine bestimmte Leistung. Zulassung, Genehmigung, Aufsichtsergebnis, Geschäftserfolg oder Zeitrahmen werden nicht garantiert."] },
        { heading: "Richtigkeit, Links und Schutzrechte", paragraphs: ["Wir achten angemessen auf die Inhalte, gewährleisten jedoch keine Vollständigkeit, Aktualität oder Eignung für einen bestimmten Zweck. Für externe Websites sind deren Betreiber verantwortlich. Texte und Materialien dürfen, soweit gesetzlich zulässig, ohne Zustimmung nicht kommerziell vervielfältigt werden."] },
        { heading: "Zwingende Rechte", paragraphs: ["Diese Hinweise beschränken keine Rechte, die nach anwendbarem Recht nicht ausgeschlossen werden können. Zwingende Verbraucherschutzrechte bleiben unberührt."] },
      ],
    },
    uk: {
      label: "Rechtsinformationen Vereinigtes Königreich",
      title: "Rechtsinformationen zum Vereinigten Königreich",
      blocks: [
        { heading: "Unternehmer", paragraphs: ["Sascha Wittig, handelnd unter Centurion Compliance, Einzelunternehmer in England und Wales.", "Geschäftsanschrift: 5d High Street, St Albans AL3 4ED, Vereinigtes Königreich."] },
        { heading: "Kontakt", paragraphs: ["E-Mail: sascha.wittig@icloud.com", "Telefon: +447537144472"] },
        { heading: "Leistungen und Aufsichtsstatus", paragraphs: ["Centurion Compliance erbringt regulatorische Beratungsleistungen. Rechtsberatung wird nicht erbracht; eine FCA-Zulassung, SEC-Registrierung oder ein sonstiger aufsichtsrechtlicher Status wird nicht behauptet. Ein konkretes Mandat erfordert einen gesonderten schriftlichen Leistungsumfang."] },
        { heading: "Elektronischer Geschäftsverkehr", paragraphs: ["Diese Angaben erfolgen im Sinne der Electronic Commerce (EC Directive) Regulations 2002. Für Fragen zum Unternehmen oder zur Website nutzen Sie bitte die oben genannten Kontaktdaten."] },
      ],
    },
    cookies: {
      label: "Cookie-Richtlinie",
      title: "Cookies und Analyse",
      blocks: [
        { heading: "Notwendige Einstellungen", paragraphs: ["Die Website verwendet ein notwendiges Einstellungs-Cookie, um zu speichern, ob Sie optionale Analyse akzeptiert oder abgelehnt haben. Es bleibt 12 Monate gespeichert. Ihre Sprachwahl kann ebenfalls im Browser gespeichert werden."] },
        { heading: "Optionale Analyse", paragraphs: ["Vercel Analytics wird erst geladen, nachdem Sie optionale Cookies akzeptiert haben. Vor Ihrer Einwilligung findet keine optionale Analyse statt. Bei Ablehnung bleibt die Analyse deaktiviert. Über Cookie-Einstellungen im Footer können Sie Ihre Auswahl jederzeit erneut öffnen."] },
        { heading: "Auswahl ändern", paragraphs: ["Nutzen Sie Cookie-Einstellungen im Footer, um das Auswahlfenster erneut zu öffnen. Wenn Sie Website-Daten in Ihrem Browser löschen, erscheint der Hinweis wieder."] },
      ],
    },
    disclaimer: {
      label: "Regulatorischer Disclaimer",
      title: "Regulatorischer Disclaimer",
      blocks: [
        { heading: "Regulatorische Beratung, keine Rechtsberatung", paragraphs: ["Centurion Compliance erbringt regulatorische Beratungsleistungen, keine Rechtsberatung. Diese Website enthält weder ein Rechtsgutachten noch einen Ersatz für qualifizierte Rechtsberatung."] },
        { heading: "Kein behaupteter Aufsichtsstatus", paragraphs: ["Es wird keine FCA-Zulassung, SEC-Registrierung oder sonstiger aufsichtsrechtlicher Status behauptet. Nennungen von Aufsichtsbehörden und Regelwerken dienen der Information und bedeuten weder Genehmigung noch Empfehlung oder regulierte Tätigkeit."] },
        { heading: "Umfang und Vertrauen auf Inhalte", paragraphs: ["Die Website enthält allgemeine Informationen und ist nicht auf ein bestimmtes Unternehmen oder eine konkrete Entscheidung zugeschnitten. Beratung erfolgt ausschließlich im Rahmen eines gesondert vereinbarten schriftlichen Leistungsumfangs. Die Website ersetzt keine rechtliche, steuerliche oder sonstige professionelle Beratung."] },
      ],
    },
  },
}

export function LegalHub({ initialTab = "impressum" }: { initialTab?: string }) {
  const { language } = useLanguage()
  const tabs = content[language]
  const activeTab: LegalTab = tabOrder.includes(initialTab as LegalTab) ? (initialTab as LegalTab) : "impressum"
  const selected = tabs[activeTab]
  const route = getLegalRoute(language)

  function focusAdjacentTab(event: KeyboardEvent<HTMLAnchorElement>, index: number) {
    const nextIndex = event.key === "ArrowRight" ? (index + 1) % tabOrder.length : event.key === "ArrowLeft" ? (index - 1 + tabOrder.length) % tabOrder.length : -1
    if (nextIndex < 0) return
    event.preventDefault()
    document.getElementById(`legal-tab-${tabOrder[nextIndex]}`)?.focus()
  }

  return <main className="cc-site">
    <Navigation />
    <section className="cc-page-hero">
      <div className="cc-container">
        <p className="cc-eyebrow"><span className="cc-eyebrow-rule" />{language === "de" ? "CENTURION COMPLIANCE · RECHTLICHES" : "CENTURION COMPLIANCE · LEGAL INFORMATION"}</p>
        <h1>{language === "de" ? "Rechtliche Informationen" : "Legal information"}</h1>
        <p>{language === "de" ? "Angaben zum Unternehmen, Datenschutz, Cookies und regulatorische Hinweise." : "Business details, privacy, cookies and regulatory information."}</p>
      </div>
    </section>
    <section className="cc-section cc-paper-section">
      <div className="cc-container">
        <nav className="cc-legal-tabs" role="tablist" aria-label={language === "de" ? "Rechtliche Themen" : "Legal topics"}>
          {tabOrder.map((tab, index) => <Link
            key={tab}
            id={`legal-tab-${tab}`}
            href={`${route}?tab=${tab}`}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls="legal-panel"
            tabIndex={activeTab === tab ? 0 : -1}
            className={`cc-legal-tab${activeTab === tab ? " is-active" : ""}`}
            onKeyDown={(event) => focusAdjacentTab(event, index)}
          >{tabs[tab].label}</Link>)}
        </nav>
        <article id="legal-panel" className="cc-legal-content cc-legal-panel" role="tabpanel" aria-labelledby={`legal-tab-${activeTab}`} tabIndex={0}>
          <h2 className="cc-legal-title">{selected.title}</h2>
          {selected.blocks.map((block) => <section key={block.heading}>
            <h3>{block.heading}</h3>
            {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {block.links?.map((link) => <p key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></p>)}
          </section>)}
        </article>
      </div>
    </section>
    <Footer />
  </main>
}

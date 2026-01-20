"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.private': 'Private',
    'nav.enterprise': 'Enterprise',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.book': 'Book Consultation',
    
    // Hero
    'hero.tagline': 'Crafting AI for Tomorrow',
    'hero.headline': 'AI will shape how we work, live, and protect what matters.',
    'hero.subheadline': 'The question is not if you use AI — but who controls it.',
    'hero.description': 'Private AI puts that control back in your hands.',
    'hero.cta.primary': 'Explore Solutions',
    'hero.cta.secondary': 'Book Consultation',
    
    // Stats
    'stats.privacy': '100% Offline',
    'stats.privacy.desc': 'Air-gapped security',
    'stats.uptime': '99.9% Uptime',
    'stats.uptime.desc': 'Enterprise reliability',
    'stats.support': '24/7 Support',
    'stats.support.desc': 'Global coverage',
    
    // Solutions
    'solutions.title': 'Our Solutions',
    'solutions.subtitle': 'Tailored AI infrastructure for every need',
    
    // Private Section
    'private.title': 'For Private Individuals',
    'private.subtitle': 'Home AI That Stays Home',
    'private.description': 'Premium AI infrastructure designed for high-net-worth individuals who value privacy, sovereignty, and cutting-edge technology.',
    'private.feature1.title': 'Complete Privacy',
    'private.feature1.desc': 'Your data never leaves your premises. Air-gapped by design.',
    'private.feature2.title': 'Personal Assistant',
    'private.feature2.desc': 'Advanced LLM capabilities for research, writing, and analysis.',
    'private.feature3.title': 'Smart Home Integration',
    'private.feature3.desc': 'Integrate with your home systems for intelligent automation.',
    'private.feature4.title': 'Family Security',
    'private.feature4.desc': 'Monitor your perimeter with local threat awareness.',
    
    // Enterprise Section
    'enterprise.title': 'For Enterprise',
    'enterprise.subtitle': 'Mission-Critical AI. Deployed On-Prem.',
    'enterprise.description': 'We design and deploy self-hosted, air-gapped LLM systems for regulated and high-risk environments.',
    'enterprise.feature1.title': 'On-Prem Infrastructure',
    'enterprise.feature1.desc': 'Isolated infrastructure that meets your compliance requirements.',
    'enterprise.feature2.title': 'Audit-Ready',
    'enterprise.feature2.desc': 'Explainable AI with full audit trails and documentation.',
    'enterprise.feature3.title': 'Human-in-the-Loop',
    'enterprise.feature3.desc': 'Built for oversight, not automation without accountability.',
    'enterprise.feature4.title': 'Compliance First',
    'enterprise.feature4.desc': 'Built for GDPR, HIPAA, and sector-specific regulations.',
    
    // Pricing Tiers
    'tier.starter.name': 'Private Home Server',
    'tier.starter.price': 'From £15,000',
    'tier.starter.desc': 'Perfect for individuals seeking AI sovereignty',
    'tier.pro.name': 'Enterprise Standard',
    'tier.pro.price': 'From £35,000',
    'tier.pro.desc': 'For businesses requiring compliant AI infrastructure',
    'tier.ultimate.name': 'Enterprise Elite',
    'tier.ultimate.price': 'From £65,000',
    'tier.ultimate.desc': 'Multiple A100 GPUs for maximum processing power',
    'tier.bespoke.name': 'Bespoke Build',
    'tier.bespoke.price': 'Custom Quote',
    'tier.bespoke.desc': 'Tailored solutions for unique requirements',
    
    // Features
    'feature.gpu': 'High-Performance GPU',
    'feature.llm': 'Local LLM Deployment',
    'feature.storage': 'Secure Storage',
    'feature.support': 'Technical Support',
    'feature.training': 'Staff Training',
    'feature.integration': 'System Integration',
    'feature.multiGpu': 'Multi-GPU Array',
    'feature.redundancy': 'Full Redundancy',
    'feature.dedicated': 'Dedicated Engineer',
    
    // Philosophy
    'philosophy.title': 'A Different Philosophy',
    'philosophy.believe.not': "We don't believe in:",
    'philosophy.not1': '"Free" services funded by your data',
    'philosophy.not2': 'Black-box intelligence',
    'philosophy.not3': 'Forced dependency on external platforms',
    'philosophy.believe.yes': 'We believe in:',
    'philosophy.yes1': 'Sovereignty',
    'philosophy.yes2': 'Transparency',
    'philosophy.yes3': 'Resilience',
    'philosophy.yes4': 'Calm, dependable technology',
    
    // Long Term
    'longterm.title': 'Built for the Long Term',
    'longterm.description': "We don't sell software that expires. We build infrastructure that grows.",
    'longterm.feature1': 'Modular hardware',
    'longterm.feature2': 'Long lifecycle design',
    'longterm.feature3': 'Sustainable energy integration',
    'longterm.feature4': 'Thermal reuse for heating',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to take control of your AI future?',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company (Optional)',
    'contact.form.phone': 'Phone Number',
    'contact.form.interest': 'Area of Interest',
    'contact.form.interest.private': 'Private Home Server',
    'contact.form.interest.enterprise': 'Enterprise Solution',
    'contact.form.interest.bespoke': 'Bespoke Build',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    
    // Booking
    'booking.title': 'Book a Consultation',
    'booking.subtitle': 'Schedule a free consultation with our AI infrastructure experts',
    'booking.form.date': 'Preferred Date',
    'booking.form.time': 'Preferred Time',
    'booking.form.type': 'Consultation Type',
    'booking.form.type.discovery': 'Discovery Call (30 min)',
    'booking.form.type.technical': 'Technical Deep Dive (60 min)',
    'booking.form.type.demo': 'Live Demo (45 min)',
    'booking.form.notes': 'Additional Notes',
    'booking.form.submit': 'Request Consultation',
    'booking.form.success': 'Consultation request sent!',
    
    // Footer
    'footer.tagline': 'Intelligence that stays where life happens.',
    'footer.contact': 'Contact Us',
    'footer.address.uk': 'United Kingdom',
    'footer.address.de': 'Germany',
    'footer.rights': 'All rights reserved.',
    
    // CTA
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
    'cta.viewPricing': 'View Pricing',
    'cta.bookDemo': 'Book Demo',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.private': 'Privat',
    'nav.enterprise': 'Unternehmen',
    'nav.solutions': 'Lösungen',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.book': 'Beratung Buchen',
    
    // Hero
    'hero.tagline': 'KI für Morgen Entwickeln',
    'hero.headline': 'KI wird prägen, wie wir arbeiten, leben und schützen, was wichtig ist.',
    'hero.subheadline': 'Die Frage ist nicht ob Sie KI nutzen — sondern wer sie kontrolliert.',
    'hero.description': 'Private AI gibt Ihnen diese Kontrolle zurück.',
    'hero.cta.primary': 'Lösungen Entdecken',
    'hero.cta.secondary': 'Beratung Buchen',
    
    // Stats
    'stats.privacy': '100% Offline',
    'stats.privacy.desc': 'Air-Gap Sicherheit',
    'stats.uptime': '99,9% Verfügbarkeit',
    'stats.uptime.desc': 'Enterprise Zuverlässigkeit',
    'stats.support': '24/7 Support',
    'stats.support.desc': 'Globale Abdeckung',
    
    // Solutions
    'solutions.title': 'Unsere Lösungen',
    'solutions.subtitle': 'Maßgeschneiderte KI-Infrastruktur für jeden Bedarf',
    
    // Private Section
    'private.title': 'Für Privatpersonen',
    'private.subtitle': 'Heim-KI, Die Zuhause Bleibt',
    'private.description': 'Premium KI-Infrastruktur für vermögende Privatpersonen, die Privatsphäre, Souveränität und modernste Technologie schätzen.',
    'private.feature1.title': 'Vollständige Privatsphäre',
    'private.feature1.desc': 'Ihre Daten verlassen nie Ihr Grundstück. Von Grund auf air-gapped.',
    'private.feature2.title': 'Persönlicher Assistent',
    'private.feature2.desc': 'Fortgeschrittene LLM-Fähigkeiten für Recherche, Schreiben und Analyse.',
    'private.feature3.title': 'Smart Home Integration',
    'private.feature3.desc': 'Integration mit Ihren Haussystemen für intelligente Automatisierung.',
    'private.feature4.title': 'Familiensicherheit',
    'private.feature4.desc': 'Überwachen Sie Ihr Grundstück mit lokaler Bedrohungserkennung.',
    
    // Enterprise Section
    'enterprise.title': 'Für Unternehmen',
    'enterprise.subtitle': 'Unternehmenskritische KI. On-Prem Bereitgestellt.',
    'enterprise.description': 'Wir entwickeln und implementieren selbst gehostete, air-gapped LLM-Systeme für regulierte und risikoreiche Umgebungen.',
    'enterprise.feature1.title': 'On-Prem Infrastruktur',
    'enterprise.feature1.desc': 'Isolierte Infrastruktur, die Ihre Compliance-Anforderungen erfüllt.',
    'enterprise.feature2.title': 'Audit-Bereit',
    'enterprise.feature2.desc': 'Erklärbare KI mit vollständigen Audit-Trails und Dokumentation.',
    'enterprise.feature3.title': 'Mensch-in-der-Schleife',
    'enterprise.feature3.desc': 'Gebaut für Aufsicht, nicht für Automatisierung ohne Verantwortung.',
    'enterprise.feature4.title': 'Compliance Zuerst',
    'enterprise.feature4.desc': 'Gebaut für DSGVO, HIPAA und branchenspezifische Vorschriften.',
    
    // Pricing Tiers
    'tier.starter.name': 'Privater Home Server',
    'tier.starter.price': 'Ab £15.000',
    'tier.starter.desc': 'Perfekt für Personen, die KI-Souveränität suchen',
    'tier.pro.name': 'Enterprise Standard',
    'tier.pro.price': 'Ab £35.000',
    'tier.pro.desc': 'Für Unternehmen, die konforme KI-Infrastruktur benötigen',
    'tier.ultimate.name': 'Enterprise Elite',
    'tier.ultimate.price': 'Ab £65.000',
    'tier.ultimate.desc': 'Mehrere A100 GPUs für maximale Rechenleistung',
    'tier.bespoke.name': 'Maßanfertigung',
    'tier.bespoke.price': 'Individuelles Angebot',
    'tier.bespoke.desc': 'Maßgeschneiderte Lösungen für einzigartige Anforderungen',
    
    // Features
    'feature.gpu': 'Hochleistungs-GPU',
    'feature.llm': 'Lokale LLM-Bereitstellung',
    'feature.storage': 'Sicherer Speicher',
    'feature.support': 'Technischer Support',
    'feature.training': 'Mitarbeiterschulung',
    'feature.integration': 'Systemintegration',
    'feature.multiGpu': 'Multi-GPU Array',
    'feature.redundancy': 'Volle Redundanz',
    'feature.dedicated': 'Dedizierter Ingenieur',
    
    // Philosophy
    'philosophy.title': 'Eine Andere Philosophie',
    'philosophy.believe.not': 'Wir glauben nicht an:',
    'philosophy.not1': '"Kostenlose" Dienste, finanziert durch Ihre Daten',
    'philosophy.not2': 'Black-Box Intelligenz',
    'philosophy.not3': 'Erzwungene Abhängigkeit von externen Plattformen',
    'philosophy.believe.yes': 'Wir glauben an:',
    'philosophy.yes1': 'Souveränität',
    'philosophy.yes2': 'Transparenz',
    'philosophy.yes3': 'Resilienz',
    'philosophy.yes4': 'Ruhige, zuverlässige Technologie',
    
    // Long Term
    'longterm.title': 'Für Die Langfristigkeit Gebaut',
    'longterm.description': 'Wir verkaufen keine Software, die abläuft. Wir bauen Infrastruktur, die wächst.',
    'longterm.feature1': 'Modulare Hardware',
    'longterm.feature2': 'Langlebiges Design',
    'longterm.feature3': 'Nachhaltige Energieintegration',
    'longterm.feature4': 'Wärmewiederverwendung für Heizung',
    
    // Contact
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Bereit, die Kontrolle über Ihre KI-Zukunft zu übernehmen?',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.company': 'Unternehmen (Optional)',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.interest': 'Interessenbereich',
    'contact.form.interest.private': 'Privater Home Server',
    'contact.form.interest.enterprise': 'Enterprise Lösung',
    'contact.form.interest.bespoke': 'Maßanfertigung',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.submit': 'Nachricht Senden',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    
    // Booking
    'booking.title': 'Beratung Buchen',
    'booking.subtitle': 'Vereinbaren Sie ein kostenloses Gespräch mit unseren KI-Infrastruktur-Experten',
    'booking.form.date': 'Bevorzugtes Datum',
    'booking.form.time': 'Bevorzugte Uhrzeit',
    'booking.form.type': 'Beratungsart',
    'booking.form.type.discovery': 'Erstgespräch (30 Min.)',
    'booking.form.type.technical': 'Technische Tiefenanalyse (60 Min.)',
    'booking.form.type.demo': 'Live Demo (45 Min.)',
    'booking.form.notes': 'Zusätzliche Anmerkungen',
    'booking.form.submit': 'Beratung Anfragen',
    'booking.form.success': 'Beratungsanfrage gesendet!',
    
    // Footer
    'footer.tagline': 'Intelligenz, die dort bleibt, wo das Leben stattfindet.',
    'footer.contact': 'Kontaktieren Sie Uns',
    'footer.address.uk': 'Vereinigtes Königreich',
    'footer.address.de': 'Deutschland',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // CTA
    'cta.getStarted': 'Jetzt Starten',
    'cta.learnMore': 'Mehr Erfahren',
    'cta.viewPricing': 'Preise Ansehen',
    'cta.bookDemo': 'Demo Buchen',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

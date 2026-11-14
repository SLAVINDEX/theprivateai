export type Language = "en" | "de"

export interface HomeMessages {
  eyebrow: string
  title: string
  intro: string
  book: string
  whatsapp: string
  image: string
  photo: string
  imageAlt: string
  mandate: string
  mandateTitle: string
  mandateBody: string
  expertise: string
  expertiseTitle: string
  expertiseBody: string
  services: string[]
  jurisdictions: string
  jurisdictionsTitle: string
  countries: Array<[string, string]>
  clients: string
  clientsTitle: string
  clientsBody: string
  clientsList: string[]
  approach: string
  approachTitle: string
  steps: Array<[string, string]>
  why: string
  whyTitle: string
  reasons: Array<[string, string]>
  faq: string
  faqTitle: string
  questions: Array<[string, string]>
  finalEyebrow: string
  finalTitle: string
  finalBody: string
  disclaimer: string
  heroProof: string[]
  scrollCue: string
  allServices: string
  clientsLink: string
}

export interface LocaleMessages {
  metadata: Record<string, { title: string; description: string }>
  home: HomeMessages
  navigation: {
    services: string
    clients: string
    jurisdictions: string
    about: string
    insights: string
    contact: string
    consult: string
    menu: string
    close: string
    language: string
  }
  footer: {
    explore: string
    services: string
    clients: string
    jurisdictions: string
    about: string
    insights: string
    contact: string
    private: string
    legal: string
    impressum: string
    privacy: string
    disclaimerLink: string
    cookie: string
    description: string
    location: string
    rights: string
    disclaimer: string
    home: string
  }
  cookie: {
    title: string
    body: string
    accept: string
    reject: string
    close: string
    label: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    name: string
    company: string
    email: string
    service: string
    choose: string
    options: string[]
    message: string
    consent: string
    submit: string
    privacy: string
    note: string
    legal: string
    emailStatus: string
    validation: string
    whatsapp: string
    whatsappAria: string
    emailSubject: string
    companyLabel: string
    replyEmailLabel: string
    serviceLabel: string
    notProvided: string
  }
  about: {
    profileTitle: string
    profileParagraphs: string[]
    locationTagline: string
  }
}

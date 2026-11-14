export const siteConfig = {
  name: "Centurion Compliance",
  description: "Independent regulatory strategy, assurance and implementation across London, Frankfurt and New York.",
  url: "https://www.centurioncompliance.com",
  whatsappNumber: "4915292618660",
  contactEmail: "sascha.wittig@icloud.com",
  contactPhone: "+49 152 92618660",
  ukContactPhone: "+447537144472",
  legal: {
    ownerName: "Sascha Wittig",
    businessName: "Centurion Compliance (Einzelunternehmer)",
    street: "Schwarzgasse 9",
    postcode: "65191",
    city: "Wiesbaden",
    email: "sascha.wittig@icloud.com",
    phone: "+49 152 92618660",
  },
} as const

export const contactDetails = {
  en: {
    address: "5d High Street, St Albans AL3 4ED",
    phone: "+447537144472",
    location: "Based in St Albans, Hertfordshire; advising clients in London, Frankfurt and New York.",
  },
  de: {
    address: "Schwarzgasse 9, 65191 Wiesbaden, Deutschland",
    phone: "+49 152 92618660",
    location: "Mit Sitz in Wiesbaden, Hessen; Beratung in London, Frankfurt und New York.",
  },
} as const

export function getWhatsAppHref() {
  return `https://wa.me/${siteConfig.whatsappNumber}`
}

export function getLegalRoute(language: "en" | "de") {
  return language === "de" ? "/rechtliches" : "/legal"
}

export const siteConfig = {
  name: "Centurion Compliance",
  description: "Independent regulatory strategy, assurance and implementation across London, Frankfurt and New York.",
  url: "https://www.centurioncompliance.com",
  location: "Wiesbaden, Hessen — advising clients in London, Frankfurt and New York.",
  whatsappNumber: "4915292618660",
  whatsappMessage: "Hello, I'd like to discuss compliance support from Centurion Compliance.",
  contactEmail: "sascha.wittig@icloud.com",
  contactPhone: "+49 152 92618660",
  ukContactPhone: "+44 7537 144472",
  legal: {
    ownerName: "TODO: legal owner name",
    businessName: "TODO: registered business name",
    street: "TODO: registered street address",
    postcode: "TODO: registered postcode",
    city: "Wiesbaden",
    email: "TODO: legal contact email",
    phone: "TODO: legal contact phone",
    vatId: "TODO: VAT identification number, if applicable",
  },
} as const

export function getWhatsAppHref(language: "en" | "de") {
  const message = language === "de"
    ? "Guten Tag, ich möchte die Compliance-Beratung von Centurion Compliance besprechen."
    : siteConfig.whatsappMessage
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

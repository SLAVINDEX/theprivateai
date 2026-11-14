import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { LanguageProvider } from "@/components/language-context"
import { CookieConsent } from "@/components/cookie-consent"
import { ConsentGatedAnalytics } from "@/components/consent-gated-analytics"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { siteConfig } from "@/site.config"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Centurion Compliance | Regulatory confidence for financial firms", template: "%s | Centurion Compliance" },
  description: "Independent regulatory consulting from 5d High Street, St Albans AL3 4ED, advising financial firms across London, Frankfurt and New York.",
  applicationName: siteConfig.name,
  icons: { icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-14%20at%2019.02.48-xAjhJyBWVAK28s1klGhqe48O24TcL3.png" },
  keywords: ["regulatory compliance consulting", "FCA", "BaFin", "Consumer Duty", "MiFID II", "MiCA", "financial services compliance", "St Albans", "Wiesbaden"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Centurion Compliance | Regulatory confidence for financial firms",
    description: "FCA, BaFin and SEC regulatory advice across London, Frankfurt and New York.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/centurion-social.png", width: 1200, height: 630, alt: "Centurion Compliance — regulatory confidence for financial firms." }],
  },
  twitter: { card: "summary_large_image", title: "Centurion Compliance", description: "FCA · BaFin · SEC across London, Frankfurt and New York.", images: ["/centurion-social.png"] },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: "#FAF8F3", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${cormorant.variable} antialiased`}><LanguageProvider>{children}<WhatsAppFloat /><CookieConsent /><ConsentGatedAnalytics /></LanguageProvider></body></html>
}

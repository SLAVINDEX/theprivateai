import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://private-ai-website-analysis.v0.build"),
  title: {
    default: "Centurion Compliance | Independent Regulatory Advisory",
    template: "%s | Centurion Compliance",
  },
  description: "Independent regulatory compliance advisory for financial services firms, covering FCA expectations, Consumer Duty, MiFID II and cross-border SEC considerations.",
  applicationName: "Centurion Compliance",
  keywords: ["regulatory compliance advisory", "FCA consulting", "Consumer Duty", "MiFID II", "SEC compliance advisory", "financial services governance"],
  authors: [{ name: "Centurion Compliance" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Centurion Compliance | Independent Regulatory Advisory",
    description: "Clear, practical compliance advice for financial services firms.",
    type: "website",
    url: "https://private-ai-website-analysis.v0.build",
  },
  twitter: {
    card: "summary",
    title: "Centurion Compliance | Independent Regulatory Advisory",
    description: "Clear, practical compliance advice for financial services firms.",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#070b10",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body className={`${inter.className} antialiased`}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </body>
  </html>
}

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.privateai.de"),
  title: {
    default: "Private Home Intelligence | ThePrivateAI",
    template: "%s | ThePrivateAI",
  },
  description: "Explore a private-home concept combining local AI, considered architecture, resilient infrastructure and human-led property awareness.",
  applicationName: "ThePrivateAI",
  keywords: ["private AI", "private home intelligence", "local AI", "home infrastructure", "AI systems", "private networks"],
  authors: [{ name: "ThePrivateAI" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Private Home Intelligence | ThePrivateAI",
    description: "A home that thinks. A system that protects. An environment you control.",
    type: "website",
    url: "https://www.privateai.de",
    images: [{ url: "/images/private-home-estate.png", alt: "Architectural concept for a private, technology-aware residence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Home Intelligence | ThePrivateAI",
    description: "Explore a considered private-home technology concept.",
    images: ["/images/private-home-estate.png"],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#20231f",
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

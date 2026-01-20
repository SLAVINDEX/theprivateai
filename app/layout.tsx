import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/components/language-context'

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'The Private AI | Premium Offline AI Servers & Consultancy',
  description: 'Enterprise-grade offline AI infrastructure. Air-gapped LLM systems for regulated environments, HNW individuals, and businesses. On-prem AI solutions from £15,000 to £65,000.',
  keywords: ['private AI', 'offline AI servers', 'enterprise AI', 'air-gapped AI', 'on-premise AI', 'A100 GPU', 'LLM infrastructure'],
  authors: [{ name: 'The Private AI' }],
  openGraph: {
    title: 'The Private AI | Premium Offline AI Infrastructure',
    description: 'Take control of your AI. Enterprise-grade offline servers from £15,000.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

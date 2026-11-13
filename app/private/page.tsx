import type { Metadata } from "next"
import { PrivateHomesLanding } from "@/components/private-homes-landing"

const homeRenderUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zua3JLrZrViy1cp7T5Qx7wIcCoRsca.png"

export const metadata: Metadata = {
  title: "Private Homes & Families",
  description: "Bespoke, local-first home intelligence, private communications and resilient infrastructure designed around your residence.",
  alternates: { canonical: "/private" },
  openGraph: {
    title: "Private Homes & Families | ThePrivateAI",
    description: "The future of home privacy is here—and it never leaves your residence.",
    type: "website",
    url: "https://private-ai-website-analysis.v0.build/private",
    images: [{ url: homeRenderUrl, alt: "Cyan-lit contemporary residence with integrated smart-home technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Homes & Families | ThePrivateAI",
    description: "Bespoke home intelligence designed around your property and privacy.",
    images: [homeRenderUrl],
  },
}

export default function PrivatePage() {
  return <PrivateHomesLanding />
}

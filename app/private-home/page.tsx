import type { Metadata } from "next"
import { PrivateHomeExperience } from "@/components/private-home-experience"

export const metadata: Metadata = {
  title: "Private Home Intelligence | ThePrivateAI",
  description: "Explore a considered private home concept combining local AI, property awareness, private networks and resilient infrastructure.",
  alternates: { canonical: "https://private-ai-website-analysis.v0.build/private-home" }
}

export default function PrivateHomePage() {
  return <PrivateHomeExperience />
}

"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"

function hasAnalyticsConsent() {
  return document.cookie.split("; ").some((cookie) => cookie === "cc-cookie-choice=accepted")
}

export function ConsentGatedAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const syncConsent = () => setEnabled(hasAnalyticsConsent())
    syncConsent()
    window.addEventListener("cc-cookie-choice-updated", syncConsent)
    return () => window.removeEventListener("cc-cookie-choice-updated", syncConsent)
  }, [])

  return enabled ? <Analytics /> : null
}

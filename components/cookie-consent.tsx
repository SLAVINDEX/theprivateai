"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"

export function CookieConsent() {
  const { messages } = useLanguage()
  const [visible, setVisible] = useState(false)
  const t = messages.cookie

  useEffect(() => {
    const hasChoice = document.cookie.split("; ").some((cookie) => cookie.startsWith("cc-cookie-choice="))
    setVisible(!hasChoice)
    const openSettings = () => setVisible(true)
    window.addEventListener("cc-open-cookie-settings", openSettings)
    return () => window.removeEventListener("cc-open-cookie-settings", openSettings)
  }, [])

  function saveChoice(choice: "accepted" | "rejected") {
    document.cookie = `cc-cookie-choice=${choice}; Max-Age=31536000; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`
    setVisible(false)
  }

  if (!visible) return null

  return <aside id="cookie-settings" className="cc-cookie-banner" aria-label={t.label}>
    <button className="cc-cookie-close" type="button" onClick={() => saveChoice("rejected")} aria-label={t.close}>×</button>
    <div><p className="cc-eyebrow">CENTURION COMPLIANCE</p><h2>{t.title}</h2><p>{t.body}</p></div>
    <div className="cc-cookie-actions"><button type="button" onClick={() => saveChoice("accepted")}>{t.accept}</button><button type="button" onClick={() => saveChoice("rejected")}>{t.reject}</button></div>
  </aside>
}

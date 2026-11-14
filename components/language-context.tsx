"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import enMessages from "@/messages/en"
import deMessages from "@/messages/de"
import type { Language, LocaleMessages } from "@/messages/types"

const localeMessages: Record<Language, LocaleMessages> = { en: enMessages, de: deMessages }

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  messages: LocaleMessages
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function updateMeta(selector: string, attribute: string, key: string, value: string) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = value
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const pathname = usePathname()
  const messages = localeMessages[language]

  useEffect(() => {
    let storedLanguage: string | null = null
    try {
      storedLanguage = window.localStorage.getItem("cc-language")
    } catch {
      storedLanguage = null
    }
    const cookieLanguage = document.cookie.split("; ").find((cookie) => cookie.startsWith("cc-language="))?.split("=")[1]
    const savedLanguage = storedLanguage ?? cookieLanguage
    if (savedLanguage === "en" || savedLanguage === "de") setLanguageState(savedLanguage)
  }, [])

  useEffect(() => {
    const metadata = messages.metadata[pathname] ?? messages.metadata["/"]
    document.documentElement.lang = language
    document.title = metadata.title
    updateMeta('meta[name="description"]', "name", "description", metadata.description)
    updateMeta('meta[property="og:title"]', "property", "og:title", metadata.title)
    updateMeta('meta[property="og:description"]', "property", "og:description", metadata.description)
    updateMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title)
    updateMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description)
    updateMeta('meta[property="og:locale"]', "property", "og:locale", language === "de" ? "de_DE" : "en_GB")
  }, [language, messages, pathname])

  function setLanguage(nextLanguage: Language) {
    try {
      window.localStorage.setItem("cc-language", nextLanguage)
    } catch {
      // Keep the current session usable when browser storage is unavailable.
    }
    try {
      const secure = window.location.protocol === "https:" ? "; Secure" : ""
      document.cookie = `cc-language=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
    } catch {
      // Keep the current session usable when browser cookies are unavailable.
    }
    setLanguageState(nextLanguage)
  }

  function t(key: string) {
    const value = key.split(".").reduce<unknown>((current, part) => {
      if (typeof current !== "object" || current === null) return undefined
      return (current as Record<string, unknown>)[part]
    }, messages)
    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, messages, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

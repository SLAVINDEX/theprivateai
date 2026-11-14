import { cookies } from "next/headers"
import type { Metadata } from "next"
import enMessages from "@/messages/en"
import deMessages from "@/messages/de"
import type { Language, LocaleMessages } from "@/messages/types"
import { siteConfig } from "@/site.config"

const localeMessages: Record<Language, LocaleMessages> = { en: enMessages, de: deMessages }

export async function getLocaleMetadata(pathname: string, noindex = false): Promise<Metadata> {
  const cookieStore = await cookies()
  const language: Language = cookieStore.get("cc-language")?.value === "de" ? "de" : "en"
  const metadata = localeMessages[language].metadata[pathname] ?? localeMessages[language].metadata["/"]
  const url = new URL(pathname, siteConfig.url).toString()

  return {
    title: { absolute: metadata.title },
    description: metadata.description,
    alternates: { canonical: pathname },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

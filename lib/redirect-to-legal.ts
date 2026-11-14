import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getLegalRoute } from "@/site.config"

export async function redirectToLegal(tab: string): Promise<never> {
  const language = (await cookies()).get("cc-language")?.value === "de" ? "de" : "en"
  redirect(`${getLegalRoute(language)}?tab=${encodeURIComponent(tab)}`)
}

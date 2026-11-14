import { LegalHub } from "@/components/legal-hub"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/legal")
}

export default async function LegalPage({ searchParams }: { searchParams: Promise<{ tab?: string | string[] }> }) {
  const params = await searchParams
  const tab = Array.isArray(params.tab) ? params.tab[0] : params.tab
  return <LegalHub initialTab={tab} />
}

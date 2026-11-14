import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/privacy")
}

export default function PrivacyPage() {
  return <CenturionInfoPage page="privacy" />
}

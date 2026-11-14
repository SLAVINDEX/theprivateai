import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/jurisdictions")
}

export default function JurisdictionsPage() {
  return <CenturionInfoPage page="jurisdictions" />
}

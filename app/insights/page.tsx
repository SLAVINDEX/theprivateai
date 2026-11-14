import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/insights")
}

export default function InsightsPage() {
  return <CenturionInfoPage page="insights" />
}

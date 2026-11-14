import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/terms")
}

export default function TermsPage() {
  return <CenturionInfoPage page="terms" />
}

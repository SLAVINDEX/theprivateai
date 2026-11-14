import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/who-we-help")
}

export default function ClientsPage() {
  return <CenturionInfoPage page="clients" />
}

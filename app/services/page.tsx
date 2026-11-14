import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/services")
}

export default function ServicesPage() {
  return <CenturionInfoPage page="services" />
}

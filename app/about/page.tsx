import { CenturionInfoPage } from "@/components/centurion-info-page"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/about")
}

export default function AboutPage() {
  return <CenturionInfoPage page="about" />
}

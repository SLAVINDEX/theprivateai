import { CenturionHome } from "@/components/centurion-home"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/")
}

export default function HomePage() {
  return <CenturionHome />
}

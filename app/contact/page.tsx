import { CenturionContact } from "@/components/centurion-contact"
import { getLocaleMetadata } from "@/lib/locale-metadata"

export async function generateMetadata() {
  return getLocaleMetadata("/contact")
}

export default function ContactPage() {
  return <CenturionContact />
}

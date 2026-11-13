import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function TermsPage() {
  return <main className="private-home-page min-h-screen">
    <Navigation />
    <section className="px-5 pb-20 pt-36 sm:px-10 sm:pb-28 sm:pt-44 lg:px-16"><div className="mx-auto max-w-[960px]">
      <p className="eyebrow-dark">THEPRIVATEAI · WEBSITE INFORMATION</p>
      <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.04em] text-[#242720] sm:text-6xl">Terms for using this concept site.</h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-[#65675e]">This page covers the website experience only. It is not a customer service agreement, product warranty, quote or legal opinion. The operating business should obtain local legal review and publish its verified legal entity and service terms before offering services.</p>
      <div className="privacy-content mt-10">
        <section><h2>Concept material, not an offer</h2><p>Descriptions, architectural models, system maps, configurator outputs and simulations are illustrative. They do not confirm that a particular product, feature, performance, price, installation date, territory or support service is available. A project can proceed only under a separate written agreement with a verified scope.</p></section>
        <section><h2>Not a construction or security plan</h2><p>The 3D scene is not construction CAD or an engineering drawing. Security, access, cameras, radios, drones, robotics, private AI and power concepts are not connected to real systems and should not be used for emergency, safety or operational decisions. A real proposal requires the appropriate site survey, supplier validation, qualified installers and technical, privacy and legal reviews.</p></section>
        <section><h2>Enquiries and consultation requests</h2><p>Contact and consultation forms prepare an email draft in your email application. You choose whether to send it. This website does not automatically deliver an enquiry, reserve a date or create a calendar event. A consultation is arranged only after it is confirmed directly.</p></section>
        <section><h2>Third-party services and availability</h2><p>The site is hosted on Vercel, which may process technical request information as part of hosting. This website does not run an analytics script or connect to email delivery, calendars, databases, home devices, AI providers or home-security services. No household hardware is controlled by this concept site.</p></section>
        <section><h2>Use of the website</h2><p>Please do not use the site to submit passwords, access codes, confidential documents or information you are not authorised to share. Do not rely on this website as a substitute for professional engineering, security, electrical, aviation, legal or emergency advice.</p></section>
        <section><h2>Questions</h2><p>For questions about this website, email <a href="mailto:ThePrivateAI@protonmail.com">ThePrivateAI@protonmail.com</a>. These informational terms may need to change as the business and its services are confirmed.</p></section>
      </div>
      <p className="mt-8 text-xs text-[#77786f]">Last updated: 13 November 2026</p>
      <Link href="/privacy" className="contact-inline-link">Read the privacy overview <span aria-hidden="true">→</span></Link>
    </div></section>
    <Footer />
  </main>
}

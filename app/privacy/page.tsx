import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

const recipient = "ThePrivateAI@protonmail.com"

export default function PrivacyPage() {
  return <main className="private-home-page min-h-screen">
    <Navigation />
    <section className="px-5 pb-20 pt-36 sm:px-10 sm:pb-28 sm:pt-44 lg:px-16"><div className="mx-auto max-w-[960px]">
      <p className="eyebrow-dark">THEPRIVATEAI · WEBSITE PRIVACY</p>
      <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.04em] text-[#242720] sm:text-6xl">A clear account of what this site does.</h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-[#65675e]">This overview describes the current website experience. It is not a compliance certification or legal advice. The business operating the site should confirm the final controller details, retention periods and applicable notices before production use.</p>
      <div className="privacy-content mt-10">
        <section><h2>Contact and booking requests</h2><p>The contact and consultation forms in this rebuild do not submit details to a website database or email API. Choosing “Prepare email draft” opens your device’s email application with the details you entered. You can review, change, send or discard that draft. No appointment is booked until it is confirmed directly.</p></section>
        <section><h2>Private-home configurator</h2><p>Selections in the concept configurator are held in the page while you use it. They are not saved to an account or a project database. If you choose to prepare an enquiry, the selected brief is placed in a mail draft. The 3D model is illustrative and does not connect to, observe or control a real home.</p></section>
        <section><h2>Hosting and technical data</h2><p>The site is hosted on Vercel, which may process technical request information as part of hosting. This website does not use independent analytics or connect to email delivery, calendars, databases, home devices, AI providers or home-security services. No household hardware is controlled by this concept site.</p><p>When you choose to send an email, your email provider and the recipient process that message under their own terms. Do not include passwords, access codes, private documents or information you do not want to send by email.</p></section>
        <section><h2>Security and legal boundaries</h2><p>Website transport security and provider logging depend on the deployed configuration. This overview does not promise that a system is “air-gapped,” unhackable or compliant with every jurisdiction. Any real home-security, camera, access-control, radio, robotics or personal-data design requires a site-specific technical and legal review, including the rights of household members, staff, guests and neighbours.</p></section>
        <section><h2>Your questions</h2><p>For a privacy question, email <a href={`mailto:${recipient}`}>{recipient}</a>. If you have already sent an email, include enough context for the team to find it, but do not send additional sensitive information. Applicable access, correction, deletion and other rights depend on the circumstances and governing law.</p></section>
      </div>
      <p className="mt-8 text-xs text-[#77786f]">Last updated: 13 November 2026</p>
      <Link href="/contact" className="contact-inline-link">Contact ThePrivateAI <span aria-hidden="true">→</span></Link>
    </div></section>
    <Footer />
  </main>
}

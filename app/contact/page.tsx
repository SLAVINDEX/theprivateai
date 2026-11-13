"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const recipient = "ThePrivateAI@protonmail.com"

export default function ContactPage() {
  const [interest, setInterest] = useState("")
  const [message, setMessage] = useState("")
  const [draftReady, setDraftReady] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setInterest(params.get("interest") === "private" ? "private" : "")
    setMessage((params.get("message") ?? "").slice(0, 8000))
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const value = (key: string) => String(formData.get(key) ?? "").trim()
    const emailBody = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Company: ${value("company") || "Not provided"}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Area of interest: ${value("interest")}`,
      "",
      value("message"),
    ].join("\n")
    const subject = value("interest") === "private" ? "Private Home enquiry" : "ThePrivateAI enquiry"
    window.location.assign(`mailto:${recipient}?${new URLSearchParams({ subject, body: emailBody }).toString()}`)
    setDraftReady(true)
  }

  return <main className="private-home-page min-h-screen">
    <Navigation />
    <section className="contact-hero px-5 pb-12 pt-36 sm:px-10 sm:pb-16 sm:pt-44 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end"><div><p className="eyebrow-dark">A PRIVATE CONVERSATION</p><h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-[#242720] sm:text-6xl">Let’s define what your home actually needs.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-[#65675e]">Share the property, the people who live there and the questions you want answered. We’ll prepare a considered brief—not an assumed product list.</p></div><p className="max-w-md border-l border-[#bda77d] pl-5 font-serif text-xl leading-8 text-[#625640]">No email or calendar connection is enabled. Your details stay in this page until you open an email draft.</p></div>
    </section>
    <section className="contact-content px-5 pb-24 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <aside className="contact-details"><div className="contact-detail-card"><p className="eyebrow-dark">DIRECT CONTACT</p><a href={`mailto:${recipient}`} className="contact-info-link"><Mail aria-hidden="true" /><span>{recipient}</span></a><a href="tel:+447537144472" className="contact-info-link"><Phone aria-hidden="true" /><span>+44 7537 144472</span></a></div><div className="contact-detail-card"><p className="eyebrow-dark">GERMANY</p><div className="contact-info-link"><MapPin aria-hidden="true" /><span>Mainzer Landstraße 341<br />60326 Frankfurt am Main</span></div><a href="tel:+4915292618660" className="contact-info-link"><Phone aria-hidden="true" /><span>+49 1529 2618660</span></a></div><div className="contact-detail-card"><p className="eyebrow-dark">A GOOD FIRST CONVERSATION</p><p className="mt-4 text-sm leading-7 text-[#66675f]">Property location, construction stage, privacy expectations, connectivity, power and support are useful starting points. Avoid sending passwords, access codes or sensitive personal records.</p><Link href="/booking" className="contact-inline-link">Request a consultation <ArrowRight aria-hidden="true" /></Link></div></aside>
      <div className="contact-form-card"><div className="mb-7"><p className="eyebrow-dark">ENQUIRY</p><h2 className="mt-3 font-serif text-3xl text-[#262821]">Start with a few details.</h2></div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-grid"><div className="contact-field"><Label htmlFor="contact-name">Name <span aria-hidden="true">*</span></Label><Input id="contact-name" name="name" autoComplete="name" required maxLength={160} placeholder="Your name" /></div><div className="contact-field"><Label htmlFor="contact-email">Email <span aria-hidden="true">*</span></Label><Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></div><div className="contact-field"><Label htmlFor="contact-company">Company</Label><Input id="contact-company" name="company" autoComplete="organization" maxLength={200} placeholder="Optional" /></div><div className="contact-field"><Label htmlFor="contact-phone">Phone</Label><Input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={60} placeholder="Optional" /></div></div>
          <div className="contact-field"><Label htmlFor="contact-interest">Area of interest <span aria-hidden="true">*</span></Label><Select name="interest" value={interest || undefined} onValueChange={setInterest} required><SelectTrigger id="contact-interest"><SelectValue placeholder="Choose a starting point" /></SelectTrigger><SelectContent><SelectItem value="private">Private home intelligence</SelectItem><SelectItem value="enterprise">Business / enterprise</SelectItem><SelectItem value="bespoke">Other bespoke project</SelectItem></SelectContent></Select></div>
          <div className="contact-field"><Label htmlFor="contact-message">What would you like to discuss? <span aria-hidden="true">*</span></Label><Textarea id="contact-message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required maxLength={8000} rows={7} placeholder="Your property, priorities, constraints or questions…" /></div>
          <Button type="submit" size="lg" className="contact-submit"><span>Prepare email draft</span><Send data-icon="inline-end" /></Button>
          {draftReady && <p className="contact-draft-status" role="status">Your email app should open with a draft for you to review and send. Nothing has been sent by this website. If it did not open, email <a href={`mailto:${recipient}`}>{recipient}</a>.</p>}
          <p className="contact-form-disclaimer">No form data is stored or sent automatically. Choosing “Prepare email draft” opens your email app with the details you provided; you can review, edit or discard it before sending.</p>
        </form>
      </div>
    </div></section>
    <Footer />
  </main>
}

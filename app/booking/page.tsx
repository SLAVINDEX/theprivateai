"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock3, Mail, Video } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const recipient = "ThePrivateAI@protonmail.com"
const meetingTypes = [
  { value: "discovery", title: "Discovery conversation", detail: "Property, household priorities and an initial scope." },
  { value: "technical", title: "Technical discussion", detail: "Architecture, local AI, connectivity and dependencies." },
  { value: "concept", title: "Private-home concept", detail: "Review a property concept and questions for validation." },
]

export default function BookingPage() {
  const [meetingType, setMeetingType] = useState("discovery")
  const [notes, setNotes] = useState("")
  const [draftReady, setDraftReady] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setNotes((params.get("notes") ?? "").slice(0, 5000))
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const value = (key: string) => String(formData.get(key) ?? "").trim()
    const emailBody = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Company: ${value("company") || "Not provided"}`,
      `Requested consultation: ${meetingTypes.find((item) => item.value === meetingType)?.title ?? meetingType}`,
      `Preferred date: ${value("date") || "Flexible"}`,
      `Preferred time: ${value("time") || "Flexible"} (local time at the property)`,
      "",
      `Notes: ${value("notes") || "None provided"}`,
      "",
      "This is a request only. The appointment is not booked until confirmed directly.",
    ].join("\n")
    window.location.assign(`mailto:${recipient}?${new URLSearchParams({ subject: "Private home consultation request", body: emailBody }).toString()}`)
    setDraftReady(true)
  }

  return <main className="private-home-page min-h-screen">
    <Navigation />
    <section className="booking-hero px-5 pb-12 pt-36 sm:px-10 sm:pb-16 sm:pt-44 lg:px-16"><div className="mx-auto max-w-[1000px]"><Link href="/" className="contact-inline-link"><ArrowLeft aria-hidden="true" /> Return to the private home</Link><p className="eyebrow-dark mt-10">PRIVATE CONSULTATION · REQUEST ONLY</p><h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-[#242720] sm:text-6xl">Make room for a thoughtful conversation.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-[#65675e]">Choose a topic and suggest a time. Your request opens as an email draft for you to review; no calendar connection is enabled and no appointment is confirmed by this page.</p></div></section>
    <section className="booking-content px-5 pb-24 sm:px-10 lg:px-16"><div className="mx-auto max-w-[1000px]"><form onSubmit={handleSubmit} className="booking-form-card">
      <fieldset className="booking-type-set"><legend>What would you like to discuss?</legend><div className="booking-type-grid">{meetingTypes.map((type) => <label key={type.value} className="booking-type-option"><input type="radio" name="consultationType" value={type.value} checked={meetingType === type.value} onChange={() => setMeetingType(type.value)} /><span className="booking-type-card"><span className="booking-type-icon">{type.value === "technical" ? <Video aria-hidden="true" /> : type.value === "concept" ? <CalendarDays aria-hidden="true" /> : <Mail aria-hidden="true" />}</span><strong>{type.title}</strong><small>{type.detail}</small></span></label>)}</div></fieldset>
      <div className="contact-form-grid"><div className="contact-field"><Label htmlFor="booking-name">Name <span aria-hidden="true">*</span></Label><Input id="booking-name" name="name" autoComplete="name" required maxLength={160} placeholder="Your name" /></div><div className="contact-field"><Label htmlFor="booking-email">Email <span aria-hidden="true">*</span></Label><Input id="booking-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></div><div className="contact-field"><Label htmlFor="booking-phone">Phone</Label><Input id="booking-phone" name="phone" type="tel" autoComplete="tel" maxLength={60} placeholder="Optional" /></div><div className="contact-field"><Label htmlFor="booking-company">Company</Label><Input id="booking-company" name="company" autoComplete="organization" maxLength={200} placeholder="Optional" /></div><div className="contact-field"><Label htmlFor="booking-date">Preferred date</Label><span className="field-icon-wrap"><Input id="booking-date" name="date" type="date" /><CalendarDays aria-hidden="true" /></span></div><div className="contact-field"><Label htmlFor="booking-time">Preferred time · local to property</Label><span className="field-icon-wrap"><Input id="booking-time" name="time" type="time" /><Clock3 aria-hidden="true" /></span></div><div className="contact-field contact-field-full"><Label htmlFor="booking-notes">Anything else to include?</Label><Textarea id="booking-notes" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)} maxLength={5000} rows={6} placeholder="Property location, priorities, constraints or questions…" /></div></div>
      <Button type="submit" size="lg" className="contact-submit"><span>Prepare consultation request</span><Mail data-icon="inline-end" /></Button>
      {draftReady && <p className="contact-draft-status" role="status">Your email app should open with a request draft for you to review and send. Your appointment is not booked until confirmed directly. If no draft opened, email <a href={`mailto:${recipient}`}>{recipient}</a>.</p>}
      <p className="contact-form-disclaimer">This website does not store your details, send an email automatically, check availability or create a calendar event. You choose whether to send the draft from your email app.</p>
    </form></div></section>
    <Footer />
  </main>
}

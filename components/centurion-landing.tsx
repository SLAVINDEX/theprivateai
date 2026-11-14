import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, FileCheck2, Landmark, LockKeyhole, Scale, ShieldCheck } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EyeBrandMark } from "@/components/eye-brand-mark"

const services = [
  { number: "01", icon: Landmark, title: "Regulatory strategy", description: "Clear-eyed support on FCA permissions, regulatory perimeter, governance and supervisory expectations—grounded in your business model." },
  { number: "02", icon: Scale, title: "Conduct & Consumer Duty", description: "Translate Consumer Duty outcomes into practical governance, fair-value reviews, customer journeys, evidence and ongoing oversight." },
  { number: "03", icon: FileCheck2, title: "Markets & investment firms", description: "MiFID II conduct, product governance, suitability, best execution and control frameworks shaped around your operating model." },
  { number: "04", icon: ShieldCheck, title: "US securities considerations", description: "Structured issue-spotting on SEC-facing obligations and cross-border compliance questions, with US counsel brought in where appropriate." },
]

const principles = [
  { title: "Substance over theatre", text: "Controls should work in the business—not just look convincing in a policy folder." },
  { title: "Evidence by design", text: "Make decisions, ownership and customer outcomes clear enough to stand up to scrutiny." },
  { title: "Senior-level attention", text: "Direct, discreet collaboration with experienced practitioners from first conversation to delivery." },
]

export function CenturionLanding() {
  const bookingHref = `/booking?notes=${encodeURIComponent("I would like to discuss a regulatory compliance advisory engagement with Centurion Compliance.")}`

  return <main className="centurion-page min-h-screen overflow-hidden">
    <Navigation />
    <section className="centurion-hero relative flex min-h-[760px] items-center px-5 pb-20 pt-32 sm:px-10 lg:min-h-[850px] lg:px-16">
      <div className="centurion-grid absolute inset-0" aria-hidden="true" />
      <div className="centurion-orbit centurion-orbit-one" aria-hidden="true" />
      <div className="centurion-orbit centurion-orbit-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div className="max-w-3xl">
          <p className="centurion-kicker flex items-center gap-3"><span className="centurion-mark"><EyeBrandMark size="micro" /></span> INDEPENDENT REGULATORY ADVISORY · LONDON & EUROPE</p>
          <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-[-0.045em] text-[#f0eee8] sm:text-6xl lg:text-[5.7rem]">Clarity in a<br /><span className="centurion-gold">world of complexity.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b7c0c6] sm:text-lg sm:leading-8">Centurion Compliance helps financial services firms turn regulation into confident, workable practice—from FCA expectations and Consumer Duty to MiFID II and cross-border SEC considerations.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={bookingHref} className="centurion-button-primary">Discuss your requirements <ArrowUpRight className="size-4" /></Link>
            <a href="#services" className="centurion-button-secondary">Explore our advisory <ArrowDown className="size-4" /></a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.16em] text-[#9da8b0]"><span className="flex items-center gap-2"><LockKeyhole className="size-3.5 text-[#d9bd7a]" /> Discreet by nature</span><span className="flex items-center gap-2"><Scale className="size-3.5 text-[#d9bd7a]" /> Practical by design</span></div>
        </div>
        <div className="centurion-seal-wrap relative mx-auto flex aspect-square w-full max-w-[450px] items-center justify-center" aria-label="Centurion Compliance orbital crest">
          <div className="centurion-seal-ring centurion-seal-ring-outer" /><div className="centurion-seal-ring centurion-seal-ring-inner" />
          <span className="centurion-seal-cross centurion-seal-cross-horizontal" /><span className="centurion-seal-cross centurion-seal-cross-vertical" />
          <div className="centurion-seal-core"><EyeBrandMark size="hero" className="centurion-eye" /><span className="centurion-seal-word">CENTURION</span><span className="centurion-seal-subword">COMPLIANCE</span></div>
          <span className="centurion-seal-coordinate">51°30′26″N<br />00°07′39″W</span><span className="centurion-seal-index">EST. · PRINCIPLED ADVICE</span>
        </div>
      </div>
      <a href="#mandates" className="centurion-scroll-cue" aria-label="Scroll to regulatory mandates"><span /> SCROLL TO EXPLORE</a>
    </section>

    <section id="mandates" className="centurion-mandates px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[.75fr_1.25fr] md:items-end">
        <div><p className="centurion-eyebrow">01 / THE MANDATE</p><h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight tracking-[-0.03em] text-[#f0eee8] sm:text-5xl">A steady hand through scrutiny.</h2></div>
        <p className="max-w-2xl text-lg leading-8 text-[#aab4bb] md:justify-self-end">Good compliance is not a performance for the regulator. It is a durable way to make sound decisions, treat customers fairly and protect the integrity of your firm. We bring structure to the hard questions—and leave your team with a clearer path forward.</p>
      </div>
      <div className="mx-auto mt-14 grid max-w-[1240px] gap-px border border-white/10 bg-white/10 sm:grid-cols-3">{principles.map((item, index) => <article key={item.title} className="centurion-principle"><span className="centurion-eyebrow">0{index + 1} / PRINCIPLE</span><h3 className="mt-7 font-serif text-2xl text-[#eee9dc]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#9da8b0]">{item.text}</p></article>)}</div>
    </section>

    <section id="services" className="centurion-services px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end"><div><p className="centurion-eyebrow">02 / ADVISORY</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#f0eee8] sm:text-5xl">Regulation, made workable.</h2></div><p className="max-w-md text-sm leading-6 text-[#9da8b0]">Focused advice for firms that value clear accountability, proportionate controls and sound judgement.</p></div>
        <div className="grid sm:grid-cols-2">{services.map(({ number, icon: Icon, title, description }) => <article key={number} className="centurion-service-card"><div className="flex items-start justify-between"><span className="centurion-service-icon"><Icon className="size-5" aria-hidden="true" /></span><span className="centurion-eyebrow">{number} / 04</span></div><h3 className="mt-8 font-serif text-2xl text-[#eee9dc]">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-[#9da8b0]">{description}</p><a href={bookingHref} className="centurion-text-link mt-6">Discuss this area <ArrowRight className="size-3.5" /></a></article>)}</div>
      </div>
    </section>

    <section id="approach" className="centurion-approach px-5 py-20 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="centurion-eyebrow">03 / THE APPROACH</p><h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#f0eee8] sm:text-5xl">Quiet confidence.<br /><span className="centurion-gold">Considered action.</span></h2><p className="mt-5 max-w-lg text-base leading-7 text-[#aab4bb]">From a focused diagnostic to sustained advisory, every engagement starts with context: your permissions, products, customers, governance and ambitions.</p><Link href={bookingHref} className="centurion-button-primary mt-8">Start a conversation <ArrowUpRight className="size-4" /></Link></div><ol className="centurion-steps">{[{ n: "01", t: "Understand", d: "Establish the business context, obligations and outcomes that matter." }, { n: "02", t: "Prioritise", d: "Identify material gaps, dependencies and proportionate next steps." }, { n: "03", t: "Embed", d: "Turn agreed actions into ownership, evidence and sustainable practice." }].map((step) => <li key={step.n}><span className="centurion-step-number">{step.n}</span><div><h3 className="font-serif text-xl text-[#eee9dc]">{step.t}</h3><p className="mt-2 text-sm leading-6 text-[#9da8b0]">{step.d}</p></div></li>)}</ol></div></section>

    <section id="contact" className="centurion-contact px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 border-y border-[#d9bd7a]/25 py-10 sm:flex-row sm:items-center"><div><p className="centurion-eyebrow">A PRIVATE, INITIAL CONVERSATION</p><h2 className="mt-4 font-serif text-3xl text-[#f0eee8] sm:text-4xl">Bring us the difficult question.</h2></div><Link href={bookingHref} className="centurion-button-primary shrink-0">Arrange an introduction <ArrowUpRight className="size-4" /></Link></div><p className="mx-auto mt-8 max-w-[1240px] text-xs leading-5 text-[#7f8a92]">Regulatory advisory only. This website does not represent that Centurion Compliance is authorised by the FCA or registered with the SEC. The scope of any engagement, including whether regulated activity or specialist legal advice is required, must be agreed and verified before work begins. References to regulatory frameworks are informational and do not imply endorsement by a regulator.</p></section>
    <Footer />
  </main>
}

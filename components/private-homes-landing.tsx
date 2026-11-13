import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BatteryCharging, Brain, Car, Check, Database, Eye, Lightbulb, LockKeyhole, Shield, Sun, Thermometer, Wifi, type LucideIcon } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { EyeBrandMark } from "@/components/eye-brand-mark"
import { Footer } from "@/components/footer"

const homeRenderUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zua3JLrZrViy1cp7T5Qx7wIcCoRsca.png"

type LandingFeature = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const homeSystems: LandingFeature[] = [
  { number: "01", title: "Intelligent lighting", description: "Scene lighting, motion cues and circadian routines, with people always able to take manual control.", icon: Lightbulb },
  { number: "02", title: "Climate control", description: "Coordinate heating, cooling and ventilation through the controls already suited to your property.", icon: Thermometer },
  { number: "03", title: "Solar integration", description: "Connect generation, storage and household demand for locally managed energy decisions.", icon: Sun },
  { number: "04", title: "Private Home AI", description: "Run selected AI assistants and home workflows on dedicated infrastructure within your residence.", icon: Brain },
  { number: "05", title: "EV charging", description: "Schedule charging around solar production, tariffs and the energy your household needs.", icon: Car },
  { number: "06", title: "Security monitoring", description: "Bring cameras, perimeter sensors and local alerts together, subject to hardware and local rules.", icon: Eye },
]

const sovereigntyFeatures: LandingFeature[] = [
  { number: "01", title: "Anti-surveillance & drone awareness", description: "Local vision systems can monitor selected airspace and perimeter zones where permitted.", icon: Eye },
  { number: "02", title: "Smart home security", description: "Connect locks, cameras and alerts to on-site controls without making cloud services the default.", icon: Shield },
  { number: "03", title: "Offline family communication", description: "Encrypted voice, text and paging options for outages, subject to compatible mesh hardware.", icon: Wifi },
  { number: "04", title: "Sovereign data vault", description: "Keep selected documents, memories and household records on infrastructure you control.", icon: Database },
  { number: "05", title: "Resilient power", description: "Plan solar, battery storage and low-power modes around the needs of your home.", icon: BatteryCharging },
  { number: "06", title: "Access by design", description: "Choose segmented or air-gapped configurations and define access boundaries before deployment.", icon: LockKeyhole },
]

const sidekickCapabilities = [
  { title: "Security", description: "Scheduled patrols, night monitoring and detection features where supported by the selected hardware." },
  { title: "Non-lethal deterrence", description: "Audio prompts, lights and alerts configured to homeowner consent and local regulations." },
  { title: "Companionship", description: "Optional interactive routines and family-friendly experiences, with controls set by the household." },
]

function FeatureCard({ feature }: { feature: LandingFeature }) {
  const Icon = feature.icon

  return <article className="private-landing-feature-card">
    <div className="private-landing-feature-top"><span>{feature.number}</span><Icon className="size-5" aria-hidden="true" /></div>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </article>
}

function PrivateLandingHero() {
  return <section className="private-landing-hero" aria-labelledby="private-home-title">
    <div className="private-landing-hero-stars" aria-hidden="true" />
    <div className="private-landing-container private-landing-hero-grid">
      <div className="private-landing-hero-copy">
        <p className="private-landing-eyebrow"><span className="private-landing-status" aria-hidden="true" /> PRIVATE HOMES &amp; FAMILIES</p>
        <h1 id="private-home-title">Your home.<br /><span>Private by design.</span></h1>
        <p className="private-landing-hero-lead">The future of home privacy is here—and it never leaves your residence.</p>
        <p className="private-landing-hero-body">A dedicated home server can run local AI, private communications and connected systems on-site. Every project starts with your property, your family and the boundaries you choose.</p>
        <div className="private-landing-actions">
          <Link href="/booking" className="private-landing-primary-action">Request a private consultation <ArrowRight className="size-4" aria-hidden="true" /></Link>
          <Link href="#systems" className="private-landing-secondary-action">Explore the system <span aria-hidden="true">↓</span></Link>
        </div>
        <div className="private-landing-stats" aria-label="Private home approach">
          <div><strong>100%</strong><span>Bespoke by design</span></div>
          <div><strong>0%</strong><span>Cloud dependency for selected local workflows</span></div>
        </div>
      </div>
      <figure className="private-landing-hero-figure">
        <Image src={homeRenderUrl} alt="Contemporary residence at night with cyan-lit smart-home technology integrated into its architecture" fill priority sizes="(max-width: 900px) 100vw, 58vw" className="private-landing-hero-image" />
        <div className="private-landing-hero-image-shade" aria-hidden="true" />
        <div className="private-landing-image-label"><span className="private-landing-status" aria-hidden="true" /> PRIVATE HOME / CONCEPT 01</div>
        <EyeBrandMark size="brand" className="private-landing-hero-eye" />
        <figcaption><span>LOCAL INTELLIGENCE</span><span>Designed around the residence</span></figcaption>
      </figure>
    </div>
    <div className="private-landing-hero-foot" aria-hidden="true"><span>LOCAL FIRST</span><span className="private-landing-hero-foot-line" /><span>HUMAN CONTROL</span></div>
  </section>
}

function HomeSystemsSection() {
  return <section id="systems" className="private-landing-section private-landing-systems" aria-labelledby="private-systems-title">
    <div className="private-landing-container">
      <div className="private-landing-section-heading">
        <div><p className="private-landing-overline">01 / ONE CONNECTED HOME</p><h2 id="private-systems-title">One system.<br /><span>Total control.</span></h2></div>
        <p>Lighting, climate, energy, AI and security are more useful when they work together. We design around your existing architecture and infrastructure—not a fixed stack of products.</p>
      </div>
      <div className="private-landing-feature-grid">{homeSystems.map((feature) => <FeatureCard key={feature.number} feature={feature} />)}</div>
      <p className="private-landing-footnote">Final integrations depend on the property, selected hardware, connectivity and local requirements.</p>
    </div>
  </section>
}

function SidekickSection() {
  return <section id="sidekick" className="private-landing-section private-landing-sidekick" aria-labelledby="private-sidekick-title">
    <div className="private-landing-container private-landing-sidekick-grid">
      <div className="private-landing-sidekick-copy">
        <p className="private-landing-overline">02 / TPA SIDEKICK</p>
        <h2 id="private-sidekick-title">A new kind of<br /><span>family companion.</span></h2>
        <p className="private-landing-section-lead">A bespoke combination of home awareness, non-lethal deterrence and optional companionship—designed to fit the people and routines it serves.</p>
        <div className="private-landing-sidekick-list">{sidekickCapabilities.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
      </div>
      <aside className="private-landing-sidekick-panel" aria-label="TPA Sidekick concept">
        <div className="private-landing-sidekick-glow" aria-hidden="true" />
        <EyeBrandMark size="brand" className="private-landing-sidekick-eye" />
        <p className="private-landing-sidekick-label">TPA / SIDEKICK</p>
        <h3>Present.<br />Aware.<br /><span>Under your control.</span></h3>
        <p className="private-landing-sidekick-note">Every feature is scoped to the home, the selected hardware and local regulations.</p>
      </aside>
    </div>
  </section>
}

function DataSovereigntySection() {
  return <section className="private-landing-section private-landing-sovereignty" aria-labelledby="private-sovereignty-title">
    <div className="private-landing-container">
      <div className="private-landing-section-heading">
        <div><p className="private-landing-overline">03 / YOUR DATA, YOUR RULES</p><h2 id="private-sovereignty-title">Your data.<br /><span>Your control.</span></h2></div>
        <p>Keep intelligence close to home. Select where processing happens, which services connect, and who is allowed to access them.</p>
      </div>
      <div className="private-landing-feature-grid">{sovereigntyFeatures.map((feature) => <FeatureCard key={feature.number} feature={feature} />)}</div>
      <div className="private-landing-sovereignty-note"><LockKeyhole className="size-4" aria-hidden="true" /><p>Local-first architecture can reduce exposure to third-party cloud services. It does not replace device security, updates, safe configuration or household consent.</p></div>
    </div>
  </section>
}

function ResilienceSection() {
  return <section className="private-landing-section private-landing-resilience" aria-labelledby="private-resilience-title">
    <div className="private-landing-container private-landing-resilience-grid">
      <div><p className="private-landing-overline">04 / READY FOR THE UNEXPECTED</p><h2 id="private-resilience-title">A home that can<br /><span>stand on its own.</span></h2><p className="private-landing-section-lead">Solar-ready power, local processing and offline communication options help essential systems remain useful when outside services are unavailable.</p><ul className="private-landing-checklist"><li><Check aria-hidden="true" /> Solar integration ready</li><li><Check aria-hidden="true" /> Battery backup designed for your load</li><li><Check aria-hidden="true" /> Low-power operating modes</li><li><Check aria-hidden="true" /> Optional offline family communications</li></ul></div>
      <div className="private-landing-resilience-stat"><BatteryCharging className="size-7" aria-hidden="true" /><strong>72<span>h</span></strong><p>Backup runtime can be designed toward this target, depending on household load and battery capacity.</p><span className="private-landing-stat-line" /></div>
    </div>
  </section>
}

function BespokeSection() {
  return <section className="private-landing-bespoke" aria-labelledby="private-bespoke-title">
    <div className="private-landing-container private-landing-bespoke-content">
      <p className="private-landing-overline">05 / BESPOKE PRICING</p>
      <h2 id="private-bespoke-title">Every home is different.<br /><span>Start with a conversation.</span></h2>
      <p>Get a considered proposal for your property, family and priorities. Hardware, offline communications, Sidekick integration and support can be scoped together.</p>
      <div className="private-landing-actions private-landing-actions-centered"><Link href="/booking" className="private-landing-primary-action">Request a private consultation <ArrowRight className="size-4" aria-hidden="true" /></Link><a href="mailto:theprivateai@protonmail.com" className="private-landing-secondary-action">Email ThePrivateAI <span aria-hidden="true">↗</span></a></div>
      <p className="private-landing-footnote">Family communication packages can be scoped for 4, 8 or 12 members. Final pricing follows technical discovery.</p>
    </div>
  </section>
}

export function PrivateHomesLanding() {
  return <main className="private-landing min-h-screen">
    <Navigation />
    <PrivateLandingHero />
    <HomeSystemsSection />
    <SidekickSection />
    <DataSovereigntySection />
    <ResilienceSection />
    <BespokeSection />
    <Footer />
  </main>
}

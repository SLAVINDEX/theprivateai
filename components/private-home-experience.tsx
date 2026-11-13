"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowDown, ArrowRight, Check, ChevronDown, CircleDot, Compass, Globe2, House, LockKeyhole, Moon, Network, Rotate3D, Shield, Sun, Wifi, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { EyeBrandMark } from "@/components/eye-brand-mark"
import { Footer } from "@/components/footer"
import { HomeGuardDemo, OfflineMessagingDemo, PrivateServerDemo, ResilienceDemonstration, RobotPatrolDemo } from "@/components/private-home-simulations"
import { PrivateHomeConfigurator } from "@/components/private-home-configurator"
import { markets, systemDetails, type Country, type HomeView, type PropertyModelConfig, type SystemKey } from "@/components/private-home-data"

const PrivateHomeScene = dynamic(() => import("@/components/private-home-scene").then((module) => module.PrivateHomeScene), {
  ssr: false,
  loading: () => <div className="private-home-scene-loading" role="status">Loading the interactive concept model…</div>,
})

const systemOrder: SystemKey[] = ["ai", "network", "security", "robot", "power", "garden", "automation"]
const systemIcons = { ai: LockKeyhole, network: Network, security: Shield, robot: Rotate3D, power: Zap, garden: Wifi, automation: House }
const countryOptions = Object.keys(markets) as Country[]
const viewOptions: { id: HomeView; label: string }[] = [
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interior" },
  { id: "ai", label: "Private AI" },
  { id: "security", label: "Home Guard" },
  { id: "communications", label: "Communications" },
  { id: "power", label: "Power" },
  { id: "integrated", label: "Integrated" },
]
const viewForSystem: Record<SystemKey, HomeView> = { ai: "ai", network: "communications", security: "security", robot: "security", power: "power", garden: "security", automation: "integrated" }
const defaultModelConfig: PropertyModelConfig = {
  homeType: "Private residence",
  propertySize: "200–400 m²",
  floorCount: 2,
  architecturalStyle: "Regional character",
  garden: true,
  garage: true,
  outbuildings: false,
  desiredSystems: ["Private AI assistant", "Local home automation", "Home Guard access sensors", "Solar and backup power"],
}
const scaleForSize: Record<PropertyModelConfig["propertySize"], number> = {
  "To be discussed": 1,
  "Under 200 m²": 0.82,
  "200–400 m²": 1,
  "400–800 m²": 1.12,
  "Over 800 m²": 1.2,
}

export function PrivateHomeExperience() {
  const [country, setCountry] = useState<Country>("Germany")
  const [region, setRegion] = useState<string>(markets.Germany[0])
  const [activeSystem, setActiveSystem] = useState<SystemKey>("ai")
  const [viewMode, setViewMode] = useState<HomeView>("architecture")
  const [roofOpen, setRoofOpen] = useState(false)
  const [night, setNight] = useState(true)
  const [touring, setTouring] = useState(false)
  const [tourStep, setTourStep] = useState(0)
  const [modelConfig, setModelConfig] = useState<PropertyModelConfig>(defaultModelConfig)
  const [sceneReady, setSceneReady] = useState(false)
  const sceneMount = useRef<HTMLDivElement>(null)
  const propertyScale = useMemo(() => scaleForSize[modelConfig.propertySize] * (modelConfig.homeType === "Country estate" ? 1.08 : modelConfig.homeType === "Waterfront home" ? 0.96 : 1), [modelConfig.homeType, modelConfig.propertySize])

  useEffect(() => {
    const target = sceneMount.current
    if (!target || sceneReady) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSceneReady(true)
        observer.disconnect()
      }
    }, { rootMargin: "180px 0px" })
    observer.observe(target)
    return () => observer.disconnect()
  }, [sceneReady])

  useEffect(() => {
    if (!touring) return
    const tour = window.setInterval(() => setTourStep((current) => (current + 1) % systemOrder.length), 3200)
    return () => window.clearInterval(tour)
  }, [touring])

  useEffect(() => {
    if (touring) setActiveSystem(systemOrder[tourStep])
  }, [touring, tourStep])

  const updateModelConfig = (next: Partial<PropertyModelConfig>) => setModelConfig((current) => ({ ...current, ...next }))
  const changeCountry = (value: Country) => {
    setCountry(value)
    setRegion(markets[value][0])
  }
  const stopTour = () => setTouring(false)
  const selectSystem = (value: SystemKey) => {
    setActiveSystem(value)
    setViewMode(viewForSystem[value])
    setRoofOpen(true)
    stopTour()
  }
  const selectView = (value: HomeView) => {
    setViewMode(value)
    setRoofOpen(value !== "architecture")
    stopTour()
    if (value === "ai") setActiveSystem("ai")
    if (value === "security") setActiveSystem("security")
    if (value === "communications") setActiveSystem("network")
    if (value === "power") setActiveSystem("power")
    if (value === "integrated") setActiveSystem("automation")
  }
  const beginTour = () => {
    setTourStep(0)
    setActiveSystem("ai")
    setViewMode("integrated")
    setRoofOpen(true)
    setTouring(true)
    window.setTimeout(() => document.getElementById("design")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
  }
  const activeDetails = systemDetails[activeSystem]
  const activeIndex = systemOrder.indexOf(activeSystem) + 1
  const enquiry = `mailto:ThePrivateAI@protonmail.com?${new URLSearchParams({ subject: `Private home enquiry: ${activeDetails.name}`, body: `Please discuss a ${activeDetails.name} configuration for ${region}, ${country}. I understand that availability, hardware, design, cost and local requirements need to be validated.` }).toString()}`

  return <main className={`private-home-page min-h-screen overflow-hidden ${touring ? "private-home-tour-running" : ""}`}>
    <Navigation />
    <section className="private-home-hero relative flex min-h-[740px] items-center overflow-hidden pb-16 pt-28 sm:min-h-[800px] sm:pb-20 sm:pt-32">
      <Image src="/images/private-home-estate.png" alt="" fill priority sizes="100vw" className="private-home-hero-image object-cover" />
      <div className="private-home-hero-shade absolute inset-0" /><div className="private-home-grain absolute inset-0" aria-hidden="true" /><div className="private-home-hero-starfield absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-16">
        <div className="max-w-[810px]">
          <div className="eyebrow mb-7 flex items-center gap-3"><span className="hero-eye-origin"><EyeBrandMark size="micro" /></span> THEPRIVATEAI · PRIVATE HOME INTELLIGENCE</div>
          <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[0.99] tracking-[-0.045em] text-[#f4efe4] sm:text-6xl lg:text-[5.5rem]">A home that thinks.<br /><span className="text-[#c9b38a]">A system that protects.</span><br /><span className="text-[#f4efe4]/78">An environment you control.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#e3dfd4]/80 sm:text-lg sm:leading-8">Private intelligence, independent communications, considered security and powerful local computing—designed around your property, your family and your right to understand where your data goes. No single technology is assumed to work without its power, network and service dependencies.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={beginTour} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c8b28a] px-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a1d19] transition hover:bg-[#dfc89d]">Design your private home <ArrowDown className="size-4" /></button><Link href={`/booking?notes=${encodeURIComponent("I would like to request a private home consultation about a local-first home intelligence system.")}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition hover:border-[#d4bd91] hover:text-[#e2cda5]">Book a private consultation</Link></div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-[9px] uppercase tracking-[0.16em] text-white/70"><span className="flex items-center gap-2"><LockKeyhole className="size-3.5 text-[#d2ba8d]" /> Local-first, not cloud-only</span><span className="flex items-center gap-2"><Globe2 className="size-3.5 text-[#d2ba8d]" /> Designed around location</span><span className="flex items-center gap-2"><CircleDot className="size-3.5 text-[#d2ba8d]" /> People stay in control</span></div>
        </div>
        <div className="hero-orbital-visual relative order-first flex flex-col items-center justify-center lg:order-none" aria-hidden="true">
          <span className="hero-orbital-horizon" />
          <EyeBrandMark size="hero" className="hero-orbital-eye" />
          <div className="hero-orbital-caption"><span>01 / PRIVATE BY DESIGN</span><p>Intelligence, held within your orbit.</p></div>
        </div>
      </div>
    </section>

    <section className="private-home-intro relative px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><p className="eyebrow-dark">01 / THE PRIVATE HOME</p><h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight tracking-[-0.03em] text-[#242720] sm:text-5xl">Intelligence belongs where life happens.</h2></div><div className="max-w-2xl md:justify-self-end"><p className="text-lg leading-8 text-[#52544d]">Private AI, local networks, home awareness and resilient power are more useful when they work as one considered environment. The starting point is your property—not a fixed stack of products.</p><a href="#design" className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#766143]">Explore the architecture <ArrowRight className="size-4" /></a></div></div>
      <div className="mx-auto mt-14 grid max-w-[1280px] border-y border-[#b9b6aa] sm:grid-cols-3">{[{ n: "01", t: "Local first", d: "Selected services can run on infrastructure within your home." }, { n: "02", t: "Designed together", d: "The system starts with your property, priorities and constraints." }, { n: "03", t: "You remain in charge", d: "Clear controls, understandable boundaries and human decisions." }].map((item) => <div key={item.n} className="flex gap-5 border-b border-[#b9b6aa] py-6 sm:border-b-0 sm:border-r sm:px-7 sm:py-8 last:border-r-0 first:sm:pl-0"><span className="font-serif text-xl text-[#9b8056]">{item.n}</span><div><h3 className="font-serif text-xl text-[#292b25]">{item.t}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-[#686961]">{item.d}</p></div></div>)}</div>
    </section>

    <section id="design" className="private-home-design scroll-mt-16 px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto max-w-[1440px]">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="eyebrow">02 / EXPLORE A PRIVATE HOME</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.035em] text-[#f0ece2] sm:text-5xl">A living system, revealed.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/60">Explore a photorealistic architectural concept, then select a home system to inspect its design brief. Your choices shape the conversation; they do not create construction-ready plans.</p></div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => setNight(true)} aria-pressed={night} className={`model-control ${night ? "model-control-active" : ""}`}><Moon className="size-3.5" /> Evening</button><button type="button" onClick={() => setNight(false)} aria-pressed={!night} className={`model-control ${!night ? "model-control-active" : ""}`}><Sun className="size-3.5" /> Daylight</button></div></div>
      <div className="home-control-grid mt-8">
        <label className="config-field"><span>COUNTRY / MARKET</span><select aria-label="Country or market" value={country} onChange={(event) => changeCountry(event.target.value as Country)}>{countryOptions.map((name) => <option key={name} value={name}>{name}</option>)}</select></label>
        <label className="config-field home-region-field"><span>PROPERTY CONCEPT</span><select aria-label="Property concept" value={region} onChange={(event) => setRegion(event.target.value)}>{markets[country].map((name) => <option key={name} value={name}>{name}</option>)}</select></label>
        <label className="config-field"><span>HOME TYPE</span><select aria-label="Home type" value={modelConfig.homeType} onChange={(event) => updateModelConfig({ homeType: event.target.value as PropertyModelConfig["homeType"] })}>{["Private residence", "Country estate", "Waterfront home", "Retreat / second home"].map((name) => <option key={name}>{name}</option>)}</select></label>
        <label className="config-field"><span>PROPERTY SIZE</span><select aria-label="Approximate property size" value={modelConfig.propertySize} onChange={(event) => updateModelConfig({ propertySize: event.target.value as PropertyModelConfig["propertySize"] })}>{["To be discussed", "Under 200 m²", "200–400 m²", "400–800 m²", "Over 800 m²"].map((name) => <option key={name}>{name}</option>)}</select></label>
        <label className="config-field"><span>ARCHITECTURAL CHARACTER</span><select aria-label="Architectural character" value={modelConfig.architecturalStyle} onChange={(event) => updateModelConfig({ architecturalStyle: event.target.value as PropertyModelConfig["architecturalStyle"] })}>{["Regional character", "Contemporary", "Traditional", "Courtyard"].map((name) => <option key={name}>{name}</option>)}</select></label>
        <label className="config-field"><span>FLOORS</span><select aria-label="Number of floors" value={modelConfig.floorCount} onChange={(event) => updateModelConfig({ floorCount: Number(event.target.value) as PropertyModelConfig["floorCount"] })}><option value={1}>1 floor</option><option value={2}>2 floors</option><option value={3}>3 floors</option></select></label>
      </div>
      <div className="home-feature-toggles" aria-label="Optional property elements">{([{ key: "garden", label: "Garden and grounds" }, { key: "garage", label: "Garage" }, { key: "outbuildings", label: "Outbuildings" }] as const).map(({ key, label }) => <button key={key} type="button" aria-pressed={modelConfig[key]} onClick={() => updateModelConfig({ [key]: !modelConfig[key] })} className={`feature-toggle ${modelConfig[key] ? "feature-toggle-active" : ""}`}><span className="toggle-dot" />{label}</button>)}</div>
      <div className="home-explorer mt-8 grid overflow-hidden rounded-[1.4rem] border border-white/10 lg:grid-cols-[1fr_365px]">
        <div className="home-model relative min-h-[420px] sm:min-h-[560px] lg:min-h-[650px]" ref={sceneMount}>
          <Image src="/images/private-home-estate.png" alt="Photorealistic residence rendering shown while the concept view loads" fill sizes="(max-width: 1024px) 100vw, 70vw" className="model-fallback-image object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_48%,rgba(73,86,72,0.34),rgba(23,28,25,0.94)_78%)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(224,211,186,.12) 1px, transparent 1px),linear-gradient(90deg,rgba(224,211,186,.12) 1px,transparent 1px)", backgroundSize: "52px 52px", maskImage: "linear-gradient(to bottom, black, transparent 88%)" }} aria-hidden="true" />
          {sceneReady && <PrivateHomeScene country={country} region={region} selectedSystem={activeSystem} viewMode={viewMode} roofOpen={roofOpen} night={night} modelConfig={modelConfig} propertyScale={propertyScale} touring={touring} onSelect={selectSystem} />}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 sm:bottom-6 sm:left-6 sm:right-6"><p className="max-w-[310px] text-[9px] leading-5 text-white/55">Select a highlighted point or a system below to explore its brief</p><div className="flex flex-wrap gap-2"><button type="button" onClick={() => { setTouring((value) => !value); setTourStep(0); setViewMode("integrated"); setRoofOpen(true) }} className={`model-control ${touring ? "model-control-active" : ""}`} aria-pressed={touring}>{touring ? "Pause guided tour" : "Start guided tour"}<Compass className="ml-2 size-3.5" /></button><button type="button" onClick={() => { const open = !roofOpen; setRoofOpen(open); if (open) setViewMode("interior"); else if (viewMode === "interior") setViewMode("architecture"); stopTour() }} className={`model-control ${roofOpen ? "model-control-active" : ""}`} aria-pressed={roofOpen}>{roofOpen ? "Show exterior view" : "Explore interior view"}</button><button type="button" onClick={() => setNight((value) => !value)} className="model-icon-control" aria-label={night ? "Switch to daytime" : "Switch to evening"}>{night ? <Sun className="size-4" /> : <Moon className="size-4" />}</button></div></div>
          <div className="absolute right-4 top-4 z-10 hidden items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[8px] uppercase tracking-[0.12em] text-white/75 sm:flex"><span className="model-label-dot" aria-hidden="true" /> PHOTOREALISTIC CONCEPT RENDER</div>
        </div>
        <aside className="home-detail-panel flex flex-col" aria-live="polite" aria-label={`${activeDetails.name} system details`}>
          <div className="border-b border-white/10 p-5 sm:p-6"><p className="eyebrow">SYSTEMS / {String(activeIndex).padStart(2, "0")}</p><div className="mt-4 flex items-center gap-3"><span className="home-detail-icon">{(() => { const Icon = systemIcons[activeSystem]; return <Icon className="size-5" aria-hidden="true" /> })()}</span><div><h3 className="font-serif text-2xl text-[#efe9dd]">{activeDetails.name}</h3><p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-[#c8b28a]">{activeDetails.status}</p></div></div><p className="mt-4 text-sm leading-6 text-white/65">{activeDetails.description}</p></div>
          <div className="flex-1 overflow-y-auto p-5 sm:p-6"><p className="mb-4 text-[8px] uppercase tracking-[0.15em] text-[#c8b28a]">SYSTEM BRIEF · CONCEPT, NOT A SPECIFICATION</p><div className="flex flex-col gap-2">{[["Customer benefits", activeDetails.benefits], ["How it works", activeDetails.howItWorks], ["Where it can be installed", activeDetails.installed], ["Hardware requirements", activeDetails.hardware], ["Software requirements", activeDetails.software], ["Integration requirements", activeDetails.integration], ["Network requirements", activeDetails.network], ["Systems it connects", activeDetails.connects], ["Offline capability", activeDetails.offline], ["Power requirements", activeDetails.power], ["Privacy & security", activeDetails.security], ["Limitations", activeDetails.limitation], ["Regional availability", activeDetails.regional], ["Indicative pricing", activeDetails.pricing]].map(([label, detail]) => <details key={label} className="system-detail-row"><summary>{label}<ChevronDown className="size-3.5" aria-hidden="true" /></summary><p>{detail}</p></details>)}</div></div>
          <div className="border-t border-white/10 p-5 sm:p-6"><p className="text-[9px] leading-5 text-white/45">{activeDetails.availability}. Product, project and local dependencies are confirmed during technical discovery.</p><a href={enquiry} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c8b28a] px-5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#1a1d19] transition hover:bg-[#dfc89d]">Prepare a discussion email <ArrowRight className="size-3.5" /></a></div>
        </aside>
      </div>
      <div className="home-view-bar mt-4" role="group" aria-label="Choose a model view">{viewOptions.map((view) => <button key={view.id} type="button" onClick={() => selectView(view.id)} aria-pressed={viewMode === view.id} className={`home-view-tab ${viewMode === view.id ? "home-view-tab-active" : ""}`}>{view.label}</button>)}</div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">{systemOrder.map((key, index) => { const Icon = systemIcons[key]; return <button type="button" key={key} onClick={() => selectSystem(key)} aria-pressed={activeSystem === key} className={`system-chip ${activeSystem === key ? "system-chip-active" : ""}`}><span className="font-serif text-[9px] text-[#bda77d]">0{index + 1}</span><Icon className="size-4" aria-hidden="true" /><span className="text-left text-[9px] leading-4">{systemDetails[key].name}</span></button> })}</div>
      <p className="mt-5 max-w-4xl text-[9px] leading-5 text-white/42">The photorealistic rendering is illustrative and is not a live installation, validated architecture or security design. Your selections update this concept brief, not the building geometry. Hardware, software, availability, performance, connectivity, radio use, legal requirements and any indicative pricing must be confirmed for the property and selected country.</p>
    </div></section>

    <section className="private-home-server px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto max-w-[1280px]"><div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><p className="eyebrow-dark">03 / PRIVATE AI & MOBILE AWARENESS</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#252720] sm:text-5xl">A purpose for every system.</h2></div><p className="max-w-2xl text-sm leading-7 text-[#66675f]">From a local assistant to a supervised property patrol, each capability has a defined role, a real dependency and a boundary worth understanding.</p></div><div className="grid gap-5 lg:grid-cols-2"><PrivateServerDemo /><RobotPatrolDemo /></div></div></section>

    <section className="private-home-comms px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="eyebrow">04 / COMMUNICATIONS THAT KNOW THEIR LIMITS</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#f0ece2] sm:text-5xl">Local when it can be. Clear when it cannot.</h2><p className="mt-5 text-sm leading-7 text-white/55">Explore the difference between a local home network, a compatible low-bandwidth radio mesh and an external connection. Choose a household scenario and run a labelled simulation.</p><div className="mt-7 flex flex-col gap-3 text-xs text-white/65"><div className="flex items-start gap-3"><Wifi className="mt-0.5 size-4 shrink-0 text-[#c8b28a]" /><span>Local network services may work without internet when home infrastructure and power are available.</span></div><div className="flex items-start gap-3"><Network className="mt-0.5 size-4 shrink-0 text-[#c8b28a]" /><span>Compatible radio mesh can carry short text messages; range, coverage, node placement and lawful settings vary.</span></div><div className="flex items-start gap-3"><Globe2 className="mt-0.5 size-4 shrink-0 text-[#c8b28a]" /><span>Cloud integrations and ordinary push notifications may still need internet or cellular service.</span></div></div></div><OfflineMessagingDemo country={country} /></div></section>

    <section className="private-home-guard px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto max-w-[1280px]"><div className="mb-9 grid gap-5 md:grid-cols-[1fr_0.85fr] md:items-end"><div><p className="eyebrow-dark">05 / HOME GUARD & RESPONSIBLE AWARENESS</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#252720] sm:text-5xl">Observe clearly. Decide as a person.</h2></div><p className="max-w-xl text-sm leading-7 text-[#66675f]">A considered security design separates expected conditions, unusual events and confirmed emergencies. No sensor is proof; no consequential action should happen without appropriate human review.</p></div><HomeGuardDemo /></div></section>

    <section className="private-home-resilience px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto max-w-[1280px]"><div className="mb-9 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><p className="eyebrow-dark">06 / CONNECTIVITY, POWER & EVENT CONTEXT</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#252720] sm:text-5xl">Know what connects. Plan for interruption.</h2></div><p className="max-w-2xl text-sm leading-7 text-[#66675f]">A whole-house technology map, power-mode walkthrough and simulated aerial-awareness event help make dependencies visible. Optional cellular, satellite and radio layers are explicitly not represented as active services.</p></div><ResilienceDemonstration /></div></section>

    <section className="private-home-principles px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto max-w-[1280px]"><div className="max-w-2xl"><p className="eyebrow">07 / PRINCIPLES BEFORE PRODUCTS</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#f0ece2] sm:text-5xl">Privacy is a property decision.</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">{[{ title: "Local first. Honest about the rest.", body: "Selected models and services can run locally. External providers, cloud integrations and remote access have distinct data paths that are explained before they are enabled." }, { title: "Security through clear boundaries.", body: "Networks, accounts, physical access and data retention are considered together. No system is described as unhackable or guaranteed to prevent an incident." }, { title: "Human judgement stays central.", body: "Sensors can provide signals; automation can help triage. People review consequential decisions, and monitoring is designed around consent and applicable local law." }].map((item, index) => <article key={item.title} className="principle-card"><span className="font-serif text-lg text-[#c9b38a]">0{index + 1}</span><h3 className="mt-7 max-w-xs font-serif text-2xl leading-snug text-[#eee9de]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-white/55">{item.body}</p></article>)}</div><p className="mt-5 max-w-4xl text-[9px] leading-5 text-white/45">Privacy, video surveillance, access, radio use, robotics, retention, consent and data-protection obligations vary by country, property, system design and use. Household members, staff, visitors and neighbours must be considered. A project-specific technical and legal review is required; no configuration is automatically represented as compliant.</p></div></section>

    <PrivateHomeConfigurator country={country} region={region} onLocationChange={(nextCountry, nextRegion) => { setCountry(nextCountry); setRegion(nextRegion) }} modelConfig={modelConfig} onModelConfigChange={updateModelConfig} />

    <section className="private-home-last relative overflow-hidden px-5 py-20 text-center sm:px-10 sm:py-28 lg:px-16"><div className="last-glow absolute inset-0" aria-hidden="true" /><div className="relative mx-auto max-w-3xl"><p className="eyebrow">A CONVERSATION, NOT A COMMITMENT</p><h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.035em] text-[#f0ece2] sm:text-6xl">I didn’t realise a home could be designed like this.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">Bring architecture, intelligence, hardware and installation into one conversation—then validate what is genuinely possible.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#configuration" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c8b28a] px-7 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#1a1d19] transition hover:bg-[#dfc89d]">Build a first concept <ArrowRight className="size-4" /></a><Link href={`/booking?notes=${encodeURIComponent("I would like to request a private home consultation about a local-first home intelligence system.")}`} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/30 px-7 text-[9px] font-medium uppercase tracking-[0.14em] text-white transition hover:border-[#d4bd91] hover:text-[#e2cda5]">Request a private consultation <Check className="size-4" /></Link></div></div></section>
    <Footer />
  </main>
}

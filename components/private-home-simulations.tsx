"use client"

import { useEffect, useState } from "react"
import { Activity, ArrowDown, ArrowRight, BatteryCharging, Check, Circle, Cpu, Home, LockKeyhole, Network, Pause, Play, Radio, Shield, ShieldAlert, Wifi, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Country } from "@/components/private-home-data"

const systemOptions = [
  { id: "desktop", label: "Compact desktop", eyebrow: "SMALL FOOTPRINT", copy: "A dedicated workstation concept for a focused set of local tasks.", rows: [["Processor", "Choose for selected model and workload"], ["GPU", "Size to the required local inference"], ["Storage", "Private, encrypted and backed up"], ["Cooling", "Acoustic and thermal review required"]] },
  { id: "tower", label: "Performance tower", eyebrow: "FLEXIBLE EXPANSION", copy: "A configurable tower concept with room for workload-led expansion.", rows: [["Processor", "Validated against target workloads"], ["GPU", "Select after model and speed goals"], ["Memory", "Match to chosen model and concurrency"], ["Cooling", "Thermal, noise and power review"]] },
  { id: "server", label: "Dedicated home server", eyebrow: "LOCAL SERVICES", copy: "A dedicated host for selected household AI, storage and local services.", rows: [["Accelerator", "Optional, workload-dependent"], ["Memory", "Sized to model and service needs"], ["NVMe / storage", "Capacity and retention to be agreed"], ["Power / UPS", "Load calculation and runtime review"]] },
  { id: "rack", label: "Rack installation", eyebrow: "PLANNED INFRASTRUCTURE", copy: "A rack-based concept for a dedicated, serviceable technology area.", rows: [["Server", "Platform and accelerator to validate"], ["Network", "Switching and segmentation plan"], ["Cooling", "Room-level heat and noise study"], ["Resilience", "UPS and priority-load design"]] },
]

export function PrivateServerDemo() {
  const [selected, setSelected] = useState("server")
  const [showDetails, setShowDetails] = useState(false)
  const option = systemOptions.find((item) => item.id === selected) ?? systemOptions[2]
  return <article className="simulation-card private-server-card">
    <div className="simulation-header"><div className="simulation-icon"><Cpu aria-hidden="true" /></div><div><p className="simulation-overline">PRIVATE COMPUTE / CONCEPT ONLY</p><h3>Choose a local AI footprint.</h3></div><span className="simulation-status">NOT LIVE</span></div>
    <p className="simulation-copy">An interactive hardware form-factor selector—without invented component models or performance figures.</p>
    <div className="server-visual" aria-label="Illustrative server enclosure, not a live hardware specification" role="img"><div className="server-rack"><div className="server-rack-heading">THEPRIVATEAI <span>LOCAL</span></div>{Array.from({ length: selected === "desktop" ? 2 : selected === "tower" ? 3 : 4 }, (_, index) => <div key={index} className="server-rack-unit"><span /><span /><span className="server-rack-led" /></div>)}</div><div className="server-status-copy"><p className="simulation-overline">{option.eyebrow}</p><p className="mt-2 font-serif text-xl text-[#ece7db]">{option.label}</p><p className="mt-2 max-w-[190px] text-xs leading-5 text-white/55">{option.copy}</p><div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.13em] text-[#c8b28a]"><Circle className="size-2.5" /> Configure after discovery</div></div></div>
    <div className="mt-5 grid grid-cols-2 gap-2">{systemOptions.map((item) => <button key={item.id} type="button" onClick={() => { setSelected(item.id); setShowDetails(false) }} aria-pressed={selected === item.id} className={`server-option ${selected === item.id ? "server-option-active" : ""}`}>{item.label}</button>)}</div>
    <button type="button" onClick={() => setShowDetails((value) => !value)} aria-expanded={showDetails} className="simulation-disclosure">{showDetails ? "Hide" : "Review"} hardware considerations <ArrowDown className={`size-3.5 transition ${showDetails ? "rotate-180" : ""}`} /></button>
    {showDetails && <dl className="server-spec-list">{option.rows.map(([name, value]) => <div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl>}
    <p className="simulation-footnote">No system, specification, price, availability or operating status is represented as confirmed. Final design depends on your AI requirements, property, electrical capacity, cooling, noise and support expectations.</p>
  </article>
}

const patrolStops = ["Charging area", "Garden boundary", "Driveway", "Main entrance", "Return to dock"]

export function RobotPatrolDemo() {
  const [running, setRunning] = useState(false)
  const [emergencyStop, setEmergencyStop] = useState(false)
  const [stopIndex, setStopIndex] = useState(0)
  const [manualControl, setManualControl] = useState(false)
  const [guestPrivacy, setGuestPrivacy] = useState(true)
  const [schedule, setSchedule] = useState("Illustrative evening route")
  useEffect(() => {
    if (!running || emergencyStop || manualControl) return
    const timer = window.setInterval(() => setStopIndex((current) => (current + 1) % patrolStops.length), 2600)
    return () => window.clearInterval(timer)
  }, [running, emergencyStop, manualControl])
  const activeIndex = Math.min(stopIndex, patrolStops.length - 1)
  const startRoute = () => { setEmergencyStop(false); setManualControl(false); setRunning(true) }
  const engageManual = () => { setRunning(false); setEmergencyStop(false); setManualControl(true) }
  const stopImmediately = () => { setRunning(false); setEmergencyStop(true); setManualControl(false) }
  return <article className="simulation-card robot-card">
    <div className="simulation-header"><div className="simulation-icon"><Activity aria-hidden="true" /></div><div><p className="simulation-overline">ROBOTIC AWARENESS / SIMULATION</p><h3>A supervised route, not a promise.</h3></div><span className="simulation-status">DEMO</span></div>
    <p className="simulation-copy">Explore a candidate patrol schedule with visible zones, a manual handover and an emergency-stop state. No robot is connected.</p>
    <div className="robot-map" aria-label={`Illustrative property patrol. Current point: ${patrolStops[activeIndex]}`}>
      <div className="robot-map-house"><Home aria-hidden="true" /><span>PRIVATE RESIDENCE</span></div><div className="robot-route-line" />{patrolStops.map((stop, index) => <div key={stop} className={`robot-stop robot-stop-${index} ${activeIndex === index && running ? "robot-stop-active" : ""}`}><span className="robot-stop-dot" /><small>{stop}</small></div>)}<div className={`robot-marker ${running ? "robot-marker-moving" : ""}`} data-route-step={activeIndex}><Activity aria-hidden="true" /></div>
    </div>
    <div className="robot-current-state" role="status"><span className={`status-indicator ${emergencyStop ? "status-indicator-danger" : running ? "status-indicator-live" : ""}`} />{emergencyStop ? "Emergency stop · route halted" : manualControl ? "Manual control · simulated handover" : running ? `Illustrative route · ${patrolStops[activeIndex]}` : "Route idle · no platform connected"}</div>
    <label className="config-field mt-4"><span>Illustrative schedule</span><select value={schedule} onChange={(event) => setSchedule(event.target.value)}>{["Illustrative evening route", "Illustrative morning check", "Site-specific schedule to discuss"].map((value) => <option key={value}>{value}</option>)}</select></label>
    <div className="mt-4 grid grid-cols-2 gap-2"><Button type="button" variant="outline" onClick={running ? () => setRunning(false) : startRoute} className="robot-control-button">{running ? <><Pause data-icon="inline-start" /> Pause route</> : <><Play data-icon="inline-start" /> {emergencyStop ? "Reset & run demo" : "Run route demo"}</>}</Button><Button type="button" variant="outline" onClick={manualControl ? startRoute : engageManual} className="robot-control-button">{manualControl ? "Resume route" : "Manual handover"}</Button></div>
    <Button type="button" variant="destructive" onClick={stopImmediately} className="mt-2 w-full"><ShieldAlert data-icon="inline-start" /> Emergency stop demo</Button>
    <div className="robot-privacy-toggle mt-4"><div><p className="text-xs font-medium text-[#e5e0d5]">Guest privacy mode</p><p className="mt-1 text-[10px] leading-4 text-white/45">A concept setting for recording and restricted zones.</p></div><button type="button" aria-pressed={guestPrivacy} onClick={() => setGuestPrivacy((value) => !value)} className={`privacy-switch ${guestPrivacy ? "privacy-switch-on" : ""}`}><span />{guestPrivacy ? "ON" : "OFF"}</button></div>
    <div className="mt-4 grid grid-cols-2 gap-2"><div className="robot-metric"><span>BATTERY / CHARGE</span><strong>Platform telemetry required</strong></div><div className="robot-metric"><span>MAINTENANCE</span><strong>Partner schedule required</strong></div></div>
    <p className="simulation-footnote">The patrol and emergency-stop controls are visual demonstrations only. A real platform requires a site assessment, validated hardware, safe zones, guest privacy, permissions, battery review and manufacturer-supported controls. It observes and reports; it does not confront people.</p>
  </article>
}

const scenarios = {
  "Arriving home": "We’re home. Please turn on the entry lights.",
  "Family check-in": "Please confirm you arrived safely at the house.",
  "Power interruption": "Grid power is down. Check local network status.",
  "Home status": "Is the front door secured for the evening?",
  "Emergency plan": "Please check the household emergency information.",
  "Care reminder": "A family reminder is ready on the home network.",
}

export function OfflineMessagingDemo({ country }: { country: Country }) {
  const [mode, setMode] = useState<"local" | "mesh">("local")
  const [internet, setInternet] = useState(false)
  const [scenario, setScenario] = useState<keyof typeof scenarios>("Arriving home")
  const [messageState, setMessageState] = useState<"idle" | "sent">("idle")
  const steps = mode === "local" ? ["Household member", "Local Wi-Fi", "Home controller", "Paired household device"] : ["Household member", "Paired radio gateway", "Compatible mesh node", "Paired household device"]
  const submitMessage = () => setMessageState("sent")
  return <div className="messaging-demo">
    <div className="messaging-header"><div><p className="simulation-overline">MESSAGE ROUTE / ILLUSTRATIVE ONLY</p><h3>Try a private message.</h3></div><span className="simulation-status">NO NETWORK CONNECTED</span></div>
    <div className="messaging-connection"><div><span className={`status-indicator ${internet ? "status-indicator-live" : ""}`} />Internet / cellular {internet ? "available (demo)" : "unavailable (demo)"}</div><button type="button" onClick={() => { setInternet((value) => !value); setMessageState("idle") }} aria-pressed={internet}>{internet ? "Disable" : "Simulate"} connection</button></div>
    <div className="messaging-mode-row" role="group" aria-label="Message network route"><button type="button" onClick={() => { setMode("local"); setMessageState("idle") }} aria-pressed={mode === "local"} className={mode === "local" ? "messaging-mode-active" : ""}><Wifi aria-hidden="true" /> Local network</button><button type="button" onClick={() => { setMode("mesh"); setMessageState("idle") }} aria-pressed={mode === "mesh"} className={mode === "mesh" ? "messaging-mode-active" : ""}><Radio aria-hidden="true" /> Radio mesh</button></div>
    <label className="config-field messaging-scenario"><span>Household scenario</span><select value={scenario} onChange={(event) => { setScenario(event.target.value as keyof typeof scenarios); setMessageState("idle") }}>{Object.keys(scenarios).map((value) => <option key={value}>{value}</option>)}</select></label>
    <div className="message-phone" aria-label="Illustrative household message interface"><div className="message-phone-top"><span className="phone-speaker" /><span>HOUSEHOLD · PRIVATE</span><span className="message-lock"><LockKeyhole aria-hidden="true" /> {mode === "local" ? "LAN" : "RADIO"}</span></div><div className="message-thread"><div className="message-identity">YOU <span>· household member</span></div><div className="message-bubble message-bubble-outgoing">{scenarios[scenario]}</div><div className="message-identity message-identity-right">{messageState === "sent" ? "PAIRED DEVICE" : "HOUSEHOLD DEVICE"}<span> · {mode === "local" ? "local app" : "paired radio"}</span></div>{messageState === "sent" ? <div className="message-bubble message-bubble-incoming" role="status">Message reached the simulated household device. <span>Simulation only · delivery is not guaranteed.</span></div> : <div className="message-placeholder">A simulated reply will appear here.</div>}</div><div className="message-compose"><span>{mode === "local" ? "Local route ready to simulate" : "Compatible gateway required"}</span><button type="button" onClick={submitMessage} aria-label="Send simulated household message"><ArrowRight aria-hidden="true" /></button></div></div>
    <div className="message-route" aria-label="Message route"><p className="simulation-overline">SIMULATED PATH · {mode === "local" ? "LOCAL NETWORK" : "LOW-BANDWIDTH RADIO"}</p><div className="message-route-steps">{steps.map((step, index) => <div key={step} className="message-route-step"><span className={`message-route-node ${messageState === "sent" ? "message-route-node-active" : ""}`}>{index + 1}</span><span>{step}</span>{index < steps.length - 1 && <ArrowRight className="message-route-arrow" aria-hidden="true" />}</div>)}</div></div>
    <div className="mesh-disclaimer"><Network aria-hidden="true" /><p>{mode === "local" ? "A powered local network can carry compatible local app traffic without internet; the paired device must still be on that local network." : `A compatible, paired gateway and radio nodes are required. Laws, radio bands, settings, range and availability must be validated in ${country} before use.`} Ordinary phone push notifications, broadband and guaranteed delivery are not provided by a radio mesh.</p></div>
  </div>
}

const guardStates = [
  { title: "Quiet / expected", text: "No event in this illustrative scenario. Local sensors and cameras are not connected." },
  { title: "Sensor signal", text: "A simulated entry sensor reports a state change. This alone is not evidence of a person or an incident." },
  { title: "Human review", text: "An authorised person checks the relevant context before deciding whether an alert is appropriate." },
  { title: "Alert reviewed", text: "A person has reviewed this simulated event. No external message, access change or automatic action occurred." },
]

export function HomeGuardDemo() {
  const [stage, setStage] = useState(0)
  return <div className="guard-demo">
    <div className="guard-scenario"><div className={`guard-status-icon ${stage > 0 ? "guard-status-icon-active" : ""}`}>{stage > 0 ? <ShieldAlert aria-hidden="true" /> : <Shield aria-hidden="true" />}</div><div className="min-w-0 flex-1"><p className="simulation-overline">SIMULATED HOUSEHOLD STATUS</p><h3>{guardStates[stage].title}</h3><p className="mt-2 text-sm leading-6 text-[#676960]">{guardStates[stage].text}</p></div><span className="simulation-status">NOT LIVE</span></div>
    <div className="guard-event-card"><div className="guard-event-top"><span>EXAMPLE EVENT</span><span>NOT A REAL SENSOR</span></div><div className="guard-event-body"><div className="guard-event-icon"><Activity aria-hidden="true" /></div><div><p className="font-medium text-[#2d3029]">Front entry · unexpected opening</p><p className="mt-1 text-xs text-[#77786f]">Illustrative event · confirm context with an authorised household member</p></div></div><div className="guard-review-track">{guardStates.map((item, index) => <div key={item.title} className={`guard-review-step ${index <= stage ? "guard-review-step-active" : ""}`}><span>{index < stage ? <Check aria-hidden="true" /> : index + 1}</span><small>{item.title}</small></div>)}</div></div>
    <div className="guard-controls"><p className="text-xs leading-5 text-[#717269]">The walkthrough does not call an emergency service, contact anyone, or control a lock or camera.</p><div className="flex gap-2"><Button type="button" variant="outline" onClick={() => setStage(0)} disabled={stage === 0}>Reset demo</Button><Button type="button" onClick={() => setStage((current) => Math.min(3, current + 1))} disabled={stage === guardStates.length - 1} className="bg-[#292c25] text-[#f4efe4] hover:bg-[#44463e]">{stage < 2 ? "Review next stage" : "Confirm review"}<ArrowRight data-icon="inline-end" /></Button></div></div>
  </div>
}

const powerModes = {
  "Normal operation": { icon: Zap, note: "Grid-connected concept. Local services and external connectivity depend on their respective power and network paths." },
  "Priority UPS loads": { icon: BatteryCharging, note: "A defined subset such as network and server could be prioritised. Runtime is unknown until load, battery and condition are assessed." },
  "Reduced-power plan": { icon: Activity, note: "An installation could prioritise named local services and suspend noncritical loads. Exact behaviour requires a designed operating plan." },
  "Grid interruption": { icon: ShieldAlert, note: "A power cut can disable equipment outside the backup plan. No autonomy or duration is promised in this concept." },
}
const connectivityLayers = [
  { name: "Local Ethernet", type: "CORE", detail: "Inside the property" },
  { name: "Private Wi-Fi", type: "CORE", detail: "Coverage needs a site survey" },
  { name: "Radio mesh", type: "OPTIONAL", detail: "Compatible gateway + lawful local setup" },
  { name: "Internet / cloud", type: "EXTERNAL", detail: "Provider-dependent" },
  { name: "Cellular backup", type: "OPTIONAL", detail: "Coverage + service validation" },
  { name: "Satellite link", type: "OPTIONAL", detail: "Partner, location + approvals required" },
]

export function ResilienceDemonstration() {
  const [powerMode, setPowerMode] = useState<keyof typeof powerModes>("Normal operation")
  const [externalLayer, setExternalLayer] = useState("No external fallback selected")
  const [droneEvent, setDroneEvent] = useState(false)
  const ActivePowerIcon = powerModes[powerMode].icon
  return <div className="resilience-grid">
    <article className="resilience-panel topology-panel"><div className="resilience-panel-heading"><div className="resilience-icon"><Network aria-hidden="true" /></div><div><p className="simulation-overline">WHOLE-HOUSE TECHNOLOGY MAP</p><h3>See the dependencies.</h3></div><span className="simulation-status">CONCEPT</span></div><p className="text-xs leading-5 text-white/48">Connections are illustrative. Optional links are not shown as active or universally available.</p><div className="topology-map" role="img" aria-label="Concept network map: local devices connect over private Ethernet or Wi-Fi to local services; optional mesh and external routes are distinct."><div className="topology-center"><Home aria-hidden="true" /><span>PRIVATE HOME</span></div><div className="topology-nodes">{connectivityLayers.map((item, index) => <div key={item.name} className={`topology-node topology-node-${index}`}><span className={`topology-node-status topology-status-${item.type.toLowerCase()}`}>{item.type}</span><strong>{item.name}</strong><small>{item.detail}</small></div>)}</div><div className="topology-legend"><span><i className="topology-line topology-line-local" />Local</span><span><i className="topology-line topology-line-optional" />Optional / validate</span><span><i className="topology-line topology-line-external" />External dependency</span></div></div><label className="config-field mt-4"><span>Optional external fallback</span><select value={externalLayer} onChange={(event) => setExternalLayer(event.target.value)}>{["No external fallback selected", "Discuss cellular service", "Discuss satellite service", "Discuss both after location review"].map((value) => <option key={value}>{value}</option>)}</select></label><p className="mt-2 text-[10px] leading-5 text-white/40">Selected discussion topic: {externalLayer}. No provider, coverage, equipment or active service is implied.</p></article>

    <article className="resilience-panel power-panel"><div className="resilience-panel-heading"><div className="resilience-icon"><ActivePowerIcon aria-hidden="true" /></div><div><p className="simulation-overline">POWER & OPERATION / ILLUSTRATIVE</p><h3>Plan for the changed state.</h3></div><span className="simulation-status">NOT LIVE</span></div><div className="power-selector" role="group" aria-label="Illustrative power operating state">{Object.keys(powerModes).map((mode) => <button key={mode} type="button" onClick={() => setPowerMode(mode as keyof typeof powerModes)} aria-pressed={powerMode === mode} className={powerMode === mode ? "power-option-active" : ""}>{mode}</button>)}</div><div className="power-state-card"><div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#bca477]"><BatteryCharging aria-hidden="true" className="size-4" /> SELECTED STATE</div><p className="mt-3 font-serif text-xl text-[#eee7d9]">{powerMode}</p><p className="mt-2 text-xs leading-6 text-white/55">{powerModes[powerMode].note}</p></div><div className="power-checklist">{["Network cabinet", "Local AI server", "Essential lighting", "Household communications"].map((item, index) => <div key={item}><span className="power-load-index">0{index + 1}</span><span>{item}</span><span className="power-load-status">ASSESS LOAD</span></div>)}</div><p className="simulation-footnote">Backup power is not represented as installed. A qualified electrical review must define loads, isolation, equipment, safety, runtime and maintenance.</p></article>

    <article className="resilience-panel drone-panel"><div className="resilience-panel-heading"><div className="resilience-icon"><ShieldAlert aria-hidden="true" /></div><div><p className="simulation-overline">AIRSPACE AWARENESS / SENSOR-DEPENDENT</p><h3>Context before escalation.</h3></div><span className="simulation-status">SIMULATION</span></div><p className="text-xs leading-5 text-white/50">Drone awareness depends on the selected lawful sensor and its coverage. Detection is not proof of intent and cannot guarantee every aircraft will be seen.</p><div className={`drone-event-preview ${droneEvent ? "drone-event-detected" : ""}`}><span className="drone-radar-ring drone-radar-ring-one" /><span className="drone-radar-ring drone-radar-ring-two" /><span className="drone-radar-center"><Home aria-hidden="true" /></span><span className={`drone-event-dot ${droneEvent ? "drone-event-dot-visible" : ""}`} /><span className="drone-preview-label">{droneEvent ? "SIMULATED SENSOR EVENT · REVIEW REQUIRED" : "NO SIMULATED EVENT"}</span></div><div className="drone-event-controls"><div><p className="text-xs font-medium text-[#e8e3d7]">Human review workflow</p><p className="mt-1 text-[10px] text-white/45">No jamming, spoofing, interception or automated response.</p></div><Button type="button" variant="outline" onClick={() => setDroneEvent((value) => !value)} className="drone-demo-button">{droneEvent ? "Clear demo" : "Simulate sensor event"}<ArrowRight data-icon="inline-end" /></Button></div><p className="simulation-footnote">Any detection equipment, radio use, camera placement, aviation rules and privacy impact require local legal and technical validation.</p></article>
  </div>
}

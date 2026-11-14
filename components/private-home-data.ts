export const markets = {
  "United Kingdom": ["Cotswolds countryside estate", "London contemporary residence", "Scottish Highlands retreat", "Coastal private home"],
  Germany: ["Contemporary German countryside home", "Bavarian family estate", "Black Forest retreat"],
  Luxembourg: ["Luxembourg countryside house", "Luxembourg hillside retreat"],
  France: ["French contemporary countryside estate", "Provence private residence", "French Riviera residence", "Alpine private residence"],
  Netherlands: ["Dutch contemporary countryside home", "Waterfront residence"],
  International: ["Bespoke private residence · location to confirm"],
} as const

export type Country = keyof typeof markets
export type SystemKey = "ai" | "network" | "security" | "robot" | "power" | "garden" | "automation"
export type HomeView = "architecture" | "interior" | "ai" | "security" | "communications" | "power" | "integrated"
export type ArchitectureStyle = "Regional character" | "Contemporary" | "Traditional" | "Courtyard"
export type PropertyModelConfig = {
  homeType: "Private residence" | "Country estate" | "Waterfront home" | "Retreat / second home"
  propertySize: "To be discussed" | "Under 200 m²" | "200–400 m²" | "400–800 m²" | "Over 800 m²"
  floorCount: 1 | 2 | 3
  architecturalStyle: ArchitectureStyle
  garden: boolean
  garage: boolean
  outbuildings: boolean
  desiredSystems: string[]
}

export type ArchitectureProfile = {
  family: "flat" | "gabled" | "alpine" | "courtyard" | "estate" | "hillside" | "coastal"
  wallColor: string
  roofColor: string
  groundColor: string
  foliageColor: string
  accentColor: string
  water: boolean
}

const regionalProfiles: Record<string, ArchitectureProfile> = {
  "Cotswolds countryside estate": { family: "estate", wallColor: "#b5a88e", roofColor: "#665d53", groundColor: "#344238", foliageColor: "#435548", accentColor: "#c3a979", water: false },
  "London contemporary residence": { family: "flat", wallColor: "#b9b4a7", roofColor: "#4d514b", groundColor: "#363c36", foliageColor: "#566851", accentColor: "#c6ad7e", water: false },
  "Scottish Highlands retreat": { family: "alpine", wallColor: "#918d80", roofColor: "#454b48", groundColor: "#303a35", foliageColor: "#46594d", accentColor: "#b9a77d", water: false },
  "Coastal private home": { family: "coastal", wallColor: "#e0d7c4", roofColor: "#676b62", groundColor: "#586a68", foliageColor: "#738075", accentColor: "#d0b78a", water: true },
  "Contemporary German countryside home": { family: "gabled", wallColor: "#c0b8a8", roofColor: "#59605a", groundColor: "#354139", foliageColor: "#536653", accentColor: "#c6ae7f", water: false },
  "Bavarian family estate": { family: "alpine", wallColor: "#b5aa96", roofColor: "#5b4841", groundColor: "#354137", foliageColor: "#445947", accentColor: "#c7af7e", water: false },
  "Black Forest retreat": { family: "gabled", wallColor: "#867d6d", roofColor: "#383f3c", groundColor: "#2c3832", foliageColor: "#374d40", accentColor: "#bca67b", water: false },
  "Luxembourg countryside house": { family: "estate", wallColor: "#b9ad98", roofColor: "#615c54", groundColor: "#36443a", foliageColor: "#49604c", accentColor: "#c5ad7d", water: false },
  "Luxembourg hillside retreat": { family: "hillside", wallColor: "#a59b88", roofColor: "#515653", groundColor: "#344038", foliageColor: "#4b5f4b", accentColor: "#c4ad7d", water: false },
  "French contemporary countryside estate": { family: "estate", wallColor: "#d0c2aa", roofColor: "#9c705c", groundColor: "#4c503c", foliageColor: "#626b46", accentColor: "#cbb182", water: false },
  "Provence private residence": { family: "courtyard", wallColor: "#d6c3a5", roofColor: "#a66f55", groundColor: "#605b41", foliageColor: "#6b704c", accentColor: "#ccb080", water: false },
  "French Riviera residence": { family: "coastal", wallColor: "#e3d9c8", roofColor: "#766b5d", groundColor: "#536668", foliageColor: "#6c7552", accentColor: "#d0b789", water: true },
  "Alpine private residence": { family: "alpine", wallColor: "#bdb8a9", roofColor: "#4b514e", groundColor: "#35433d", foliageColor: "#455c50", accentColor: "#c6af7f", water: false },
  "Dutch contemporary countryside home": { family: "flat", wallColor: "#c3bdae", roofColor: "#535c57", groundColor: "#455244", foliageColor: "#607154", accentColor: "#c3aa78", water: false },
  "Waterfront residence": { family: "coastal", wallColor: "#d8d0bd", roofColor: "#515a57", groundColor: "#536967", foliageColor: "#738069", accentColor: "#cbb081", water: true },
  "Bespoke private residence · location to confirm": { family: "flat", wallColor: "#bbb3a3", roofColor: "#555b56", groundColor: "#364139", foliageColor: "#52634f", accentColor: "#c7ae7c", water: false },
}

export function architectureProfile(country: Country, region: string, style: ArchitectureStyle): ArchitectureProfile {
  const defaultProfile: ArchitectureProfile = { family: "gabled", wallColor: "#b9ad98", roofColor: "#5a554c", groundColor: "#354239", foliageColor: "#52634f", accentColor: "#c7ae7c", water: false }
  const base = regionalProfiles[region] ?? (country === "France" ? regionalProfiles["French contemporary countryside estate"] : country === "United Kingdom" ? regionalProfiles["Cotswolds countryside estate"] : defaultProfile)
  if (style === "Contemporary") return { ...base, family: "flat", wallColor: country === "France" ? "#d7ccba" : "#c3c0b5", roofColor: "#4d5551", accentColor: "#cfb586" }
  if (style === "Traditional") return { ...base, family: base.family === "alpine" ? "alpine" : "gabled", roofColor: country === "France" ? "#a46f57" : "#56504a" }
  if (style === "Courtyard") return { ...base, family: "courtyard", wallColor: country === "France" ? "#d3bea0" : "#beb39f", roofColor: country === "France" ? "#a56f54" : "#5b554c", water: false }
  return base
}

export const systemDetails: Record<SystemKey, {
  name: string
  status: string
  description: string
  benefits: string
  howItWorks: string
  installed: string
  hardware: string
  software: string
  integration: string
  network: string
  connects: string
  offline: string
  power: string
  security: string
  limitation: string
  regional: string
  pricing: string
  availability: string
}> = {
  ai: {
    name: "Private AI",
    status: "CONFIGURABLE · WORKLOAD-DEPENDENT",
    description: "A locally hosted assistant concept for selected household knowledge, document workflows and private interaction.",
    benefits: "Keep selected household tasks and data within an infrastructure plan you can inspect and control.",
    howItWorks: "A chosen model runs on a household server. A private interface connects to it over the local network; optional external services are assessed separately.",
    installed: "A ventilated, serviceable room or cabinet with suitable heat, noise and network provision.",
    hardware: "A local server, appropriate processor and memory, optional GPU, encrypted storage, cooling and possibly a UPS. Final parts depend on model, users and workload.",
    software: "A supported model runtime, private household interface, access controls, maintenance and a clear model-update policy.",
    integration: "Existing documents and household services only after a compatibility, permission and data-flow review. No third-party service is assumed.",
    network: "A segmented private LAN with secure Wi-Fi or Ethernet access for authorised devices; remote access is optional and reviewed separately.",
    connects: "Authorised household devices, selected private knowledge sources, local storage and explicitly approved home systems.",
    offline: "Selected local functions may remain available without internet when the server, local network and power are operating. Updates and external services may not.",
    power: "Site-specific load, heat and runtime assessment. Consumption depends on chosen hardware and use; no runtime is estimated here.",
    security: "Unique accounts, least-privilege access, encrypted storage where supported, patching, backup and a documented remote-access decision.",
    limitation: "Model capability, language support, response time and capacity vary with the selected model, hardware and workload. It is not a substitute for professional advice or an emergency service.",
    regional: "Hardware, electrical work, radio use, privacy and data-protection requirements need validation in the property’s jurisdiction.",
    pricing: "No quote from this concept. A project range can be prepared after workload, hardware, property and support scope are agreed.",
    availability: "A configurable design concept; suitable models, components, delivery and local support must be confirmed for each project.",
  },
  network: {
    name: "Mesh communications",
    status: "OPTIONAL · REGIONALLY VALIDATED",
    description: "A resilient communications concept that distinguishes local household networking, compatible radio mesh and external services.",
    benefits: "Make dependencies visible and provide a possible low-bandwidth household path where lawful, compatible equipment is available.",
    howItWorks: "Paired gateways and compatible nodes can relay short messages. A separate local LAN may serve devices inside the home. These are different networks.",
    installed: "A central network location plus carefully surveyed indoor and outdoor node positions; range and coverage are site-dependent.",
    hardware: "Router, managed switching and access points for a LAN; compatible gateway, nodes and paired devices for an optional radio mesh.",
    software: "Locally operated network controls and compatible messaging software. Ordinary phone notifications may require internet or cellular service.",
    integration: "Device and app compatibility, encryption, identities and support lifecycle must be confirmed for each chosen platform.",
    network: "Local Ethernet and Wi-Fi can be designed with internet as a separate dependency. Radio mesh uses its own compatible links and settings.",
    connects: "Authorised household devices, local controllers and—only if selected—compatible paired radio gateways and nodes.",
    offline: "Some local LAN services can work without internet if power and local infrastructure remain available. Radio messaging is limited and not guaranteed.",
    power: "The router, access points and every required node need power or a separately engineered backup plan.",
    security: "Network segmentation, secure pairing, authentication, key handling, updates and node access must be designed and maintained.",
    limitation: "Coverage, message delivery, range, throughput, interference and battery life depend on hardware, placement, conditions and local spectrum rules.",
    regional: "Radio frequencies, transmit power, equipment approval, privacy and licensing requirements vary by country and intended use.",
    pricing: "Not priced here. Equipment count, coverage survey, cabling, configuration and ongoing support affect a project estimate.",
    availability: "Local network design is configurable. Radio equipment and lawful settings require region-by-region confirmation.",
  },
  security: {
    name: "Home Guard",
    status: "SITE-SPECIFIC · HUMAN-REVIEWED",
    description: "A layered home-awareness concept that can combine selected entry sensors, cameras and clear human review.",
    benefits: "Give authorised residents understandable context and a deliberate way to review alerts, permissions and household privacy.",
    howItWorks: "Compatible sensors can report a signal to a local controller. Rules and notification paths are configured with household members and reviewed before activation.",
    installed: "Entry points and selected common areas after a physical site review; cameras should be limited to necessary, lawful views.",
    hardware: "Compatible sensors, a local controller, secure network and optional cameras selected after the privacy and coverage review.",
    software: "Local event handling, role-based access, event history and a clear retention, update and alert policy.",
    integration: "Locks, alarms, emergency contacts and outside monitoring are separate choices; no action or provider is assumed.",
    network: "Local network operation may be possible. Remote notifications can depend on internet, mobile service and an external provider.",
    connects: "Selected entry sensors, cameras, local automation and authorised household interfaces.",
    offline: "Locally powered sensors and controller may continue local functions; external notifications, remote access and monitored services may not.",
    power: "Sensor and controller power, battery maintenance and optional backup need assessment. No protection duration is promised.",
    security: "Secure device pairing, separate accounts, access revocation, camera minimisation, retention limits and routine patching.",
    limitation: "Sensors can miss or misclassify events. A signal is not proof of identity, intent, a crime or an emergency; no design guarantees prevention.",
    regional: "Video surveillance, audio, access, consent, retention and emergency escalation laws differ by jurisdiction and property.",
    pricing: "A quote depends on site survey, selected sensors, privacy requirements, cabling, installation and any monitoring service.",
    availability: "Only suitable devices and services with validated local availability and support should be proposed.",
  },
  robot: {
    name: "Robotic awareness",
    status: "OPTIONAL · PLATFORM & SITE REVIEW",
    description: "A potential supervised ground-robot layer for observation of agreed outdoor zones and scheduled routes.",
    benefits: "Explore whether a mobile sensor platform fits an estate’s access, route, charging, privacy and support requirements.",
    howItWorks: "A selected manufacturer-supported robot follows validated routes, returns for charging when supported and provides status through its approved interface.",
    installed: "A surveyed property with accessible, safe routes, suitable storage and charging, approved operating areas and a clear human oversight plan.",
    hardware: "A confirmed mobile platform, charging station, secure dock and any vendor-supported sensors. No model or capability is selected here.",
    software: "Manufacturer-supported controls, route scheduling and authorised alerts, with updates and account support.",
    integration: "Any Home Guard or local network connection is subject to compatible documented interfaces and a separate permission review.",
    network: "Local control may require network coverage across the route. Remote status can depend on external connectivity.",
    connects: "A selected robot, charging dock and explicitly authorised household control interface.",
    offline: "Functions during a network or internet outage are platform-dependent. Do not assume autonomous return, alerts or route continuation.",
    power: "Charge time, runtime, battery condition and weather limits depend on the actual platform and route. Vendor data must be validated.",
    security: "Geofencing, emergency stop, manual handover, guest privacy, safe separation and access control must be established before operation.",
    limitation: "Robots do not confront people. Routes, weather, terrain, sensor accuracy, permissions, pets and visitors limit use; a robot is not a response service.",
    regional: "Import, radio, safety, privacy, operating and support requirements depend on country, manufacturer and property.",
    pricing: "No model or price is confirmed. Equipment, charging, support, site adaptation and maintenance require a separate estimate.",
    availability: "Partner- and platform-dependent. Manufacturer, delivery, warranty and ongoing maintenance need confirmation.",
  },
  power: {
    name: "Power & resilience",
    status: "ENGINEERING & LOAD VALIDATION REQUIRED",
    description: "A household energy and continuity concept that makes priority loads and outage dependencies explicit.",
    benefits: "Understand which selected services matter most during an interruption and what a safe, feasible backup design would need.",
    howItWorks: "A qualified designer reviews the supply, loads, generation, storage, isolation and controls before proposing an operating plan.",
    installed: "Electrical intake, serviceable plant or battery locations, cable routes and any permitted external equipment after site review.",
    hardware: "Potentially solar generation, inverter, battery, UPS or generator; selection depends on the site, legal approval and load analysis.",
    software: "Compatible energy monitoring and safe controls. Integration and remote reporting are optional and provider-dependent.",
    integration: "Electrical, solar, battery, EV, heating and local technology interfaces require compatibility and qualified design checks.",
    network: "Some monitoring may use the home network or a provider connection; core electrical protection must not depend on a web interface.",
    connects: "Agreed priority loads, a qualified energy system and local monitoring where appropriate.",
    offline: "Backup performance depends on islanding capability, isolation, inverter, available energy, safe controls and load selection.",
    power: "All capacities, runtime, generator use, emissions, charging and load priorities are to be calculated by qualified professionals.",
    security: "Electrical installation, fire safety, maintenance, physical access and manufacturer safety requirements are essential.",
    limitation: "No autonomous duration, backup capacity, energy saving, carbon reduction or outage performance is estimated by this concept.",
    regional: "Grid connection, electrical code, fire, planning, building and generation rules vary by location.",
    pricing: "Requires a site visit, load assessment, equipment selection and installation scope before an indicative budget is prepared.",
    availability: "Equipment, approvals, installers and grid services must be confirmed for the address.",
  },
  garden: {
    name: "Perimeter & grounds",
    status: "SITE-SPECIFIC · PRIVACY-AWARE",
    description: "An exterior planning layer for agreed entrances, garden routes, lighting and carefully bounded awareness zones.",
    benefits: "Coordinate the grounds with the house while making coverage, neighbour privacy and visitor experience visible.",
    howItWorks: "A site plan locates paths, gates, lighting and any selected sensor. Zones and alerts are configured only after the privacy review.",
    installed: "Paths, entrances, planting, lighting positions and any necessary boundary features after a physical survey.",
    hardware: "Weather-rated lighting, selected sensors and network access only where the design requires them.",
    software: "Local schedules and household controls, with access and retention policies for any data-capable equipment.",
    integration: "Gate, lighting and access controls depend on compatible equipment, safe manual operation and permissions.",
    network: "Outdoor coverage and cabling need a site survey. Wireless range is not assumed from a floor plan.",
    connects: "Selected garden lighting, access points, Home Guard zones and an optional supervised robot.",
    offline: "Manual operation and local schedules may continue if equipment and local power are available; remote alerts may not.",
    power: "External equipment needs safe power, weather protection and maintenance; backup is a separate design decision.",
    security: "Minimise capture of neighbours and public space, define visitor and staff zones, and document access and retention.",
    limitation: "A conceptual site plan cannot validate line of sight, coverage, sensor performance, drainage, terrain or legal boundaries.",
    regional: "Planning, boundary, landscape, surveillance and privacy requirements vary by property and jurisdiction.",
    pricing: "Depends on property scale, paths, lighting, cabling, equipment and approved planting or boundary work.",
    availability: "Design and installation require site, contractor and local-rule confirmation.",
  },
  automation: {
    name: "Home automation",
    status: "COMPATIBILITY-LED · OWNER-CONTROLLED",
    description: "A local-control concept for selected lighting, climate and household routines with visible manual overrides.",
    benefits: "Reduce fragmented controls and make everyday scenes understandable to residents, visitors and staff.",
    howItWorks: "A compatible controller coordinates selected devices and schedules. Local operation, cloud features and remote access are evaluated separately.",
    installed: "A secure network cabinet plus compatible controllers and devices installed in agreed rooms and service areas.",
    hardware: "A local controller, supported switches, sensors or relays and professionally installed equipment appropriate to the property.",
    software: "Supported control software, clear owner access, configuration backup and an update and recovery process.",
    integration: "Every proposed device and protocol needs documented compatibility, safety review and a clear support owner.",
    network: "A stable local network with appropriately segmented devices; external voice or cloud providers are optional, not assumed.",
    connects: "Selected lighting, climate or household controls and the local home interface.",
    offline: "Local routines may continue if the controller, devices and power are operating. Cloud assistants, remote control and integrations may not.",
    power: "Controller and devices need their intended power. Backup coverage is defined only after load and system review.",
    security: "Separate accounts, least privilege, secure pairing, manual overrides, updates and careful access for staff and guests.",
    limitation: "Compatibility, reliability, local behaviour and vendor support vary by product. No control is assumed for life-safety systems.",
    regional: "Electrical work, safety standards, wireless regulation and product availability require local checks.",
    pricing: "Depends on selected rooms, supported devices, wiring, integration scope, commissioning and aftercare.",
    availability: "A flexible design concept. Compatible products and qualified installation must be confirmed before specification.",
  },
}

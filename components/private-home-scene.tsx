"use client"

import Image from "next/image"
import { architectureProfile, systemDetails, type Country, type HomeView, type PropertyModelConfig, type SystemKey } from "./private-home-data"

const systemMarkers: { id: SystemKey; label: string; left: string; top: string; views: HomeView[] }[] = [
  { id: "ai", label: "Private AI", left: "57%", top: "56%", views: ["ai", "integrated"] },
  { id: "network", label: "Network", left: "34%", top: "54%", views: ["communications", "integrated"] },
  { id: "security", label: "Home Guard", left: "74%", top: "39%", views: ["security", "integrated"] },
  { id: "robot", label: "Robotic awareness", left: "84%", top: "70%", views: ["security", "integrated"] },
  { id: "power", label: "Power & storage", left: "55%", top: "26%", views: ["power", "integrated"] },
  { id: "garden", label: "Perimeter", left: "16%", top: "68%", views: ["security", "integrated"] },
  { id: "automation", label: "Local controls", left: "44%", top: "39%", views: ["integrated"] },
]

const roomMarkers: { label: string; id: SystemKey; left: string; top: string }[] = [
  { label: "Living spaces", id: "automation", left: "36%", top: "60%" },
  { label: "Technology room", id: "ai", left: "59%", top: "57%" },
  { label: "Network cabinet", id: "network", left: "36%", top: "37%" },
  { label: "Private study", id: "security", left: "71%", top: "43%" },
]

export function PrivateHomeScene({ country, region, selectedSystem, viewMode, roofOpen, night, modelConfig, propertyScale, touring, onSelect }: {
  country: Country
  region: string
  selectedSystem: SystemKey
  viewMode: HomeView
  roofOpen: boolean
  night: boolean
  modelConfig: PropertyModelConfig
  propertyScale: number
  touring: boolean
  onSelect: (system: SystemKey) => void
}) {
  const profile = architectureProfile(country, region, modelConfig.architecturalStyle)
  const isCutaway = roofOpen || viewMode === "interior"
  const imageSrc = isCutaway
    ? "/images/private-home-concept-cutaway.png"
    : profile.family === "courtyard"
      ? "/images/private-home-courtyard.png"
      : modelConfig.architecturalStyle === "Contemporary" || modelConfig.homeType === "Waterfront home"
        ? "/images/private-home-estate.png"
        : "/images/private-home-concept-cutaway.png"
  const visibleSystems = systemMarkers.filter(({ id, views }) => {
    if (touring) return id === selectedSystem
    if (viewMode === "architecture" || viewMode === "integrated") return true
    return views.includes(viewMode) || id === selectedSystem
  })
  const selectedSystems = modelConfig.desiredSystems.length
  const propertyScaleFactor = 1 + (propertyScale - 1) * 0.12

  return <div className="private-home-scene-canvas private-home-model-scene" role="region" aria-label="Photorealistic architectural concept visualization with selectable home-system callouts">
    <Image
      src={imageSrc}
      alt={`${modelConfig.architecturalStyle} ${modelConfig.homeType.toLowerCase()} concept for ${region}, shown as an architectural rendering`}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 70vw"
      className={`private-home-model-image ${night ? "private-home-model-image-night" : ""}`}
      style={{ transform: `scale(${propertyScaleFactor})` }}
    />
    <div className={`private-home-model-shade ${night ? "private-home-model-shade-night" : ""}`} aria-hidden="true" />
    <div className="private-home-model-heading">
      <span className="private-home-model-kicker"><span className="private-home-model-status" />{country} · {isCutaway ? "INTERIOR STUDY" : "ARCHITECTURE STUDY"}</span>
      <h3>{region}</h3>
      <p>{modelConfig.homeType} · {modelConfig.propertySize} · {modelConfig.floorCount} {modelConfig.floorCount === 1 ? "floor" : "floors"}</p>
    </div>
    <div className="private-home-model-badge" aria-label={`${selectedSystems} selected systems`}>
      <span>CONCEPT VIEW</span>
      <span>{selectedSystems.toString().padStart(2, "0")} SYSTEMS SELECTED</span>
    </div>
    {viewMode === "interior" ? roomMarkers.map(({ id, label, left, top }) => <button
      key={label}
      type="button"
      className={`private-home-model-room ${selectedSystem === id ? "private-home-model-room-active" : ""}`}
      style={{ left, top }}
      onClick={() => onSelect(id)}
      aria-label={`Explore ${label}`}
      aria-pressed={selectedSystem === id}
    >{label}</button>) : visibleSystems.map(({ id, label, left, top }) => <button
      key={id}
      type="button"
      className={`private-home-model-marker ${selectedSystem === id ? "private-home-model-marker-active" : ""}`}
      style={{ left, top }}
      onClick={() => onSelect(id)}
      aria-label={`Explore ${label}`}
      aria-pressed={selectedSystem === id}
      title={systemDetails[id].description}
    ><span className="private-home-model-marker-dot" aria-hidden="true" /><span className="private-home-model-marker-label">{label}</span></button>)}
    <div className="scene-accessibility-note">Photorealistic concept rendering · not construction CAD</div>
  </div>
}

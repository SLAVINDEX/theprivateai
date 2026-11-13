"use client"

import Image from "next/image"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import { Component, Suspense, useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react"
import { MathUtils, type Group } from "three"
import { architectureProfile, type Country, type HomeView, type PropertyModelConfig, type SystemKey } from "./private-home-data"

const systemHotspots: { id: SystemKey; label: string; position: [number, number, number]; views: HomeView[] }[] = [
  { id: "ai", label: "AI server room", position: [0.45, 0.95, 0.55], views: ["ai", "integrated"] },
  { id: "network", label: "Network", position: [-1.55, 1.2, -0.55], views: ["communications", "integrated"] },
  { id: "security", label: "Home Guard", position: [1.7, 1.95, 1.55], views: ["security", "integrated"] },
  { id: "robot", label: "Robotic awareness", position: [2.85, 0.45, 2.15], views: ["security", "integrated"] },
  { id: "power", label: "Power & storage", position: [-1.9, 0.55, -1.7], views: ["power", "integrated"] },
  { id: "garden", label: "Perimeter", position: [-3.4, 1.05, 1.4], views: ["security", "integrated"] },
  { id: "automation", label: "Local controls", position: [0.8, 1.2, 1.4], views: ["integrated"] },
]

const roomPoints: { label: string; id: SystemKey; position: [number, number, number] }[] = [
  { label: "Living spaces", id: "automation", position: [-1.25, 0.35, 0.35] },
  { label: "Technology room", id: "ai", position: [0.8, 0.42, -0.72] },
  { label: "Network cabinet", id: "network", position: [-1.05, 1.85, -0.6] },
  { label: "Private study", id: "security", position: [1.1, 1.85, 0.3] },
]

function Tree({ position, scale = 1, foliageColor, olive = false }: { position: [number, number, number]; scale?: number; foliageColor: string; olive?: boolean }) {
  return <group position={position} scale={scale}>
    <mesh position={[0, 0.42, 0]} castShadow><cylinderGeometry args={[0.09, 0.13, 0.82, 8]} /><meshStandardMaterial color="#756148" roughness={1} /></mesh>
    {olive ? <><mesh position={[0, 1.12, 0]} castShadow><sphereGeometry args={[0.64, 10, 8]} /><meshStandardMaterial color={foliageColor} roughness={0.95} /></mesh><mesh position={[0.27, 1.55, 0.1]} castShadow><sphereGeometry args={[0.38, 10, 8]} /><meshStandardMaterial color={foliageColor} roughness={0.95} /></mesh></> : <><mesh position={[0, 1.08, 0]} castShadow><coneGeometry args={[0.58, 1.42, 7]} /><meshStandardMaterial color={foliageColor} roughness={0.96} /></mesh><mesh position={[0, 1.72, 0]} castShadow><coneGeometry args={[0.4, 1.1, 7]} /><meshStandardMaterial color={foliageColor} roughness={0.96} /></mesh></>}
  </group>
}

function BuildingFloor({ index, floorCount, floorHeight, floorGap, width, depth, cutaway, wallColor, night }: {
  index: number; floorCount: number; floorHeight: number; floorGap: number; width: number; depth: number; cutaway: boolean; wallColor: string; night: boolean
}) {
  const levelY = 0.17 + index * (floorHeight + floorGap + (cutaway && index > 0 ? 0.52 : 0))
  return <group position={[0, levelY, 0]}>
    <mesh castShadow receiveShadow position={[0, floorHeight / 2, 0]}><boxGeometry args={[width, floorHeight, depth]} /><meshStandardMaterial color={wallColor} roughness={0.76} transparent={cutaway} opacity={cutaway ? 0.23 : 1} depthWrite={!cutaway} /></mesh>
    <mesh receiveShadow position={[0, 0.13, 0]}><boxGeometry args={[width - 0.14, 0.07, depth - 0.14]} /><meshStandardMaterial color={index % 2 ? "#a6977d" : "#b6a88e"} roughness={0.88} /></mesh>
    <mesh castShadow position={[-0.55, 0.62, depth / 2 + 0.025]}><boxGeometry args={[1.2, 0.48, 0.04]} /><meshStandardMaterial color={night ? "#8d9d91" : "#6e8278"} metalness={0.12} roughness={0.24} emissive={night ? "#35463c" : "#000000"} emissiveIntensity={0.75} /></mesh>
    <mesh position={[-0.55, 0.62, depth / 2 + 0.052]}><boxGeometry args={[0.035, 0.52, 0.035]} /><meshStandardMaterial color="#bdad92" metalness={0.5} /></mesh>
    <mesh castShadow position={[1.25, 0.62, depth / 2 + 0.025]}><boxGeometry args={[0.92, 0.48, 0.04]} /><meshStandardMaterial color={night ? "#87968a" : "#77897f"} metalness={0.12} roughness={0.24} emissive={night ? "#35463c" : "#000000"} emissiveIntensity={0.75} /></mesh>
    {index === 0 && <mesh castShadow position={[0.42, 0.53, depth / 2 + 0.035]}><boxGeometry args={[0.42, 1.0, 0.055]} /><meshStandardMaterial color="#665744" roughness={0.62} /></mesh>}
    {cutaway && <group>
      <mesh position={[-0.65, 0.34, -0.15]} castShadow><boxGeometry args={[1.2, 0.42, 0.68]} /><meshStandardMaterial color="#716758" roughness={0.82} /></mesh>
      <mesh position={[-0.65, 0.58, -0.15]}><boxGeometry args={[1.24, 0.06, 0.72]} /><meshStandardMaterial color="#c4b69d" roughness={0.8} /></mesh>
      <mesh position={[0.8, 0.25, -0.65]} castShadow><boxGeometry args={[0.9, 0.24, 0.58]} /><meshStandardMaterial color="#535955" roughness={0.5} /></mesh>
      <mesh position={[0.8, 0.4, -0.65]}><boxGeometry args={[0.58, 0.08, 0.4]} /><meshStandardMaterial color="#b99e6f" roughness={0.5} /></mesh>
      <mesh position={[0.02, 0.65, 0]}><boxGeometry args={[0.055, 1.08, depth - 0.24]} /><meshStandardMaterial color="#9d917a" roughness={0.9} transparent opacity={0.46} /></mesh>
      <Html position={[0, 0.32, 0]} center distanceFactor={9} occlude={false}><span className="scene-floor-label">{index === 0 ? "GROUND FLOOR · LIVING + SERVICES" : index === floorCount - 1 ? "UPPER FLOOR · PRIVATE ROOMS" : `FLOOR ${index + 1} · HOUSEHOLD`}</span></Html>
    </group>}
  </group>
}

function RobotDog({ active }: { active: boolean }) {
  const robot = useRef<Group>(null)
  useFrame(({ clock }) => {
    if (robot.current && active) robot.current.position.x = 2.82 + Math.sin(clock.elapsedTime * 0.42) * 0.18
  })
  return <group ref={robot} position={[2.82, 0.33, 1.9]}>
    <mesh castShadow><boxGeometry args={[0.78, 0.28, 0.5]} /><meshStandardMaterial color="#343936" metalness={0.44} roughness={0.38} /></mesh>
    <mesh position={[0.18, 0.2, 0.15]} castShadow><boxGeometry args={[0.38, 0.21, 0.3]} /><meshStandardMaterial color="#555d57" metalness={0.48} roughness={0.36} /></mesh>
    <mesh position={[0.21, 0.2, 0.32]}><sphereGeometry args={[0.055, 16, 12]} /><meshStandardMaterial color="#cfb07b" emissive="#cfb07b" emissiveIntensity={1.1} /></mesh>
    {[-1, 1].flatMap((x) => [-1, 1].map((z) => <group key={`${x}-${z}`} position={[x * 0.29, -0.03, z * 0.18]}><mesh position={[0, -0.16, 0]} rotation={[0, 0, x * -0.12]} castShadow><boxGeometry args={[0.11, 0.34, 0.11]} /><meshStandardMaterial color="#6a726d" metalness={0.55} roughness={0.36} /></mesh><mesh position={[0, -0.32, 0]} castShadow><boxGeometry args={[0.16, 0.1, 0.15]} /><meshStandardMaterial color="#282d2a" metalness={0.3} roughness={0.7} /></mesh></group>))}
  </group>
}

function SystemHardware({ view, roofY }: { view: HomeView; roofY: number }) {
  const all = view === "integrated"
  const ai = all || view === "ai"
  const network = all || view === "communications"
  const security = all || view === "security"
  const power = all || view === "power"
  const automation = all
  return <group>
    {ai && <group position={[0.88, 0.46, -0.55]}><mesh castShadow><boxGeometry args={[0.48, 0.74, 0.52]} /><meshStandardMaterial color="#353c38" metalness={0.35} roughness={0.42} /></mesh><mesh position={[0, 0.22, 0.27]}><boxGeometry args={[0.29, 0.035, 0.012]} /><meshStandardMaterial color="#c9ad76" emissive="#b28d58" emissiveIntensity={1.3} /></mesh><mesh position={[0, -0.12, 0.27]}><boxGeometry args={[0.08, 0.025, 0.012]} /><meshStandardMaterial color="#91a98e" emissive="#7e9a7f" emissiveIntensity={1.2} /></mesh></group>}
    {network && <group>{[-1.75, -0.75, 0.35, 1.35].map((x) => <mesh key={x} position={[x, 0.29, -1.2]}><sphereGeometry args={[0.075, 12, 12]} /><meshStandardMaterial color="#c5ab7b" emissive="#b28d58" emissiveIntensity={1.25} /></mesh>)}</group>}
    {security && <group><mesh position={[1.55, roofY - 0.65, 1.55]} castShadow><boxGeometry args={[0.22, 0.14, 0.18]} /><meshStandardMaterial color="#292d29" metalness={0.55} roughness={0.3} /></mesh><mesh position={[1.55, roofY - 0.65, 1.66]}><sphereGeometry args={[0.045, 16, 16]} /><meshStandardMaterial color="#bd9e6b" emissive="#ad7b39" emissiveIntensity={1.3} /></mesh><mesh position={[-2.85, 1.1, 1.55]}><cylinderGeometry args={[0.025, 0.025, 2.1, 8]} /><meshStandardMaterial color="#837e71" metalness={0.4} /></mesh><mesh position={[-2.85, 2.18, 1.55]}><sphereGeometry args={[0.1, 16, 16]} /><meshStandardMaterial color="#bfa26e" emissive="#b68c50" emissiveIntensity={1.4} /></mesh></group>}
    {power && <group><mesh position={[-2.65, 0.45, -1.45]} castShadow><boxGeometry args={[0.82, 0.72, 0.68]} /><meshStandardMaterial color="#343b37" roughness={0.45} /></mesh><mesh position={[-2.65, 0.46, -1.1]}><boxGeometry args={[0.54, 0.12, 0.025]} /><meshStandardMaterial color="#c7b187" emissive="#9c845d" emissiveIntensity={0.7} /></mesh></group>}
    {automation && <group position={[0.6, 0.82, 1.32]}><mesh castShadow><boxGeometry args={[0.16, 0.2, 0.065]} /><meshStandardMaterial color="#393e39" metalness={0.25} /></mesh><mesh position={[0, 0.01, 0.045]}><boxGeometry args={[0.09, 0.12, 0.012]} /><meshStandardMaterial color="#c5ab7b" emissive="#b28d58" emissiveIntensity={1} /></mesh></group>}
    {view === "integrated" && <><mesh position={[0, 0.11, 0.7]}><torusGeometry args={[0.5, 0.012, 6, 48]} /><meshBasicMaterial color="#c4a66e" transparent opacity={0.75} /></mesh><mesh position={[0.1, 0.1, -0.65]}><torusGeometry args={[0.48, 0.012, 6, 48]} /><meshBasicMaterial color="#97a98f" transparent opacity={0.62} /></mesh></>}
  </group>
}

function HomeModel({ country, region, selectedSystem, viewMode, roofOpen, night, modelConfig, propertyScale, touring, onSelect, reducedMotion }: {
  country: Country; region: string; selectedSystem: SystemKey; viewMode: HomeView; roofOpen: boolean; night: boolean; modelConfig: PropertyModelConfig; propertyScale: number; touring: boolean; onSelect: (system: SystemKey) => void; reducedMotion: boolean
}) {
  const profile = architectureProfile(country, region, modelConfig.architecturalStyle)
  const roofRef = useRef<Group>(null)
  const floorHeight = 1.08
  const floorGap = 0.1
  const width = modelConfig.homeType === "Country estate" ? 4.15 : modelConfig.homeType === "Waterfront home" ? 3.85 : 3.75
  const depth = modelConfig.homeType === "Country estate" ? 2.95 : 2.72
  const topFloorY = 0.17 + (modelConfig.floorCount - 1) * (floorHeight + floorGap + (roofOpen ? 0.52 : 0))
  const roofY = topFloorY + floorHeight + 0.18
  const cutaway = roofOpen || viewMode === "interior"
  const wants = (key: string) => modelConfig.desiredSystems.includes(key)
  const technologyView = viewMode !== "architecture" && viewMode !== "interior"
  const activeSystemForView: SystemKey | null = viewMode === "ai" ? "ai" : viewMode === "communications" ? "network" : viewMode === "security" ? "security" : viewMode === "power" ? "power" : null
  const showAi = viewMode === "integrated" || viewMode === "ai" || (technologyView && (selectedSystem === "ai" || wants("Private AI assistant")))
  const showNetwork = viewMode === "integrated" || viewMode === "communications" || (technologyView && (selectedSystem === "network" || wants("Mesh communications")))
  const showSecurity = viewMode === "integrated" || viewMode === "security" || (technologyView && (selectedSystem === "security" || wants("Home Guard access sensors")))
  const showPower = viewMode === "integrated" || viewMode === "power" || (technologyView && wants("Solar and backup power"))
  const showAutomation = viewMode === "integrated" || (technologyView && wants("Local home automation"))

  useFrame((_, delta) => {
    if (roofRef.current) {
      const targetY = roofY + (roofOpen ? 1.45 : 0)
      roofRef.current.position.y = MathUtils.damp(roofRef.current.position.y, targetY, 2.6, delta)
    }
  })

  return <group position={[0, -0.15, 0]} scale={propertyScale}>
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]}><planeGeometry args={[14, 10]} /><meshStandardMaterial color={night ? "#1b241e" : profile.groundColor} roughness={1} /></mesh>
    <mesh receiveShadow position={[0, 0.08, 0]}><boxGeometry args={[5.3, 0.2, 3.9]} /><meshStandardMaterial color={profile.family === "coastal" ? "#c0b6a2" : "#b4aa98"} roughness={0.92} /></mesh>
    {profile.water && <group position={[4.25, 0.015, -0.9]}><mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[2.5, 3.4]} /><meshStandardMaterial color="#526a6b" roughness={0.18} metalness={0.16} transparent opacity={0.88} /></mesh><mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.25, 3.12]} /><meshStandardMaterial color="#8ca4a0" roughness={0.2} transparent opacity={0.32} /></mesh></group>}
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.075, 3.1]}><planeGeometry args={[1.35, 2.6]} /><meshStandardMaterial color="#b7a890" roughness={0.92} /></mesh>
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.11, 2.0]}><planeGeometry args={[1.35, 0.09]} /><meshStandardMaterial color="#d4c5a8" roughness={0.9} /></mesh>
    {Array.from({ length: modelConfig.floorCount }, (_, index) => <BuildingFloor key={`floor-${index}`} index={index} floorCount={modelConfig.floorCount} floorHeight={floorHeight} floorGap={floorGap} width={profile.family === "courtyard" ? width * 0.8 : width} depth={profile.family === "courtyard" ? depth * 0.84 : depth} cutaway={cutaway} wallColor={profile.wallColor} night={night} />)}
    {profile.family === "courtyard" && <group>{[-1.83, 1.83].map((x) => <mesh key={x} position={[x, 0.66, -0.12]} castShadow><boxGeometry args={[0.74, 1.16, 2.48]} /><meshStandardMaterial color={profile.wallColor} roughness={0.78} transparent={cutaway} opacity={cutaway ? 0.28 : 1} depthWrite={!cutaway} /></mesh>)}</group>}
    {(profile.family === "estate" || modelConfig.homeType === "Country estate") && <group><mesh position={[-2.55, 0.72, -0.05]} castShadow><boxGeometry args={[1.0, 1.24, 2.65]} /><meshStandardMaterial color={profile.wallColor} roughness={0.8} transparent={cutaway} opacity={cutaway ? 0.25 : 1} depthWrite={!cutaway} /></mesh><mesh position={[2.55, 0.58, -0.12]} castShadow><boxGeometry args={[0.82, 0.95, 2.28]} /><meshStandardMaterial color={profile.wallColor} roughness={0.8} transparent={cutaway} opacity={cutaway ? 0.25 : 1} depthWrite={!cutaway} /></mesh></group>}
    {profile.family === "hillside" && <group>{[-1, 1].map((side) => <mesh key={side} position={[side * 2.45, 0.48, -0.72]} castShadow><boxGeometry args={[1.08, 0.84, 1.85]} /><meshStandardMaterial color={profile.wallColor} roughness={0.78} transparent={cutaway} opacity={cutaway ? 0.3 : 1} depthWrite={!cutaway} /></mesh>)}</group>}
    <group ref={roofRef} position={[0, roofY, 0]}>
      {profile.family === "flat" || profile.family === "courtyard" || modelConfig.architecturalStyle === "Contemporary" ? <mesh castShadow><boxGeometry args={[width + 0.26, 0.24, depth + 0.26]} /><meshStandardMaterial color={profile.roofColor} roughness={0.78} /></mesh> : <group>
        <mesh castShadow position={[-width * 0.24, 0.38, 0]} rotation={[0, 0, -0.48]}><boxGeometry args={[width * 0.58, 0.17, depth + 0.48]} /><meshStandardMaterial color={profile.roofColor} roughness={0.82} /></mesh>
        <mesh castShadow position={[width * 0.24, 0.38, 0]} rotation={[0, 0, 0.48]}><boxGeometry args={[width * 0.58, 0.17, depth + 0.48]} /><meshStandardMaterial color={profile.roofColor} roughness={0.82} /></mesh>
        {profile.family === "alpine" && <mesh castShadow position={[0, 0.18, 0]}><boxGeometry args={[0.11, 0.11, depth + 0.56]} /><meshStandardMaterial color={profile.accentColor} roughness={0.8} /></mesh>}
      </group>}
      {showPower && <group position={[0, 0.16, 0]}>{[-0.54, 0, 0.54].map((x) => <mesh key={x} position={[x, 0.16, -0.12]} rotation={[-0.17, 0, 0]}><boxGeometry args={[0.42, 0.035, 1.36]} /><meshStandardMaterial color="#536a69" metalness={0.48} roughness={0.32} /></mesh>)}</group>}
    </group>
    {modelConfig.homeType === "Waterfront home" && <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[1.55, 0.16, 2.2]}><planeGeometry args={[2.0, 1.0]} /><meshStandardMaterial color="#697b74" roughness={0.92} /></mesh>}
    {modelConfig.homeType === "Retreat / second home" && <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-2.35, 0.14, 1.1]}><planeGeometry args={[1.2, 2.0]} /><meshStandardMaterial color="#9b8971" roughness={0.9} /></mesh>}
    {modelConfig.garage && <group position={[3.2, 0.3, -1.35]}><mesh castShadow><boxGeometry args={[1.45, 0.62, 1.25]} /><meshStandardMaterial color={profile.wallColor} roughness={0.82} /></mesh><mesh position={[0, 0.31, 0.63]}><boxGeometry args={[1.12, 0.46, 0.05]} /><meshStandardMaterial color="#5b625c" roughness={0.6} /></mesh><mesh position={[0, 0.65, 0]}><boxGeometry args={[1.55, 0.13, 1.36]} /><meshStandardMaterial color={profile.roofColor} roughness={0.85} /></mesh><mesh position={[0, 0.02, 0.64]}><boxGeometry args={[0.84, 0.04, 0.04]} /><meshStandardMaterial color={profile.accentColor} emissive={night ? profile.accentColor : "#000000"} emissiveIntensity={night ? 1.2 : 0.1} /></mesh></group>}
    {modelConfig.outbuildings && <group position={[-3.1, 0.33, -1.65]}><mesh castShadow><boxGeometry args={[0.9, 0.66, 0.76]} /><meshStandardMaterial color={profile.wallColor} roughness={0.88} /></mesh><mesh position={[0, 0.36, 0]}><boxGeometry args={[0.98, 0.12, 0.84]} /><meshStandardMaterial color={profile.roofColor} roughness={0.86} /></mesh><mesh position={[0, 0.02, 0.4]}><boxGeometry args={[0.42, 0.05, 0.02]} /><meshStandardMaterial color={profile.accentColor} emissive={profile.accentColor} emissiveIntensity={0.55} /></mesh></group>}
    {modelConfig.garden && <group><Tree position={[-3.9, 0, -1.1]} scale={1.02} foliageColor={profile.foliageColor} olive={region.includes("Provence")} /><Tree position={[-3.15, 0, -3.1]} scale={0.78} foliageColor={profile.foliageColor} olive={region.includes("Provence")} /><Tree position={[3.85, 0, -2.45]} scale={1.12} foliageColor={profile.foliageColor} olive={region.includes("Provence")} /><Tree position={[3.8, 0, 0.2]} scale={0.76} foliageColor={profile.foliageColor} olive={region.includes("Provence")} /><Tree position={[-4.0, 0, 2.55]} scale={0.72} foliageColor={profile.foliageColor} olive={region.includes("Provence")} />{[-1.7, 1.7].map((x) => <mesh key={x} position={[x, 0.15, 2.55]}><sphereGeometry args={[0.25, 12, 10]} /><meshStandardMaterial color={profile.foliageColor} roughness={0.94} /></mesh>)}</group>}
    {modelConfig.homeType === "Country estate" && <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.13, -3.45]}><planeGeometry args={[8.8, 1.4]} /><meshStandardMaterial color="#81755f" roughness={0.97} /></mesh>}
    <group position={[0, 0.12, 4.08]}><mesh castShadow position={[-2.85, 0.72, 0]}><boxGeometry args={[0.12, 1.45, 0.13]} /><meshStandardMaterial color="#736952" roughness={0.78} /></mesh><mesh castShadow position={[2.85, 0.72, 0]}><boxGeometry args={[0.12, 1.45, 0.13]} /><meshStandardMaterial color="#736952" roughness={0.78} /></mesh><mesh position={[0, 0.48, 0]}><boxGeometry args={[5.55, 0.08, 0.1]} /><meshStandardMaterial color="#9b8c72" roughness={0.72} /></mesh><mesh position={[0, 0.08, 0]}><boxGeometry args={[5.45, 0.1, 0.11]} /><meshStandardMaterial color="#706651" roughness={0.8} /></mesh></group>
    {[-1.35, 1.35].map((x) => [-1.48, 1.48].map((z) => <mesh key={`light-${x}-${z}`} position={[x, 0.16, z]}><cylinderGeometry args={[0.04, 0.04, 0.25, 12]} /><meshStandardMaterial color={profile.accentColor} emissive={night ? profile.accentColor : "#000000"} emissiveIntensity={night ? 1.8 : 0.15} /></mesh>))}
    {showAi || showNetwork || showSecurity || showPower || showAutomation ? <SystemHardware view={viewMode} roofY={roofY} /> : null}
    {(viewMode === "integrated" || viewMode === "security") && <><RobotDog active={touring && !reducedMotion} /><group position={[3.2, 0.04, 2.15]}><mesh><boxGeometry args={[0.9, 0.09, 0.68]} /><meshStandardMaterial color="#343936" roughness={0.65} /></mesh><mesh position={[0, 0.08, 0]}><boxGeometry args={[0.58, 0.04, 0.43]} /><meshStandardMaterial color="#c8b28a" emissive="#9d8052" emissiveIntensity={0.45} /></mesh></group></>}
    {systemHotspots.filter(({ id, views }) => touring ? id === selectedSystem : viewMode === "architecture" ? true : viewMode === "interior" ? false : viewMode === "integrated" || views.includes(viewMode) || id === activeSystemForView).map(({ id, label, position }) => <Html key={id} position={position} center distanceFactor={10} occlude={false}><button type="button" onClick={() => onSelect(id)} aria-label={`Explore ${label}`} aria-pressed={selectedSystem === id} className={`scene-hotspot ${selectedSystem === id ? "scene-hotspot-active" : ""}`}><span className="scene-hotspot-dot" />{label}</button></Html>)}
    {roofOpen && <group>{roomPoints.map(({ id, label, position }) => <Html key={`room-${label}`} position={[position[0], position[1] + (id === "network" || id === "security" ? 1.4 : 0.18), position[2]]} center distanceFactor={8} occlude={false}><button type="button" onClick={() => onSelect(id)} aria-label={`Select room: ${label}`} aria-pressed={selectedSystem === id} className="scene-room-point">{label}</button></Html>)}</group>}
  </group>
}

function EyeMoon({ active, selectedSystem, reducedMotion }: { active: boolean; selectedSystem: SystemKey; reducedMotion: boolean }) {
  const group = useRef<Group>(null)
  const beam = useRef<Group>(null)
  const targets: Record<SystemKey, [number, number]> = {
    ai: [-0.3, 0], network: [-1.15, -0.7], security: [1.3, 0.35], robot: [2.35, 1.3], power: [-1.65, -1.5], garden: [-2.5, 1.45], automation: [0.85, 0.85],
  }
  useFrame(({ clock }, delta) => {
    if (!group.current || !active || reducedMotion) return
    const [x, z] = targets[selectedSystem]
    group.current.position.x = MathUtils.damp(group.current.position.x, x, 1.5, delta)
    group.current.position.z = MathUtils.damp(group.current.position.z, z, 1.5, delta)
    group.current.position.y = 5.8 + Math.sin(clock.elapsedTime * 0.5) * 0.07
    if (beam.current) beam.current.rotation.z = MathUtils.damp(beam.current.rotation.z, x * -0.04, 1.4, delta)
  })
  if (!active) return null
  return <group ref={group} position={[-4.8, 5.8, 2.8]}>
    <mesh><sphereGeometry args={[0.32, 32, 24]} /><meshStandardMaterial color="#e4d7bd" emissive="#cfb787" emissiveIntensity={0.8} roughness={0.22} /></mesh>
    <mesh position={[0.015, 0, 0.288]}><sphereGeometry args={[0.148, 24, 18]} /><meshStandardMaterial color="#29322d" roughness={0.24} /></mesh>
    <mesh position={[0.035, 0, 0.405]}><sphereGeometry args={[0.064, 16, 16]} /><meshStandardMaterial color="#d0b27a" emissive="#d2b47b" emissiveIntensity={1.35} /></mesh>
    <mesh position={[0, 0, 0.25]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.29, 0.019, 10, 40]} /><meshStandardMaterial color="#efe2c9" emissive="#c5ab7b" emissiveIntensity={0.85} /></mesh>
    <group ref={beam} position={[0, -2.1, -0.25]}><mesh rotation={[Math.PI, 0, 0]}><coneGeometry args={[1.78, 4.25, 40, 1, true]} /><meshBasicMaterial color="#d2bd95" transparent opacity={0.038} depthWrite={false} side={2} /></mesh><pointLight position={[0, 1.35, 0]} color="#d8bf91" intensity={1.45} distance={7} /></group>
  </group>
}

function SceneContents(props: ComponentProps<typeof HomeModel> & { reducedMotion: boolean }) {
  const focused = props.viewMode === "architecture" ? null : props.viewMode === "interior" ? null : props.viewMode === "ai" ? "ai" : props.viewMode === "communications" ? "network" : props.viewMode === "security" ? "security" : props.viewMode === "power" ? "power" : null
  return <>
    <color attach="background" args={["#1c2421"]} />
    <ambientLight intensity={props.night ? 0.56 : 1.12} />
    <directionalLight position={[4, 7, 3]} intensity={props.night ? 1.55 : 2.55} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
    <pointLight position={[-4, 3, 2]} color={props.night ? "#ddb779" : "#d6c09b"} intensity={props.night ? 1.05 : 0.38} />
    <HomeModel {...props} />
    <EyeMoon active={props.touring} selectedSystem={focused ?? props.selectedSystem} reducedMotion={props.reducedMotion} />
    <OrbitControls enablePan enableDamping dampingFactor={0.08} minDistance={5.3} maxDistance={15} minPolarAngle={0.16} maxPolarAngle={1.53} autoRotate={!props.reducedMotion && !props.touring} autoRotateSpeed={0.18} />
  </>
}

class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? <Image src="/images/private-home-estate.png" alt="Static architectural concept of a landscaped private residence" fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover opacity-75" /> : this.props.children }
}

export function PrivateHomeScene({ country, region, selectedSystem, viewMode, roofOpen, night, modelConfig, propertyScale, touring, onSelect }: {
  country: Country; region: string; selectedSystem: SystemKey; viewMode: HomeView; roofOpen: boolean; night: boolean; modelConfig: PropertyModelConfig; propertyScale: number; touring: boolean; onSelect: (system: SystemKey) => void
}) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [webglAvailable, setWebglAvailable] = useState(false)
  const [lowPerformance, setLowPerformance] = useState(false)
  const [softwareRenderer, setSoftwareRenderer] = useState(false)
  const [capabilityReady, setCapabilityReady] = useState(false)
  const [renderMode, setRenderMode] = useState<"auto" | "interactive" | "static">("auto")
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotion = () => setReducedMotion(motionQuery.matches)
    updateMotion()
    motionQuery.addEventListener("change", updateMotion)
    const probe = document.createElement("canvas")
    let context: WebGLRenderingContext | WebGL2RenderingContext | null = null
    try {
      context = probe.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) || probe.getContext("webgl", { failIfMajorPerformanceCaveat: true })
    } catch {
      context = null
    }
    const rendererInfo = context?.getExtension("WEBGL_debug_renderer_info") as unknown as { UNMASKED_RENDERER_WEBGL: number } | null
    const rendererName = rendererInfo && context ? String(context.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL)) : ""
    const usesSoftwareRenderer = /llvmpipe|swiftshader|software renderer/i.test(rendererName)
    const contextLoss = context?.getExtension("WEBGL_lose_context") as { loseContext?: () => void } | null
    contextLoss?.loseContext?.()
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
    const lowPowerDevice = usesSoftwareRenderer || (window.matchMedia("(max-width: 700px)").matches && deviceMemory <= 2)
    setWebglAvailable(Boolean(context) && !usesSoftwareRenderer)
    setSoftwareRenderer(usesSoftwareRenderer)
    setLowPerformance(lowPowerDevice)
    setCapabilityReady(true)
    return () => motionQuery.removeEventListener("change", updateMotion)
  }, [])
  const renderInteractive = capabilityReady && webglAvailable && (renderMode === "interactive" || (renderMode === "auto" && !lowPerformance))
  return <div className="private-home-scene-canvas" role="region" aria-label="Interactive architectural concept model. Use pointer or touch to rotate, zoom and pan; keyboard-accessible system controls are listed beside the model.">
    {renderInteractive ? <SceneErrorBoundary><Canvas shadows dpr={[1, 1.35]} camera={{ position: [7.3, 5.8, 8.8], fov: 38 }} gl={{ alpha: false, antialias: false, powerPreference: "low-power" }}>
      <Suspense fallback={null}><SceneContents country={country} region={region} selectedSystem={selectedSystem} viewMode={viewMode} roofOpen={roofOpen} night={night} modelConfig={modelConfig} propertyScale={propertyScale} touring={touring} onSelect={onSelect} reducedMotion={reducedMotion} /></Suspense>
    </Canvas></SceneErrorBoundary> : <Image src="/images/private-home-estate.png" alt="Static architectural concept of a landscaped private residence" fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover opacity-75" />}
    {capabilityReady && webglAvailable && <button type="button" className="scene-render-toggle" onClick={() => setRenderMode(renderInteractive ? "static" : "interactive")} aria-label={renderInteractive ? "Switch to the static architectural image" : "Try the interactive three-dimensional model"}>{renderInteractive ? "Use static view" : lowPerformance && renderMode === "auto" ? "Try interactive 3D" : "Enable interactive 3D"}</button>}
    <span className="scene-accessibility-note">{!capabilityReady ? "Preparing architectural view…" : softwareRenderer ? "A static concept image is shown because this device uses software-rendered 3D." : !webglAvailable ? "Static image view · interactive 3D is unavailable in this browser." : lowPerformance ? "Low-power image view · interactive 3D is optional on this device." : "Concept visualisation · not construction CAD or a validated security design"}</span>
  </div>
}

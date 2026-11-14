import Image from "next/image"

const officialEyeLogoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RIY0cHhTeKVOsuGCXplHWEoBByTMef.png"

type EyeBrandMarkProps = {
  size?: "micro" | "brand" | "hero"
  className?: string
}

export function EyeBrandMark({ size = "brand", className = "" }: EyeBrandMarkProps) {
  return <span className={`orbital-eye orbital-eye--${size} ${className}`} aria-hidden="true">
    <span className="orbital-eye-aura" />
    <span className="orbital-eye-orbit orbital-eye-orbit--rear" />
    <span className="orbital-eye-orbit-track"><span className="orbital-eye-satellite" /></span>
    <span className="orbital-eye-orbit orbital-eye-orbit--front" />
    <span className="orbital-eye-sphere">
      <span className="orbital-eye-sphere-highlight" />
      <span className="orbital-eye-horizon" />
      <Image src={officialEyeLogoUrl} alt="" width={279} height={177} className="orbital-eye-official-mark" />
    </span>
  </span>
}

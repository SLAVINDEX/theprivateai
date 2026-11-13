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
      <svg className="orbital-eye-glyph" viewBox="0 0 100 70" fill="none" focusable="false">
        <path d="M7 35C19 18 34 12 50 12s31 6 43 23c-12 17-27 23-43 23S19 52 7 35Z" />
        <circle className="orbital-eye-iris" cx="50" cy="35" r="11" />
        <circle className="orbital-eye-pupil" cx="50" cy="35" r="4.4" />
        <circle className="orbital-eye-catchlight" cx="53.6" cy="31.2" r="1.6" />
      </svg>
    </span>
  </span>
}

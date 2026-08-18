export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,hsl(0_0%_100%/0.06),transparent_58%)]" />
      <div className="hero-grid absolute inset-0" />
      <div className="hero-noise absolute inset-0 opacity-[0.12] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

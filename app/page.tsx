import { Navigation } from '@/components/navigation'
import { VideoHero } from '@/components/video-hero'
import { PricingSection } from '@/components/pricing-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { Footer } from '@/components/footer'
import { FeaturesShowcase } from '@/components/features-showcase'
import { CTASection } from '@/components/cta-section'
import { DNABackground } from '@/components/dna-background'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <DNABackground />
      <Navigation />
      <VideoHero />
      <FeaturesShowcase />
      <PricingSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  )
}

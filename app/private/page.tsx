"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DNABackground } from '@/components/dna-background'
import { useLanguage } from '@/components/language-context'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Brain, 
  Home, 
  Eye, 
  Lock,
  Check,
  ArrowRight,
  Wifi,
} from 'lucide-react'

export default function PrivatePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t('private.feature1.title'),
      description: t('private.feature1.desc'),
    },
    {
      icon: Brain,
      title: t('private.feature2.title'),
      description: t('private.feature2.desc'),
    },
    {
      icon: Home,
      title: t('private.feature3.title'),
      description: t('private.feature3.desc'),
    },
    {
      icon: Eye,
      title: t('private.feature4.title'),
      description: t('private.feature4.desc'),
    },
  ]

  const specifications = [
    'NVIDIA RTX 4090 or A6000 GPU',
    '128GB DDR5 ECC RAM',
    '4TB NVMe SSD Storage',
    'Whisper-quiet cooling system',
    'Compact tower or rack design',
    'Local Llama, Mistral, or custom models',
    '24/7 email & phone support',
    '3-year hardware warranty',
  ]

  const useCases = [
    {
      icon: Lock,
      title: 'Private Research',
      description: 'Conduct confidential research and analysis without data leaving your home.',
    },
    {
      icon: Brain,
      title: 'Personal AI Assistant',
      description: 'Your own GPT-level assistant that knows your preferences and history.',
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Local threat detection for cameras, drones, and boundary monitoring.',
    },
    {
      icon: Wifi,
      title: 'Smart Home AI',
      description: 'Intelligent automation that processes locally, not in the cloud.',
    },
  ]

  return (
    <main className="min-h-screen bg-background relative">
      <DNABackground />
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/images/private-gold-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Home className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-muted-foreground font-medium">{t('private.title')}</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('private.subtitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('private.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700">
                    {t('nav.book')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-amber-500/50 text-foreground bg-transparent hover:bg-amber-500/10">
                    {t('nav.contact')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
                <Image
                  src="/images/private-server.png"
                  alt="Private AI Home Server"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="glass-card rounded-2xl p-8 hover:bg-amber-500/5 transition-all border border-amber-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-amber-400 font-medium text-sm uppercase tracking-wider">Private Home Server</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
                  {t('tier.starter.price')}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  {t('tier.starter.desc')}
                </p>
                <ul className="space-y-4 mb-8">
                  {specifications.map((spec) => (
                    <li key={spec} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-amber-400 shrink-0" />
                      <span className="text-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700">
                    Request a Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src="/images/private-gold-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Use Cases</h2>
            <p className="text-xl text-muted-foreground">How our private clients use their AI infrastructure</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <div key={useCase.title} className="glass-card rounded-2xl p-6 text-center border border-amber-500/10 hover:border-amber-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

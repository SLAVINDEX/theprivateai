"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DNABackground } from '@/components/dna-background'
import { useLanguage } from '@/components/language-context'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Shield, 
  FileCheck, 
  Users, 
  Scale,
  Check,
  ArrowRight,
} from 'lucide-react'

export default function EnterprisePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t('enterprise.feature1.title'),
      description: t('enterprise.feature1.desc'),
    },
    {
      icon: FileCheck,
      title: t('enterprise.feature2.title'),
      description: t('enterprise.feature2.desc'),
    },
    {
      icon: Users,
      title: t('enterprise.feature3.title'),
      description: t('enterprise.feature3.desc'),
    },
    {
      icon: Scale,
      title: t('enterprise.feature4.title'),
      description: t('enterprise.feature4.desc'),
    },
  ]

  const tiers = [
    {
      name: 'Enterprise Standard',
      price: t('tier.pro.price'),
      description: t('tier.pro.desc'),
      features: [
        'Single NVIDIA A100 80GB GPU',
        '256GB DDR5 ECC RAM',
        '8TB NVMe RAID Storage',
        'On-site installation',
        'Staff training program',
        'System integration support',
        '12-month support contract',
        '99.9% uptime SLA',
      ],
    },
    {
      name: 'Enterprise Elite',
      price: t('tier.ultimate.price'),
      description: t('tier.ultimate.desc'),
      features: [
        'Multiple NVIDIA A100 80GB GPUs',
        '512GB+ DDR5 ECC RAM',
        '16TB+ NVMe RAID Storage',
        'Full hardware redundancy',
        'Dedicated support engineer',
        'Custom model training',
        '24-month support contract',
        '99.99% uptime SLA',
        'Disaster recovery setup',
      ],
      highlighted: true,
    },
  ]

  const industries = [
    { name: 'Finance & Banking', description: 'Risk analysis, compliance automation, fraud detection' },
    { name: 'Healthcare', description: 'Patient data analysis, research assistance, HIPAA compliance' },
    { name: 'Legal', description: 'Document review, contract analysis, case research' },
    { name: 'Government', description: 'Classified data processing, policy analysis, secure communications' },
    { name: 'Manufacturing', description: 'Quality control, predictive maintenance, supply chain' },
    { name: 'Research', description: 'Data analysis, literature review, hypothesis generation' },
  ]

  return (
    <main className="min-h-screen bg-background relative">
      <DNABackground />
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-muted-foreground font-medium">{t('enterprise.title')}</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('enterprise.subtitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('enterprise.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700">
                    {t('nav.book')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-cyan-500/50 text-foreground bg-transparent hover:bg-cyan-500/10">
                    {t('nav.contact')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/images/enterprise-server.png"
                  alt="Enterprise AI Server"
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

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="glass-card rounded-2xl p-8 hover:bg-cyan-500/5 transition-all border border-cyan-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/workspace-dna.png"
              alt="Enterprise AI Workspace"
              width={1400}
              height={600}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl ml-8 lg:ml-16">
                <h3 className="text-3xl font-bold text-foreground mb-4">Higher-Level Processing</h3>
                <p className="text-lg text-muted-foreground">
                  Our enterprise solutions deliver computational power that only dedicated infrastructure can provide. 
                  Multiple A100 GPUs working in parallel for mission-critical AI operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-muted-foreground">Scalable infrastructure for mission-critical AI</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass-card rounded-2xl p-8 ${tier.highlighted ? 'ring-2 ring-cyan-500 border-cyan-500/30' : 'border border-cyan-500/10'}`}
              >
                {tier.highlighted && (
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-2">{tier.price}</p>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking">
                  <Button className={`w-full ${tier.highlighted ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                    Request a Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">Trusted by regulated and high-security sectors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="glass-card rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

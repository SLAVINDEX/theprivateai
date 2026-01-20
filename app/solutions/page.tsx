"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DNABackground } from '@/components/dna-background'
import { useLanguage } from '@/components/language-context'
import { Button } from '@/components/ui/button'
import { 
  Cpu, 
  Server, 
  Layers, 
  Sparkles,
  Check,
  ArrowRight,
  Brain,
  Lock,
  Wrench,
  Zap
} from 'lucide-react'

export default function SolutionsPage() {
  const { t } = useLanguage()

  const solutions = [
    {
      icon: Cpu,
      name: t('tier.starter.name'),
      price: t('tier.starter.price'),
      description: t('tier.starter.desc'),
      href: '/private',
      image: '/images/private-server.png',
      gradient: 'from-amber-500/20 to-yellow-600/10',
      accentColor: 'amber',
      features: [
        'High-performance consumer GPU (RTX 4090 / A6000)',
        '128GB DDR5 ECC RAM',
        '4TB NVMe SSD storage',
        'Local LLM deployment (Llama, Mistral, etc.)',
        'Whisper-quiet operation',
        'Email & phone support',
        '3-year hardware warranty',
      ],
      useCases: ['Personal research', 'Private AI assistant', 'Smart home integration', 'Family security'],
    },
    {
      icon: Server,
      name: 'Enterprise Standard',
      price: t('tier.pro.price'),
      description: t('tier.pro.desc'),
      href: '/enterprise',
      image: '/images/enterprise-server.png',
      gradient: 'from-cyan-500/20 to-blue-600/10',
      accentColor: 'cyan',
      features: [
        'NVIDIA A100 80GB GPU',
        '256GB DDR5 ECC RAM',
        '8TB NVMe RAID storage',
        'Air-gapped deployment option',
        'On-site installation',
        'Staff training program',
        'System integration support',
        '99.9% uptime SLA',
      ],
      useCases: ['Compliance automation', 'Document processing', 'Risk analysis', 'Knowledge management'],
    },
    {
      icon: Layers,
      name: 'Enterprise Elite',
      price: t('tier.ultimate.price'),
      description: t('tier.ultimate.desc'),
      href: '/enterprise',
      image: '/images/enterprise-server.png',
      gradient: 'from-blue-500/20 to-indigo-600/10',
      accentColor: 'blue',
      highlighted: true,
      features: [
        'Multiple NVIDIA A100 80GB GPUs',
        '512GB+ DDR5 ECC RAM',
        '16TB+ NVMe RAID storage',
        'Full hardware redundancy',
        'Dedicated support engineer',
        'Custom model fine-tuning',
        'Disaster recovery setup',
        '99.99% uptime SLA',
      ],
      useCases: ['Large-scale inference', 'Model training', 'Research & development', 'Mission-critical AI'],
    },
    {
      icon: Sparkles,
      name: t('tier.bespoke.name'),
      price: t('tier.bespoke.price'),
      description: t('tier.bespoke.desc'),
      href: '/contact',
      image: '/images/bespoke-server.png',
      gradient: 'from-pink-500/20 via-purple-500/15 to-cyan-500/10',
      accentColor: 'pink',
      features: [
        'Custom hardware specification',
        'Tailored cooling solutions',
        'Specialized integration work',
        'Unique compliance requirements',
        'Multi-site deployments',
        'Custom model development',
        'White-glove service',
        'Flexible SLA terms',
      ],
      useCases: ['Unique requirements', 'Complex integrations', 'Specialized hardware', 'Multi-location'],
    },
  ]

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Installation & Setup',
      description: 'Professional on-site installation by our certified engineers.',
    },
    {
      icon: Brain,
      title: 'Model Training',
      description: 'Custom fine-tuning of models on your proprietary data.',
    },
    {
      icon: Lock,
      title: 'Security Audit',
      description: 'Comprehensive security assessment and hardening.',
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Optimization for your specific workloads and use cases.',
    },
  ]

  const getAccentClasses = (color: string, highlighted?: boolean) => {
    const colors: Record<string, { text: string; bg: string; ring: string }> = {
      amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', ring: 'ring-amber-500' },
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', ring: 'ring-cyan-500' },
      blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', ring: 'ring-blue-500' },
      pink: { text: 'text-pink-400', bg: 'bg-pink-500/10', ring: 'ring-pink-500' },
    }
    return colors[color] || colors.cyan
  }

  return (
    <main className="min-h-screen bg-background relative">
      <DNABackground />
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t('solutions.title')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              AI Infrastructure That Grows With You
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('solutions.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              const accent = getAccentClasses(solution.accentColor, solution.highlighted)
              return (
                <div
                  key={solution.name}
                  className={`glass-card rounded-2xl overflow-hidden ${solution.highlighted ? `ring-2 ${accent.ring}` : `border border-${solution.accentColor}-500/10`}`}
                >
                  {/* Image Header */}
                  <div className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${solution.gradient}`}>
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.name}
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    {solution.highlighted && (
                      <span className="absolute top-4 right-4 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl ${accent.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-7 h-7 ${accent.text}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{solution.name}</h3>
                        <p className={`text-2xl font-bold ${accent.text}`}>{solution.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Specifications</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className={`w-4 h-4 ${accent.text} shrink-0 mt-0.5`} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase) => (
                          <span key={useCase} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={solution.href}>
                      <Button className={`w-full ${solution.highlighted ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                        {t('cta.learnMore')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workspace Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/workspace-dna.png"
              alt="AI Workspace"
              width={1400}
              height={600}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl ml-8 lg:ml-16">
                <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose The Private AI?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We deliver computational power that only dedicated infrastructure can provide. 
                  Your data never leaves your premises, ensuring complete privacy and security.
                </p>
                <Link href="/booking">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive support for your AI journey</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="glass-card rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Not Sure Which Solution Is Right For You?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a free consultation and our experts will help you find the perfect fit.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t('nav.book')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Check, Cpu, Server, Layers, Sparkles } from 'lucide-react'

export function PricingSection() {
  const { t } = useLanguage()

  const tiers = [
    {
      name: t('tier.starter.name'),
      price: t('tier.starter.price'),
      description: t('tier.starter.desc'),
      icon: Cpu,
      image: '/images/private-server.png',
      features: [
        t('feature.gpu'),
        t('feature.llm'),
        t('feature.storage'),
        t('feature.support'),
      ],
      highlighted: false,
      href: '/private',
      gradient: 'from-amber-500/20 to-yellow-600/10',
    },
    {
      name: t('tier.pro.name'),
      price: t('tier.pro.price'),
      description: t('tier.pro.desc'),
      icon: Server,
      image: '/images/enterprise-server.png',
      features: [
        t('feature.gpu'),
        t('feature.llm'),
        t('feature.storage'),
        t('feature.support'),
        t('feature.training'),
        t('feature.integration'),
      ],
      highlighted: true,
      href: '/enterprise',
      gradient: 'from-cyan-500/20 to-blue-600/10',
    },
    {
      name: t('tier.ultimate.name'),
      price: t('tier.ultimate.price'),
      description: t('tier.ultimate.desc'),
      icon: Layers,
      image: '/images/enterprise-server.png',
      features: [
        t('feature.multiGpu'),
        t('feature.llm'),
        t('feature.storage'),
        t('feature.support'),
        t('feature.training'),
        t('feature.integration'),
        t('feature.redundancy'),
        t('feature.dedicated'),
      ],
      highlighted: false,
      href: '/enterprise',
      gradient: 'from-blue-500/20 to-indigo-600/10',
    },
    {
      name: t('tier.bespoke.name'),
      price: t('tier.bespoke.price'),
      description: t('tier.bespoke.desc'),
      icon: Sparkles,
      image: '/images/bespoke-server.png',
      features: [
        'Custom hardware configuration',
        'Tailored LLM selection',
        'Bespoke integration',
        'White-glove service',
        'Dedicated project manager',
        'Custom SLA',
      ],
      highlighted: false,
      href: '/contact',
      gradient: 'from-pink-500/20 via-purple-500/15 to-cyan-500/10',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  tier.highlighted ? 'ring-2 ring-primary' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                
                {/* Image Section */}
                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${tier.gradient}`}>
                  <Image
                    src={tier.image || "/placeholder.svg"}
                    alt={tier.name}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{tier.price}</p>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={tier.href}>
                    <Button
                      className={`w-full ${
                        tier.highlighted
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {t('cta.learnMore')}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

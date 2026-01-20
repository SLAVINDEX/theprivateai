"use client"

import { useLanguage } from './language-context'
import { 
  Shield, 
  Lock, 
  Eye, 
  Wifi, 
  Server, 
  Cpu,
  Brain,
  Fingerprint
} from 'lucide-react'

export function FeaturesShowcase() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: 'Air-Gapped Security',
      description: 'Complete isolation from external networks. Your data never leaves your premises.',
    },
    {
      icon: Lock,
      title: 'On-Premise Deployment',
      description: 'Full control over your infrastructure with self-hosted solutions.',
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      description: 'Built from the ground up with privacy as the core principle.',
    },
    {
      icon: Wifi,
      title: 'No Cloud Dependency',
      description: 'Operate independently without reliance on external cloud services.',
    },
    {
      icon: Server,
      title: 'Enterprise Hardware',
      description: 'Professional-grade servers with redundancy and high availability.',
    },
    {
      icon: Cpu,
      title: 'NVIDIA A100 GPUs',
      description: 'Industry-leading AI accelerators for maximum performance.',
    },
    {
      icon: Brain,
      title: 'Local LLM Models',
      description: 'Run advanced language models entirely on your hardware.',
    },
    {
      icon: Fingerprint,
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, and sector-specific regulatory requirements.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 200, 180, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 200, 180, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Higher-Level Processing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade AI infrastructure that only we can provide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 group hover:bg-primary/5 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DNABackground } from '@/components/dna-background'
import { useLanguage } from '@/components/language-context'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Eye, 
  Leaf, 
  Users,
  ArrowRight,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: 'Sovereignty',
      description: 'Your data, your infrastructure, your control. We build systems that put power back in your hands.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No black boxes. Every component, every process, fully explainable and auditable.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Long-lifecycle design with thermal reuse, modular upgrades, and sustainable practices.',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'We earn trust through actions, not promises. Our systems speak for themselves.',
    },
  ]

  const team = [
    {
      role: 'Technical Leadership',
      description: 'Our engineering team brings decades of combined experience in enterprise infrastructure, GPU computing, and AI systems deployment.',
    },
    {
      role: 'Security Expertise',
      description: 'Former enterprise security consultants who understand the real-world challenges of protecting sensitive data.',
    },
    {
      role: 'Client Success',
      description: 'Dedicated relationship managers who ensure every deployment exceeds expectations.',
    },
  ]

  return (
    <main className="min-h-screen bg-background relative">
      <DNABackground />
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Building AI Infrastructure for a Sovereign Future
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Private AI was founded on a simple belief: artificial intelligence should empower, 
              not exploit. In a world where data is the new currency, we build systems that keep 
              your wealth where it belongs—with you.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where artificial intelligence empowers every individual and 
                business to operate at their fullest potential—with precision, privacy, and 
                complete autonomy. A future where intelligence lives where life and decisions 
                happen, not on distant servers owned by someone else.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To design, build, and deploy private AI infrastructure that gives individuals 
                and organizations complete control over their artificial intelligence capabilities. 
                We create systems that are powerful enough for enterprise demands yet secure 
                enough for the most sensitive applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we build</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Extended */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            A Different Approach
          </h2>
          
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Beyond Digital Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Privacy is physical too. Our systems can integrate local threat awareness for 
                unauthorized cameras, aerial surveillance, and visual boundary monitoring. All 
                detection and analysis happens locally and legally, enabling awareness and 
                protection without invasive data sharing. What observes you should never be 
                more powerful than what protects you.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Built for Decades</h3>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell software that expires. We build infrastructure that grows. Our 
                modular hardware design ensures long lifecycle operation with sustainable energy 
                integration and thermal reuse capabilities. This is AI designed for decades, 
                not product cycles.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Human-First AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe AI should augment human capability, not replace human judgment. 
                Every system we build includes human-in-the-loop design principles, ensuring 
                that artificial intelligence serves as a powerful tool rather than an 
                autonomous decision-maker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experts dedicated to your AI sovereignty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.role} className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{member.role}</h3>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Take Control of Your AI Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a consultation with our team and discover how private AI can transform your capabilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t('nav.book')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="border-border text-foreground bg-transparent">
                View Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

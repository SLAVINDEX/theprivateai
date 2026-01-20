"use client"

import { useLanguage } from './language-context'
import { X, Check, Leaf, Battery, Wrench, Timer } from 'lucide-react'

export function PhilosophySection() {
  const { t } = useLanguage()

  const notBeliefs = [
    t('philosophy.not1'),
    t('philosophy.not2'),
    t('philosophy.not3'),
  ]

  const yesBeliefs = [
    t('philosophy.yes1'),
    t('philosophy.yes2'),
    t('philosophy.yes3'),
    t('philosophy.yes4'),
  ]

  const longTermFeatures = [
    { icon: Wrench, label: t('longterm.feature1') },
    { icon: Timer, label: t('longterm.feature2') },
    { icon: Leaf, label: t('longterm.feature3') },
    { icon: Battery, label: t('longterm.feature4') },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* What we don't believe */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('philosophy.believe.not')}</h3>
            <ul className="space-y-4">
              {notBeliefs.map((belief) => (
                <li key={belief} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{belief}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we believe */}
          <div className="glass-card rounded-2xl p-8 ring-1 ring-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('philosophy.believe.yes')}</h3>
            <ul className="space-y-4">
              {yesBeliefs.map((belief) => (
                <li key={belief} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{belief}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Long Term */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('longterm.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('longterm.description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {longTermFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="glass-card rounded-2xl p-6 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

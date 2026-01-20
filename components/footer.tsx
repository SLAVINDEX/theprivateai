"use client"

import Link from 'next/link'
import { useLanguage } from './language-context'
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary/20 rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-gradient-to-br from-primary to-primary/50 rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">P</span>
                </div>
              </div>
              <div>
                <span className="text-foreground font-semibold text-lg">The Private</span>
                <span className="text-primary font-bold text-lg ml-1">AI</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/private" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('nav.private')}
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('nav.enterprise')}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t('nav.solutions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* UK Office */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('footer.address.uk')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+447537144472" className="hover:text-foreground transition-colors">
                  +44 7537 144472
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:ThePrivateAI@protonmail.com" className="hover:text-foreground transition-colors">
                  ThePrivateAI@protonmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Germany Office */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('footer.address.de')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Mainzer Landstraße 341<br />
                  60326 Frankfurt am Main
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+4915292618660" className="hover:text-foreground transition-colors">
                  +49 1529 2618660
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} The Private AI. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

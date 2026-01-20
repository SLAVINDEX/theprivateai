"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Globe, X } from 'lucide-react'

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/private', label: t('nav.private') },
    { href: '/enterprise', label: t('nav.enterprise') },
    { href: '/solutions', label: t('nav.solutions') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-primary/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute inset-1 bg-gradient-to-br from-primary to-primary/50 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-semibold text-lg tracking-tight">The Private</span>
              <span className="text-primary font-bold text-lg ml-1">AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'DE'}</span>
            </button>

            {/* Book Consultation CTA */}
            <Link href="/booking" className="hidden sm:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t('nav.book')}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex flex-col gap-8 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground">
                      {t('nav.book')}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

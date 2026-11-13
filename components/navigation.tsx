"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Globe, Menu } from "lucide-react"
import { EyeBrandMark } from "./eye-brand-mark"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/private-home", label: t("nav.private") },
    { href: "/enterprise", label: t("nav.enterprise") },
    { href: "/solutions", label: t("nav.solutions") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return <nav className="private-home-site-nav fixed left-0 right-0 top-0 z-50" aria-label="Main navigation">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex h-20 items-center justify-between">
      <Link href="/" className="private-home-brand group flex items-center gap-3" aria-label="ThePrivateAI home">
        <span className="private-home-eye-mark"><EyeBrandMark /></span>
        <span className="block"><span className="text-[#eee8dc] text-lg font-medium tracking-tight">ThePrivate</span><span className="ml-1 text-[#c9b38a] text-lg font-semibold">AI</span></span>
      </Link>
      <div className="hidden items-center gap-7 lg:flex">{navLinks.map((link) => <Link key={link.href} href={link.href} className="private-home-nav-link">{link.label}</Link>)}</div>
      <div className="flex items-center gap-3 sm:gap-4">
        <button type="button" onClick={() => setLanguage(language === "en" ? "de" : "en")} aria-label={language === "en" ? "Switch language to German" : "Switch language to English"} className="private-home-language"><Globe aria-hidden="true" /><span>{language === "en" ? "EN" : "DE"}</span></button>
        <Link href="/booking" className="private-home-nav-cta hidden items-center justify-center sm:inline-flex">{t("nav.book")}</Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="lg:hidden"><SheetTrigger asChild><Button variant="ghost" size="icon" className="private-home-menu-button" aria-label="Open navigation menu"><Menu /></Button></SheetTrigger></div>
          <SheetContent side="right" className="w-80 border-white/10 bg-[#20231f] text-[#eee8dc]">
            <SheetTitle className="sr-only">Main navigation</SheetTitle>
            <div className="mt-8 flex flex-col gap-7">{navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#eee8dc] transition-colors hover:text-[#c9b38a]">{link.label}</Link>)}<Link href="/booking" onClick={() => setIsOpen(false)} className="private-home-nav-cta w-full">{t("nav.book")}</Link></div>
          </SheetContent>
        </Sheet>
      </div>
    </div></div>
  </nav>
}

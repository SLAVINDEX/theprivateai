"use client"

import React from "react"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DNABackground } from '@/components/dna-background'
import { useLanguage } from '@/components/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Calendar,
  Clock,
  Video,
  CheckCircle,
  Phone,
  Users
} from 'lucide-react'

export default function BookingPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
      consultationType: formData.get('consultationType'),
      notes: formData.get('notes'),
    }

    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting booking:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const consultationTypes = [
    {
      icon: Phone,
      value: 'discovery',
      label: t('booking.form.type.discovery'),
      description: 'Introduction to our services and your needs',
    },
    {
      icon: Video,
      value: 'technical',
      label: t('booking.form.type.technical'),
      description: 'Deep dive into technical specifications',
    },
    {
      icon: Users,
      value: 'demo',
      label: t('booking.form.type.demo'),
      description: 'Live demonstration of our AI systems',
    },
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ]

  return (
    <main className="min-h-screen bg-background relative">
      <DNABackground />
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('booking.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('booking.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('booking.form.success')}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We have received your consultation request and will confirm your appointment within 24 hours.
              </p>
              <p className="text-muted-foreground">
                A confirmation email will be sent to your address with meeting details.
              </p>
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Consultation Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">{t('booking.form.type')}</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {consultationTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <label
                          key={type.value}
                          className="relative cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="consultationType"
                            value={type.value}
                            className="peer sr-only"
                            required
                          />
                          <div className="p-6 rounded-xl border border-border bg-secondary/50 peer-checked:border-primary peer-checked:bg-primary/10 transition-all">
                            <Icon className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-semibold text-foreground mb-1">{type.label}</h4>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Your Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-secondary border-border"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-secondary border-border"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input
                        id="company"
                        name="company"
                        className="bg-secondary border-border"
                        placeholder="Company Ltd"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="bg-secondary border-border"
                        placeholder="+44 7XXX XXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Preferred Schedule</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">{t('booking.form.date')} *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="bg-secondary border-border"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">{t('booking.form.time')} *</Label>
                      <Select name="time" required>
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot} (CET)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">{t('booking.form.notes')}</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="bg-secondary border-border resize-none"
                    placeholder="Any specific topics you'd like to discuss or questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : t('booking.form.submit')}
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By booking a consultation, you agree to our privacy policy. Your information will only be used to arrange your appointment.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

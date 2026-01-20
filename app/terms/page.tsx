"use client"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using The Private AI services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Private AI provides:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Custom AI server hardware solutions</li>
                <li>Installation and configuration services</li>
                <li>Technical consultation and support</li>
                <li>Staff training programmes</li>
                <li>Ongoing maintenance and support contracts</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All orders are subject to acceptance and availability. Prices are quoted in GBP (£) or EUR (€) 
                and are exclusive of VAT unless otherwise stated. A deposit of 50% is required to commence 
                custom builds, with the balance due upon delivery. Payment terms for enterprise contracts 
                will be specified in your service agreement.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Warranty</h2>
              <p className="text-muted-foreground leading-relaxed">
                All Private AI hardware comes with a minimum 3-year warranty covering manufacturing defects 
                and hardware failures under normal use. Enterprise Elite systems include extended warranty 
                options. Software components are provided as-is, with updates included for the duration of 
                your support contract.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Support Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Support response times and service levels are defined in your individual service agreement. 
                Standard support is provided during business hours (9:00-18:00 CET, Monday-Friday). 
                24/7 support is available for Enterprise Elite customers with active support contracts.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Private AI shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services. Our total liability shall 
                not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain full ownership of any data processed by your Private AI system. We retain 
                ownership of our proprietary configuration tools and documentation. Open-source software 
                components are provided under their respective licences.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Germany 
                for EU customers, or the laws of England and Wales for UK customers. Any disputes shall 
                be subject to the exclusive jurisdiction of the courts in the relevant jurisdiction.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at:<br />
                <a href="mailto:ThePrivateAI@protonmail.com" className="text-primary hover:underline">
                  ThePrivateAI@protonmail.com
                </a>
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

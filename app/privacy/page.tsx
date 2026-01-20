"use client"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At The Private AI, privacy is not just a policy—it is the foundation of everything we build. 
                We believe that your data belongs to you, and our systems are designed to ensure that it stays that way.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect only the information necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact information provided through our forms (name, email, phone)</li>
                <li>Company information for business inquiries</li>
                <li>Technical requirements for custom builds</li>
                <li>Communication records for support purposes</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your information is used exclusively to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide consultations</li>
                <li>Process orders and deliver services</li>
                <li>Provide technical support</li>
                <li>Send important updates about your services</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                All data transmitted to us is encrypted using industry-standard TLS protocols. 
                We do not sell, trade, or share your personal information with third parties for marketing purposes.
                Our internal systems follow the same air-gapped principles we apply to our client solutions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your AI System Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you purchase a Private AI system, your data stays entirely on your premises. 
                We have no access to, visibility into, or ability to retrieve any data processed by your system. 
                This is by design—your sovereignty is absolute.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">GDPR Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are fully compliant with the General Data Protection Regulation (GDPR). 
                You have the right to access, correct, or delete your personal data at any time. 
                Contact us at ThePrivateAI@protonmail.com to exercise these rights.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, please contact our Data Protection Officer at:<br />
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

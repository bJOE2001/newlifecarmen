import type { Metadata } from 'next'
import {
  Heart,
  ShieldCheck,
  BookOpen,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import GiveTabs from '@/components/GiveTabs'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { siteSettingsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Give — Tithes & Offerings',
  description: 'Support the mission of NLIGW Carmen through safe and secure online giving via GCash, Maya, or Bank Transfer.',
}

async function getData() {
  try {
    const settings = await client.fetch(siteSettingsQuery)
    return settings || null
  } catch {
    return null
  }
}

export default async function GivePage() {
  const settings = await getData()

  const gcashQrUrl = settings?.gcashQR ? urlForImage(settings.gcashQR)?.url() : null
  const mayaQrUrl = settings?.mayaQR ? urlForImage(settings.mayaQR)?.url() : null

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-deep" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="relative container-church py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-fade-in">
            <ShieldCheck size={14} className="text-white/80" aria-hidden="true" />
            <span className="text-sm text-white/90">Safe & Secure Giving</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-xl animate-slide-up">
            Tithes & Offerings
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Your generosity fuels our mission to share God&apos;s love and transform lives in Carmen and beyond.
          </p>
        </div>
      </section>

      {/* Giving Steps */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading
            title="How to Give"
            subtitle="Simple, secure, and convenient ways to support the ministry"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {[
              { step: '1', title: 'Choose Method', desc: 'Select GCash, Maya, or Bank Transfer below' },
              { step: '2', title: 'Send Your Gift', desc: 'Scan the QR code or copy the account number' },
              { step: '3', title: 'Confirm', desc: 'Keep your receipt for your records' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-emerald-light text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald/20">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-1">{item.title}</h3>
                <p className="text-sm text-text-body">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Dynamic Giving Tabs Card */}
          <GiveTabs
            gcashNumber={settings?.gcashNumber || '0917-XXX-XXXX'}
            gcashQrUrl={gcashQrUrl}
            mayaNumber={settings?.mayaNumber || '0917-XXX-XXXX'}
            mayaQrUrl={mayaQrUrl}
            bankName={settings?.bankName || 'BDO'}
            bankAccountName={settings?.bankAccountName || "New Life In God's Word Carmen"}
            bankAccountNumber={settings?.bankAccountNumber || 'XXXX-XXXX-XXXX'}
            churchName={settings?.churchName || "NLIGW Carmen"}
          />
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-bg">
        <div className="container-church py-16 text-center max-w-2xl">
          <BookOpen size={28} className="text-emerald mx-auto mb-4" aria-hidden="true" />
          <blockquote className="text-lg md:text-xl font-heading font-medium text-navy italic leading-relaxed">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-text-muted font-medium not-italic">— 2 Corinthians 9:7 (NIV)</cite>
        </div>
      </section>

      {/* Thank You CTA */}
      <section className="bg-forest">
        <div className="container-church py-16 text-center">
          <Heart size={32} className="text-white mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-3xl font-heading font-bold text-white mb-3">Thank You for Your Generosity</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Every gift, no matter the size, makes a real difference in our community and beyond.
          </p>
        </div>
      </section>
    </>
  )
}

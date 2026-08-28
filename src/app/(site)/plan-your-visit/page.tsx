import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Clock,
  MapPin,
  ShieldCheck,
  Shirt,
  Car,
  Heart,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description: 'Everything you need to know before visiting NLIGW Carmen — service times, what to expect, kids ministry, parking, and directions.',
}

async function getData() {
  try {
    const settings = await client.fetch(siteSettingsQuery)
    return settings || null
  } catch {
    return null
  }
}

const faqs = [
  {
    q: 'What should I wear?',
    a: 'Come as you are! We have no dress code. Most people wear casual and comfortable clothes — t-shirts, jeans, and sandals are perfectly fine.',
  },
  {
    q: 'How long is the service?',
    a: 'Our Sunday Worship Service typically lasts about 1.5 to 2 hours, including praise & worship and the sermon message.',
  },
  {
    q: 'Is there a program for my kids?',
    a: 'Yes! Our Kingdom Kids ministry provides fun, safe, and age-appropriate Bible lessons for children every Sunday. Kids are always welcome in the main service too.',
  },
  {
    q: 'Do I need to bring anything?',
    a: 'Just yourself! We provide everything you need. If you have a Bible, feel free to bring it — or you can follow along on your phone.',
  },
  {
    q: 'What if I\'m not a Christian?',
    a: 'You are absolutely welcome! We have many people who are still exploring faith. There is no pressure — come, listen, and ask questions anytime.',
  },
]

export default async function PlanYourVisitPage() {
  const settings = await getData()
  const serviceTimes = settings?.serviceTimes?.length
    ? settings.serviceTimes
    : [
        { day: 'Sunday', time: '8:00 AM', label: 'Sunday Worship Celebration', primary: true },
        { day: 'Wednesday', time: '6:30 PM', label: 'Midweek Service', primary: false },
      ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-deep" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="relative container-church py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-xl animate-slide-up">
            Plan Your Visit
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We can&apos;t wait to meet you! Here&apos;s everything you need to know before your first visit.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading title="Service Times" subtitle="Join us for worship, prayer, and fellowship" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {serviceTimes.map((service: { day?: string; time?: string; label?: string }, i: number) => {
              const isPrimary = i === 0
              return (
                <div
                  key={i}
                  className={`relative p-6 rounded-2xl border text-center transition-all duration-300 ${
                    isPrimary
                      ? 'bg-gradient-to-br from-navy to-navy-light border-navy text-white shadow-lg'
                      : 'bg-bg border-border hover:border-emerald/40 hover:shadow-md'
                  }`}
                >
                  {isPrimary && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-emerald text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      Main Service
                    </span>
                  )}
                  <Clock size={20} className={`mx-auto mb-3 ${isPrimary ? 'text-emerald-light' : 'text-emerald'}`} aria-hidden="true" />
                  <p className={`text-sm font-medium ${isPrimary ? 'text-white/60' : 'text-text-muted'}`}>{service.day || 'Weekly'}</p>
                  <p className={`text-2xl font-heading font-bold mt-1 ${isPrimary ? 'text-white' : 'text-navy'}`}>{service.time}</p>
                  <p className={`text-sm mt-1 ${isPrimary ? 'text-emerald-200' : 'text-text-body'}`}>{service.label || 'Worship'}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <SectionHeading
            title="What to Expect"
            subtitle="Your first visit should be comfortable. Here's what you'll find."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shirt,
                title: 'Come Casual',
                desc: 'No dress code. Wear what makes you comfortable — flip-flops welcome!',
              },
              {
                icon: ShieldCheck,
                title: 'Safe for Kids',
                desc: 'Safe, supervised kids programs with friendly volunteers during every service.',
              },
              {
                icon: Heart,
                title: 'Warm Welcome',
                desc: 'Our greeters will welcome you at the door and help you feel right at home.',
              },
              {
                icon: Car,
                title: 'Easy to Find',
                desc: 'Located in Carmen with accessible parking. See the map below for directions.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/10 to-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-emerald" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-church max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-bg rounded-2xl border border-border">
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="text-emerald shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base mb-2">{faq.q}</h3>
                    <p className="text-sm text-text-body leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <SectionHeading title="Find Us" subtitle="NLIGW Carmen — Purok 14, Ising, Carmen, Davao del Norte" />
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.0348852088256!2d125.70250948055823!3d7.359488083964212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f94f0c1e928817%3A0xc3faa0d2fc25cbca!2sNew%20Life%20in%20God's%20Word%20Church!5e1!3m2!1sen!2sph!4v1787829121692!5m2!1sen!2sph"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="NLIGW Carmen Church location map in Purok 14, Ising, Carmen Davao del Norte"
            />
          </div>
          <div className="text-center mt-8 flex items-center justify-center gap-2 text-text-body">
            <MapPin size={18} className="text-emerald" aria-hidden="true" />
            <span>Purok 14, Ising, Carmen, Davao del Norte, Philippines</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="container-church py-16 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Visit?</h2>
          <p className="text-lg text-white/80 mb-8">We&apos;d love to welcome you this Sunday!</p>
          <Link
            href="https://www.facebook.com/NLIGW.OFFICIALS"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-forest bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Message Us on Facebook
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}

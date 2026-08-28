import type { Metadata } from 'next'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import SectionHeading from '@/components/SectionHeading'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { eventsQuery, siteSettingsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events at NLIGW Carmen — church camps, conferences, youth nights, fellowships, and water baptisms.',
}

async function getData() {
  try {
    const [events, settings] = await Promise.all([
      client.fetch(eventsQuery),
      client.fetch(siteSettingsQuery),
    ])
    return {
      events: events || [],
      settings: settings || null,
    }
  } catch {
    return {
      events: [],
      settings: null,
    }
  }
}

export default async function EventsPage() {
  const { events, settings } = await getData()
  const eventsHeroImageUrl = settings?.eventsHeroImage ? urlForImage(settings.eventsHeroImage)?.url() : null

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background Image if uploaded */}
        {eventsHeroImageUrl ? (
          <>
            <Image
              src={eventsHeroImageUrl}
              alt="NLIGW Events"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-navy/90 via-black/35 to-navy/70" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-deep" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </>
        )}

        <div className="relative container-church py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-xl animate-slide-up">
            Events
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Join us for fellowship, growth, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Don't miss what God is doing in our community"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {events.map((event: { _id: string; title: string; date: string; location?: string; description?: string; registrationLink?: string }) => (
              <EventCard
                key={event._id}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                registrationLink={event.registrationLink}
              />
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No upcoming events at the moment. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

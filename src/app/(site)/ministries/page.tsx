import type { Metadata } from 'next'
import Image from 'next/image'
import MinistryCard from '@/components/MinistryCard'
import SectionHeading from '@/components/SectionHeading'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ministriesQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import { fallbackMinistries } from '@/lib/fallback-data'

export const metadata: Metadata = {
  title: 'Ministries',
  description: 'Explore the ministries of NLIGW Carmen — Kingdom Kids, Youth, Life Groups, Men, Women, and Worship Team.',
}

async function getData() {
  try {
    const [ministries, settings] = await Promise.all([
      client.fetch(ministriesQuery),
      client.fetch(siteSettingsQuery),
    ])
    return {
      ministries: ministries?.length ? ministries : fallbackMinistries,
      settings: settings || null,
    }
  } catch {
    return {
      ministries: fallbackMinistries,
      settings: null,
    }
  }
}

export default async function MinistriesPage() {
  const { ministries, settings } = await getData()
  const ministriesHeroImageUrl = settings?.ministriesHeroImage ? urlForImage(settings.ministriesHeroImage)?.url() : null

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background Image if uploaded */}
        {ministriesHeroImageUrl ? (
          <>
            <Image
              src={ministriesHeroImageUrl}
              alt="NLIGW Ministries"
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
            Ministries
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Find your place in our church family through one of our vibrant ministries.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <SectionHeading
            title="Our Ministries"
            subtitle="Each ministry is an opportunity to grow, serve, and connect with others"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry: { _id: string; name: string; category: string; leaderName?: string; meetingSchedule?: string; description?: string }) => (
              <MinistryCard
                key={ministry._id}
                name={ministry.name}
                category={ministry.category}
                leaderName={ministry.leaderName}
                meetingSchedule={ministry.meetingSchedule}
                description={ministry.description}
              />
            ))}
          </div>

          {ministries.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">Ministry information coming soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="bg-gradient-to-r from-navy to-navy-light">
        <div className="container-church py-16 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Want to Get Involved?</h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            We&apos;d love to help you find the right ministry fit. Reach out to us on Facebook!
          </p>
          <a
            href="https://m.me/NLIGW.OFFICIALS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-forest hover:bg-forest-dark rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Message Us
          </a>
        </div>
      </section>
    </>
  )
}

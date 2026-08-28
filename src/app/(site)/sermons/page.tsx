import type { Metadata } from 'next'
import Image from 'next/image'
import SermonCard from '@/components/SermonCard'
import SectionHeading from '@/components/SectionHeading'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { sermonsQuery, siteSettingsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Sermons',
  description: 'Watch and listen to sermons from NLIGW Carmen. Browse our archive by series, speaker, and date.',
}

async function getData() {
  try {
    const [sermons, settings] = await Promise.all([
      client.fetch(sermonsQuery),
      client.fetch(siteSettingsQuery),
    ])
    return {
      sermons: sermons || [],
      settings: settings || null,
    }
  } catch {
    return {
      sermons: [],
      settings: null,
    }
  }
}

export default async function SermonsPage() {
  const { sermons, settings } = await getData()
  const sermonsHeroImageUrl = settings?.sermonsHeroImage ? urlForImage(settings.sermonsHeroImage)?.url() : null

  // Extract unique series for display
  const series = [...new Set(sermons.map((s: { series?: string }) => s.series).filter(Boolean))]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background Image if uploaded */}
        {sermonsHeroImageUrl ? (
          <>
            <Image
              src={sermonsHeroImageUrl}
              alt="NLIGW Sermons"
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
            Sermons
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Revisit past messages and be encouraged by God&apos;s Word.
          </p>
        </div>
      </section>

      {/* Series Tags */}
      {series.length > 0 && (
        <section className="bg-white border-b border-border">
          <div className="container-church py-5 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-text-muted mr-2">Series:</span>
            {series.map((s) => (
              <span
                key={s as string}
                className="px-3 py-1.5 text-xs font-semibold text-navy bg-navy/5 rounded-full"
              >
                {s as string}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Sermons Grid */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <div
            className={
              sermons.length === 1
                ? 'max-w-md mx-auto'
                : sermons.length === 2
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            }
          >
            {sermons.map((sermon: { _id: string; title: string; speaker: string; series?: string; date: string; videoUrl?: string; scriptureReferences?: string[]; coverImage?: any }) => (
              <SermonCard
                key={sermon._id}
                title={sermon.title}
                speaker={sermon.speaker}
                series={sermon.series}
                date={sermon.date}
                videoUrl={sermon.videoUrl}
                scriptureReferences={sermon.scriptureReferences}
                coverImage={sermon.coverImage}
              />
            ))}
          </div>

          {sermons.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No sermons available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

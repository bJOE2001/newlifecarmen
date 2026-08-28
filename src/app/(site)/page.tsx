import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Clock,
  Heart,
  ArrowRight,
  ChevronRight,
  Users,
  HandHeart,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import SermonCard from '@/components/SermonCard'
import EventCard from '@/components/EventCard'
import MinistryCard from '@/components/MinistryCard'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  sermonsQuery,
  eventsQuery,
  ministriesQuery,
  siteSettingsQuery,
} from '@/sanity/lib/queries'

async function getData() {
  try {
    const [sermons, events, ministries, settings] = await Promise.all([
      client.fetch(sermonsQuery),
      client.fetch(eventsQuery),
      client.fetch(ministriesQuery),
      client.fetch(siteSettingsQuery),
    ])
    return {
      sermons: sermons || [],
      events: events || [],
      ministries: ministries || [],
      settings: settings || null,
    }
  } catch {
    return {
      sermons: [],
      events: [],
      ministries: [],
      settings: null,
    }
  }
}

export default async function HomePage() {
  const { sermons, events, ministries, settings } = await getData()
  const latestSermon = sermons[0]
  const heroImageUrl = settings?.heroImage ? urlForImage(settings.heroImage)?.url() : null

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image if uploaded */}
        {heroImageUrl ? (
          <>
            <Image
              src={heroImageUrl}
              alt="NLIGW Carmen Sanctuary"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            {/* Natural cinematic dark vignette — preserves genuine photo colors */}
            <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-navy/90 via-black/35 to-navy/70" />
          </>
        ) : (
          <>
            {/* Fallback Forest Green if no image is uploaded */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-deep" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/10 to-transparent rounded-full" />
          </>
        )}

        <div className="relative container-church py-20 text-center">
          {/* Service Times Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in">
            <Clock size={14} className="text-white/80" aria-hidden="true" />
            <span className="text-sm text-white/90">Sunday Worship Celebration — 8:00 AM</span>
          </div>

          {/* Main Heading — Crisp Pure White for Maximum Readability */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 drop-shadow-xl animate-slide-up">
            Welcome to New Life
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A Christ-centered discipleship church in Carmen, Davao del Norte dedicated to winning souls, making disciples, and raising leaders.
          </p>

          {/* CTA Buttons — High Contrast */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/plan-your-visit"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-forest hover:bg-forest-dark rounded-xl shadow-lg shadow-forest/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <MapPin size={18} aria-hidden="true" />
              Plan a Visit
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="https://www.facebook.com/NLIGW.OFFICIALS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-black/30 backdrop-blur-sm border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all duration-200 cursor-pointer"
            >
              Watch on Facebook
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-white">25+</p>
              <p className="text-xs text-white/50 mt-0.5">Years of Ministry</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-white">Life Groups</p>
              <p className="text-xs text-white/50 mt-0.5">Across Carmen</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-white">SOL</p>
              <p className="text-xs text-white/50 mt-0.5">School of Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE LADDER OF SUCCESS (Hagdan ng Tagumpay)
      ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-white border-b border-border">
        <div className="container-church">
          <SectionHeading
            title="The Discipleship Pathway"
            subtitle="Winning souls and making disciples through the 4-step Ladder of Success"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'WIN',
                sub: 'Manalo ng Kaluluwa',
                desc: 'Sharing the Good News with family and friends and connecting them to Life Groups.',
              },
              {
                step: '02',
                title: 'CONSOLIDATE',
                sub: 'Magpatibay',
                desc: 'Caring for new believers and experiencing God\'s healing at the Encounter Weekend.',
              },
              {
                step: '03',
                title: 'DISCIPLE',
                sub: 'Mag-ensayo',
                desc: 'Equipping every believer through the School of Leaders (SOL) to lead effectively.',
              },
              {
                step: '04',
                title: 'SEND',
                sub: 'Magpadala',
                desc: 'Launching new Life Groups and raising your own team of disciples for Jesus.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-bg border border-border hover:border-forest/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-bold text-forest tracking-wider bg-forest-50 px-2.5 py-1 rounded-md w-fit mb-3 border border-forest-200">
                  STEP {item.step}
                </span>
                <h3 className="text-xl font-heading font-bold text-navy">{item.title}</h3>
                <p className="text-xs font-semibold text-forest mb-2">{item.sub}</p>
                <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-light transition-colors duration-200 cursor-pointer"
            >
              Learn more about our Vision & Mission
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          I'M NEW HERE — Welcome Section
      ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading
            title="I&rsquo;m New Here"
            subtitle="We're so glad you're here! Whether you're just exploring or looking for a church home, you're welcome exactly as you are."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Come As You Are',
                desc: 'No dress code, no judgment. Wear whatever makes you comfortable. We save you a seat!',
              },
              {
                icon: Sparkles,
                title: 'Expect a Warm Welcome',
                desc: 'Our greeters will welcome you at the door and help you find your way around.',
              },
              {
                icon: HandHeart,
                title: 'Kids Are Welcome',
                desc: 'We have safe, fun, and age-appropriate programs for children during every service.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-bg hover:bg-emerald-50/50 border border-border hover:border-emerald/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald/10 to-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-emerald" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/plan-your-visit"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald hover:text-emerald-light transition-colors duration-200 cursor-pointer"
            >
              Learn more about visiting
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LATEST SERMON
      ═══════════════════════════════════════════════════ */}
      {latestSermon && (
        <section className="section-padding bg-bg">
          <div className="container-church">
            <SectionHeading
              title="Latest Sermon"
              subtitle="Catch up on our most recent message"
            />

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                {/* Sermon Cover */}
                <div className="h-52 md:h-64 bg-gradient-to-br from-navy via-navy-light to-navy-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    {latestSermon.series && (
                      <span className="inline-block px-3 py-1 bg-emerald/90 text-white text-xs font-semibold uppercase tracking-wider rounded-md mb-3">
                        {latestSermon.series}
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                      {latestSermon.title}
                    </h3>
                    <p className="text-white/60 mt-2 text-sm">
                      {latestSermon.speaker} · {new Date(latestSermon.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                {/* Scripture */}
                {latestSermon.scriptureReferences && latestSermon.scriptureReferences.length > 0 && (
                  <div className="px-6 py-4 border-t border-border flex items-center gap-2 text-emerald">
                    <BookOpen size={16} className="text-emerald shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium">{latestSermon.scriptureReferences.join(' · ')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/sermons"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy border-2 border-navy/15 rounded-xl hover:bg-navy/5 transition-all duration-200 cursor-pointer"
              >
                View All Sermons
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          MINISTRIES GRID
      ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading
            title="Our Ministries"
            subtitle="Find your place in our church family through one of our vibrant ministries"
          />

          {ministries.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ministries.slice(0, 6).map((ministry: { _id: string; name: string; category: string; leaderName?: string; meetingSchedule?: string; description?: string }) => (
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

              <div className="text-center mt-10">
                <Link
                  href="/ministries"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald hover:text-emerald-light transition-colors duration-200 cursor-pointer"
                >
                  Explore all ministries
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-text-muted text-base">Our ministry directory will be updated shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          UPCOMING EVENTS
      ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Don't miss what God is doing in our community"
          />

          {events.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {events.slice(0, 3).map((event: { _id: string; title: string; date: string; location?: string; description?: string; registrationLink?: string }) => (
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

              <div className="text-center mt-10">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy border-2 border-navy/15 rounded-xl hover:bg-navy/5 transition-all duration-200 cursor-pointer"
                >
                  View All Events
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-text-muted text-base">Check back soon for upcoming events and activities!</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          GIVING BANNER
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        <div className="relative container-church py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Heart size={14} className="text-white" aria-hidden="true" />
            <span className="text-sm text-white font-medium">Support Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Your Generosity Changes Lives
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Every gift helps us share God&apos;s love, serve our community, and reach more people with the Gospel.
          </p>
          <Link
            href="/give"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-forest bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Heart size={18} aria-hidden="true" />
            Give Now
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}

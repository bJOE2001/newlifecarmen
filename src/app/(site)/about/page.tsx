import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Heart,
  BookOpen,
  Eye,
  Target,
  Users,
  Award,
  Flame,
  Send,
  UserCheck,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { pastoralTeamQuery, siteSettingsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'About Us — Vision & Mission',
  description: 'Learn about NLIGW Carmen — our story, Vision, Ladder of Success (Win, Consolidate, Disciple, Send), beliefs, and pastoral leadership team.',
}

async function getData() {
  try {
    const [team, settings] = await Promise.all([
      client.fetch(pastoralTeamQuery),
      client.fetch(siteSettingsQuery),
    ])
    return {
      team: team || [],
      settings: settings || null,
    }
  } catch {
    return {
      team: [],
      settings: null,
    }
  }
}

const ladderOfSuccess = [
  {
    step: '01',
    phase: 'WIN',
    subtitle: 'Reach & Welcome',
    desc: 'Sharing God’s love through genuine friendships, inviting friends to Life Groups, and welcoming everyone with open arms.',
    scripture: 'Matthew 28:19',
    icon: Flame,
    color: 'from-forest to-emerald-600',
  },
  {
    step: '02',
    phase: 'CONSOLIDATE',
    subtitle: 'Grow & Connect',
    desc: 'Helping new friends find community, experience personal healing, and grow in confidence during our Encounter Weekend.',
    scripture: 'John 15:16',
    icon: UserCheck,
    color: 'from-forest-dark to-forest',
  },
  {
    step: '03',
    phase: 'DISCIPLE',
    subtitle: 'Learn & Lead',
    desc: 'Developing your character, faith, and practical life skills through our School of Leaders classes.',
    scripture: '2 Timothy 2:2',
    icon: GraduationCap,
    color: 'from-forest to-emerald-500',
  },
  {
    step: '04',
    phase: 'SEND',
    subtitle: 'Serve & Multiply',
    desc: 'Empowering you to start your own Life Group, mentor others, and bring positive change to your neighborhood.',
    scripture: 'Mark 16:15',
    icon: Send,
    color: 'from-forest-dark to-teal-700',
  },
]

const beliefs = [
  {
    title: 'The Bible',
    desc: 'We believe the Bible is God’s guide for life—full of practical wisdom, truth, and hope for our daily living.',
    icon: BookOpen,
  },
  {
    title: 'God’s Love',
    desc: 'We believe in one loving God who created us, cares about our lives, and desires a personal relationship with each of us.',
    icon: Heart,
  },
  {
    title: 'Jesus Christ',
    desc: 'We believe Jesus showed us what God is like through His life, love, death on the cross, and resurrection.',
    icon: Target,
  },
  {
    title: 'Grace & Forgiveness',
    desc: 'We believe forgiveness is a free gift from God through faith in Jesus, giving everyone a fresh start.',
    icon: Award,
  },
  {
    title: 'The Holy Spirit',
    desc: 'We believe God’s Spirit lives in us today, bringing comfort, guidance, and strength to live with purpose.',
    icon: Sparkles,
  },
  {
    title: 'Community & Church',
    desc: 'We believe life is meant to be shared in a warm community where we love, encourage, and serve one another.',
    icon: Users,
  },
]

export default async function AboutPage() {
  const { team, settings } = await getData()
  const aboutHeroImageUrl = settings?.aboutHeroImage ? urlForImage(settings.aboutHeroImage)?.url() : null

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background Image if uploaded */}
        {aboutHeroImageUrl ? (
          <>
            <Image
              src={aboutHeroImageUrl}
              alt="About NLIGW Carmen"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-fade-in">
            <Sparkles size={14} className="text-white/80" aria-hidden="true" />
            <span className="text-sm text-white/90">Love God · Love People</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-xl animate-slide-up">
            {settings?.churchName ? `About ${settings.churchName}` : 'About NLIGW Carmen'}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {settings?.tagline || 'A welcoming Christian family in Carmen, Davao del Norte where you can find genuine friendships, grow in faith, and discover your purpose.'}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-church max-w-3xl">
          <SectionHeading title="Our Story" subtitle="How our church family began in Carmen" />
          <div className="prose prose-lg max-w-none text-text-body leading-relaxed space-y-4">
            <p>
              New Life in God&apos;s Word (NLIGW Carmen) started with a simple vision: to love God, love people, and bring hope to our community in Carmen, Davao del Norte.
            </p>
            <p>
              Over the years, our church has grown from a small gathering into a thriving family of Life Groups. We meet in homes, schools, and neighborhoods throughout Carmen to share life, build genuine friendships, and support one another.
            </p>
            <p>
              Our goal is simple: <strong className="text-navy font-bold">help every person discover their God-given purpose.</strong> From your very first visit to becoming a confident leader in your family and community, we are here to walk with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest/10 to-emerald-100 flex items-center justify-center mb-5">
                <Eye size={24} className="text-forest" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-3">Our Vision</h2>
              <p className="text-text-body leading-relaxed">
                To share God&apos;s love with everyone in Carmen, build strong families, and raise compassionate leaders who make a positive difference in the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest/10 to-emerald-100 flex items-center justify-center mb-5">
                <Target size={24} className="text-forest" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-3">Our Mission</h2>
              <p className="text-text-body leading-relaxed">
                To help people know Jesus, grow in faith through practical Bible teaching, and empower everyone to use their gifts to help others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE LADDER OF SUCCESS (HAGDAN NG TAGUMPAY)
      ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading
            title="The Ladder of Success"
            subtitle="The 4-step discipleship process designed to guide every believer into spiritual maturity and leadership"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ladderOfSuccess.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className="group relative bg-bg rounded-2xl p-6 border border-border hover:border-forest/40 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-heading font-extrabold text-forest-light tracking-widest bg-forest-50 px-2.5 py-1 rounded-md border border-forest-200">
                      STEP {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center shadow-md text-white">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-navy">{step.phase}</h3>
                  <p className="text-xs font-semibold text-forest mb-3">{step.subtitle}</p>

                  <p className="text-sm text-text-body leading-relaxed flex-1">
                    {step.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border-light text-xs font-medium text-text-muted flex items-center gap-1.5">
                    <BookOpen size={13} className="text-forest shrink-0" aria-hidden="true" />
                    <span>{step.scripture}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-padding bg-bg">
        <div className="container-church">
          <SectionHeading
            title="What We Believe"
            subtitle="The foundational biblical truths that guide our faith, discipleship, and church family"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="p-6 rounded-2xl bg-white hover:bg-forest-50/50 border border-border hover:border-forest/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest/10 to-forest-100 flex items-center justify-center mb-4">
                  <belief.icon size={20} className="text-forest" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{belief.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastoral Team */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading
            title="Our Pastoral Team"
            subtitle="The shepherds and ministry leaders guiding our church family in Carmen"
          />
          {team.length > 0 ? (
            <div
              className={
                team.length === 1
                  ? 'max-w-md mx-auto'
                  : team.length === 2
                    ? 'grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto'
              }
            >
              {team.map((member: { _id: string; name: string; title: string; bio?: string; photo?: any }) => {
                const photoUrl = member.photo ? urlForImage(member.photo)?.url() : null
                return (
                  <div key={member._id} className="text-center">
                    {photoUrl ? (
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-forest/20 relative">
                        <Image
                          src={photoUrl}
                          alt={member.name}
                          fill
                          sizes="128px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-navy to-navy-light mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-forest/20">
                        <span className="text-3xl font-heading font-bold text-white">
                          {member.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="font-heading font-bold text-navy text-lg">{member.name}</h3>
                    <p className="text-sm text-forest font-semibold mb-3">{member.title}</p>
                    {member.bio && (
                      <p className="text-sm text-text-body leading-relaxed">{member.bio}</p>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted text-base">Leadership profiles will be updated shortly.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

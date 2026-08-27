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
import { fallbackPastoralTeam } from '@/lib/fallback-data'

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
      team: team?.length ? team : fallbackPastoralTeam,
      settings: settings || null,
    }
  } catch {
    return {
      team: fallbackPastoralTeam,
      settings: null,
    }
  }
}

const ladderOfSuccess = [
  {
    step: '01',
    phase: 'WIN',
    subtitle: 'Manalo ng Kaluluwa',
    desc: 'Reaching the lost through love, personal evangelism, Pre-Encounter, and inviting friends and family to weekly Life Groups.',
    scripture: 'Matthew 28:19',
    icon: Flame,
    color: 'from-forest to-emerald-600',
  },
  {
    step: '02',
    phase: 'CONSOLIDATE',
    subtitle: 'Magpatibay sa Pananampalataya',
    desc: 'Caring for new believers through prayer, personal visits, and experiencing spiritual freedom and healing at the Encounter God Retreat Weekend.',
    scripture: 'John 15:16',
    icon: UserCheck,
    color: 'from-forest-dark to-forest',
  },
  {
    step: '03',
    phase: 'DISCIPLE',
    subtitle: 'Mag-ensayo at Magturo',
    desc: 'Equipping every believer through the School of Leaders (SOL 1, 2, 3) to develop Christlike character, sound doctrine, and leadership skills.',
    scripture: '2 Timothy 2:2',
    icon: GraduationCap,
    color: 'from-forest to-emerald-500',
  },
  {
    step: '04',
    phase: 'SEND',
    subtitle: 'Magpadala ng mga Lider',
    desc: 'Empowering trained leaders to open new Life Groups, raise disciples, and multiply the Kingdom of God across Carmen.',
    scripture: 'Mark 16:15',
    icon: Send,
    color: 'from-forest-dark to-teal-700',
  },
]

const beliefs = [
  {
    title: 'The Bible',
    desc: 'We believe the Bible is the inspired, infallible Word of God — our ultimate authority for faith, discipleship, and life.',
    icon: BookOpen,
  },
  {
    title: 'God',
    desc: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.',
    icon: Heart,
  },
  {
    title: 'Jesus Christ',
    desc: 'We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death on the cross, and bodily resurrection.',
    icon: Target,
  },
  {
    title: 'Salvation by Grace',
    desc: 'We believe salvation is a gift of God received through personal faith in Jesus Christ alone, not by human works.',
    icon: Award,
  },
  {
    title: 'The Holy Spirit & Power',
    desc: 'We believe in the baptism and empowerment of the Holy Spirit for effective witness, holiness, and supernatural ministry.',
    icon: Sparkles,
  },
  {
    title: 'Discipleship & The Church',
    desc: 'We believe the Church is called to make disciples of all nations by following Jesus\' model of intentional relationship, mentoring, and multiplication.',
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
            <span className="text-sm text-white/90">Winning Souls · Making Disciples</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-xl animate-slide-up">
            About NLIGW Carmen
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A vibrant discipleship church committed to Jesus Christ, raising leaders of integrity, and transforming lives in Carmen, Davao del Norte.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-church max-w-3xl">
          <SectionHeading title="Our Story" />
          <div className="prose prose-lg max-w-none text-text-body leading-relaxed space-y-4">
            <p>
              New Life In God&apos;s Word (NLIGW) in Carmen, Davao del Norte was birthed through prayer, passion for the Great Commission,
              and a hunger to see God&apos;s transforming power in our community.
            </p>
            <p>
              Embracing Jesus&apos; proven model of intentional discipleship and mentoring, NLIGW Carmen has grown
              from a small gathering into a fruitful network of Life Groups meeting in homes, schools, workplaces, and barangays across Carmen.
            </p>
            <p>
              Our heartbeat is simple: **Every believer a leader, every home a cell group.** We are committed to walking with you from your first step
              of faith, through the life-changing Encounter God Weekend, into the School of Leaders (SOL), and onto your God-given destiny.
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
                To win souls and make disciples, raising leaders of character who govern their lives,
                strengthen families, and establish God&apos;s Kingdom in Carmen, Davao del Norte, and to the ends of the earth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest/10 to-emerald-100 flex items-center justify-center mb-5">
                <Target size={24} className="text-forest" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-3">Our Mission</h2>
              <p className="text-text-body leading-relaxed">
                To love God and people wholeheartedly by leading every believer through the **Ladder of Success** — 
                **Winning** the lost, **Consolidating** new believers, **Discipling** through the School of Leaders (SOL), and **Sending** leaders to multiply.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member: { _id: string; name: string; title: string; bio?: string; photo?: unknown }) => (
              <div key={member._id} className="text-center">
                {/* Photo placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-navy to-navy-light mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-forest/20">
                  <span className="text-3xl font-heading font-bold text-white">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-sm text-forest font-semibold mb-3">{member.title}</p>
                {member.bio && (
                  <p className="text-sm text-text-body leading-relaxed">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

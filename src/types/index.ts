import type { SanityImageSource } from '@/sanity/lib/image'

export type SanityImage = SanityImageSource

export interface ServiceTime {
  day?: string
  time?: string
  label?: string
  primary?: boolean
}

export interface ContactNumber {
  label?: string
  number?: string
}

export interface SiteSettings {
  _id?: string
  churchName?: string
  tagline?: string
  address?: string
  facebookUrl?: string
  serviceTimes?: ServiceTime[]
  contactNumbers?: ContactNumber[]
  heroImage?: SanityImage
  aboutHeroImage?: SanityImage
  sermonsHeroImage?: SanityImage
  eventsHeroImage?: SanityImage
  ministriesHeroImage?: SanityImage
  gcashNumber?: string
  gcashQR?: SanityImage
  mayaNumber?: string
  mayaQR?: SanityImage
  bankName?: string
  bankAccountName?: string
  bankAccountNumber?: string
}

export interface Sermon {
  _id: string
  title: string
  speaker: string
  series?: string
  date: string
  scriptureReferences?: string[]
  videoUrl?: string
  coverImage?: SanityImage
  sermonNotesPdf?: {
    asset?: {
      _ref: string
    }
  }
}

export interface ChurchEvent {
  _id: string
  title: string
  date: string
  location?: string
  description?: string
  registrationLink?: string
  eventPoster?: SanityImage
  coverImage?: SanityImage
}

export interface Ministry {
  _id: string
  name: string
  leaderName?: string
  description?: string
  heroImage?: SanityImage
}

export interface Announcement {
  _id: string
  bannerText: string
  link?: string
  alertLevel: 'info' | 'important' | 'urgent'
  isActive?: boolean
}

export interface PastoralTeamMember {
  _id: string
  name: string
  title: string
  bio?: string
  photo?: SanityImage
  order?: number
}
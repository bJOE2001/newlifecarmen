import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    churchName,
    tagline,
    heroImage,
    aboutHeroImage,
    sermonsHeroImage,
    eventsHeroImage,
    ministriesHeroImage,
    serviceTimes,
    address,
    facebookUrl,
    gcashQR,
    gcashNumber,
    mayaQR,
    mayaNumber,
    bankName,
    bankAccountName,
    bankAccountNumber,
    contactNumbers
  }
`

export const sermonsQuery = groq`
  *[_type == "sermon"] | order(date desc){
    _id,
    title,
    speaker,
    series,
    date,
    videoUrl,
    coverImage,
    scriptureReferences,
    "sermonNotesPdfUrl": sermonNotesPdf.asset->url
  }
`

export const latestSermonQuery = groq`
  *[_type == "sermon"] | order(date desc)[0]{
    _id,
    title,
    speaker,
    series,
    date,
    videoUrl,
    coverImage,
    scriptureReferences
  }
`

export const eventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc){
    _id,
    title,
    date,
    location,
    eventPoster,
    description,
    registrationLink
  }
`

export const ministriesQuery = groq`
  *[_type == "ministry"] | order(name asc){
    _id,
    name,
    category,
    leaderName,
    meetingSchedule,
    description,
    heroImage
  }
`

export const announcementsQuery = groq`
  *[_type == "announcement" && active == true]{
    _id,
    bannerText,
    link,
    alertLevel
  }
`

export const pastoralTeamQuery = groq`
  *[_type == "pastoralTeam"] | order(order asc){
    _id,
    name,
    title,
    photo,
    bio
  }
`

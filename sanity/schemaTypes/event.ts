import { defineField, defineType } from 'sanity'
import { Calendar } from 'lucide-react'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: Calendar,
  groups: [
    { name: 'info', title: 'Event Details', default: true },
    { name: 'media', title: 'Poster & Registration' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Encounter God Retreat / Youth Fellowship Night',
      validation: (Rule) => Rule.required().error('Event title is required.'),
    }),
    defineField({
      name: 'date',
      title: 'Event Date & Start Time',
      type: 'datetime',
      group: 'info',
      description: 'The date and time when the event begins.',
      validation: (Rule) => Rule.required().error('Event date & time is required.'),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'h:mm A',
        timeStep: 15,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location / Venue',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. NLIGW Carmen Main Sanctuary / Camp Site',
      description: 'Physical venue or online meeting link description.',
      initialValue: 'NLIGW Carmen Main Hall',
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      group: 'info',
      rows: 4,
      placeholder: 'Tell attendees what to expect, who should attend, and what to bring...',
      description: 'Summary of the event, itinerary, and invite details.',
    }),
    defineField({
      name: 'eventPoster',
      title: 'Event Poster / Flyer Image',
      type: 'image',
      group: 'media',
      description: 'Promotional banner or flyer graphic (recommended 4:3 or 16:9 ratio).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration / Sign-up URL (Optional)',
      type: 'url',
      group: 'media',
      placeholder: 'https://forms.google.com/... or https://m.me/...',
      description: 'Direct link to Google Forms, Messenger, or ticket registration page.',
    }),
  ],
  orderings: [
    {
      title: 'Date (Upcoming First)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
    {
      title: 'Date (Latest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      media: 'eventPoster',
    },
    prepare({ title, date, location, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })
        : 'No date set'
      return {
        title: title || 'Untitled Event',
        subtitle: location ? `${formattedDate} · 📍 ${location}` : formattedDate,
        media,
      }
    },
  },
})

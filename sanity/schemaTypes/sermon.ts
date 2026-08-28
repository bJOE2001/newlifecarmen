import { defineField, defineType } from 'sanity'
import { Mic } from 'lucide-react'

export const sermon = defineType({
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  icon: Mic,
  groups: [
    { name: 'info', title: 'Message Details', default: true },
    { name: 'media', title: 'Media & Notes' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Walking in Faith and Victory',
      validation: (Rule) => Rule.required().error('A sermon title is required.'),
    }),
    defineField({
      name: 'speaker',
      title: 'Preacher / Speaker',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Pastor James or Guest Speaker',
      validation: (Rule) => Rule.required().error('Speaker name is required.'),
    }),
    defineField({
      name: 'series',
      title: 'Sermon Series (Optional)',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Foundations of Faith / Unshakeable Hope',
      description: 'Group sermons together by series on the website.',
    }),
    defineField({
      name: 'date',
      title: 'Date Preached',
      type: 'date',
      group: 'info',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'scriptureReferences',
      title: 'Scripture References',
      type: 'array',
      group: 'info',
      description: 'Add Bible verses referenced in this message (e.g. Hebrews 11:1, Romans 10:17).',
      of: [{ type: 'string', placeholder: 'e.g. Romans 8:28' }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Recording URL',
      type: 'url',
      group: 'media',
      description: 'Paste the YouTube watch link or Facebook Live video URL.',
      placeholder: 'https://youtube.com/watch?v=... or https://facebook.com/...',
    }),
    defineField({
      name: 'coverImage',
      title: 'Sermon Cover / Banner Artwork',
      type: 'image',
      group: 'media',
      description: 'Recommended dimension: 1280x720 (16:9 ratio).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sermonNotesPdf',
      title: 'Sermon Notes or Study Guide (PDF)',
      type: 'file',
      group: 'media',
      description: 'Upload printable sermon outline or discipleship study guide PDF.',
      options: {
        accept: '.pdf',
      },
    }),
  ],
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      speaker: 'speaker',
      series: 'series',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, speaker, series, date, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : ''
      const subtitleParts = [speaker, series ? `Series: ${series}` : null, formattedDate].filter(Boolean)
      return {
        title: title || 'Untitled Sermon',
        subtitle: subtitleParts.join(' · '),
        media,
      }
    },
  },
})

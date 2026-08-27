import { defineField, defineType } from 'sanity'

export const sermon = defineType({
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube or Facebook)',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'scriptureReferences',
      title: 'Scripture References',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'sermonNotesPdf',
      title: 'Sermon Notes (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
  orderings: [
    {
      title: 'Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'speaker',
      media: 'coverImage',
    },
  },
})

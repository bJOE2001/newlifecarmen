import { defineField, defineType } from 'sanity'
import { Users } from 'lucide-react'

export const ministry = defineType({
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  icon: Users,
  groups: [
    { name: 'info', title: 'Ministry Info', default: true },
    { name: 'media', title: 'Cover Photo' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Ministry Name',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Media / Music / Usher',
      validation: (Rule) => Rule.required().error('Ministry name is required.'),
    }),
    defineField({
      name: 'leaderName',
      title: 'Ministry Leader(s)',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Pastor Grace & Team',
      description: 'Name of the leader or coordinator overseeing this ministry.',
    }),
    defineField({
      name: 'description',
      title: 'Ministry Description / Purpose',
      type: 'text',
      group: 'info',
      rows: 4,
      placeholder: 'Describe what this ministry does, who it serves, and how to get connected...',
    }),
    defineField({
      name: 'heroImage',
      title: 'Ministry Cover / Feature Photo',
      type: 'image',
      group: 'media',
      description: 'Photo representing the ministry or members in action.',
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      leaderName: 'leaderName',
      media: 'heroImage',
    },
    prepare({ title, leaderName, media }) {
      return {
        title: title || 'Unnamed Ministry',
        subtitle: leaderName ? `Leader: ${leaderName}` : 'Church Ministry',
        media,
      }
    },
  },
})

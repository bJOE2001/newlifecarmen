import { defineField, defineType } from 'sanity'
import { UserCheck } from 'lucide-react'

export const pastoralTeam = defineType({
  name: 'pastoralTeam',
  title: 'Pastoral Team',
  type: 'document',
  icon: UserCheck,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      placeholder: 'e.g. Pastor James Doe',
      validation: (Rule) => Rule.required().error('Pastor / Leader name is required.'),
    }),
    defineField({
      name: 'title',
      title: 'Pastoral Title / Ministry Role',
      type: 'string',
      placeholder: 'e.g. Senior Pastor / Associate Pastor / Worship Director',
      validation: (Rule) => Rule.required().error('Role/Title is required.'),
    }),
    defineField({
      name: 'photo',
      title: 'Portrait / Profile Photo',
      type: 'image',
      description: 'Square portrait photo recommended (hotspot enabled for centering face).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio / Ministry Focus',
      type: 'text',
      rows: 4,
      placeholder: 'Brief background about their calling, heart for discipleship, and years of service...',
    }),
    defineField({
      name: 'order',
      title: 'Display Sorting Order',
      type: 'number',
      description: 'Controls the display order on the About page (e.g. 1 = Senior Pastor, 2 = Associate, etc.).',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Order (1, 2, 3...)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      order: 'order',
      media: 'photo',
    },
    prepare({ title, subtitle, order, media }) {
      const orderLabel = order !== undefined ? `#${order}` : ''
      const sub = [orderLabel, subtitle].filter(Boolean).join(' · ')
      return {
        title: title || 'Unnamed Leader',
        subtitle: sub || 'Pastoral Team',
        media,
      }
    },
  },
})

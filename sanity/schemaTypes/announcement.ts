import { defineField, defineType } from 'sanity'
import { Megaphone } from 'lucide-react'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: Megaphone,
  fields: [
    defineField({
      name: 'active',
      title: 'Active / Published on Website',
      type: 'boolean',
      description: 'Turn ON to display this announcement bar at the top of the website.',
      initialValue: true,
    }),
    defineField({
      name: 'bannerText',
      title: 'Announcement Message',
      type: 'string',
      placeholder: 'e.g. Join us this Sunday for our Special Anniversary Service at 8:00 AM!',
      description: 'Keep it concise and clear (1-2 sentences recommended).',
      validation: (Rule) => Rule.required().error('Announcement message cannot be blank.'),
    }),
    defineField({
      name: 'link',
      title: 'Call to Action Link (Optional)',
      type: 'url',
      placeholder: 'https://...',
      description: 'URL where visitors are redirected when clicking the announcement banner.',
    }),
    defineField({
      name: 'alertLevel',
      title: 'Alert Priority Level',
      type: 'string',
      description: 'Controls the color style of the top announcement bar.',
      options: {
        list: [
          { title: 'Information (Navy / Standard)', value: 'info' },
          { title: 'Important Highlight (Emerald Green)', value: 'important' },
          { title: 'Urgent / Alert Notice (Red)', value: 'urgent' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
    }),
  ],
  preview: {
    select: {
      title: 'bannerText',
      active: 'active',
      alertLevel: 'alertLevel',
    },
    prepare({ title, active, alertLevel }) {
      const statusIcon = active ? '🟢 Active' : '⚪ Inactive'
      const levelLabel = alertLevel ? `[${alertLevel.toUpperCase()}]` : ''
      return {
        title: title || 'Empty Announcement',
        subtitle: `${statusIcon} ${levelLabel}`,
      }
    },
  },
})

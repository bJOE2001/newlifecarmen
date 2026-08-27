import { defineField, defineType } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'bannerText',
      title: 'Banner Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link (optional)',
      type: 'url',
    }),
    defineField({
      name: 'alertLevel',
      title: 'Alert Level',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Important', value: 'important' },
          { title: 'Urgent', value: 'urgent' },
        ],
      },
      initialValue: 'info',
    }),
  ],
  preview: {
    select: {
      title: 'bannerText',
      subtitle: 'alertLevel',
    },
  },
})

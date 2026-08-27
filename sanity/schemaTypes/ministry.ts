import { defineField, defineType } from 'sanity'

export const ministry = defineType({
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ministry Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Kids', value: 'kids' },
          { title: 'Youth', value: 'youth' },
          { title: 'Life Groups', value: 'lifegroups' },
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Worship', value: 'worship' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leaderName',
      title: 'Leader Name',
      type: 'string',
    }),
    defineField({
      name: 'meetingSchedule',
      title: 'Meeting Schedule',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'heroImage',
    },
  },
})

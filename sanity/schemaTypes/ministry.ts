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
      placeholder: 'e.g. Kingdom Kids / Youth Alive / Life Groups',
      validation: (Rule) => Rule.required().error('Ministry name is required.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'info',
      options: {
        list: [
          { title: 'Kids Ministry', value: 'kids' },
          { title: 'Youth & Young Adults', value: 'youth' },
          { title: 'Discipleship & Life Groups', value: 'lifegroups' },
          { title: "Men's Ministry", value: 'men' },
          { title: "Women's Ministry", value: 'women' },
          { title: 'Worship & Creative Arts', value: 'worship' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      name: 'meetingSchedule',
      title: 'Meeting Schedule / Regular Time',
      type: 'string',
      group: 'info',
      placeholder: 'e.g. Every Saturday 4:00 PM / Weekly in homes',
      description: 'When and where this group usually meets.',
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
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
      leaderName: 'leaderName',
      media: 'heroImage',
    },
    prepare({ title, category, leaderName, media }) {
      const categoryMap: Record<string, string> = {
        kids: 'Kids',
        youth: 'Youth',
        lifegroups: 'Life Groups',
        men: "Men's",
        women: "Women's",
        worship: 'Worship',
      }
      const catLabel = category ? categoryMap[category] || category : 'Ministry'
      const subtitle = leaderName ? `${catLabel} · Leader: ${leaderName}` : catLabel
      return {
        title: title || 'Unnamed Ministry',
        subtitle,
        media,
      }
    },
  },
})

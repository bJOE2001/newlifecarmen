import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'churchName',
      title: 'Church Name',
      type: 'string',
      initialValue: 'New Life In God\'s World — Carmen',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'A warm, welcoming Christian community dedicated to faith, hope, and spiritual growth.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Background Image',
      type: 'image',
      description: 'Upload a photo for the homepage hero background.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutHeroImage',
      title: 'About Page Banner Image',
      type: 'image',
      description: 'Upload a background photo for the About Us page header banner.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sermonsHeroImage',
      title: 'Sermons Page Banner Image',
      type: 'image',
      description: 'Upload a background photo for the Sermons page header banner.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'eventsHeroImage',
      title: 'Events Page Banner Image',
      type: 'image',
      description: 'Upload a background photo for the Events page header banner.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ministriesHeroImage',
      title: 'Ministries Page Banner Image',
      type: 'image',
      description: 'Upload a background photo for the Ministries page header banner.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'serviceTimes',
      title: 'Service Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Day', type: 'string' }),
            defineField({ name: 'time', title: 'Time', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g., Sunday Worship)', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'address',
      title: 'Church Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Page URL',
      type: 'url',
      initialValue: 'https://www.facebook.com/NLIGW.OFFICIALS',
    }),
    defineField({
      name: 'gcashQR',
      title: 'GCash QR Code Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gcashNumber',
      title: 'GCash Number',
      type: 'string',
    }),
    defineField({
      name: 'mayaQR',
      title: 'Maya QR Code Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mayaNumber',
      title: 'Maya Number',
      type: 'string',
    }),
    defineField({
      name: 'bankName',
      title: 'Bank Name',
      type: 'string',
    }),
    defineField({
      name: 'bankAccountName',
      title: 'Bank Account Name',
      type: 'string',
    }),
    defineField({
      name: 'bankAccountNumber',
      title: 'Bank Account Number',
      type: 'string',
    }),
    defineField({
      name: 'contactNumbers',
      title: 'Contact Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'number', title: 'Number', type: 'string' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})

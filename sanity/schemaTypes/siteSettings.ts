import { defineField, defineType } from 'sanity'
import { Settings } from 'lucide-react'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: Settings,
  groups: [
    { name: 'general', title: 'General Info', default: true },
    { name: 'banners', title: 'Page Banners' },
    { name: 'services', title: 'Service Times' },
    { name: 'giving', title: 'Tithes & Giving' },
    { name: 'contacts', title: 'Contact Numbers' },
  ],
  fields: [
    // ══════════════════════════════════
    // GENERAL INFO
    // ══════════════════════════════════
    defineField({
      name: 'churchName',
      title: 'Church Name',
      type: 'string',
      group: 'general',
      description: 'Official name of the church displayed in header, footer, and metadata.',
      initialValue: "New Life In God's Word — Carmen",
    }),
    defineField({
      name: 'tagline',
      title: 'Church Tagline / Vision Statement',
      type: 'string',
      group: 'general',
      description: 'Brief slogan or vision statement displayed below the church name.',
      initialValue: 'A Christ-centered discipleship church in Carmen, Davao del Norte dedicated to winning souls and making disciples.',
    }),
    defineField({
      name: 'address',
      title: 'Church Physical Address',
      type: 'text',
      group: 'general',
      rows: 2,
      description: 'Complete physical location for visitors and map directions.',
      initialValue: 'Purok 14, Ising, Carmen, Davao del Norte, Philippines',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Official Facebook Page URL',
      type: 'url',
      group: 'general',
      description: 'Direct link to the church official Facebook page (for Messenger and watch live).',
      initialValue: 'https://www.facebook.com/NLIGW.OFFICIALS',
    }),

    // ══════════════════════════════════
    // PAGE BANNERS & HERO IMAGES
    // ══════════════════════════════════
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Background Image',
      type: 'image',
      group: 'banners',
      description: 'High-resolution photo for the main homepage hero banner (recommended: 1920x1080).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutHeroImage',
      title: 'About Us Page Banner',
      type: 'image',
      group: 'banners',
      description: 'Header background photo for the About Us page.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sermonsHeroImage',
      title: 'Sermons Page Banner',
      type: 'image',
      group: 'banners',
      description: 'Header background photo for the Sermons page.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'eventsHeroImage',
      title: 'Events Page Banner',
      type: 'image',
      group: 'banners',
      description: 'Header background photo for the Events page.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ministriesHeroImage',
      title: 'Ministries Page Banner',
      type: 'image',
      group: 'banners',
      description: 'Header background photo for the Ministries page.',
      options: { hotspot: true },
    }),

    // ══════════════════════════════════
    // SERVICE TIMES
    // ══════════════════════════════════
    defineField({
      name: 'serviceTimes',
      title: 'Weekly Service Times',
      type: 'array',
      group: 'services',
      description: 'Regular worship and gathering schedules displayed across the website.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Day', type: 'string', placeholder: 'Sunday' }),
            defineField({ name: 'time', title: 'Time', type: 'string', placeholder: '8:00 AM' }),
            defineField({ name: 'label', title: 'Service Name', type: 'string', placeholder: 'Sunday Worship Celebration' }),
          ],
          preview: {
            select: {
              day: 'day',
              time: 'time',
              label: 'label',
            },
            prepare({ day, time, label }) {
              return {
                title: label || 'Service',
                subtitle: [day, time].filter(Boolean).join(' · '),
              }
            },
          },
        },
      ],
    }),

    // ══════════════════════════════════
    // GIVING & TITHES
    // ══════════════════════════════════
    defineField({
      name: 'gcashNumber',
      title: 'GCash Mobile Number',
      type: 'string',
      group: 'giving',
      placeholder: '0917-XXX-XXXX',
    }),
    defineField({
      name: 'gcashQR',
      title: 'GCash QR Code Image',
      type: 'image',
      group: 'giving',
      description: 'Upload your church GCash QR Code for easy scanning.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mayaNumber',
      title: 'Maya Mobile Number',
      type: 'string',
      group: 'giving',
      placeholder: '0917-XXX-XXXX',
    }),
    defineField({
      name: 'mayaQR',
      title: 'Maya QR Code Image',
      type: 'image',
      group: 'giving',
      description: 'Upload your church Maya QR Code.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bankName',
      title: 'Bank Name',
      type: 'string',
      group: 'giving',
      placeholder: 'BDO / BPI / Landbank',
    }),
    defineField({
      name: 'bankAccountName',
      title: 'Bank Account Name',
      type: 'string',
      group: 'giving',
      placeholder: "New Life In God's Word Carmen",
    }),
    defineField({
      name: 'bankAccountNumber',
      title: 'Bank Account Number',
      type: 'string',
      group: 'giving',
      placeholder: 'XXXX-XXXX-XXXX',
    }),

    // ══════════════════════════════════
    // CONTACT NUMBERS
    // ══════════════════════════════════
    defineField({
      name: 'contactNumbers',
      title: 'Official Contact Numbers',
      type: 'array',
      group: 'contacts',
      description: 'Phone numbers displayed in the footer and contact sections.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Department / Label', type: 'string', placeholder: 'Church Office / Senior Pastor' }),
            defineField({ name: 'number', title: 'Contact Number', type: 'string', placeholder: '0917-XXX-XXXX' }),
          ],
          preview: {
            select: {
              label: 'label',
              number: 'number',
            },
            prepare({ label, number }) {
              return {
                title: label || 'Contact',
                subtitle: number,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'churchName',
      subtitle: 'tagline',
      media: 'heroImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Site Settings',
        subtitle: subtitle || 'Global Church Configuration',
        media,
      }
    },
  },
})

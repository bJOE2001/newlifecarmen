import type { StructureResolver } from 'sanity/structure'
import {
  Settings,
  Megaphone,
  Mic,
  Calendar,
  Users,
  UserCheck,
} from 'lucide-react'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('NLIGW Carmen CMS')
    .items([
      // Singleton Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(Settings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Church & Website Settings')
        ),

      S.divider(),

      // Announcements
      S.listItem()
        .title('Announcements')
        .icon(Megaphone)
        .child(
          S.documentTypeList('announcement')
            .title('Website Announcements')
            .defaultOrdering([{ field: 'active', direction: 'desc' }])
        ),

      // Sermons
      S.listItem()
        .title('Sermons & Messages')
        .icon(Mic)
        .child(
          S.documentTypeList('sermon')
            .title('Sermon Library')
            .defaultOrdering([{ field: 'date', direction: 'desc' }])
        ),

      // Events
      S.listItem()
        .title('Events & Activities')
        .icon(Calendar)
        .child(
          S.documentTypeList('event')
            .title('Church Calendar & Events')
            .defaultOrdering([{ field: 'date', direction: 'asc' }])
        ),

      // Ministries
      S.listItem()
        .title('Ministries & Life Groups')
        .icon(Users)
        .child(
          S.documentTypeList('ministry')
            .title('Church Ministries')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
        ),

      // Pastoral Team
      S.listItem()
        .title('Pastoral & Leadership Team')
        .icon(UserCheck)
        .child(
          S.documentTypeList('pastoralTeam')
            .title('Pastoral Team Members')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
    ])

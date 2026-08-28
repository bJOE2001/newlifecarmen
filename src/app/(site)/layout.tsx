import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MessengerFloat from '@/components/MessengerFloat'
import AnnouncementBar from '@/components/AnnouncementBar'
import { client } from '@/sanity/lib/client'
import { announcementsQuery } from '@/sanity/lib/queries'
import type { Announcement } from '@/types'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  let announcements: Announcement[] = []
  try {
    announcements = (await client.fetch(announcementsQuery)) || []
  } catch {
    announcements = []
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar announcements={announcements} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <MessengerFloat />
    </div>
  )
}

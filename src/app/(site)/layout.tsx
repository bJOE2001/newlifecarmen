import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MessengerFloat from '@/components/MessengerFloat'
import AnnouncementBar from '@/components/AnnouncementBar'
import { client } from '@/sanity/lib/client'
import { announcementsQuery } from '@/sanity/lib/queries'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  let announcements: any[] = []
  try {
    announcements = (await client.fetch(announcementsQuery)) || []
  } catch {
    announcements = []
  }

  const hasAnnouncement = announcements.length > 0

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar announcements={announcements} />
      <main className={`flex-1 ${hasAnnouncement ? 'pt-24 sm:pt-26' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
      <MessengerFloat />
    </div>
  )
}

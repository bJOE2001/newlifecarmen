import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MessengerFloat from '@/components/MessengerFloat'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <MessengerFloat />
    </div>
  )
}

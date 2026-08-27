import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NLIGW Carmen — New Life In God\'s Word',
    template: '%s | NLIGW Carmen',
  },
  description:
    'A warm, welcoming Christian community in Carmen, Davao del Norte, Philippines dedicated to faith, hope, spiritual growth, and outreach. Join us for Sunday worship services.',
  keywords: [
    'NLIGW',
    'New Life In God\'s Word',
    'Carmen',
    'Davao del Norte',
    'Ising',
    'church',
    'Christian',
    'worship',
    'Philippines',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://nligwcarmen.com',
    siteName: 'NLIGW Carmen',
    title: 'NLIGW Carmen — New Life In God\'s Word',
    description:
      'A warm, welcoming Christian community in Carmen, Davao del Norte, Philippines dedicated to faith, hope, spiritual growth, and outreach.',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://nligwcarmen.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-bg antialiased">{children}</body>
    </html>
  )
}

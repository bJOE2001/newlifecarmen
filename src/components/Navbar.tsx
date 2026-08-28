'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronRight,
  Heart,
  MapPin,
} from 'lucide-react'
import AnnouncementBar from './AnnouncementBar'
import type { Announcement } from '@/types'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: 'Ministries', href: '/ministries' },
]

export default function Navbar({ announcements = [] }: { announcements?: Announcement[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {announcements.length > 0 && <AnnouncementBar announcements={announcements} />}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5'
            : 'bg-white/90 backdrop-blur-sm border-b border-navy/5'
        }`}
      >
        <nav className="container-church flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="NLIGW Carmen - Home">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-navy/10 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/logo.png"
              alt="NLIGW Carmen Church Logo"
              fill
              sizes="40px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div>
            <p className="font-heading font-bold text-navy text-sm sm:text-base leading-tight">NLIGW</p>
            <p className="text-[10px] text-text-muted leading-tight tracking-wider uppercase font-semibold">Carmen, Davao del Norte</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-navy-600 hover:text-navy rounded-lg hover:bg-navy/5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/plan-your-visit"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-navy border-2 border-navy/15 rounded-lg hover:border-navy/30 hover:bg-navy/5 transition-all duration-200 cursor-pointer"
          >
            <MapPin size={15} aria-hidden="true" />
            Plan a Visit
          </Link>
          <Link
            href="/give"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-forest hover:bg-forest-dark rounded-lg shadow-md shadow-forest/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Heart size={15} aria-hidden="true" />
            Give
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5 transition-colors duration-200 cursor-pointer"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-white transition-all duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
        style={{ backgroundColor: '#ffffff', minHeight: 'calc(100dvh - 4rem)' }}
      >
        <div className="p-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 text-base font-semibold text-navy hover:text-forest rounded-xl hover:bg-forest-50 active:bg-forest-100 transition-all duration-200"
            >
              <span>{link.label}</span>
              <ChevronRight size={18} className="text-navy-600" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="p-6 pt-4 flex flex-col gap-3 border-t border-border bg-white mt-auto" style={{ backgroundColor: '#ffffff' }}>
          <Link
            href="/plan-your-visit"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-navy border-2 border-navy/20 rounded-xl hover:bg-navy/5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <MapPin size={16} aria-hidden="true" />
            Plan a Visit
          </Link>
          <Link
            href="/give"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white bg-forest hover:bg-forest-dark rounded-xl shadow-md shadow-forest/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Heart size={16} aria-hidden="true" />
            Give
          </Link>
        </div>
      </div>
    </header>
  )
}

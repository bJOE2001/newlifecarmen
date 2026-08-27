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

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: 'Ministries', href: '/ministries' },
]

export default function Navbar() {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5'
          : 'bg-white/80 backdrop-blur-sm'
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

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-base font-medium text-navy-600 hover:text-navy rounded-xl hover:bg-navy/5 transition-all duration-200"
                >
                  {link.label}
                  <ChevronRight size={16} className="text-text-muted" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-6 flex flex-col gap-3 border-t border-border">
              <Link
                href="/plan-your-visit"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-navy border-2 border-navy/15 rounded-xl hover:bg-navy/5 transition-all duration-200 cursor-pointer"
              >
                <MapPin size={16} aria-hidden="true" />
                Plan a Visit
              </Link>
              <Link
                href="/give"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-forest hover:bg-forest-dark rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                <Heart size={16} aria-hidden="true" />
                Give
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

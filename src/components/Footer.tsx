import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Heart } from 'lucide-react'

function FacebookIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/80">
      {/* Main Footer Content */}
      <div className="container-church section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-white/20 bg-white/10">
                <Image
                  src="/logo.png"
                  alt="NLIGW Carmen Church Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">NLIGW</p>
                <p className="text-[10px] text-white/50 tracking-wider uppercase font-semibold">Carmen, Davao del Norte</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              A warm, welcoming Christian community in Carmen, Davao del Norte dedicated to faith, hope, spiritual growth, and outreach.
            </p>
            <a
              href="https://www.facebook.com/NLIGW.OFFICIALS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-light hover:text-emerald-200 transition-colors duration-200"
              aria-label="Visit NLIGW Carmen Facebook page"
            >
              <FacebookIcon size={18} />
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Plan Your Visit', href: '/plan-your-visit' },
                { label: 'Sermons', href: '/sermons' },
                { label: 'Events', href: '/events' },
                { label: 'Ministries', href: '/ministries' },
                { label: 'Give', href: '/give' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-emerald-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base flex items-center gap-2">
              <Clock size={16} className="text-emerald-light" aria-hidden="true" />
              Service Times
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-sm font-medium text-white">Sunday Worship</p>
                <p className="text-sm text-white/50">9:00 AM</p>
              </li>
              <li>
                <p className="text-sm font-medium text-white">Afternoon Prayer</p>
                <p className="text-sm text-white/50">Sunday, 2:00 PM</p>
              </li>
              <li>
                <p className="text-sm font-medium text-white">Midweek Bible Study</p>
                <p className="text-sm text-white/50">Wednesday, 7:00 PM</p>
              </li>
              <li>
                <p className="text-sm font-medium text-white">Youth Night</p>
                <p className="text-sm text-white/50">Friday, 7:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-emerald-light mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-white/60">Purok 14, Ising, Carmen, Davao del Norte</p>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-emerald-light mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-white/60">Contact the church office through our Facebook page</p>
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.0348852088256!2d125.70250948055823!3d7.359488083964212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f94f0c1e928817%3A0xc3faa0d2fc25cbca!2sNew%20Life%20in%20God's%20Word%20Church!5e1!3m2!1sen!2sph!4v1787829121692!5m2!1sen!2sph"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="NLIGW Carmen Church location in Purok 14, Ising, Carmen Davao del Norte"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-church py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {currentYear} New Life In God&apos;s Word — Carmen. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Built with <Heart size={12} className="text-emerald-light" aria-hidden="true" /> for His glory
          </p>
        </div>
      </div>
    </footer>
  )
}

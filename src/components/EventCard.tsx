import { Calendar, MapPin, ExternalLink } from 'lucide-react'

interface EventCardProps {
  title: string
  date: string
  location?: string
  description?: string
  registrationLink?: string
}

export default function EventCard({ title, date, location, description, registrationLink }: EventCardProps) {
  const eventDate = new Date(date)
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = eventDate.getDate()
  const time = eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-emerald/40 shadow-sm hover:shadow-lg hover:shadow-emerald/5 transition-all duration-300 overflow-hidden">
      <div className="flex">
        {/* Date Badge */}
        <div className="w-20 min-h-full bg-gradient-to-b from-navy to-navy-light flex flex-col items-center justify-center px-3 py-5 shrink-0">
          <span className="text-emerald-light text-xs font-bold tracking-wider">{month}</span>
          <span className="text-white text-3xl font-heading font-extrabold leading-none mt-0.5">{day}</span>
          <span className="text-white/50 text-[10px] mt-1">{time}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 space-y-2.5">
          <h3 className="font-heading font-bold text-navy text-lg leading-tight group-hover:text-emerald transition-colors duration-200">
            {title}
          </h3>

          {location && (
            <div className="flex items-center gap-1.5 text-sm text-text-muted">
              <MapPin size={14} className="text-emerald shrink-0" aria-hidden="true" />
              {location}
            </div>
          )}

          {description && (
            <p className="text-sm text-text-body leading-relaxed line-clamp-2">{description}</p>
          )}

          {registrationLink && (
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-1 text-sm font-semibold text-emerald hover:text-emerald-light transition-colors duration-200 cursor-pointer"
            >
              Register
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

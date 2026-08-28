import Image from 'next/image'
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import type { SanityImage } from '@/types'

interface EventCardProps {
  title: string
  date: string
  location?: string
  description?: string
  registrationLink?: string
  coverImage?: SanityImage
  eventPoster?: SanityImage
}

export default function EventCard({
  title,
  date,
  location,
  description,
  registrationLink,
  coverImage,
  eventPoster,
}: EventCardProps) {
  const eventDate = new Date(date)
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = eventDate.getDate()
  const time = eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  const imageSource = eventPoster || coverImage
  const coverImageUrl = imageSource ? urlForImage(imageSource)?.url() : null

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-emerald/40 shadow-sm hover:shadow-lg hover:shadow-emerald/5 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Event Poster / Cover */}
      {coverImageUrl ? (
        <div className="relative h-48 w-full overflow-hidden bg-navy">
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Floating Date Badge */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-2 text-center shadow-md min-w-[50px] border border-white/40">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-emerald">
              {month}
            </span>
            <span className="block text-xl font-heading font-extrabold text-navy leading-none">
              {day}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white/90 font-medium drop-shadow-sm">
            <Clock size={13} className="text-emerald-light" />
            <span>{time}</span>
          </div>
        </div>
      ) : (
        <div className="flex border-b border-border-light">
          {/* Date Badge */}
          <div className="w-20 bg-gradient-to-b from-navy to-navy-light flex flex-col items-center justify-center px-3 py-5 shrink-0">
            <span className="text-emerald-light text-xs font-bold tracking-wider">{month}</span>
            <span className="text-white text-3xl font-heading font-extrabold leading-none mt-0.5">{day}</span>
            <span className="text-white/50 text-[10px] mt-1">{time}</span>
          </div>
          <div className="flex-1 p-4 bg-navy-light/5 flex items-center">
            <p className="text-xs font-medium text-emerald flex items-center gap-1">
              <Calendar size={13} />
              Upcoming Church Event
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-navy text-lg leading-tight group-hover:text-emerald transition-colors duration-200">
            {title}
          </h3>

          {location && (
            <div className="flex items-center gap-1.5 text-sm text-text-muted">
              <MapPin size={14} className="text-emerald shrink-0" aria-hidden="true" />
              <span>{location}</span>
            </div>
          )}

          {description && (
            <p className="text-sm text-text-body leading-relaxed line-clamp-3">{description}</p>
          )}
        </div>

        {registrationLink && (
          <div className="pt-3 border-t border-border/60">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors duration-200 cursor-pointer"
            >
              Register for Event
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

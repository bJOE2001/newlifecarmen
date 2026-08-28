import Image from 'next/image'
import { BookOpen, Calendar, User } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

interface SermonCardProps {
  title: string
  speaker: string
  series?: string
  date: string
  scriptureReferences?: string[]
  videoUrl?: string
  coverImage?: any
}

export default function SermonCard({
  title,
  speaker,
  series,
  date,
  scriptureReferences,
  videoUrl,
  coverImage,
}: SermonCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const coverImageUrl = coverImage ? urlForImage(coverImage)?.url() : null

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-emerald/40 shadow-sm hover:shadow-lg hover:shadow-emerald/5 transition-all duration-300 overflow-hidden">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-br from-navy to-navy-700 relative overflow-hidden">
        {coverImageUrl ? (
          <>
            <Image
              src={coverImageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-black/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        )}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          {series && (
            <span className="inline-block px-2.5 py-1 bg-emerald/90 text-white text-[10px] font-semibold uppercase tracking-wider rounded-md mb-2 shadow-sm">
              {series}
            </span>
          )}
          <h3 className="text-white font-heading font-bold text-lg leading-tight group-hover:text-emerald-200 transition-colors duration-200 drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <User size={14} aria-hidden="true" />
            {speaker}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} aria-hidden="true" />
            {formattedDate}
          </span>
        </div>

        {scriptureReferences && scriptureReferences.length > 0 && (
          <div className="flex items-center gap-1.5 text-sm text-emerald font-medium">
            <BookOpen size={14} aria-hidden="true" />
            <span>{scriptureReferences.join(' · ')}</span>
          </div>
        )}

        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 text-sm font-semibold text-navy bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors duration-200 cursor-pointer"
          >
            Watch Sermon
          </a>
        )}
      </div>
    </div>
  )
}

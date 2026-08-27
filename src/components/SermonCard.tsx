import { BookOpen, Calendar, User } from 'lucide-react'

interface SermonCardProps {
  title: string
  speaker: string
  series?: string
  date: string
  scriptureReferences?: string[]
  videoUrl?: string
}

export default function SermonCard({ title, speaker, series, date, scriptureReferences, videoUrl }: SermonCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-emerald/40 shadow-sm hover:shadow-lg hover:shadow-emerald/5 transition-all duration-300 overflow-hidden">
      {/* Cover Image Placeholder */}
      <div className="h-44 bg-gradient-to-br from-navy to-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          {series && (
            <span className="inline-block px-2.5 py-1 bg-emerald/90 text-white text-[10px] font-semibold uppercase tracking-wider rounded-md mb-2">
              {series}
            </span>
          )}
          <h3 className="text-white font-heading font-bold text-lg leading-tight group-hover:text-emerald-200 transition-colors duration-200">
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

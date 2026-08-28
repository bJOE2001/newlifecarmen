import Image from 'next/image'
import { Users } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import type { SanityImage } from '@/types'

interface MinistryCardProps {
  name: string
  leaderName?: string
  description?: string
  heroImage?: SanityImage
}

export default function MinistryCard({ name, leaderName, description, heroImage }: MinistryCardProps) {
  const heroImageUrl = heroImage ? urlForImage(heroImage)?.url() : null

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-emerald/40 shadow-sm hover:shadow-lg hover:shadow-emerald/5 transition-all duration-300 overflow-hidden">
      {/* Header / Cover */}
      <div className="h-36 bg-gradient-to-br from-forest-dark via-forest to-emerald-700 relative overflow-hidden">
        {heroImageUrl ? (
          <>
            <Image
              src={heroImageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        )}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-white font-heading font-bold text-xl leading-tight drop-shadow-sm">{name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {description && (
          <p className="text-sm text-text-body leading-relaxed line-clamp-3">{description}</p>
        )}

        {leaderName && (
          <div className="pt-2 border-t border-border-light">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Users size={14} className="text-emerald shrink-0" aria-hidden="true" />
              <span>Led by <span className="font-medium text-navy">{leaderName}</span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

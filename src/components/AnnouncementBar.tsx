'use client'

import { useState } from 'react'
import { X, AlertTriangle, Info, AlertCircle } from 'lucide-react'

interface Announcement {
  _id: string
  bannerText: string
  link?: string
  alertLevel: 'info' | 'important' | 'urgent'
}

const alertStyles = {
  info: {
    bg: 'bg-navy-light',
    text: 'text-white/90',
    icon: Info,
  },
  important: {
    bg: 'bg-emerald-600',
    text: 'text-white',
    icon: AlertCircle,
  },
  urgent: {
    bg: 'bg-red-600',
    text: 'text-white',
    icon: AlertTriangle,
  },
}

export default function AnnouncementBar({ announcements }: { announcements: Announcement[] }) {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())

  const visible = announcements.filter((a) => !dismissed.has(a._id))
  if (visible.length === 0) return null

  const current = visible[0]
  const style = alertStyles[current.alertLevel] || alertStyles.info
  const Icon = style.icon

  return (
    <div className={`${style.bg} ${style.text} relative`} role="alert">
      <div className="container-church py-2.5 px-12 flex items-center justify-center gap-2 text-sm text-center font-medium">
        <Icon size={16} className="shrink-0" aria-hidden="true" />
        {current.link ? (
          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {current.bannerText}
          </a>
        ) : (
          <span>{current.bannerText}</span>
        )}
      </div>
      <button
        onClick={() => setDismissed((prev) => new Set(prev).add(current._id))}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/20 transition-colors duration-200 cursor-pointer"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  )
}

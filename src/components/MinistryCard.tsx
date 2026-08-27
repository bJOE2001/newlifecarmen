import { Users, Clock, Baby, Flame, Home, Shield, Sparkles, Music, Church, type LucideIcon } from 'lucide-react'

const categoryIcons: Record<string, LucideIcon> = {
  kids: Baby,
  youth: Flame,
  lifegroups: Home,
  men: Shield,
  women: Sparkles,
  worship: Music,
}

const categoryColors: Record<string, string> = {
  kids: 'from-emerald-600 to-teal-500',
  youth: 'from-emerald-700 to-cyan-600',
  lifegroups: 'from-forest to-emerald-600',
  men: 'from-slate-700 to-emerald-800',
  women: 'from-teal-600 to-emerald-500',
  worship: 'from-emerald to-emerald-light',
}

interface MinistryCardProps {
  name: string
  category: string
  leaderName?: string
  meetingSchedule?: string
  description?: string
}

export default function MinistryCard({ name, category, leaderName, meetingSchedule, description }: MinistryCardProps) {
  const gradient = categoryColors[category] || 'from-forest to-emerald'
  const IconComponent = categoryIcons[category] || Church

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-emerald/40 shadow-sm hover:shadow-lg hover:shadow-emerald/5 transition-all duration-300 overflow-hidden">
      {/* Colored Header */}
      <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="text-white font-heading font-bold text-lg leading-tight">{name}</h3>
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <IconComponent size={20} className="text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {description && (
          <p className="text-sm text-text-body leading-relaxed line-clamp-3">{description}</p>
        )}

        <div className="flex flex-col gap-2 pt-2 border-t border-border-light">
          {leaderName && (
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Users size={14} className="text-emerald shrink-0" aria-hidden="true" />
              <span>Led by <span className="font-medium text-navy">{leaderName}</span></span>
            </div>
          )}
          {meetingSchedule && (
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Clock size={14} className="text-emerald shrink-0" aria-hidden="true" />
              <span>{meetingSchedule}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

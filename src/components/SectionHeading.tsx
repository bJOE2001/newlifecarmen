interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {/* Decorative accent */}
      <div className={`flex items-center gap-2 mb-3 ${centered ? 'justify-center' : ''}`}>
        <div className="w-8 h-0.5 bg-forest rounded-full" />
        <div className="w-2 h-2 rounded-full bg-forest" />
        <div className="w-8 h-0.5 bg-forest rounded-full" />
      </div>
      <h2 className={`text-3xl md:text-4xl font-heading font-bold ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-text-body'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

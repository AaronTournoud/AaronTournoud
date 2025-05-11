import type { ReactNode } from "react"

interface TimelineItemProps {
  date: string
  title: string
  subtitle: string
  description: string
  children?: ReactNode
}

export function TimelineItem({ date, title, subtitle, description, children }: TimelineItemProps) {
  return (
    <div className="timeline mb-12">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{date}</div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-white/60 mb-2">{subtitle}</p>
      <p className="text-white/80 mb-4">{description}</p>
      {children}
    </div>
  )
}

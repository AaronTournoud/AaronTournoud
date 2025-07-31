import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
}

export function TimelineItem({ date, title, subtitle, description, children }: TimelineItemProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2">
        <span className="text-xs sm:text-sm font-semibold text-primary bg-white/10 px-2 py-1 rounded sm:rounded-full min-w-[70px] text-center">
          {date}
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-primary">{title}</h3>
          <p className="text-xs sm:text-sm text-white/80">{subtitle}</p>
        </div>
      </div>
      <p className="text-white/80 mb-2">{description}</p>
      {children}
    </div>
  );
}

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  technologies: string
  demoUrl?: string
  codeUrl?: string
}

export function ProjectCard({ title, subtitle, description, image, technologies, demoUrl, codeUrl }: ProjectCardProps) {
  return (
    <div className="project-card sm:p-8 flex flex-col h-full">
      <div className="relative w-full min-h-[180px] sm:min-h-[220px] max-h-[260px] flex items-center justify-center mb-4 rounded-lg overflow-hidden bg-[#000000]">
        <Image src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, 400px"/>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/60 mb-3">{subtitle}</p>
        <p className="text-white/80 mb-4">{description}</p>
        <p className="text-sm text-primary mb-4">{technologies}</p>
        <div className="flex gap-3">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={18} />
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

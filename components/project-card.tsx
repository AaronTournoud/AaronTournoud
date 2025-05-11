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
    <div className="project-card">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
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

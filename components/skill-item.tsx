import Image from "next/image"

interface SkillItemProps {
  name: string
  icon: string
}

export function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="skill-icon">
        <Image src={icon || "/placeholder.svg"} alt={name} width={32} height={32} />
      </div>
      <span className="text-white/80">{name}</span>
    </div>
  )
}

import Image from "next/image"

import { Project } from "@/lib/projects"
import { Card } from "@/components/ui/card"

type ProjectProps = {
  project: Project
}

export default function ProjectCard(props: ProjectProps) {
  return (
    <div className="grid grid-cols-2 items-center gap-8">
      <div>
        <Image src={props.project.img} alt={props.project.img} />
      </div>
      <div>
        <h2 className="pb-2 font-heading text-4xl">{props.project.name}</h2>
        <p className="pb-4 text-muted-foreground">
          {props.project.description}
        </p>
        {props.project.tags.map((tag, index) => (
          <Card
            className="pointer-events-none inline-block px-4 py-2"
            key={index}
          >
            {tag}
          </Card>
        ))}
      </div>
    </div>
  )
}

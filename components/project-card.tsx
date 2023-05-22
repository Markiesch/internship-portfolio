import Image from "next/image"
import Link from "next/link"

import { Project } from "@/types/projects"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type ProjectProps = {
  project: Project
}

export function ProjectCard(props: ProjectProps) {
  return (
    <div>
      <Card>
        <div className="flex justify-center overflow-hidden rounded-lg bg-white">
          <Image src={props.project.img} height={275} alt={props.project.img} />
        </div>
      </Card>
      <div className="pt-8">
        <h2 className="pb-2 font-heading text-4xl">{props.project.name}</h2>
        <p className="pb-4 text-muted-foreground">
          {props.project.description}
        </p>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href={`/projects/${props.project.url}`}
        >
          Read case study
        </Link>
      </div>
    </div>
  )
}

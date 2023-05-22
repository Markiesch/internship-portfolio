import Link from "next/link"
import { projects } from "@/data/projects.data"

import { buttonVariants } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"

export function HomeProjects() {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <div className="flex justify-center pt-12">
        <Link className={buttonVariants({ size: "lg" })} href="/projects">
          All projects
          <Icons.arrowRight className="ml-1 h-4" />
        </Link>
      </div>
    </>
  )
}

import { projects } from "@/data/projects.data"

import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Projecten</h1>
      <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.url} />
        ))}
      </div>
    </>
  )
}

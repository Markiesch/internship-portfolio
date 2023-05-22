import { SectionTitle } from "@/components/ui/section-title"
import { projects } from "@/data/projects.data";
import { ProjectCard } from "@/components/project-card"

export function HomeProjects() {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index}/>
        ))}
      </div>
    </>
  )
}

import Placeholder from "@/public/placeholder.png"

import { Project } from "@/lib/projects"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { SectionTitle } from "@/components/ui/section-title"
import ProjectCard from "@/components/project-card"

export function HomeProjects() {
  const projects: Project[] = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A itaque necessitatibus nemo! Assumenda explicabo, ipsa itaque nam obcaecati quasi soluta?",
      img: Placeholder,
      tags: ["backend"],
    },
  ]

  return (
    <>
      <div className="pb-8">
        <SectionTitle>Projects</SectionTitle>
        <SectionSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          cupiditate deleniti dolor excepturi laborum magnam magni, odit
          provident quibusdam voluptatibus.
        </SectionSubtitle>
      </div>
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </>
  )
}

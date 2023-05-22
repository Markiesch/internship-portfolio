import Image from "next/image"
import { projects } from "@/data/projects.data"

import { Card } from "@/components/ui/card"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.url == params.id)

  return (
    <>
      {project ? (
        <div className="mx-auto max-w-2xl">
          <Card className="mb-8 flex justify-center overflow-hidden rounded-lg bg-white">
            <Image src={project.img} height={250} alt={project.name} />
          </Card>
          <h1 className="pb-4 text-5xl font-bold">{project.name}</h1>
          <p className="text-muted-foreground">{project.description}</p>

          {project.data?.map((data) => (
            <>
              {data.type == "title" ? (
                <h2 className="pt-8 text-3xl font-bold">{data.text}</h2>
              ) : data.type == "text" ? (
                <p className="pt-2 text-muted-foreground">{data.text}</p>
              ) : data.type == "image" ? (
                <Card className="mt-8 flex justify-center overflow-hidden rounded-lg bg-white p-4">
                  <Image src={data.url} alt="" />
                </Card>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

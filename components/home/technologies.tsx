import { LucideProps } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

type Technology = {
  name: string
  description: string
  icon: (props: LucideProps) => JSX.Element
}

export function Technologies() {
  const technologies: Technology[] = [
    {
      name: "NodeJS",
      description:
        "For both the frontend and backend we used NodeJS as a Javascript runtime environment",
      icon: Icons.node,
    },
    {
      name: "NestJS",
      description:
        "For the backend framework we used NestJS, to easily create API endpoints that interact with the database.",
      icon: Icons.nest,
    },
    {
      name: "PostgreSQL",
      description:
        "All data is stored inside a PostgreSQL database, which is an Object-relational database",
      icon: Icons.psql,
    },
    {
      name: "VueJS",
      description:
        "We used VueJS as our Frontend framework, along side the basic packages such as Pinia and Vue-router",
      icon: Icons.vue,
    },
    {
      name: "Vuetify",
      description:
        "For a consistent style throughout the website, we used Vuetify which is based on Material 3",
      icon: Icons.vuetify,
    },
    {
      name: "Typescript",
      description:
        "Superset of JavaScript which compiles to clean JavaScript output",
      icon: Icons.typescript,
    },
  ]

  return (
    <div className="md:py-12 lg:py-24">
      <h2 className="pb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
        Technologies
      </h2>
      <p className="max-w-[80ch] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        During my internship at Ctrl Learning I have learned to work with new
        front- and back-end technologies. Here is an overview of which
        technologies I have used.
      </p>

      <div className="grid gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3">
        {technologies.map((technology, index) => (
          <Card key={index} className="p-6">
            {technology.icon({ className: "h-10 w-10 fill-white" })}
            <h3 className="py-2 font-bold">{technology.name}</h3>
            <p className="text-sm text-muted-foreground">
              {technology.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

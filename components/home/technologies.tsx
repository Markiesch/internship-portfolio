import { Card } from "@/components/ui/card"

type Technology = {
  name: string
  description: string
}

export function Technologies() {
  const technologies: Technology[] = [
    { name: "VueJS", description: "Frontend framework" },
    { name: "VueJS", description: "Frontend framework" },
    { name: "VueJS", description: "Frontend framework" },
    { name: "VueJS", description: "Frontend framework" },
    { name: "VueJS", description: "Frontend framework" },
    { name: "VueJS", description: "Frontend framework" },
  ]

  return (
    <div className="md:py-12 lg:py-24">
      <h2 className="pb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Technologies
      </h2>
      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        dolorum, ex expedita fugiat harum ipsum iste iure libero modi nam nisi
        provident quae quasi rem repudiandae sequi totam ullam voluptatum?
      </p>

      <div className="grid gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3">
        {technologies.map((technology) => (
          <>
            <Card className="p-6">
              <h3 className="pb-2 font-bold">{technology.name}</h3>
              <p className="text-sm text-muted-foreground">
                {technology.description}
              </p>
            </Card>
          </>
        ))}
      </div>
    </div>
  )
}

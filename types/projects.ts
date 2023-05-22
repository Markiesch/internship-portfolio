type Data =
  | { type: "image"; url: any }
  | { type: "title" | "text"; text: string }

export type Project = {
  url: string
  name: string
  description: string
  img: any
  data: Data[]
}

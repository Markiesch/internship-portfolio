import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Technologies } from "@/components/home/technologies"

export default function IndexPage() {
  return (
    <>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Portfolio internship Ctrl Learning
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          This portfolio is to showcase the things a made during my second
          internship at Ctrl Learning
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="projects"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Projecten
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      <div>
        <Technologies />
      </div>
    </>
  )
}

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { HomeProjects } from "@/components/home/projects"
import { Technologies } from "@/components/home/technologies"

export default function IndexPage() {
  return (
    <>
      <div className="max-w-[980px] py-8 md:py-12 lg:py-24">
        <h1 className="slide-in text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Portfolio internship Ctrl Learning
        </h1>
        <p className="slide-in slide-in-300 max-w-[700px] pb-6 pt-4 text-lg text-muted-foreground  sm:text-xl">
          This portfolio is to showcase the things a made during my second
          internship at Ctrl Learning
        </p>
        <div className="flex gap-2">
          <Link
            href="/projects"
            rel="noreferrer"
            className={
              buttonVariants({ size: "lg" }) + " slide-in slide-in-500"
            }
          >
            Projecten
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={
              buttonVariants({ variant: "outline", size: "lg" }) +
              " slide-in slide-in-700"
            }
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="slide-in slide-in-900">
        <Technologies />
        <HomeProjects />
      </div>
    </>
  )
}

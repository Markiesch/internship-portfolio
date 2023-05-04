import React from "react"

export function SectionTitle(props: React.PropsWithChildren) {
  return (
    <h2 className="pb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
      {props.children}
    </h2>
  )
}

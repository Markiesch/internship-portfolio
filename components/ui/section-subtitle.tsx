import React from "react"

export function SectionSubtitle(props: React.PropsWithChildren) {
  return (
    <p className="max-w-[80ch] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
      {props.children}
    </p>
  )
}

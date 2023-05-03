import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export function MainNav() {
  const items: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projecten",
      href: "/projects",
    },
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">Mark.</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    </div>
  )
}

import React from "react"

import Link from "next/link"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

type UserNavMenuItemProps = {
  href: string
  text: string
  icon: React.ReactElement
}

export function UserNavMenuItemWithLink({ href, text, icon }: UserNavMenuItemProps) {
  return (
    <DropdownMenuItem>
      <Link href={href} className="w-full flex gap-x-2 items-center hover:text-green-600" >
        {icon} {text}
      </Link>
    </DropdownMenuItem>
  )
}
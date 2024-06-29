import React from "react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"


type Props = {
  children: React.ReactElement
}

export function UserNavMenuItem ({ children }: Props) {
  return (
    <DropdownMenuItem>
      {children}
    </DropdownMenuItem>
  )
}
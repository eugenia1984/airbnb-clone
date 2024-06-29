import React from "react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"


type UserNavMenuItemProps = {
  children: React.ReactElement
}

export const UserNavMenuItem = ({ children }: UserNavMenuItemProps) => {
  return (
    <DropdownMenuItem>
      {children}
    </DropdownMenuItem>
  )
}
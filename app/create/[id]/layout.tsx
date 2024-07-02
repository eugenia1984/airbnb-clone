import { Metadata } from "next"

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Create',
}

export default function LayoutCreation({ children }: Props) {
  return (
    <div className="mt-10">
      {children}
    </div>
  )
}
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function LayoutCreation({ children }: Props) {
  return (
    <div className="mt-10">
      {children}
    </div>
  )
}
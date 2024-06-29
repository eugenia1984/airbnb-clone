import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CreationSubmit } from "./CreationSubmit"

export const CreationButton = () => {
  return (
    <section className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full max-w-4xl">
        <Button variant="secondary" size="lg" asChild>
          <Link href="/">Cancel</Link>
        </Button>
        <CreationSubmit />
      </div>
    </section>
  )
}
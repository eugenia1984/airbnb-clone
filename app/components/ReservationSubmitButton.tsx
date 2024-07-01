"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"

import { Loader2 } from "lucide-react"

export function ReservationSubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <>
      {
        pending ? (
          <Button disabled className="w-[260px] mx-auto mt-3">
            <Loader2 className="w-4 h-4 animate-spin mr-2"/> Please wait ...
          </Button>
        ) : (
          <Button type="submit" className="w-[260px] mx-auto mt-3">
            Make a reservation
          </Button>
        )}
    </>
  )
}
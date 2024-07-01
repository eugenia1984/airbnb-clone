"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"

import { Loader2, Heart } from "lucide-react"

export function DeleteFromFavoriteButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          variant="outline"
          size="icon"
          disabled
          className="bg-primary-foreground"
        >
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground"
          type="submit"
        >
          <Heart className="w-4 h-4 text-primary" fill="#3BA60D" />
        </Button>
      )}
    </>
  );
}

export function ReservationSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="w-4 h-4 animate-spin mr-2" /> Please wait...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Make a Reservation!
        </Button>
      )}
    </>
  )
}
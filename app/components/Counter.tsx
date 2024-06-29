"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import { Minus, Plus } from "lucide-react"

type Props = {
  name: string
}

export function Counter ({ name } : Props) {
  const [amount, setAmount] = useState(0)

  const increase = () => setAmount(amount + 1)
  const decrease = () => {
    if( amount > 0) setAmount(amount - 1)
  }

  return (
    <section className="flex items-center gap-x-4">
      <input type="hidden" name={name} value={amount} />
      <Button variant="outline" size="icon" type="button" onClick={decrease}>
        <Minus className="w-4 h-4 text-primary" />
      </Button>
      <p className="font-medium text-3lg">{amount}</p>
      <Button variant="outline" size="icon" type="button" onClick={increase}>
        <Plus className="w-4 h-4 text-primary" />
      </Button>
    </section>
  )
}
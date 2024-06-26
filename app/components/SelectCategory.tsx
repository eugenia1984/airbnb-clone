"use client"

import { useState } from "react"

import Image from "next/image"

import { Card, CardHeader } from "@/components/ui/card"

import { categoryItems } from "../lib/categoryItems"


export function SelectCategory() {
  const [ selectedCategory, setSelectedCategory ] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 w-3/5 mx-auto ">
      {categoryItems.map((category) => (
        <div key={category.id} className="cursor-pointer">
          <Card
            className={selectedCategory === category.name ? "border-primary" : ""}
            onClick={() => setSelectedCategory(category.name as string)}
          >
            <CardHeader>
              <Image
                src={category.imageUrl}
                alt={category.name}
                height={32}
                width={32}
                className="w-8 h-8"
              />
              <h3 className="font-medium">
                {category.title}
              </h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}
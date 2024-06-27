"use client"

import { useState } from "react"

import Image from "next/image"

import { Card, CardHeader } from "@/components/ui/card"

import { categoryItems } from "../lib/categoryItems"


export function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-10 w-3/5 mx-auto mb-36">
      <input 
        type="hidden" 
        name="categoryName" 
        value={selectedCategory as string}
      />
      {categoryItems.map((category) => (
        <div key={category.id} className="cursor-pointer">
          <Card
            className={selectedCategory === category.name ? "border-primary" : " "}
            onClick={() => setSelectedCategory(category.name as string)}
          >
            <CardHeader className="items-center min-h-32 min-w-20">
              <Image
                src={category.imageUrl}
                alt={category.name}
                height={32}
                width={32}
                className="w-8 h-8"
              />
              <h3 className="font-medium text-center">
                {category.title}
              </h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}
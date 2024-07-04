"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"

import { useCallback } from "react"

import { cn } from "@/lib/utils"
import { categoryItems } from "@/app/lib/categoryItems"


export function MapFilterItems() {
  const searchParams = useSearchParams()
  const search = searchParams.get('filter')
  const pathName = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    }, [searchParams]
  )

  return (
    <section className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar justify-center" >
      {categoryItems.map((category) => (
        <Link
          key={category.id} href={`${pathName}?${createQueryString('filter', category.name)}`}
          className={cn(
            search === category.name ?
              "border-b-2 border-green-600 pb-2 flex-shrink-0"
              :
              "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-3 items-center"
          )}
        >
          <div className="relative w-6 h-6">
            <Image
              src={category.imageUrl}
              alt={category.title}
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium hover:text-green-800 hover:font-bold">
            {category.title}
          </p>
        </Link>
      ))}
    </section>
  )
}
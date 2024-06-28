
"use client"

import { useState } from "react"

import dynamic from "next/dynamic"

import { useCountries } from "@/app/lib/getCountries"

import { HeadlineH2 } from "@/app/components/ui/HeadlineH2"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { CreationButton } from "@/app/components/CreationButton"

export default function AddressRoute() {
  const { getAllCountries } = useCountries()
  const [locationValue, setLocationValue] = useState('')

  const LazyMap = dynamic(() => import('@/app/components/Map'), {
    ssr: false,
    loading: () =>  <Skeleton className="h-[50vh] w-full" />
  })

  const sortedCountries = getAllCountries().sort((a, b) => a.label.localeCompare(b.label))

  return (
    <>
      <section className="w-3/5 mx-auto pb-8">
        <HeadlineH2 text="Where is your home located?" />
      </section>
      <form>
        <div className="w-3/5 mx-auto mb-36">
          <div className="mb-5">
            <Select required onValueChange={(value) => setLocationValue(value) }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                   {sortedCountries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.flag} - {country.label} / {country.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <LazyMap locationValue={locationValue} />
        </div>
        <CreationButton />
      </form>
    </>
  )
}
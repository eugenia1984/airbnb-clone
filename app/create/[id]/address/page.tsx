"use client"

import { useState } from "react"

import dynamic from "next/dynamic"

import { useCountries } from "@/app/lib/getCountries"

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

import { createLocation } from "@/app/actions"
import { HeadlineH2 } from "@/app/components/HeadlineH2"
import { CreationButton } from "@/app/components/CreationButton"

export default function AddressRoute({params}: {params: {id: string}}) {
  const { getAllCountries } = useCountries()
  const [locationValue, setLocationValue] = useState('')

  const LazyMap = dynamic(() => import('@/app/components/Map'), {
    ssr: false,
    loading: () =>  <Skeleton className="h-[50vh] w-full" />
  })

  const europeanCountries = getAllCountries().filter(country => country.region === 'Europe')

  const sortedEuropeanCountries = europeanCountries.sort((a, b) => a.label.localeCompare(b.label))
  
  return (
    <>
      <section className="w-3/5 mx-auto pb-8">
        <HeadlineH2 text="Where is your home located?" />
      </section>
      <form action={createLocation}>
        <input type="hidden" name="homeId" value={params.id} />
        <input type="hidden" name="countryValue" value={locationValue} />
        <div className="w-3/5 mx-auto mb-36">
          <div className="mb-5">
            <Select 
              required 
              onValueChange={(value) => setLocationValue(value) }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                   {sortedEuropeanCountries.map((country) => (
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
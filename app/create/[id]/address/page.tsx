
"use client"

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

export default function AddressRoute() {
  const { getAllCountries } = useCountries()

  return (
    <>
      <section className="w-3/5 mx-auto pb-8">
        <HeadlineH2 text="Where is your home located?" />
      </section>
      <form>
        <div className="w-3/5 mx-auto">
          <div className="mb-5">
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.flag} - {country.label} / {country.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </>
  )
}
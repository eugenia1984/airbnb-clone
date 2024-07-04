"use client"

import { useState } from "react"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter
} from "@/components/ui/dialog"

import { Search } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { useCountries } from "../lib/getCountries"
import { HomeMap } from "./HomeMap"

import { CreationSubmit } from "./CreationSubmit"
import { Card, CardHeader } from "@/components/ui/card"
import { SelectAmountItem } from "./SelectAmountItem"
import { SearchModalButton } from "./SearchModalButton"
import { SearchModalDialogHeader } from "./SearchModalDialogHeader"

export function SearchModal() {
  const [locationValue, setLocationValue] = useState('')

  const { getAllCountries } = useCountries()

  const europeanCountries = getAllCountries().filter(country => country.region === 'Europe')
  const sortedEuropeanCountries = europeanCountries.sort((a, b) => a.label.localeCompare(b.label))

  return (
    <div className="rounded-full border flex items-center gap-x-2 shadow-md">
      <Dialog>
        <DialogTrigger>
          <SearchModalButton title="Where" description="Search destination" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form className="flex flex-col gap-3">
            <input type="hidden" name="country" value={locationValue} />
            <SearchModalDialogHeader
              title="Select a country"
              description="Please choose a country"
            />
            <Select
              required
              onValueChange={(value) => setLocationValue(value)}
              value={locationValue}
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
            <HomeMap locationValue={locationValue} />
            <DialogFooter>
              <CreationSubmit />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog >
      <Dialog>
        <DialogTrigger>
          <SearchModalButton title="Who" description="Add guest" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form className="flex flex-col gap-3">
            <SearchModalDialogHeader
              title="Search by guest"
              description="Please add the total guest you need"
            />
            <Card>
              <CardHeader className="flex flex-col gap-y-5">
                <SelectAmountItem title="Guest" placeholder="How many guest?" name="guest" />
              </CardHeader>
            </Card>
            <DialogFooter>
              <CreationSubmit />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog >
      <div className="py-2 px-4 hidden md:flex" >
        <Search className="bg-primary text-white p-2 h-8 w-8 rounded-full" />
      </div>
    </div>
  )
}
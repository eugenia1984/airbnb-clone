"use client"

import { useState } from "react"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"

import { Search } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCountries } from "../lib/getCountries"

export function SearchModal() {
  const [step, setStep] = useState(1)
  const [locationValue, setLocationValue] = useState('')

  const { getAllCountries } = useCountries()

  const europeanCountries = getAllCountries().filter(country => country.region === 'Europe')

  const sortedEuropeanCountries = europeanCountries.sort((a, b) => a.label.localeCompare(b.label))

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
          <div className="flex h-full divide-x font-medium">
            <p className="px-4">Anywhere</p>
            <p className="px-4">Any Week</p>
            <p className="px-4">Add Guest</p>
          </div>
          <Search className="bg-primary text-white p-2 h-8 w-8 rounded-full" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="flex flex-col gap-3">
          {step === 1 ? (
            <>
              <DialogHeader>
                <DialogTitle>
                  Select a country
                </DialogTitle>
                <DialogDescription>
                  Please choose a country
                </DialogDescription>
              </DialogHeader>
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
            </>
          ) : (
            <div></div>
          )
          }
        </form>
      </DialogContent>
    </Dialog >
  )
}
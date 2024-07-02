"use client"

import { useState } from "react"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

import { Button } from "@/components/ui/button"
import { CreationSubmit } from "./CreationSubmit"
import { Card, CardHeader } from "@/components/ui/card"
import { SelectAmountItem } from "./SelectAmountItem"

export function SearchModal() {
  const [step, setStep] = useState(1)
  const [locationValue, setLocationValue] = useState('')

  const { getAllCountries } = useCountries()

  const europeanCountries = getAllCountries().filter(country => country.region === 'Europe')

  const sortedEuropeanCountries = europeanCountries.sort((a, b) => a.label.localeCompare(b.label))

  function SubmitButtonLocal() {
    if (step === 1) {
      return (
        <Button onClick={() => setStep(step + 1)} type="button">
          Next
        </Button>
      )
    } else if (step === 2) {
      return <CreationSubmit />
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full py-2 px-4 border flex items-center cursor-pointer gap-x-2">
          <div className="flex flex-col h-full font-medium px-2 py-1 rounded-full hover:bg-green-600/15">
            <p className="px-4">Where</p>
            <p className="text-muted-foreground">Search destination</p>
          </div>
          <div>
            <Search className="bg-primary text-white p-2 h-8 w-8 rounded-full" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="flex flex-col gap-3">
          <input type="hidden" name="country" value={locationValue} />
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
              <HomeMap locationValue={locationValue} />
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>
                  Select all the info you need
                </DialogTitle>
                <DialogDescription>
                  Please complete the information
                </DialogDescription>
              </DialogHeader>
              <Card>
                <CardHeader className="flex flex-col gap-y-5">
                  <SelectAmountItem title="Guest" placeholder="How many guest?" name="guest" />
                  <SelectAmountItem title="Rooms" placeholder="How many rooms?" name="rooms" />
                  <SelectAmountItem title="Bathrooms" placeholder="How many bathrooms?" name="bathrooms" />
                </CardHeader>
              </Card>
            </>
          )
          }
          <DialogFooter>
            <SubmitButtonLocal />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog >
  )
}
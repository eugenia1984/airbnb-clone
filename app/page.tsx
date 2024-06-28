import { Suspense } from "react"

import { MapFilterItems } from "./components/MapFilterItems"
import { ListingCard } from "./components/ui/ListingCard"

import prisma from "./lib/db"
import { SkeletonLoading } from "./components/ui/SkeletonLoading"
import { NoItems } from "./components/ui/NoItems"

async function getData({
  searchParams
}: {
  searchParams?: {
    filter?: string
  }
}) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedLocation: true,
      addedDescription: true,
      categoryName: searchParams?.filter ?? undefined
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true
    }
  })

  return data
}

export default function Home({
  searchParams
}: {
  searchParams?: {
    filter?: string
  }
}) {
  return (
    <div className="container mx-auto px-5 lg:px-10 py-5" >
      <MapFilterItems />
      <Suspense key={searchParams?.filter} fallback={<SkeletonLoading />} >
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function ShowItems({
  searchParams
}: {
  searchParams?: {
    filter?: string
  }
}) {
  const data = await getData({ searchParams: searchParams })

  return (
    <>
      {data.length === 0 ? (<NoItems />)
        :
        (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              imagePath={item.photo as string}
              location={item.country as string}
              price={item.price as number}
            />
          ))}
        </div >)
      }
    </>
  )
}

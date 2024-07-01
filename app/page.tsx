import { Suspense } from "react"

import prisma from "./lib/db"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { SkeletonLoading } from "./components/SkeletonLoading"
import { NoItems } from "./components/NoItems"
import { MapFilterItems } from "./components/MapFilterItems"
import { ListingCard } from "./components/ListingCard"

async function getData({
  searchParams,
  userId
}: {
  userId: string | undefined,
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
      country: true,
      Favorite: {
        where: {
          userId: userId ?? undefined
        }
      }
    }
  })

  return data
}

export default function Home({
  searchParams,
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
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const data = await getData({ searchParams: searchParams, userId: user?.id })

  return (
    <>
      {data.length === 0 ?
        <NoItems
          title=" No listings found for this category"
          description="Please check another category or create your own listing"
        />
        :
        (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              imagePath={item.photo as string}
              location={item.country as string}
              price={item.price as number}
              userId={user?.id}
              favoriteId={item.Favorite[0]?.id}
              isInFavoriteList={item.Favorite.length > 0 ? true : false}
              homeId={item.id}
              pathName="/"
            />
          ))}
        </div >)
      }
    </>
  )
}

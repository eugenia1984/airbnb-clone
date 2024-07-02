import { Metadata } from "next"
import { redirect } from "next/navigation"

import prisma from "../lib/db"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import { HeadlineH2 } from "../components/HeadlineH2"
import { ListingCard } from "../components/ListingCard"
import { NoItems } from "../components/NoItems"

async function getData(userId: string) {
  const data = await prisma.reservation.findMany({
    where: {
      userId: userId
    },
    select: {
      Home: {
        select: {
          id: true,
          country: true,
          photo: true,
          description: true,
          price: true,
          Favorite: {
            where: {
              userId: userId
            }
          }
        }
      }
    }
  })

  return data
}

export const metadata: Metadata = {
  title: 'Reservations',
}

export default async function ReservationsRoute() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if(!user?.id) redirect("/")

  const data = await getData(user.id)

  return (
    <section className="container mx-auto py-5 lg:px-10 mt-10">
      <HeadlineH2 text="My reservations" />
      {
        data.length === 0 ?
          <NoItems
            title="No reservations founded"
            description="Please add some reservation to see them here..."
          />
          :
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {data.map((item) => <ListingCard
              key={item.Home?.id}
              description={item.Home?.description as string}
              location={item.Home?.country as string}
              pathName="/favorites"
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.id}
              favoriteId={item.Home?.Favorite[0]?.id as string}
              isInFavoriteList={
                item.Home?.Favorite.length as number > 0 ? true : false
              }
            />)}
          </div>
      }
    </section>
  )
}
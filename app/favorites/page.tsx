import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import prisma from "../lib/db"
import { HeadlineH2 } from "../components/HeadlineH2"
import { NoItems } from "../components/NoItems"
import { ListingCard } from "../components/ListingCard"

async function getData(userId: string) {
  const data = await prisma.favorite.findMany({
    where: {
      userId: userId
    },
    select: {
      Home: {
        select: {
          photo: true,
          id: true,
          Favorite: true,
          price: true,
          country: true,
          description: true
        }
      }
    }
  })

  return data
}

export const metadata: Metadata = {
  title: 'Favorites',
}

export default async function FavoriteRoute() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) return redirect('/')

  const data = await getData(user.id)

  return (
    <section className="container mx-auto py-5 lg:px-10 mt-10">
      <HeadlineH2 text="My favorites" />
      {
        data.length === 0 ?
          <NoItems 
            title="No favorites founded"
            description="Please add some favorites to see them here..."
          />
          :
          (<div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {data.map((item) => <ListingCard
              key={item.Home?.id}
              description={item.Home?.description as string}
              location={item.Home?.country as string}
              pathName="/favorites"
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.id}
              favoriteId={item.Home?.Favorite[0].id as string}
              isInFavoriteList={
                item.Home?.Favorite.length as number > 0 ? true : false
              }
            />)}
          </div>)
      }
    </section>
  )
}
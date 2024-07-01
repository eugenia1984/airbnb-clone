import { redirect } from "next/navigation"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import prisma from "../lib/db"

import { HeadlineH2 } from "../components/HeadlineH2"
import { NoItems } from "../components/NoItems"
import { ListingCard } from "../components/ListingCard"

async function getData(userId: string) {
  const data = await prisma.home.findMany({
    where: {
      userId: userId,
      addedCategory: true,
      addedDescription: true,
      addedLocation: true
    },
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
    },
    orderBy: {
      createdAT: "desc"
    }
  })

  return data
}

export default async function MyHomes() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) return redirect('/')

  const data = await getData(user.id)

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <HeadlineH2 text="Your Homes" />
      {data.length === 0 ?
        <NoItems 
          title="No Homes listed"
          description="Please list at least one Home to see it here"
        />
        : (
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {data.map((item) => (
              <ListingCard 
                key={item.id}
                imagePath={item.photo as string}
                homeId={item.id}
                price={item.price as number}
                description={item.description as string}
                location={item.country as string}
                userId={user.id}
                pathName="/my-homes"
                favoriteId={item.Favorite[0]?.id}
                isInFavoriteList={item.Favorite.length > 0 ? true : false}
              />
            ))}
          </div>
        )}
    </section>
  )
}
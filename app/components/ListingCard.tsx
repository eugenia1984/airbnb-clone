import Image from "next/image"
import Link from "next/link"

import { useCountries } from "@/app/lib/getCountries"
import { deleteFromFavorite, addToFavorite } from "@/app/actions"

import { AddToFavoriteButton } from "./AddToFavoriteButton"
import { DeleteFromFavoriteButton } from "./DeleteFromFavoriteButton"

interface Props {
  imagePath: string
  description: string
  location: string
  price: number
  userId: string | undefined
  isInFavoriteList: boolean
  favoriteId: string
  homeId: string
  pathName: string
}

export function ListingCard({
  description,
  imagePath,
  location,
  price,
  userId,
  favoriteId,
  homeId,
  isInFavoriteList,
  pathName,
}: Props) {
  const { getCountryByValue } = useCountries()
  const country = getCountryByValue(location)

  return (
    <section className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://cxkkdrskuecnodukdobx.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of House"
          fill
          sizes="288"
          priority={false}
          className="rounded-lg h-full object-cover"
        />

        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavoriteList ? (
              <form action={deleteFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`} className="mt-2">
        <h3 className="font-medium text-base">
          {country?.flag} - {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 tooltip">
            {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">EUR {price}</span> per Night
        </p>
      </Link>
    </section>
  )
}
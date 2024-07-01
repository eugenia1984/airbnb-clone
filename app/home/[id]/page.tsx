/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

import prisma from "@/app/lib/db"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import { createReservation } from "@/app/actions"

import { useCountries } from "@/app/lib/getCountries"

import { Separator } from "@/components/ui/separator"

import { HeadlineH2 } from "@/app/components/HeadlineH2"
import { CategoryShowcase } from "@/app/components/CategoryShowcase"
import { HomeMap } from "@/app/components/HomeMap"
import { SelectCalendar } from "@/app/components/SelectCalendar"
import { Button } from "@/components/ui/button"
import { ReservationSubmitButton } from "@/app/components/ReservationSubmitButton"

async function getData(homeId: string) {
  const data = await prisma.home.findUnique({
    where: {
      id: homeId
    },
    select: {
      photo: true,
      description: true,
      guest: true,
      bedrooms: true,
      bathrooms: true,
      title: true,
      categoryName: true,
      price: true,
      country: true,
      Reservation: {
        where: {
          homeId: homeId
        }
      },
      User: {
        select: {
          profileImage: true,
          firstName: true,
          lastName: true
        }
      }
    }
  })

  return data
}

export default async function HomeRoute({ params }: { params: { id: string } }) {
  const data = await getData(params.id)
  const { getCountryByValue } = useCountries()
  const country = getCountryByValue(data?.country as string)
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <section className="w-[75%] mx-auto my-10">
      <HeadlineH2 text={data?.title ?? ''} />
      <section className="relative h-[120px] md:h-[520px] mt-10">
        <Image
          alt="image of a home"
          src={`https://cxkkdrskuecnodukdobx.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          fill
          className="rounded-lg h-full object-cover w-full"
        />
      </section>
      <section className="flex flex-col lg:flex-row justify-between gap-x-12 mt-8">
        <section className="w-3/4">
          <h3 className="text-3xl">
            {country?.flag} - {country?.label} / {country?.region}
          </h3>
          <section className="mt-2 w-[260px] md:w-[320px] ">
            <p className="bg-green-600 text-white p-2">
              {data?.guest} Guests - {data?.bedrooms} Bedrooms- {data?.bathrooms} Bathrooms
            </p>
          </section>
          <div className="flex items-center mt-6">
            <img
              src={
                data?.User?.profileImage ??
                "https://img.icons8.com/ios-filled/50/user-male-circle.png"
              }
              alt="user profile"
              width={44}
              height={44}
              className="w-11 h-11 rounded-full"
            />
            <section className="flex flex-col ml-4 pb-4">
              <h3 className="font-medium">
                Hosted by {data?.User?.firstName ?? ''} {data?.User?.lastName ?? ''}
              </h3>
              <p className="text-small text-muted-foreground">Hosted since 2015</p>
            </section>
          </div>
          <Separator className="my-6" />
          <CategoryShowcase categoryName={data?.categoryName as string} />
          <Separator className="my-6" />
          <p className="text-muted-foreground">{data?.description}</p>
          <Separator className="my-6" />
          <HomeMap locationValue={country?.value as string} />
        </section>
        <form action={createReservation} className="flex flex-col items-start">
          <input type="hidden" name="homeId" value={params.id} />
          <input type="hidden" name="userId" value={user?.id} />
          <SelectCalendar reservation={data?.Reservation}/>
          {user?.id ? (
            <ReservationSubmitButton />
            ) : (
              <Button className="w-[260px] mx-auto mt-3" asChild>
                <Link href="/api/auth/login">
                  Make a reservation
                </Link>
              </Button>
            )}
        </form>
      </section>
    </section>
  )
}
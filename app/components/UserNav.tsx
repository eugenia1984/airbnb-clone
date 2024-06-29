import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import {
  Heart,
  List,
  LogOut,
  MenuIcon,
  CalendarCheck,
  LogIn,
  BookCheck
} from "lucide-react"

import { UserNavMenuItem, UserNavMenuItemWithLink } from "@/app/components"

import { createAirbnbCloneHome } from "../actions"

export async function UserNav() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const createHomeWithId = createAirbnbCloneHome.bind(null, { 
    userId: user?.id as string 
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              user?.picture ??
              "https://img.icons8.com/ios-filled/50/user-male-circle.png"
            }
            alt="image of the user"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ?
          (
            <>
              <UserNavMenuItem>
                <form action={createHomeWithId} className="w-full">
                  <button type="submit" className="w-full text-start">
                    AirbnbClone your Home
                  </button>
                </form>
              </UserNavMenuItem>
              <UserNavMenuItemWithLink href="/my-homes" text="Listings" icon={<List />} />
              <UserNavMenuItemWithLink href="/favorites" text="Favorites" icon={<Heart />} />
              <UserNavMenuItemWithLink href="/reservations" text="Reservations" icon={<CalendarCheck />} />
              <DropdownMenuSeparator />
              <UserNavMenuItem>
                <LogoutLink className="w-full flex gap-x-2 items-center hover:text-green-600">
                  <LogOut /> Logout
                </LogoutLink>
              </UserNavMenuItem>
            </>
          )
          :
          (
            <>
              <UserNavMenuItem>
                <RegisterLink className="w-full flex gap-x-2 items-center hover:text-green-600">
                  <BookCheck /> Register
                </RegisterLink>
              </UserNavMenuItem>
              <DropdownMenuSeparator />
              <UserNavMenuItem>
                <LoginLink className="w-full flex gap-x-2 items-center hover:text-green-600">
                  <LogIn /> Login
                </LoginLink>
              </UserNavMenuItem>
            </>
          )
        }
      </DropdownMenuContent >
    </DropdownMenu >
  )
}
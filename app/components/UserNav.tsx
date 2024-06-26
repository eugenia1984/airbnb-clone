import Link from "next/link"

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

export async function UserNav() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

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
              <DropdownMenuItem>
                <Link
                  href="/my-homes"
                  className="w-full flex gap-x-2 items-center hover:text-green-600"
                >
                  <List /> Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/favorites"
                  className="w-full flex gap-x-2 items-center hover:text-green-600"
                >
                  <Heart /> Favorites
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/reservations"
                  className="w-full flex gap-x-2 items-center hover:text-green-600"
                >
                  <CalendarCheck /> Reservations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutLink className="w-full flex gap-x-2 items-center hover:text-green-600">
                  <LogOut /> Logout
                </LogoutLink>
              </DropdownMenuItem>
            </>
          )
          :
          (
            <>
              <DropdownMenuItem>
                <RegisterLink className="w-full flex gap-x-2 items-center hover:text-green-600">
                  <BookCheck /> Register
                </RegisterLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LoginLink className="w-full flex gap-x-2 items-center hover:text-green-600">
                  <LogIn /> Login
                </LoginLink>
              </DropdownMenuItem>
            </>
          )
        }
      </DropdownMenuContent >
    </DropdownMenu >
  )
}
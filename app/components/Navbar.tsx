import Link from "next/link"
import Image from "next/image"
import DesktopLogo from "../../public/logo-96.png"
import MobileLogo from "../../public/logo-48.png"
import { UserNav } from "./UserNav"

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex item-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <div className="flex justify-start items-center">
            <Image
              src={DesktopLogo}
              alt="Airbnb logo for desktop"
              className="w-14 hidden lg:block"
            />
            <span className="w-22 hidden lg:block text-green-600 uppercase font-bold tracking-wide">
              Airbnb-Clone
            </span>
            <Image
              src={MobileLogo}
              alt="Airbnb logo for desktop"
              className="w-10 block lg:hidden"
            />
          </div>
        </Link>
        <div className="rounded-full border px-5 py-2">
          <h1>Hello from the search</h1>
        </div>
        <UserNav />
      </div>
    </nav>
  )
}
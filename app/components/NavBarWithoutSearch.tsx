import Link from "next/link"
import Image from "next/image"

import DesktopLogo from "../../public/logo-96.png"
import MobileLogo from "../../public/logo-48.png"
import { UserNav } from "./UserNav"

export function NavbarWithoutSearch() {

  return (
    <nav className="w-full border-b">
      <section className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <div className="flex justify-start items-center">
            <Image
              src={DesktopLogo}
              alt="Airbnb logo for desktop"
              className="w-12 hidden lg:block"
            />
            <span className="w-22 hidden lg:block text-green-600 uppercase font-bold tracking-wide">
              Airbnb-Clone
            </span>
            <Image
              src={MobileLogo}
              alt="Airbnb logo for desktop"
              className="w-8 block lg:hidden"
            />
          </div>
        </Link>
        <UserNav />
      </section>
    </nav>
  )
}
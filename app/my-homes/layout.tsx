import type { Metadata } from "next"

import { Inter } from "next/font/google"

import { NavbarWithoutSearch } from "../components/NavBarWithoutSearch"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: '%s | AirbnbClone',
    default: 'AirbnbClone',
  },
  description: "An Airbnb clone generated with Next.js by Maria Eugenia Costa, FrontEnd Developer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWithoutSearch />
        {children}
      </body>
    </html>
  )
}

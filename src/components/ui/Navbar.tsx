"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import Link from "next/link"
import { SolarLogo } from "../../../public/SolarLogo"
import { Button } from "../Button"

export function NavBar() {
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-2 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded border border-transparent px-3 py-3 transition duration-300",
        scrolled
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Solar Tech Logo</span>
            <SolarLogo className="w-24" />
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="#">
                Platforms
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 "
                href="#"
              >
                About
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 "
                href="#"
              >
                Newsroom
              </Link>
            </div>
          </nav>
          <Button
            variant="secondary"
            className="hidden h-10 font-semibold md:flex"
          >
            Get a quote
          </Button>
        </div>
        {/* <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.pricing}>Pricing</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog}>Changelog</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}

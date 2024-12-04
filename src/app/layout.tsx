import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { RiArrowRightLine } from "@remixicon/react"
import { siteConfig } from "./siteConfig"

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Marketing", "Database", "Software"],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourname",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

function Banner() {
  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 transition">
      <div className="flex items-center gap-x-1 rounded-full bg-gray-950 p-1 text-sm ring-1 shadow-xl shadow-black/20 ring-white/10">
        <a
          className="group flex items-center gap-0.5 rounded-[20px] bg-gradient-to-b from-white to-gray-200 px-4 py-2 font-semibold whitespace-nowrap text-gray-900 ring-1 ring-indigo-400/30 transition ring-inset"
          href="https://blocks.tremor.so/templates#template-solar"
          target="_blank"
        >
          Get this template
          <RiArrowRightLine className="ml-1 size-[18px] shrink-0" />
        </a>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
      >
        <NavBar />
        {children}
        <Footer />
        <Banner />
      </body>
    </html>
  )
}

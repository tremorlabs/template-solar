import { Divider } from "@/components/ui/Divider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
import { StickerCards } from "@/components/ui/StickerCard"
import Testimonial from "@/components/ui/Testimonial"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>
      <div className="mt-52 px-2 xl:px-0">
        <Features />
      </div>
      <div className="mt-32 px-2 xl:px-0">
        <Testimonial />
      </div>
      <Divider className="my-16 max-w-6xl">
        <div className="relative h-4 w-5">
          <div
            className="absolute left-0 top-0 size-1 rounded-full bg-gray-300"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${0 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-4 top-0 size-1 rounded-full bg-gray-300"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${0 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-2 top-1 size-1 rounded-full bg-gray-300"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${2 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-0 top-2 size-1 rounded-full bg-gray-300"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${3 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-4 top-2 size-1 rounded-full bg-gray-300"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${3 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-2 top-3 size-1 rounded-full bg-gray-300"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${5 * 0.2}s`,
            }}
          />
        </div>
      </Divider>
      <div className="px-2 xl:px-0">
        <Map />
      </div>

      <div className="py-96">
        <StickerCards />
      </div>
    </main>
  )
}

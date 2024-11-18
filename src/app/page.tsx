import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map2 } from "@/components/ui/Map2/Map2"
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
      {/* <div className="px-2 xl:px-0">
        <Features2 />
      </div> */}
      <div className="mt-32 px-2 xl:px-0">
        <Testimonial />
      </div>
      <div className="px-2 xl:px-0">
        <Map2 />
      </div>
    </main>
  )
}

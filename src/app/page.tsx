import AnimatedDivider from "@/components/ui/AnimatedDivider"
import ChipViz from "@/components/ui/ChipViz"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
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

      <div>
        <AnimatedDivider />
      </div>
      <div className="px-2 xl:px-0">
        <Map />
      </div>
    </main>
  )
}

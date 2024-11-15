import GameOfLife from "@/components/ui/HeroBackground"
import { RiArrowRightUpLine, RiArrowUpWideLine } from "@remixicon/react"

export default function Home() {
  return (
    <main className="overflow-hidde mt-32 flex flex-col">
      <div className="relative mt-12 flex flex-col items-center justify-center">
        <a
          aria-label="View latest update the changelog page"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pl-0.5 pr-3 text-sm font-medium text-gray-900 shadow-lg shadow-orange-400/20 ring-1 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-black/5 focus:outline-none">
            <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-xs text-gray-600">
              News
            </span>
            <span className="flex items-center gap-1 truncate">
              <span className="w-full truncate">
                Artificial Intelligence is Key
              </span>

              <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
            </span>
          </div>
        </a>
        <h1 className="mt-8 text-center text-8xl font-semibold leading-[5.5rem] tracking-tighter text-gray-900">
          Autonomy for <br /> every mission
        </h1>
        <p className="mt-8 max-w-xl text-balance text-center text-xl text-gray-700">
          A network of autonomous systems that provide integrated monitoring
          across ground, water, and air environments.
        </p>
        <button className="group mt-8 flex h-[72px] w-36 flex-col items-stretch justify-end gap-1 rounded bg-gray-900 p-0.5 text-white transition hover:shadow-xl hover:shadow-orange-500/20">
          <div className="mt-1 text-lg text-white group-hover:hidden group-hover:text-white/0">
            Launch today
          </div>
          <div
            aria-hidden
            className="flex h-10 transform-gpu flex-col items-center justify-center overflow-hidden rounded-sm bg-gradient-to-t from-orange-500 to-orange-400 transition-all duration-500 group-hover:h-24"
          >
            <RiArrowUpWideLine className="mx-auto mt-7 size-6 shrink-0 group-hover:mt-0" />
            <div className="text-lg font-semibold text-white/0 group-hover:text-white">
              Launch
            </div>
          </div>
        </button>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </div>
    </main>
  )
}

import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <FadeContainer className="relative flex flex-col items-center justify-center">
      <FadeDiv className="mx-auto">
        <a
          aria-label="View latest update the changelog page"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto w-full"
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
      </FadeDiv>
      <h1 className="mt-8 text-center text-8xl font-semibold leading-[5.5rem] tracking-tighter text-gray-900">
        <FadeSpan>Autonomy</FadeSpan> <FadeSpan>for</FadeSpan>
        <br />
        <FadeSpan>every</FadeSpan> <FadeSpan>Mission</FadeSpan>
      </h1>
      <p className="mt-8 max-w-xl text-balance text-center text-xl text-gray-700">
        <FadeSpan>A network of autonomous systems</FadeSpan>{" "}
        <FadeSpan>that provide integrated monitoring</FadeSpan>{" "}
        <FadeSpan> across ground, water, and air environments.</FadeSpan>
      </p>
      <FadeDiv>
        <a
          className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 whitespace-nowrap rounded-md border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-5 py-3 font-medium leading-4 tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-orange-300"
          href="#"
        >
          Launch today
        </a>
      </FadeDiv>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <GameOfLife />
      </div>
    </FadeContainer>
  )
}

"use client"
import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade"
import GameOfLife from "@/components/ui/HeroBackground"
import { RiArrowRightUpLine, RiPlaneLine } from "@remixicon/react"

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
}
export default function Home() {
  return (
    <main className="relative mx-auto mt-32 flex flex-col">
      <FadeContainer className="relative flex flex-col items-center justify-center py-24">
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
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 whitespace-nowrap rounded-md bg-gray-50 px-5 py-3 font-medium leading-4 tracking-wide text-gray-900 shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19),inset_0_-1px_0_rgba(0,0,0,0.2),inset_0_1px_0_#fff] transition-all duration-200 ease-in-out"
            href="#"
          >
            Launch today
          </a>
        </FadeDiv>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>

      <div className="relative mx-auto mt-48 h-[80rem] w-full max-w-6xl">
        <div className="pointer-events-none absolute inset-0 flex h-full items-center justify-center">
          <div className="mx-px grid h-full w-full grid-cols-4">
            <div
              className="border-l border-dashed border-gray-300"
              style={{
                maskImage:
                  "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
              }}
            ></div>
            <div
              style={{
                maskImage:
                  "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
              }}
              className="border-x border-dashed border-gray-300"
            ></div>
            <div
              style={{
                maskImage:
                  "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
              }}
              className="border-r border-dashed border-gray-300"
            ></div>
            <div
              style={{
                maskImage:
                  "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
              }}
              className="border-r border-dashed border-gray-300"
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 flex h-full items-center justify-center">
          <div className="grid h-full w-full grid-cols-4 grid-rows-3">
            <div className="col-span-2 m-2 mt-20">
              <div>
                <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
                  Modular solutions
                  <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
                </h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tighter text-gray-900">
                  A network of autonomous systems for integrated monitoring
                </p>
                <p className="mt-4 text-balance text-gray-700">
                  Deploy seamless monitoring and rapid response capabilities
                  across ground, water, and air environments with our integrated
                  platform. Use our autonomous systems for comprehensive
                  awareness, with processing happening locally at each
                  deployment point for maximum efficiency and reliability.
                </p>
              </div>
              <div className="mt-48">
                <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
                  Edge Intelligence
                  <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
                </h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tighter text-gray-900">
                  Real-time processing with distributed AI
                </p>
                <p className="mt-4 text-balance text-gray-700">
                  Process data instantly where it&apos;s collected, enabling
                  rapid decision-making without network dependencies. Our
                  advanced AI runs efficiently on edge devices, delivering
                  intelligent insights while maintaining data privacy and
                  reducing bandwidth requirements.
                </p>
              </div>
              <div className="mt-48">
                <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
                  Seamless Integration
                  <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
                </h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tighter text-gray-900">
                  Connect and expand with plug-and-play simplicity
                </p>
                <p className="mt-4 text-balance text-gray-700">
                  Add new capabilities to your network with zero configuration
                  required. Our systems automatically recognize and coordinate
                  with each other, creating a robust mesh network that grows
                  stronger with each additional node while maintaining
                  enterprise-grade security.
                </p>
              </div>
            </div>

            <div className="relative col-span-2 row-span-3">
              <div className="absolute inset-0">
                <svg
                  className="size-full h-full"
                  style={{
                    maskImage:
                      "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
                  }}
                >
                  <defs>
                    <pattern
                      id="diagonal-pattern"
                      patternUnits="userSpaceOnUse"
                      width="64"
                      height="64"
                    >
                      {Array.from({ length: 17 }, (_, i) => {
                        const offset = i * 8
                        return (
                          <path
                            key={i}
                            d={`M${-106 + offset} 110L${22 + offset} -18`}
                            className="stroke-gray-200"
                            strokeWidth="1"
                          />
                        )
                      })}
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#diagonal-pattern)"
                  />
                </svg>
              </div>
              <div className="relative mt-20 flex flex-col items-center justify-center">
                <div className="mx-auto w-fit border border-dashed bg-white">
                  Base Station
                </div>
                <svg
                  className="mx-auto -mt-1 h-60"
                  viewBox="0 0 236 184"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.65408 182.871C6.25844 183.427 5.43492 183.432 5.03231 182.881L1.53085 178.093C0.990795 177.355 1.64392 176.339 2.53996 176.524L4.85028 177V166.931C4.85028 135.451 30.37 109.931 61.8503 109.931C81.9118 109.931 99.4647 99.1903 109.072 83.1454C114.122 74.3071 116.851 64.2255 116.851 53.8543V1C116.851 0.447716 117.298 0 117.851 0V0C118.403 0 118.851 0.447715 118.851 1V53.8543V54.2129C118.851 61.0356 120.026 67.7359 122.262 74.0438C130.028 94.9976 150.196 109.931 173.851 109.931C205.331 109.931 230.851 135.451 230.851 166.931V177L233.033 176.535C233.925 176.345 234.585 177.35 234.056 178.093L230.654 182.871C230.259 183.427 229.435 183.432 229.033 182.881L225.531 178.093C224.991 177.355 225.644 176.339 226.54 176.524L228.851 177V166.931C228.851 136.556 204.226 111.931 173.851 111.931C161.741 111.931 150.512 108.155 141.28 101.715C150.018 112.562 154.851 126.127 154.851 140.195V177L157.033 176.535C157.925 176.345 158.585 177.35 158.056 178.093L154.654 182.871C154.259 183.427 153.435 183.432 153.033 182.881L149.531 178.093C148.991 177.355 149.644 176.339 150.54 176.524L152.851 177V140.195C152.851 124.3 146.474 109.07 135.149 97.9164C128.48 91.3488 123.471 83.4136 120.395 74.7629C119.304 71.8212 118.448 68.7649 117.851 65.617C116.586 72.2847 114.16 78.5413 110.791 84.1685C107.913 89.1995 104.306 93.8402 100.043 97.926C88.4212 109.061 81.8503 124.459 81.8503 140.554V177L84.0336 176.535C84.9255 176.345 85.5854 177.35 85.0564 178.093L81.6541 182.871C81.2585 183.427 80.4349 183.432 80.0323 182.881L76.5309 178.093C75.9908 177.355 76.6439 176.339 77.54 176.524L79.8503 177V140.554C79.8503 126.709 84.5527 113.364 93.0521 102.641C84.088 108.515 73.3681 111.931 61.8503 111.931C31.4746 111.931 6.85028 136.556 6.85028 166.931V177L9.03359 176.535C9.92548 176.345 10.5854 177.35 10.0564 178.093L6.65408 182.871Z"
                    fill="url(#paint0_linear_11560_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11560_66"
                      x1="101.122"
                      y1="204.455"
                      x2="101.122"
                      y2="56.1364"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#131313" />
                      <stop offset="1" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mt-2 flex gap-[50px]">
                  <div className="flex items-center justify-center rounded border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                  <div className="flex items-center justify-center rounded border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                  <div className="flex items-center justify-center rounded border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                  <div className="flex items-center justify-center rounded border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative mx-auto mt-12 h-96 w-full max-w-6xl">
        <div className="pointer-events-none absolute inset-0 flex h-full items-center justify-center">
          <div className="hidden h-full w-full grid-cols-4 divide-x divide-gray-300 border-l border-r border-dashed border-gray-300 px-4 *:border-dashed lg:grid">
            <div className="col-span-4">
              <div className="size-full rounded border bg-white">content</div>
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div> */}
    </main>
  )
}

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
              <div className="relative mt-28 flex flex-col items-center justify-center">
                <div className="mx-auto w-fit border border-dashed bg-white">
                  Base Station
                </div>

                <svg
                  viewBox="0 0 136 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[350px]"
                >
                  <path
                    d="M90.0003 77C90.0003 47.288 72.2553 41.0564 72.0005 17.5761L72.0003 -2.81494e-05"
                    stroke="url(#paint0_linear_11560_66)"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeDasharray="2 5"
                    className="animate-dashes"
                  />
                  <path
                    d="M46.0671 77C46.0671 47.288 63.8121 41.0564 64.0669 17.5761L64.0671 -2.81494e-05"
                    stroke="url(#paint0_linear_11560_66)"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeDasharray="2 5"
                    className="animate-dashes"
                  />
                  <path
                    d="M135 77L135 73.1118C135 63.9272 129.545 55.3433 120.445 50.2095L99.5548 38.4238C90.4552 33.2901 80 24.7062 80 15.5215L80 7.39098e-06"
                    stroke="url(#paint0_linear_11560_66)"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeDasharray="2 5"
                    className="animate-dashesReverse"
                  />
                  <path
                    d="M1 77L1 73.1118C0.999999 63.9272 6.455 55.3433 15.555 50.2095L36.4452 38.4238C45.5448 33.2901 56 24.7062 56 15.5215L56 4.98685e-06"
                    stroke="url(#paint0_linear_11560_66)"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeDasharray="2 5"
                    className="animate-dashesReverse"
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear_11560_66"
                      x1="101.122"
                      y1="204.455"
                      x2="101.122"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#131313" />
                      <stop offset="1" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex gap-[65px]">
                  <div className="flex items-center justify-center rounded-sm border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                  <div className="flex items-center justify-center rounded-sm border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                  <div className="flex items-center justify-center rounded-sm border bg-white p-2">
                    <RiPlaneLine className="size-8 text-gray-900" />
                  </div>
                  <div className="flex items-center justify-center rounded-sm border bg-white p-2">
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

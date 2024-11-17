"use client"
import { PulseBeamsSecond } from "@/components/Beams"
import { Orbit } from "@/components/Orbit"
import { Hero } from "@/components/ui/Hero"
import {
  RiCheckFill,
  RiCircleLine,
  RiLoader3Fill,
  RiPlaneLine,
} from "@remixicon/react"
import { RasterMark } from "../../public/RasterMark"

export default function Home() {
  return (
    <main className="relative mx-auto mt-32 flex flex-col">
      <div className="py-24">
        <Hero />
      </div>

      <div className="relative mx-auto mt-48 h-[95rem] w-full max-w-6xl">
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
                            className="stroke-gray-200/70"
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
              <div className="relative -ml-0.5 mt-20 flex flex-col items-center justify-center">
                <Orbit
                  durationSeconds={40}
                  radiusPx={160}
                  keepUpright
                  orbitingObjects={[
                    <div className="relative flex items-center justify-center">
                      <RiPlaneLine className="z-10 size-5 rotate-90 text-gray-900" />
                      <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                      <div className="absolute -top-4 left-8">
                        <div className="flex gap-1">
                          <div className="flex items-center justify-center rounded-l-full bg-red-500 bg-white/50 p-1 text-xs ring-1 ring-red-500/30">
                            <RiCircleLine className="size-3 shrink-0 text-white" />
                          </div>
                          <div className="rounded-r-full bg-white/50 py-0.5 pl-1 pr-1.5 text-xs ring-1 ring-red-500/30">
                            Critical
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          animationDelay: "1s",
                        }}
                        className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                      ></div>
                    </div>,

                    <div className="relative flex items-center justify-center">
                      <RiPlaneLine className="z-10 size-5 rotate-90 text-gray-900" />
                      <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                      <div className="absolute -top-4 left-8">
                        <div className="flex gap-1">
                          <div className="flex items-center justify-center rounded-l-full bg-gray-500 bg-white/50 p-1 text-xs ring-1 ring-gray-500/30">
                            <RiLoader3Fill className="animate-spin size-3 shrink-0 text-white" />
                          </div>
                          <div className="rounded-r-full bg-white/50 py-0.5 pl-1 pr-1.5 text-xs ring-1 ring-gray-500/30">
                            Connecting
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          animationDelay: "4s",
                        }}
                        className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                      ></div>
                    </div>,

                    <div className="relative flex items-center justify-center">
                      <RiPlaneLine className="z-10 size-5 rotate-90 text-gray-900" />
                      <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                      <div
                        style={{
                          animationDelay: "2s",
                        }}
                        className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                      ></div>
                    </div>,
                    <div className="relative flex items-center justify-center">
                      <RiPlaneLine className="z-10 size-5 rotate-90 text-gray-900" />
                      <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                      <div className="absolute -top-4 left-8">
                        <div className="flex gap-1">
                          <div className="flex items-center justify-center rounded-l-full bg-emerald-500 bg-white/50 p-1 text-xs ring-1 ring-emerald-500/30">
                            <RiCheckFill className="size-3 shrink-0 text-white" />
                          </div>
                          <div className="rounded-r-full bg-white/50 py-0.5 pl-1 pr-1.5 text-xs ring-1 ring-emerald-500/30">
                            Operational
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          animationDelay: "6s",
                        }}
                        className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                      ></div>
                    </div>,
                    <div className="relative flex items-center justify-center">
                      <RiPlaneLine className="z-10 size-5 rotate-90 text-gray-900" />
                      <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                      <div
                        style={{
                          animationDelay: "3s",
                        }}
                        className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                      ></div>
                    </div>,
                  ]}
                >
                  <div className="relative flex h-48 w-48 items-center justify-center">
                    <div className="rounded-full p-1 ring-1 ring-black/10">
                      <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_10px_15px_0_rgba(0,0,0,0.19)] ring-1 ring-black/20">
                        <RasterMark className="size-10" />
                      </div>
                      <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-orange-400 to-transparent blur-lg" />
                    </div>
                  </div>
                </Orbit>
              </div>
              <div className="relative mt-40 flex flex-col items-center justify-center">
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
      <PulseBeamsSecond />
    </main>
  )
}

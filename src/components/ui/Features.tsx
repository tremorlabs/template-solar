import { cx } from "@/lib/utils"
import {
  RiCarFill,
  RiCheckLine,
  RiCircleLine,
  RiCodepenLine,
  RiContrast2Line,
  RiCopilotFill,
  RiLoaderFill,
  RiNotification2Line,
  RiPlaneFill,
  RiTruckFill,
} from "@remixicon/react"
import { SolarMark } from "../../../public/SolarMark"
import { Icons } from "../Icons"
import { Orbit } from "../Orbit"
import ChipViz from "./ChipViz"

export default function Features() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Vertical Lines */}
      <div className="pointer-events-none inset-0 select-none">
        {/* Left */}
        <div
          className="absolute inset-y-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right */}
        <div
          className="absolute inset-y-0 right-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* Middle */}
        <div
          className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 25% */}
        <div
          className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 75% */}
        <div
          className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* Content */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            Smart Farming Solutions
            <div className="absolute -left-[8px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-balance text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
            A network of autonomous systems for complete farm monitoring
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Deploy intelligent monitoring and automated response systems across
            your fields, irrigation networks, and aerial operations with our
            integrated platform.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg
            className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]"
            // style={{
            //   maskImage:
            //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
            // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
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
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="pointer-events-none h-96 select-none p-10">
            <div className="relative flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={140}
                keepUpright
                orbitingObjects={[
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <RiTruckFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-red-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiCircleLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="whitespace-nowrap rounded-r-full bg-white/50 py-0.5 pl-1 pr-1.5 text-xs ring-1 ring-gray-200">
                          Drivetrain Error
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

                  <div
                    key="obj2"
                    className="relative flex items-center justify-center"
                  >
                    <RiPlaneFill className="z-10 size-5 rotate-90 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-gray-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pl-1 pr-1.5 text-xs ring-1 ring-gray-200">
                          Charging
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

                  <div
                    key="obj3"
                    className="relative flex items-center justify-center"
                  >
                    <RiCarFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "2s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,
                  <div
                    key="obj4"
                    className="relative flex items-center justify-center"
                  >
                    <Icons.QuadCopter className="z-10 size-5 rotate-90 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiCheckLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pl-1 pr-1.5 text-xs ring-1 ring-gray-200">
                          Farming
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
                  <div
                    key="obj5"
                    className="relative flex items-center justify-center"
                  >
                    <RiPlaneFill className="z-10 size-5 rotate-90 text-gray-900" />
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
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-1 ring-black/20">
                      <SolarMark className="size-10" />
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-orange-400 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>

        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            Precision Agriculture
            <div className="absolute -left-[8px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-balance text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
            Turn every acre into a data-driven powerhouse
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Revolutionize your farming operation with edge-computing AI that
            transforms raw field data into actionable insights in real-time.
            Make informed decisions faster, reduce resource waste, and maximize
            yields.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg
            className="absolute size-full"
            // style={{
            //   maskImage:
            //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
            // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
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
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative h-[440px] w-[440px]">
            <div className="grid h-[440px] w-[440px] grid-cols-9 [mask-image:radial-gradient(white_0%,transparent_60%)]">
              {Array(81)
                .fill(null)
                .map((_, index) => {
                  const isLastRow = index >= 72
                  const isLastCol = (index + 1) % 9 === 0
                  const isCenter = index === 40

                  return (
                    <div
                      key={index}
                      className={cx(
                        "h-12 w-12 border-l border-t border-gray-300",
                        isLastRow ? "border-b" : "",
                        isLastCol ? "border-r" : "",
                      )}
                    >
                      {isCenter && (
                        <div className="relative flex size-12 items-center justify-center">
                          <div>
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center bg-white shadow-[inset_0px_-5px_10px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-1 ring-black/15">
                              <SolarMark className="size-8" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            Easy Expansion
            <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-balance text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
            Scale your smart farm with plug-and-play simplicity
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Add new sensors and capabilities to your farm network with zero
            setup required. Our systems automatically connect and coordinate
            with each other.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg
            className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)]"
            // style={{
            //   maskImage:
            //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
            // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
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
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="pointer-events-none relative flex size-full h-96 select-none items-center justify-center p-10">
            <div className="relative">
              <div className="absolute left-[6rem] top-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md shadow-black/10 ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.09),0_3px_5px_0_rgba(0,0,0,0.19)] ring-1 ring-inset ring-white/50">
                    <RiNotification2Line
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute right-[6rem] top-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md shadow-black/10 ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-1 ring-inset ring-white/50">
                    <RiContrast2Line
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[6rem] right-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md shadow-black/10 ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-1 ring-inset ring-white/50">
                    <RiCodepenLine
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[6rem] left-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md shadow-black/10 ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-1 ring-inset ring-white/50">
                    <RiCopilotFill
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
                <div
                  key={rotation}
                  className="absolute origin-left overflow-hidden"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative">
                    <div className="h-0.5 w-60 bg-gradient-to-r from-gray-300 to-transparent" />
                    <div
                      className="absolute left-0 top-0 h-0.5 w-28 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
                      style={{
                        animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
                        animationFillMode: "backwards",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <ChipViz />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

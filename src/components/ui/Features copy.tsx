import {
  RiCarFill,
  RiCircleLine,
  RiLoaderFill,
  RiPlaneFill,
  RiTruckFill,
} from "@remixicon/react"
import { SolarMark } from "../../../public/SolarMark"
import { Icons } from "../Icons"
import { Orbit } from "../Orbit"

export default function Features2() {
  return (
    <div className="relative mx-auto h-[95rem] w-full max-w-6xl">
      {/* Grid */}
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
                Smart Farming Solutions
                <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
              </h2>
              <p className="mt-2 text-balance text-5xl font-semibold tracking-tighter text-gray-900">
                A network of autonomous systems for complete farm monitoring
              </p>
              <p className="mt-4 text-balance text-gray-700">
                Deploy intelligent monitoring and automated response systems
                across your fields, irrigation networks, and aerial operations
                with our integrated platform. Use our autonomous systems for
                comprehensive crop management, with processing happening locally
                at each sensor point for maximum efficiency and reliability.
              </p>
            </div>
            <div className="mt-48">
              <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
                Field Intelligence
                <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
              </h2>
              <p className="mt-2 text-balance text-5xl font-semibold tracking-tighter text-gray-900">
                Real-time insights with distributed farm AI
              </p>
              <p className="mt-4 text-balance text-gray-700">
                Process agricultural data instantly where it&apos;s collected,
                enabling immediate decision-making without internet
                dependencies. Our advanced AI runs efficiently on field sensors,
                delivering actionable insights while maintaining data privacy
                and minimizing connectivity requirements.
              </p>
            </div>
            <div className="mt-48">
              <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
                Easy Expansion
                <div className="absolute -left-[7px] top-1 h-5 w-[3px] rounded-r-sm bg-orange-500" />
              </h2>
              <p className="mt-2 text-balance text-5xl font-semibold tracking-tighter text-gray-900">
                Scale your smart farm with plug-and-play simplicity
              </p>
              <p className="mt-4 text-balance text-gray-700">
                Add new sensors and capabilities to your farm network with zero
                setup required. Our systems automatically connect and coordinate
                with each other, creating a robust agricultural network that
                grows stronger with each additional sensor while maintaining
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
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <RiTruckFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                    <div className="absolute -top-4 left-8">
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
                    <div className="absolute -top-4 left-8">
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
                    <RiPlaneFill className="z-10 size-5 rotate-90 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5"></div>
                    <div className="absolute -top-4 left-8">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
                          <Icons.QuadCopter className="size-3 shrink-0 text-white" />
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
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_10px_15px_0_rgba(0,0,0,0.19)] ring-1 ring-black/20">
                      <SolarMark className="size-10" />
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-orange-400 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

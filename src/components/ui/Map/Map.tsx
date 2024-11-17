import {
  RiPlaneLine,
  RiSignalTowerFill,
  RiTeamFill,
  RiTruckFill,
} from "@remixicon/react"
import { SVGMap } from "./SVGMap"

export const Map = () => {
  return (
    <div className="mx-auto mt-24 w-full max-w-6xl border bg-gray-100 p-3">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-2xl bg-gray-950 shadow-2xl shadow-black/50">
        <div className="absolute left-0 h-full">
          <svg
            className="h-full w-20 border-r border-zinc-900"
            style={{
              maskImage:
                "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
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
                      className="stroke-zinc-800/60"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
          </svg>
        </div>
        <div className="absolute right-0 h-full">
          <svg
            className="h-full w-20 border-l border-zinc-900"
            style={{
              maskImage:
                "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
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
                      className="stroke-zinc-800/60"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
          </svg>
        </div>

        <div className="pt-20 text-lg font-semibold tracking-tight text-orange-400">
          Intelligence
        </div>

        <h2 className="mt-8 max-w-[700px] text-center text-5xl font-semibold tracking-tight text-white">
          Integrated Command & Control for spacial intelligence
        </h2>
        <p className="mt-8 max-w-2xl text-balance text-center text-xl text-gray-400">
          Unified control of connected systems across ground, water, and air
          environments, even in areas with limited connectivity.
        </p>

        <div className="mb-24 pt-24">
          <div className="relative">
            <SVGMap />
            <div className="absolute -top-3 left-[130px]">
              <div className="relative flex items-center justify-center">
                <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
                <RiPlaneLine className="relative size-5 rotate-90 text-white" />
                <div
                  style={{
                    animationDelay: "3.5s",
                  }}
                  className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                ></div>
              </div>
            </div>
            <div className="absolute right-[300px] top-32">
              <div className="relative flex items-center justify-center">
                <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
                <RiPlaneLine className="relative size-5 rotate-90 text-white" />
                <div
                  style={{
                    animationDelay: "3.5s",
                  }}
                  className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                ></div>
              </div>
            </div>
            <div className="absolute right-[400px] top-14">
              <div className="relative flex items-center justify-center">
                <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
                <RiTeamFill className="relative size-5 text-white" />
              </div>
            </div>
            <div className="absolute bottom-24 right-[420px]">
              <div className="relative flex items-center justify-center">
                <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
                <div className="absolute -right-4 -top-3 flex size-4 items-center justify-center rounded-full bg-gray-950 font-mono text-xs text-white ring-1 ring-white/15">
                  2
                </div>
                <RiTruckFill className="relative size-5 text-white" />
              </div>
            </div>
            <div className="absolute right-56 top-9">
              <div className="relative flex items-center justify-center">
                <RiSignalTowerFill className="z-10 size-5 text-white" />
                <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

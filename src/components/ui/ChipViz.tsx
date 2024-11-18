import { SolarMark } from "../../../public/SolarMark"

export default function ChipViz() {
  return (
    <div className="relative flex items-center">
      <div className="relative">
        <div className="absolute -inset-px z-0 rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 opacity-30 blur-xl transition-all" />
        <div className="relative z-0 min-h-[80px] min-w-[80px] rounded-full border bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-orange-500/20">
          <div className="absolute inset-1 rounded-full bg-gradient-to-t from-yellow-500 via-amber-500 to-orange-500 p-0.5 shadow-xl">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black/40 shadow-sm shadow-white/40 will-change-transform">
              <div className="z-2 size-full bg-black/30"></div>
              <div className="z-3 absolute inset-0 rounded-full bg-gradient-to-t from-yellow-500 via-amber-500 to-orange-500 opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]" />

              <div className="z-5 absolute inset-[6px] rounded-full bg-white/10 p-1 backdrop-blur-[1px] transition-all">
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-300 shadow-lg shadow-black/40 transition-all">
                  <div className="flex h-full w-full items-center justify-center">
                    <SolarMark className="w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

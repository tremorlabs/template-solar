import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      <div className="absolute inset-0 object-cover">
        <Image
          alt="clouds background"
          src="/images/field.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute right-14 top-[15rem] w-[34rem]">
        <Image
          alt="clouds background"
          src="/images/drone.png"
          width={1583}
          height={554}
          className="animate-hover"
        />
      </div>
      <div className="relative z-20 p-6 md:p-12 lg:p-24 lg:pb-40">
        <div className="mb-4 md:mb-8 lg:mb-14">
          <blockquote className="relative max-w-2xl text-lg leading-relaxed tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
            <p className="before:absolute before:right-full before:top-0 before:content-['“'] after:text-gray-900/70 after:content-['”']">
              <strong className="font-semibold">
                Solar transformed our environmental monitoring capabilities.
              </strong>{" "}
              <span className="text-gray-900/70">
                Their autonomous network provides real-time data on forest
                health, wildlife patterns, and ecosystem changes with
                unprecedented precision and efficiency.
              </span>
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded p-1 ring-1 ring-white/50 backdrop-blur-sm">
            <Image
              alt="Dr. Sarah Miller"
              src="/images/smiller.jpeg"
              width={56} // 14 * 4 = 56px
              height={56} // 14 * 4 = 56px
              className="rounded object-cover"
            />
          </div>
          <div>
            <div className="text-base font-medium text-gray-900">
              Dr. Sarah Miller
            </div>
            <div className="max-w-xs text-sm text-[#C33621]/80">
              Director of Global Conservation Technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

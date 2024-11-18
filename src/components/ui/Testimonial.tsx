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
      <div className="absolute -right-14 top-[19rem] w-[19rem] sm:right-3 sm:top-[12rem] sm:w-[23rem] md:right-0 md:top-[12rem] md:w-[25rem] lg:top-[15rem] lg:w-[34rem]">
        <Image
          alt="clouds background"
          src="/images/drone.png"
          width={1583}
          height={554}
          className="animate-hover"
        />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div className="">
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
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
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded p-1 ring-1 ring-white/50 backdrop-blur-sm">
            <Image
              alt="Dr. Sarah Miller"
              src="/images/smiller.jpeg"
              width={56}
              height={56}
              className="rounded object-contain"
            />
          </div>
          <div>
            <div className="text-base font-medium text-gray-900">
              Dr. Sarah Miller
            </div>
            <div className="max-w-[200px] text-sm text-[#C33621]/80">
              Director of Global Conservation Technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

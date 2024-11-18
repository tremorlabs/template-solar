export default function AnimatedDivider() {
  return (
    <div>
      <div className="mx-auto my-20 flex max-w-6xl items-center gap-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />

        <div className="relative h-4 w-5">
          <div
            className="absolute left-0 top-0 size-1 rounded-full"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${0 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-4 top-0 size-1 rounded-full"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${1 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-2 top-1 size-1 rounded-full"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${2 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-0 top-2 size-1 rounded-full"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${3 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-4 top-2 size-1 rounded-full"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${4 * 0.2}s`,
            }}
          />
          <div
            className="absolute left-2 top-3 size-1 rounded-full"
            style={{
              animation: `wave 2s infinite ease-in-out`,
              animationDelay: `${5 * 0.2}s`,
            }}
          />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
      </div>
    </div>
  )
}

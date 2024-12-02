import { cx } from "@/lib/utils"

export const StickerCard = ({
  title,
  description,
  Icon,
}: {
  title: string
  description: string
  Icon: React.ReactElement
}) => (
  <div className="relative">
    <a
      className={cx(
        "relative z-10 mt-0 block h-full w-full overflow-hidden hover:cursor-pointer",
        "transition-all duration-[180ms] ease-in-out",
        "rounded-lg rounded-tr-[26px] bg-white px-4 pt-5 pb-[18px] leading-8 font-normal text-gray-900 no-underline shadow-[inset_0_0_0_1px] shadow-gray-200 before:absolute before:top-0 before:right-0 before:z-3 before:h-[30px] before:w-[30px] before:-translate-y-1/2 before:translate-x-1/2 before:rotate-45 before:bg-gray-50 before:shadow-[0_1px_0_0_] before:shadow-gray-200 before:transition-all before:duration-[180ms] before:ease-in-out before:content-[''] after:absolute after:top-0 after:right-0 after:z-2 after:size-7 after:-translate-y-2 after:translate-x-2 after:rounded-bl-lg after:border after:bg-gray-50 after:shadow-xs after:transition-all after:duration-[180ms] after:ease-in-out after:content-[''] hover:rounded-tr-[45px] hover:before:h-[50px] hover:before:w-[50px] hover:after:h-[42px] hover:after:w-[42px] hover:after:shadow-lg hover:after:shadow-black/5",
      )}
    >
      <div>
        {Icon}
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  </div>
)

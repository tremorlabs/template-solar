import { cx } from "@/lib/utils"
import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
} from "@remixicon/react"

const StickerCard = ({
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
        "relative z-10 mt-0 block size-fit overflow-hidden hover:cursor-pointer",
        "transition-all duration-[180ms] ease-in-out",
        "rounded-lg rounded-tr-[26px] bg-white px-4 pb-[18px] pt-5 font-normal leading-8 text-gray-900 no-underline shadow-[inset_0_0_0_1px] shadow-gray-200 before:absolute before:right-0 before:top-0 before:z-3 before:h-[30px] before:w-[30px] before:-translate-y-1/2 before:translate-x-1/2 before:rotate-45 before:bg-gray-50 before:shadow-[0_1px_0_0_] before:shadow-gray-200 before:transition-all before:duration-[180ms] before:ease-in-out before:content-[''] after:absolute after:right-0 after:top-0 after:z-2 after:size-7 after:-translate-y-2 after:translate-x-2 after:rounded-bl-lg after:border after:bg-gray-50 after:shadow-xs after:transition-all after:duration-[180ms] after:ease-in-out after:content-[''] hover:rounded-tr-[45px] hover:before:h-[50px] hover:before:w-[50px] hover:after:h-[42px] hover:after:w-[42px] hover:after:shadow-lg hover:after:shadow-black/5",
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

export const StickerCards = () => (
  <div className="mx-auto my-40 grid max-w-2xl grid-cols-2 grid-rows-2 gap-6">
    <StickerCard
      Icon={
        <RiNavigationFill className="mb-2 size-6 shrink-0 text-orange-400" />
      }
      title="Autonomous Navigation"
      description="Smart tractors that navigate fields independently using GPS and computer vision for precise farming operations."
    />
    <StickerCard
      Icon={<RiRobot3Fill className="mb-2 size-6 shrink-0 text-orange-400" />}
      title="Robotic Harvesting"
      description="AI-powered robots that identify and harvest crops at optimal ripeness while minimizing damage and waste."
    />
    <StickerCard
      Icon={<RiDropFill className="mb-2 size-6 shrink-0 text-orange-400" />}
      title="Smart Irrigation"
      description="Automated irrigation systems that optimize water usage based on real-time soil moisture and weather data."
    />
    <StickerCard
      Icon={<RiPieChartFill className="mb-2 size-6 shrink-0 text-orange-400" />}
      title="Yield Analytics"
      description="Advanced analytics platform that predicts crop yields and suggests optimal farming interventions."
    />
  </div>
)

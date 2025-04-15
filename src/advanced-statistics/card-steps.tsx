import { FaChartLine, FaRegLightbulb, FaEdit } from "react-icons/fa";
import { Card } from "./card";
export function CardSteps() {
  return (
    <div className="relative">
      <div className="hidden lg:flex justify-center absolute top-32 left-0 w-full">
        <div className="w-9/10 h-2 bg-cyan-500"></div>
      </div>
      <div className="lg:hidden flex justify-center absolute top-0 left-0 bottom-0 w-full">
        <div className="w-2 bg-cyan-500"></div>
      </div>
      <article className="flex flex-col lg:flex-row lg:justify-between items-center mt-20 lg:gap-2 gap-28">
        <Card
          icon={<FaChartLine />}
          title="Brand Recognition"
          message="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        ></Card>
        <Card
          className="lg:mt-12"
          icon={<FaRegLightbulb />}
          title="Detailed Records"
          message="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        ></Card>
        <Card
          className="lg:mt-24"
          icon={<FaEdit />}
          title="Fully Customizable"
          message="Improve brand awareness and content discoverablitiy through customizable links supercharging audience engagement."
        ></Card>
      </article>
    </div>
  );
}

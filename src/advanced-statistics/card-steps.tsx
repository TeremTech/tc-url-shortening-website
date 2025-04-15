import { FaChartLine, FaRegLightbulb, FaEdit } from "react-icons/fa";
import { Card } from "./card";
export function CardSteps() {
  return (
    <div className="relative">
      <div className="flex justify-center absolute top-32 left-0 w-full">
        <div className="w-9/10 h-2 bg-cyan-500"></div>
      </div>
      <article className="flex justify-between mt-20 gap-2">
        <Card
          icon={<FaChartLine />}
          title="Brand Recognition"
          message="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        ></Card>
        <Card
          className="mt-12"
          icon={<FaRegLightbulb />}
          title="Detailed Records"
          message="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        ></Card>
        <Card
          className="mt-24"
          icon={<FaEdit />}
          title="Fully Customizable"
          message="Improve brand awareness and content discoverablitiy through customizable links supercharging audience engagement."
        ></Card>
      </article>
    </div>
  );
}

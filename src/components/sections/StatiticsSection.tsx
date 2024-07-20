import { statisticsCardData } from "@/utils/constants";
import StatiticsCard from "../blocks/cards/StatiticsCard";
import MaxWidthContainer from "../ui/MaxWidthContainer";

const StatiticsSection = () => {
  return (
    <div className="bg-secondary">
      <MaxWidthContainer>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8  h-full py-6">
          {statisticsCardData.map((stat, index) => (
            <StatiticsCard
              count={stat.count}
              description={stat.description}
              key={index}
            />
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default StatiticsSection;

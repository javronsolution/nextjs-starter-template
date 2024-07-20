import { dailyOffers } from "@/utils/constants";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import OfferCard from "../blocks/cards/OfferCard";

const DailyOffersSection = () => {
  return (
    <div className="py-10">
      <MaxWidthContainer className="space-y-6">
        <h3 className="text-2xl font-bold capitalize">
          Daily Offers and Reward
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dailyOffers.map((offer, index) => (
            <OfferCard
              image={offer.image}
              title={offer.title}
              description={offer.description}
              key={index}
            />
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default DailyOffersSection;

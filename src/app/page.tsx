import DailyOffersSection from "@/components/sections/DailyOffersSection";
import FuelingSection from "@/components/sections/FuelingSection";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import JPRewardsSection from "@/components/sections/JPRewardSection";
import OurLocationSection from "@/components/sections/OurLocationSection";
import StatiticsSection from "@/components/sections/StatiticsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <StatiticsSection />
      <DailyOffersSection />
      <IntroSection />
      <FuelingSection />
      <JPRewardsSection />
      <OurLocationSection />
    </>
  );
};

export default Home;

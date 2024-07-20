import Image from "next/image";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import { rewardSteps } from "@/utils/constants";
import RewardStepCard from "../blocks/cards/RewardStepCard";
import ApkDownloadBtns from "../blocks/ApkDownloadBtns";

const JPRewardsSection = () => {
  return (
    <div className="bg-primary-800 text-white lg:mx-4 min-h-[500px] py-8">
      <MaxWidthContainer className="flex flex-col lg:flex-row gap-6">
        <div className="mobile-with-qr relative h-96 lg:h-auto lg:w-1/3">
          <Image
            src="/images/phone-with-jp-rewards-qr.png"
            alt="phone with jp rewards QR code"
            fill
            className="object-contain"
          />
        </div>
        <div className="content lg:w-2/3 h-full py-8 space-y-9">
          <div className="space-y-1.5">
            <h2 className="capitalize text-4xl font-bold leading-normal">
              Reward your cravings
            </h2>
            <p className="text-sm text-text-200">
              Love free snacks and saving on gas? Is that even a question?
            </p>
          </div>
          <div className="how space-y-4">
            <h3 className="text-xl font-semibold">Here How To Earn Rewards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  items-center">
              {rewardSteps.map((step, index) => (
                <RewardStepCard
                  image={step.image}
                  description={step.desciption}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="download space-y-4">
            <h4 className="text-lg font-medium">As your points pile up, so do the rewards!</h4>
            <ApkDownloadBtns />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default JPRewardsSection;

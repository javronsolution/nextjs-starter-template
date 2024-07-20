import Image from "next/image";
import React from "react";
type RewardStepCardProps = {
  image: string;
  description: string;
};
const RewardStepCard: React.FC<RewardStepCardProps> = ({
  image,
  description,
}) => {
  return (
    <div className="flex items-center gap-4 ">
      <Image
        src={image}
        alt="reward step image"
        width={60}
        height={60}
      />
      <h6 className="text-sm text-text-200">{description}</h6>
    </div>
  );
};

export default RewardStepCard;

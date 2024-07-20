import Image from "next/image";
import React from "react";
type OfferCardProps = {
  image: string;
  title: string;
  description: string;
};
const OfferCard: React.FC<OfferCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-48 overflow-hidden rounded-md">
        <Image
          alt="offer image"
          src={image}
          fill
          className="object-cover object-top hover:scale-105 transition-all ease-in-out"
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-primary-800 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;

import Image from "next/image";
import Button from "../ui/Button";
import MaxWidthContainer from "../ui/MaxWidthContainer";

const FuelingSection = () => {
  return (
    <div className="py-10">
      <MaxWidthContainer className="flex flex-col justify-center lg:items-center lg:flex-row gap-6">
        <div className="left lg:w-1/2 space-y-8">
          <h5 className="uppercase text-lg font-medium text-primary-800">
            Fueling
          </h5>
          <div className="space-y-6">
            <div className="space-y-2.5">
              <h2 className="capitalize text-4xl font-bold text-text-900">
                Quality Fuel, Convenient Store, Car Wash Services
              </h2>
              <p className="text-text-600">
                Experience top-notch fuel options, a wide range of convenience
                store products, and professional car wash services at Jandu
                Petroleum.
              </p>
            </div>
            <div>
              <Button>Locate Us</Button>
              <Button variant={"link"}>Know More</Button>
            </div>
          </div>
        </div>
        <div className="right lg:w-1/2 relative h-96 overflow-hidden rounded-md">
          <Image
            src={"/images/gas-station-1.jpg"}
            alt="bp gas station"
            fill
            className="object-cover"
          />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default FuelingSection;

import { FiArrowRight } from "react-icons/fi";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="bg-hero h-[520px] bg-cover bg-right overflow-hidden relative">
      <div className="absolute w-full h-full bg-black/60 lg:hidden"></div>
      <div className="absolute hidden lg:block top-1/2 left-0 w-[1232px] h-[1232px] bg-primary-800 rounded-full -translate-x-[45%] -translate-y-1/2"></div>
      <MaxWidthContainer className="relative z-10 flex-col flex justify-center">
        <div className="lg:w-[45%] space-y-4">
          <h1 className="capitalize text-4xl xl:text-6xl font-bold text-white">
            upto 20¢ off every gallon, every day{" "}
          </h1>
          <p className="text-text-200">Start saving with JP Rewards Now</p>
         <Button icon variant={'secondary'}>Locate Us</Button>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Hero;

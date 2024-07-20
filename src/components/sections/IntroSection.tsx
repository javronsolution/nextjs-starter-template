import Button from "../ui/Button";
import MaxWidthContainer from "../ui/MaxWidthContainer";

const IntroSection = () => {
  return (
    <div className="bg-secondary py-12">
      <MaxWidthContainer className="flex flex-col lg:flex-row gap-6 justify-between items-center">
        <div className="left lg:w-1/2">
          <h2 className="text-4xl font-bold  text-text-900 lg:w-4/5 capitalize">
            Fuel up with jandu petroleum today!
          </h2>
        </div>
        <div className="right lg:w-1/2 space-y-5">
          <p className="text-text-600 font-medium text-lg">
            Welcome to Jandu Petroleum, your trusted source for quality fuel and
            convenience.
          </p>
          <div>
            <Button>Contact Now</Button>
            <Button variant={'link'}>Know more</Button>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default IntroSection;

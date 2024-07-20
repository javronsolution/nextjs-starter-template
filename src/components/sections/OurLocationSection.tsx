import MaxWidthContainer from "../ui/MaxWidthContainer";

const OurLocationSection = () => {
  return (
    <div className="py-8">
      <MaxWidthContainer className="space-y-5 flex flex-col">
        <h5 className="text-lg font-medium text-primary-800 uppercase text-center">
          find us
        </h5>
        <div className="space-x-1.5">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold capitalize">Our locations</h3>
            <p className=" text-text-600 text-sm">
              Visit our gas stations for the best service and deals.
            </p>
          </div>
        </div>
          <div className="h-[450px] overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1ExRBl0o5Z_8Q1q0tOo-mEiDJkg-fjnY&ehbc=2E312F&noprof=1"
              width="100%"
              height="510px"
              style={{ border: 0, marginTop: "-60px"}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </MaxWidthContainer>
    </div>
  );
};

export default OurLocationSection;

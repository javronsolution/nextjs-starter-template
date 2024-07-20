import Link from "next/link";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import Image from "next/image";
import { quickLinks, socialLinks, timings } from "@/utils/constants";
import { FiClock } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="border-t-2">
      <MaxWidthContainer className="flex flex-col lg:flex-row max-lg:gap-10 py-10">
        <div className="logo-description space-y-4 lg:w-1/3">
          <Image
            src="/logo/logo.png"
            width={250}
            height={200}
            alt="jandu petroleum logo"
          />
          <p className="text-sm text-text-600">
            Jandu Petroleum offers high-quality petroleum products and services,
            focusing on innovation, sustainability, and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:gap-10 lg:w-2/3">
          <div className="quick-links space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className=" space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>
                    <span className="text-text-600 hover:text-black transition-colors capitalize">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="timings space-y-4">
            <h4 className="text-lg font-medium">Gas Station Timings</h4>
            <ul className=" space-y-2">
              {timings.map((link, index) => (
                <li key={index}>
                  <span className="flex items-center gap-1.5 text-text-600 hover:text-black transition-colors capitalize">
                    <FiClock className="shrink-0"/>
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="socail-link-container space-y-4">
            <h4 className="text-lg font-medium">Social Links</h4>
            <div className="social-links flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="p-2.5 text-xl bg-primary-800 text-white rounded-full"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthContainer>
      <div className="bg-primary-800 text-white">
        <MaxWidthContainer className="py-1.5 flex flex-col lg:flex-row max-lg:text-center gap-4 justify-between items-center">
          <p className=" text-sm ">
            {" "}
            Copyright &copy; {new Date().getFullYear()} Jandu Petroleum. All
            Rights Reserved.
          </p>
          <Link href="https://www.javronsolutions.com/">
            <p className="text-sm">Powered By Javron Solutions</p>
          </Link>
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default Footer;

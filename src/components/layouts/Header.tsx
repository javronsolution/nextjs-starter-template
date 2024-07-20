import Image from "next/image";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import { APKUrl, IOSUrl, NavLinks } from "@/utils/constants";
import Link from "next/link";
import MobileNav from "../blocks/MobileNav";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  AppGalleryButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import ApkDownloadBtns from "../blocks/ApkDownloadBtns";

const Header = () => {
  return (
    <header className=" bg-white border-b">
      <div className="h-8 bg-primary-800 text-white hidden lg:block">
        <MaxWidthContainer className="flex items-center justify-between">
          <Link
            href="tel:+19204875117"
            className="flex items-center gap-1  text-gray-100 hover:text-white transition-colors"
          >
            <IoIosCall size={20} />
            <span>+1 (920) 4875117</span>
          </Link>
          <Link
            href="mailto:info@jandupetroleum.com"
            className="flex items-center gap-1 text-gray-100 hover:text-white transition-colors"
          >
            <IoMdMail size={20} />
            <span>info@jandupetroleum.com</span>
          </Link>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer className="py-4 flex justify-between items-center ">
        <div className="left flex items-center gap-6">
          <Link href="/" className="logo">
            <Image
              src="/logo/logo.png"
              alt="jandu petroleum logo"
              width={150}
              height={80}
              priority
            />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-6 items-center">
              {NavLinks.map((link, index) => (
                <li className=" relative group" key={index}>
                  <Link href={link.href}>
                    <span className="text-sm font-medium text-text-600 hover:text-text capitalize">
                      {link.title}
                    </span>
                  </Link>
                  {/* submenu */}
                  {link.subLinks && (
                    <div className="absolute hidden group-hover:block top-12 left-0  min-w-48  z-20 -translate-y-7">
                      <ul className=" bg-gray-50 mt-10  rounded-xl p-4 flex flex-col gap-2 drop-shadow-md">
                        {link.subLinks.map((sublink, index) => (
                          <li key={index}>
                            <Link href={sublink.href}>
                              <span className="font-medium text-gray-800 hover:text-black block hover:translate-x-1 transition-all ">
                                {sublink.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="right hidden lg:block">
         <ApkDownloadBtns />
        </div>
        <MobileNav />
      </MaxWidthContainer>
    </header>
  );
};

export default Header;

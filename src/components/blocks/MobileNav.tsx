"use client";
import { NavLinks } from "@/utils/constants";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { cn } from "@/utils/utils";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  gsap.registerPlugin(useGSAP);
  const navigation = useRef(null);

  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
    if (NavLinks[index].subLinks) {
      e.preventDefault();
      // setSubMenuIndex(index);
      return;
    }
    setIsOpen(false);
  };

  const handleSubMenuClick = (link: string) => {
    setActiveSubMenu(activeSubMenu === link ? null : link);
  };

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(".mobile-nav", {
          duration: 0.5,
          x: "0",
          ease: "power3.inOut",
          opacity: 1,
          display: "block",
        });
      } else {
        gsap.to(".mobile-nav", {
          duration: 0.5,
          x: "-100%",
          ease: "power3.inOut",
          opacity: 0,
          display: "none",
        });
      }
    },
    { scope: navigation, dependencies: [isOpen] }
  );

  return (
    <div ref={navigation} className="lg:hidden">
      <div className="trigger relative z-50">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
      </div>
      <div
        className={cn(
          "mobile-nav wrapper absolute top-0 left-0 z-40 w-full h-full transform -translate-x-full"
        )}
      >
        <div className="nav w-full mt-20 pb-10 bg-white">
          <ul className="flex flex-col py-2">
            {NavLinks.map((link, index) => {
              const isSubMenuActive = activeSubMenu === link.href;
              return (
                <li key={index} className="nav-link">
                  <Link
                    onClick={() => {
                      if (link.subLinks) {
                        handleSubMenuClick(link.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    href={link.subLinks ? "" : link.href}
                    className="flex items-center justify-between px-4 py-4"
                  >
                    <span className="capitalize text-xl font-medium transition-all duration-300 ease-in-out">
                      {" "}
                      {link.title}
                    </span>
                    {link.subLinks &&
                      (isSubMenuActive ? (
                        <IoIosArrowUp size={25} />
                      ) : (
                        <IoIosArrowDown size={25} />
                      ))}
                  </Link>
                  {/* submenu */}
                  {link.subLinks && isSubMenuActive && (
                    <ul
                      className={cn(
                        "flex flex-col gap-4 py-4 bg-gray-100 overflow-hidden "
                      )}
                    >
                      {link.subLinks.map((sublink, index) => (
                        <li className="px-6" key={index}>
                          <Link
                            href={sublink.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveSubMenu(null);
                            }}
                          >
                            <span className="text-lg font-medium">
                              {sublink.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

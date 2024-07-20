import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type NavLinks = {
  title: string;
  href: string;
  subLinks?: {
    title: string;
    href: string;
  }[];
};

export const NavLinks: NavLinks[] = [
  {
    title: "Home",
    href: "/",
  },
  { title: "About", href: "#" },
  {
    title: "Offers",
    href: "#",
  },
  { title: "Locations", href: "#" },
  { title: "Careers", href: "#" },
];

export const APKUrl = "https://play.google.com/store/apps/details?id=app.jandu";
export const IOSUrl = "https://onelink.to/pxun7p";

export const statisticsCardData = [
  {
    count: "72k",
    description: "Trusted Total App Customers",
  },
  {
    count: "1,100+",
    description: "Daily Customers",
  },
  {
    count: "20+",
    description: "Years In The Industry",
  },
  {
    count: "4",
    description: "Gas Stations",
  },
];

export const dailyOffers = [
  {
    image: "/images/offers/sprit-offer.jpg",
    title: "Sprite Zero Sugar",
    description: "Buy 2 And Save 50¢",
  },
  {
    image: "/images/offers/sandwich.jpg",
    title: "Smoked Ham",
    description: "Save 50¢",
  },
  {
    image: "/images/offers/beef-jerky.jpg",
    title: "Sweet Baby Rays",
    description: "Buy 1 Save $1.00",
  },
  {
    image: "/images/offers/granola.jpg",
    title: "Oats And Honey",
    description: "Buy 2 And Save $1",
  },
];

export const rewardSteps = [
  {
    image: "/images/jp-rewards/1.png",
    desciption: "Download the JP Rewards app",
  },
  {
    image: "/images/jp-rewards/2.png",
    desciption: "Earn 5 points on every gallon of gas",
  },
  {
    image: "/images/jp-rewards/3.png",
    desciption: "Redeem points for discounts",
  },
];

export const socialLinks = [
  {
    icon: React.createElement(FaFacebookF),
    link: "https://www.facebook.com/Jpexress/",
  },
  {
    icon: React.createElement(FaInstagram),
    link: "https://www.instagram.com/jandupetroleum/",
  },
  {
    icon: React.createElement(FaXTwitter),
    link: "https://x.com/JanduPetroleum",
  },
];

export const quickLinks = [
  { label: "About", link: "#" },
  { label: "offers", link: "#" },
  { label: "Job opportunities", link: "#" },
  { label: "News", link: "#" },
  { label: "Contact", link: "#" },
];

export const timings = [
  "5am To 9pm Weekdays",
  "6am To 9pm Sunday",
  "Pumps are open 24/7 with credit or debit",
]

"use client";
import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import payment from "../../public/images/Payments.svg";
import Image from "next/image";

const list = [
  {
    name: "About",
    item: [
      {
        title: "About Us",
        link: "about-us",
      },
      {
        title: "Blog",
        link: "blog",
      },
      {
        title: "Contact Us",
        link: "contact-us",
      },
      {
        title: "Popular Question",
        link: "popular-question",
      },
    ],
  },
  {
    name: "What&apos;s Popular",
    item: [
      {
        title: "About Us",
        link: "about-us",
      },
      {
        title: "Kings Size Bed",
        link: "/",
      },
      {
        title: "Dinning Table",
        link: "/",
      },
      {
        title: "Boucle Chairs",
        link: "/",
      },
      {
        title: "L Shaped Couch",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-myBlack grid place-items-center pb-10 pt-16 mt-20">
      <Wrapper className="text-white flex flex-col items-center">
        {/* atas */}
        <Div className="grid grid-cols-12 gap-x-4">
          <Div column className="space-y-2 col-span-4">
            <Div className="space-y-3">
              <svg
                width="100"
                height="21"
                viewBox="0 0 112 21"
                className="fill-white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 1H1V3H18V1ZM4 11H18V9H1V20H4V11Z"
                  fill="#ffffff"
                />
                <path
                  d="M1 1V0.52H0.52V1H1ZM18 1H18.48V0.52H18V1ZM1 3H0.52V3.48H1V3ZM18 3V3.48H18.48V3H18ZM18 11V11.48H18.48V11H18ZM4 11V10.52H3.52V11H4ZM18 9H18.48V8.52H18V9ZM1 9V8.52H0.52V9H1ZM1 20H0.52V20.48H1V20ZM4 20V20.48H4.48V20H4ZM1 1.48H18V0.52H1V1.48ZM1.48 3V1H0.52V3H1.48ZM18 2.52H1V3.48H18V2.52ZM17.52 1V3H18.48V1H17.52ZM18 10.52H4V11.48H18V10.52ZM17.52 9V11H18.48V9H17.52ZM1 9.48H18V8.52H1V9.48ZM1.48 20V9H0.52V20H1.48ZM4 19.52H1V20.48H4V19.52ZM3.52 11V20H4.48V11H3.52Z"
                  fill="#ffffff"
                />
                <path
                  d="M38.0688 19.8572V18.5715C36.8574 19.5429 35.0596 20 32.5195 20C26.3448 20 24 17.6857 24 13.2857V5H26.931V13.9429C26.931 16.6 28.6114 17.8571 31.0736 17.8571H34.2391C36.701 17.8571 38.0687 16.6 38.0687 14.5714V5H41V19.8572H38.0688Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={"0.96"}
                />
                <path
                  d="M49.765 5.14284V6.42854C50.9079 5.45714 52.6037 5 55 5V7.14283H53.3779C51.0552 7.14283 49.765 8.39995 49.765 10.4286V20H47V5.14284H49.765Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={"0.96"}
                />
                <path
                  d="M63.931 5.14284V6.42854C65.1425 5.45714 66.9402 5 69.4805 5C75.6552 5 78 7.31425 78 11.7143V20H75.069V11.0571C75.069 8.39995 73.7793 7.14283 71.3172 7.14283H67.7609C65.2989 7.14283 63.931 8.39995 63.931 10.4286V20H61V5.14284H63.931Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={"0.96"}
                />
                <rect
                  x="84"
                  y="1"
                  width="2"
                  height="2"
                  rx="1"
                  fill="#ffffff"
                  stroke="#A09D9D"
                  strokeWidth={"0.96"}
                />
                <rect
                  x="84"
                  y="5"
                  width="2"
                  height="15"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={"0.96"}
                />
                <path
                  d="M95.9513 5L101 10.4519L106.049 5H109.415L102.756 12.1827L110 20H106.634L101 13.9134L95.3658 20H92L99.2439 12.1827L92.5852 5H95.9513Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={"0.96"}
                />
              </svg>
              <p className="text-myGray">
                Minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Div>

            <Div className="space-y-1 text-myGray">
              <Div flex itemsCenter className="gap-3">
                <Icon className="text-xl" icon={"fluent:call-24-regular"} />
                <p>085161919533</p>
              </Div>
              <Div flex itemsCenter className="gap-3">
                <Icon className="text-xl" icon={"iconamoon:email-light"} />
                <p>pengkyjd00@gmail.com</p>
              </Div>
              <Div flex itemsCenter className="gap-3">
                <Icon className="text-xl" icon={"carbon:location"} />
                <p>9 Alpha Loop, Plum Branch,sc, 29845 United States</p>
              </Div>
            </Div>
          </Div>

          <Div className="space-y-3 col-span-2">
            <h1>About</h1>
            <ul className="text-myGray">
              {list[0].item.map((item) => {
                return (
                  <li key={item.title} className="hover:text-white">
                    <Link href={item.link} className="flex items-center gap-2">
                      <Icon
                        icon={"tdesign:arrow-right-up"}
                        className="text-myOrange"
                      />
                      <p>{item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Div>

          <Div className="space-y-3 col-span-2">
            <h1>What&apos;s Popular</h1>
            <ul className="text-myGray">
              {list[1].item.map((item) => {
                return (
                  <li key={item.title} className="hover:text-white">
                    <Link href={item.link} className="flex items-center gap-2">
                      <Icon
                        icon={"tdesign:arrow-right-up"}
                        className="text-myOrange"
                      />
                      <p>{item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Div>

          <Div full className="col-span-4 space-y-3">
            <h1 className="font-baiJamjure">Get 5% off your first order!</h1>
            <p>
              Subscribe and get discount for your first order! Also receive
              updates, and more
            </p>

            <Div column full className="mt-4 space-y-3">
              <Div full flex between>
                <Input type="email" placeholder="Enter your email" />
                <Div flex itemsCenter>
                  <Button className="uppercase ml-3" variant={"ghost"}>
                    subscribe
                    <Icon
                      icon={"icons8:right-round"}
                      className="text-24 ml-2"
                    />
                  </Button>
                </Div>
              </Div>
              <p className="text-xs">
                By clicking &quot;Subscribe&quot; I consent to receiving
                commercial information to the above e-mail and to having my data
                processed in connection with the newsletter.
              </p>
            </Div>
          </Div>
        </Div>

        {/* bawah */}
        <Div full between itemsCenter className="mt-20">
          <Div flex itemsCenter className="gap-4 uppercase text-myGray">
            <p className="text-xs">stay in touch</p>
            <Icon
              icon={"ri:facebook-fill"}
              className="text-xl cursor-pointer"
            />
            <Icon icon={"mdi:instagram"} className="text-xl cursor-pointer" />
            <Icon icon={"mdi:twitter"} className="text-xl cursor-pointer" />
            <Icon
              icon={"ic:baseline-whatsapp"}
              className="text-xl cursor-pointer"
            />
          </Div>

          <Div
            flex
            itemsCenter
            pointer
            className="gap-4 uppercase text-myGray group hover:bg-myGray px-3 py-2 rounded-md"
            onClick={toTop}
          >
            <p className="text-xs group-hover:text-myBlack">back to top</p>
            <Icon
              icon={"lets-icons:arrow-top"}
              className="text-xl group-hover:text-myBlack"
            />
          </Div>
        </Div>
      </Wrapper>

      <Separator className="bg-myGray my-3" />

      <Wrapper>
        <Div full between itemsCenter>
          <Div flex itemsCenter className="text-xs text-myGray">
            <p>
              Merkulove © Furnix Template All rights reserved Copyrights 2023
            </p>
          </Div>

          <Div flex itemsCenter pointer>
            <Image
              src={payment}
              alt="payment"
              className="w-full h-full object-cover object-center"
            />
          </Div>
        </Div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

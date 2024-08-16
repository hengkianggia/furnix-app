"use client";

import React, { useState } from "react";
import Div from "./Div";
import Wrapper from "./Wrapper";

import { Icon } from "@iconify/react";
import Link from "next/link";

const listNavbar = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [like, setLike] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md grid place-items-center fixed left-0 top-0 z-50">
      {/* top content */}
      {/* <Div full className="bg-myBlack text-myGray py-1" center>
        OCTOBER SALE
        <Icon icon="fluent-mdl2:separator" />
        Up to 40% off
      </Div> */}

      {/* maincontent */}
      <Wrapper className="my-4 sticky top-0">
        <Div full between itemsCenter>
          <Div pointer>
            <Link href={"/"}>
              <svg
                width="100"
                height="21"
                viewBox="0 0 112 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 1H1V3H18V1ZM4 11H18V9H1V20H4V11Z"
                  fill="#161413"
                />
                <path
                  d="M1 1V0.52H0.52V1H1ZM18 1H18.48V0.52H18V1ZM1 3H0.52V3.48H1V3ZM18 3V3.48H18.48V3H18ZM18 11V11.48H18.48V11H18ZM4 11V10.52H3.52V11H4ZM18 9H18.48V8.52H18V9ZM1 9V8.52H0.52V9H1ZM1 20H0.52V20.48H1V20ZM4 20V20.48H4.48V20H4ZM1 1.48H18V0.52H1V1.48ZM1.48 3V1H0.52V3H1.48ZM18 2.52H1V3.48H18V2.52ZM17.52 1V3H18.48V1H17.52ZM18 10.52H4V11.48H18V10.52ZM17.52 9V11H18.48V9H17.52ZM1 9.48H18V8.52H1V9.48ZM1.48 20V9H0.52V20H1.48ZM4 19.52H1V20.48H4V19.52ZM3.52 11V20H4.48V11H3.52Z"
                  fill="#161413"
                />
                <path
                  d="M38.0688 19.8572V18.5715C36.8574 19.5429 35.0596 20 32.5195 20C26.3448 20 24 17.6857 24 13.2857V5H26.931V13.9429C26.931 16.6 28.6114 17.8571 31.0736 17.8571H34.2391C36.701 17.8571 38.0687 16.6 38.0687 14.5714V5H41V19.8572H38.0688Z"
                  fill="#161413"
                  stroke="#161413"
                  strokeWidth={"0.96"}
                />
                <path
                  d="M49.765 5.14284V6.42854C50.9079 5.45714 52.6037 5 55 5V7.14283H53.3779C51.0552 7.14283 49.765 8.39995 49.765 10.4286V20H47V5.14284H49.765Z"
                  fill="#161413"
                  stroke="#161413"
                  strokeWidth={"0.96"}
                />
                <path
                  d="M63.931 5.14284V6.42854C65.1425 5.45714 66.9402 5 69.4805 5C75.6552 5 78 7.31425 78 11.7143V20H75.069V11.0571C75.069 8.39995 73.7793 7.14283 71.3172 7.14283H67.7609C65.2989 7.14283 63.931 8.39995 63.931 10.4286V20H61V5.14284H63.931Z"
                  fill="#161413"
                  stroke="#161413"
                  strokeWidth={"0.96"}
                />
                <rect
                  x="84"
                  y="1"
                  width="2"
                  height="2"
                  rx="1"
                  fill="#A09D9D"
                  stroke="#A09D9D"
                  strokeWidth={"0.96"}
                />
                <rect
                  x="84"
                  y="5"
                  width="2"
                  height="15"
                  fill="#161413"
                  stroke="#161413"
                  strokeWidth={"0.96"}
                />
                <path
                  d="M95.9513 5L101 10.4519L106.049 5H109.415L102.756 12.1827L110 20H106.634L101 13.9134L95.3658 20H92L99.2439 12.1827L92.5852 5H95.9513Z"
                  fill="#161413"
                  stroke="#161413"
                  strokeWidth={"0.96"}
                />
              </svg>
            </Link>
          </Div>

          <Div>
            <ul className="flex items-center gap-10 text-18">
              {listNavbar.map((item) => (
                <li
                  className="cursor-pointer text-lg hover:text-myOrange transition-all"
                  key={item.name}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Div>

          <Div flex itemsCenter className="gap-6">
            <Div flex itemsCenter className="gap-2" pointer>
              <Icon icon="carbon:search" />
              <p>Search</p>
            </Div>
            <Link href={"/wishlist"}>
              <Div
                flex
                itemsCenter
                className="gap-2 group"
                pointer
                onMouseEnter={() => setLike(!like)}
                onMouseLeave={() => setLike(!like)}
              >
                {like ? (
                  <Icon icon="bi:heart-fill" className="text-red-500" />
                ) : (
                  <Icon icon="bi:heart" />
                )}
                <p>Wishlist</p>
              </Div>
            </Link>
            <Link href={"/cart"}>
              <Div
                flex
                itemsCenter
                className="border border-black rounded-full px-4 py-2 gap-2 group hover:bg-myBlack"
                pointer
              >
                <Icon icon="bi:cart" className="group-hover:text-white" />
                <p className="group-hover:text-white">Cart</p>
                <p className="text-xs group-hover:text-white">$100</p>
              </Div>
            </Link>
          </Div>
        </Div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;

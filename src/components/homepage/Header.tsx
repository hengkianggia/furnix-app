import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

import image from "../../../public/dummy.png";
import { cn } from "@/lib/utils";

const listHeader = [
  {
    name: "Chair",
    link: "/",
  },
  {
    name: "Table",
    link: "/shop",
  },
  {
    name: "Furniture",
    link: "/about",
  },
  {
    name: "Lamp",
    link: "/contact",
  },
  {
    name: "Decor",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <Wrapper full center className="bg-red-400 min-h-[845px] max-h-[845px]">
        <Div
          centerColumn
          className="w-[70%] text-center leading-none space-y-6"
        >
          <h1 className="text-80 font-baiJamjure font-light">
            Furnix - Your Source for Stylish Living
          </h1>
          <p className="text-22 w-[70%]">
            From inviting furniture to warm decor, discover the magic of home
            that you'll fall in love with
          </p>
          <Button
            className="uppercase ml-3 bg-transparent border-myBlack rounded-full"
            variant={"outline"}
          >
            shop now
            <Icon icon={"icons8:right-round"} className="text-24 ml-2" />
          </Button>
        </Div>
      </Wrapper>

      <Wrapper flex full center className="gap-10 py-3">
        {listHeader.map((item, idx) => (
          <Div flex itemsCenter className="gap-10" key={idx}>
            <Div>
              <Image
                src={image}
                width={300}
                alt="image"
                className={cn(
                  "object-cover object-center h-20 w-20",
                  (idx + 1) % 2 == 1 && "w-20 aspect-square rounded-full",
                  (idx + 1) % 2 == 0 && "w-20 aspect-square rounded-sm",
                  (idx + 1) % 3 == 0 && "w-48 rounded-sm"
                )}
              />
            </Div>
            <Div>
              <p>{item.name}</p>
            </Div>
          </Div>
        ))}
      </Wrapper>
    </header>
  );
};

export default Header;

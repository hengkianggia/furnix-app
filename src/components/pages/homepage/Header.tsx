import React from "react";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

import image from "../../../../public/furniture.jpg";
import { cn } from "@/lib/utils";
import { Icons } from "@/data/data";

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
    <header className="w-full flex flex-col items-center bg-myBrokenWhite">
      <Wrapper
        full
        center
        className="min-h-[845px] max-h-[845px] lg:min-h-[700px] max-lg:max-h-[700px]"
      >
        <Div
          centerColumn
          className="w-[70%] text-center leading-none space-y-6 max-md:w-full"
        >
          <h1 className={`text-80 font-light max-lg:text-48`}>
            Furnix - Your Source for Stylish Living
          </h1>
          <p className={`text-22 w-[70%] max-lg:text-sm max-md:w-[90%]`}>
            From inviting furniture to warm decor, discover the magic of home
            that you&apos;ll fall in love with
          </p>
          <Button
            className="uppercase ml-3 bg-transparent border-myBlack rounded-full hover:bg-myBlack hover:text-myBrokenWhite"
            variant={"outline"}
          >
            shop now
            <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
          </Button>
        </Div>
      </Wrapper>

      <div className="gap-10 py-3 w-full bg-white flex justify-center items-center overflow-hidden max-md:hidden max-lg:px-10 max-lg:gap-6 max-lg:py-8">
        {listHeader.map((item, idx) => (
          <Div flex itemsCenter className="gap-10 max-lg:gap-4" key={idx}>
            <Div>
              <Image
                src={image}
                width={300}
                alt="image"
                className={cn(
                  "object-cover object-center h-20 w-20 max-lg:w-14 max-lg:h-14",
                  (idx + 1) % 2 == 1 &&
                    "w-20 aspect-square rounded-full max-lg:w-14 max-lg:rounded-sm",
                  (idx + 1) % 2 == 0 &&
                    "w-20 aspect-square rounded-sm max-lg:w-14",
                  (idx + 1) % 3 == 0 && "w-48 rounded-sm max-lg:w-14"
                )}
              />
            </Div>
            <Div>
              <p>{item.name}</p>
            </Div>
          </Div>
        ))}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Div from "@/components/Div";
import Image from "next/image";

import dummy from "../../../../public/furniture.jpg";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";

export const ListItemHomepageOne = ({ under = false }: { under?: boolean }) => {
  return (
    <Div
      column
      full
      relative
      pointer
      className="space-y-2 rounded-md overflow-hidden"
    >
      <Div
        relative
        className="bg-myBrokenWhite aspect-square w-80 overflow-hidden"
      >
        <Image
          src={dummy}
          alt="dummy"
          width={250}
          className={cn(
            "w-full h-full aspect-square object-cover object-center",
            under && "w-[90%] h-[90%] absolute right-0 top-10"
          )}
        />
      </Div>

      <Div full column>
        <h3 className="text-myBlack text-lg font-baiJamjure">
          Sectionals & Sofas
        </h3>
        <p className="text-myDarkGray text-sm">
          All the comfort – for so much less
        </p>
      </Div>

      {/* sale */}
      <Div
        absolute
        flex
        itemsCenter
        className="gap-2 rounded-full border-myBlack px-3 py-1 font-baiJamjure border-[1.5px] text-xs left-2 group hover:bg-myBlack"
      >
        <p className="group-hover:text-myBrokenWhite">from</p>
        <h2 className="text-lg group-hover:text-myBrokenWhite">$479</h2>
      </Div>
    </Div>
  );
};

export const ListItemHomepageTwo = ({ even }: { even?: boolean }) => {
  return (
    <Div
      pointer
      className={cn(
        "min-w-72 rounded-md snap-center snap-always overflow-hidden",
        even && "min-w-60"
      )}
    >
      <Image
        src={dummy}
        alt="dummy"
        width={250}
        height={250}
        className="w-full aspect-square object-cover object-center"
      />
      <Div column className="p-3 gap-2">
        <h3 className="text-lg">Rustic Dining Table</h3>
        <Div flex itemsCenter>
          <Icon icon={Icons.Stars} className="text-myOrange" />
          <Icon icon={Icons.Stars} className="text-myOrange" />
          <Icon icon={Icons.Stars} className="text-myOrange" />
          <Icon icon={Icons.Stars} className="text-myOrange" />
          <Icon icon={Icons.Stars} className="text-myOrange" />
        </Div>
        <p className="line-clamp-3 text-xs text-balance text-myDarkGray">
          Absolutely thrilled with the new coffee table! We&apos;ve received so
          many compliments, and friends are eager to know where we found it.
        </p>
        <p className="uppercase text-sm text-myDarkGray">gibby radki</p>
      </Div>
    </Div>
  );
};

import React from "react";
import Div from "../Div";
import Image from "next/image";

import dummy from "../../../public/dummy.png";
import { cn } from "@/lib/utils";

const ListItemHomepage = ({ under = false }: { under?: boolean }) => {
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

export default ListItemHomepage;

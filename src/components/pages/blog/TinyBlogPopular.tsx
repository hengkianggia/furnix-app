import Div from "@/components/Div";
import Images from "@/components/Images";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const TinyBlogPopular = () => {
  return (
    <Div flex full itemsCenter pointer className="space-x-4">
      <Images className="w-24 aspect-square" />
      <Div full column className="space-y-3">
        <Div
          full
          flex
          itemsCenter
          className="space-x-4 uppercase text-myDarkGray text-xs"
        >
          <h4>October 12, 2023</h4>
          <Icon icon={Icons.Dot} />
          <h4>home decor</h4>
        </Div>
        <h3 className="line-clamp-2 text-xl">
          How to Furnish Your Home without Breaking the Bank
        </h3>
      </Div>
    </Div>
  );
};

export default TinyBlogPopular;

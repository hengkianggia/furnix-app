import Div from "@/components/Div";
import Images from "@/components/Images";
import { Icons } from "@/data/data";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ItemOnCart = ({ className }: { className?: string }) => {
  return (
    <Div
      full
      flex
      itemsCenter
      className={cn("space-x-4 max-md:space-x-0", className)}
    >
      <Images className="w-32 aspect-square" />
      <Div full column between className="h-32">
        <Div className="space-y-2">
          <Div flex itemsCenter>
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
          </Div>
          <h2 className="text-balance text-xl leading-6 max-md:text-base max-md:leading-4">
            Upholstered Armchair
          </h2>
        </Div>

        <Div className="uppercase max-md:text-sm">
          <h4 className="text-myDarkGray">body fabric</h4>
          <h4>gray velvet</h4>
        </Div>
      </Div>
    </Div>
  );
};

export default ItemOnCart;

import Div from "@/components/Div";
import Images from "@/components/Images";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ItemOnCart = () => {
  return (
    <Div full flex itemsCenter className="space-x-4">
      <Images className="w-32 aspect-square" />
      <Div column between className="h-32">
        <Div className="space-y-2">
          <Div flex itemsCenter>
            <Icon icon={"material-symbols:star"} className="text-myOrange" />
            <Icon icon={"material-symbols:star"} className="text-myOrange" />
            <Icon icon={"material-symbols:star"} className="text-myOrange" />
            <Icon icon={"material-symbols:star"} className="text-myOrange" />
            <Icon icon={"material-symbols:star"} className="text-myOrange" />
          </Div>
          <h2 className="font-semibold text-balance text-xl leading-6">
            Upholstered Armchair
          </h2>
        </Div>

        <Div className="uppercase">
          <h4 className="text-myDarkGray">body fabric</h4>
          <h4>gray velvet</h4>
        </Div>
      </Div>
    </Div>
  );
};

export default ItemOnCart;

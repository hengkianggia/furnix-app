import Div from "@/components/Div";
import React from "react";
import ItemOnCart from "./ItemOnCart";
import ButtonCounter from "@/components/ButtonCounter";

const SmallCartItem = () => {
  return (
    <Div full column className="gap-4 bg-mySmoothGray p-3 rounded-md">
      <ItemOnCart className="max-md:space-x-4" />
      <Div full between itemsCenter>
        <h1 className="font-baiJamjure text-xl font-thin">$ 343</h1>
        <ButtonCounter />
      </Div>
    </Div>
  );
};

export default SmallCartItem;

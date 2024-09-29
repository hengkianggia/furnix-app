import Div from "@/components/Div";
import React from "react";
import ItemOnCart from "./ItemOnCart";
import ButtonCounter from "@/components/ButtonCounter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";

interface Props {
  type?: "CART" | "WISHLIST";
}
const SmallCartItem = ({ type = "CART" }: Props) => {
  return (
    <Div full column className="gap-4 bg-mySmoothGray p-3 rounded-md">
      <ItemOnCart className="max-md:space-x-4" />
      {type === "CART" ? (
        <Div full between itemsCenter>
          <h1 className="font-baiJamjure text-xl font-thin">$ 343</h1>
          <ButtonCounter />
        </Div>
      ) : (
        <Div full flex className="justify-end">
          <Icon icon={Icons.Trash} className="text-2xl text-myBlack" />
        </Div>
      )}
    </Div>
  );
};

export default SmallCartItem;

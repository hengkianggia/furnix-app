"use client";
import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

interface ItemProductProps {
  position?: "center" | "normal";
}

const ItemProduct = ({ position = "center" }: ItemProductProps) => {
  const [like, setLike] = useState(false);
  const [isPrice, setisPrice] = useState(true);

  return (
    <Div
      full
      column
      relative
      pointer
      className="space-y-4 overflow-hidden rounded-tr-md rounded-tl-md"
    >
      <Div full relative>
        <Images className="aspect-square relative" />
        <Div
          absolute
          full
          flex
          between
          itemsCenter
          className="top-0 left-0 p-4"
        >
          <Div
            center
            className="px-2 py-1 text-xs bg-myOrange text-myBlack rounded-full capitalize"
          >
            <p>sale</p>
          </Div>
          <Div
            pointer
            onMouseEnter={() => setLike(true)}
            onMouseLeave={() => setLike(false)}
          >
            {like ? (
              <Icon icon="bi:heart-fill" className="text-red-500" />
            ) : (
              <Icon icon="bi:heart" />
            )}
          </Div>
        </Div>
      </Div>

      <Div
        full
        column
        className={cn(
          "space-y-3",
          position == "center" && "items-center",
          position == "normal" && "justify-start"
        )}
      >
        <Div flex itemsCenter>
          <Icon icon={"material-symbols:star"} className="text-myOrange" />
          <Icon icon={"material-symbols:star"} className="text-myOrange" />
          <Icon icon={"material-symbols:star"} className="text-myOrange" />
          <Icon icon={"material-symbols:star"} className="text-myOrange" />
          <Icon icon={"material-symbols:star"} className="text-myOrange" />
        </Div>
        <h4>Minimalist Vases Set</h4>

        <Div
          center
          onMouseEnter={() => setisPrice(false)}
          onMouseLeave={() => setisPrice(true)}
          className="h-10"
        >
          {isPrice ? (
            <Div flex itemsCenter className="space-x-4">
              <p>$ 161.40</p>
              <p className="text-gray-300 line-through">$ 161.40</p>
            </Div>
          ) : (
            <Button className="uppercase bg-myBlack text-myBrokenWhite">
              add to cart
              <Icon icon={"bi:cart"} className="text-lg ml-2" />
            </Button>
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default ItemProduct;

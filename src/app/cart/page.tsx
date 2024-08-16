import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import MyCart from "@/components/pages/cart/MyCart";
import ItemProduct from "@/components/pages/shop/ItemProduct";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Cart = () => {
  return (
    <Div as={"section"} full>
      <Wrapper full>
        <BreadcrumGroup />
      </Wrapper>

      <Separator />

      <MyCart />

      <Wrapper full column className="gap-5 mt-20">
        <Div full between>
          <h1 className="text-4xl font-thin">You may also need</h1>
          <Div flex itemsCenter pointer className="space-x-3">
            <Icon
              icon={"lucide:move-left"}
              className="text-2xl text-myDarkGray"
            />
            <Icon
              icon={"lucide:move-right"}
              className="text-2xl text-myDarkGray"
            />
          </Div>
        </Div>
        <Div
          full
          flex
          className="gap-5 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
        >
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-center snap-always" />
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Cart;

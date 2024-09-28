import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import MyCart from "@/components/pages/cart/MyCart";
import ItemProduct from "@/components/pages/shop/ItemProduct";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cart",
};

const Cart = () => {
  return (
    <Div as={"section"} full className="">
      <Wrapper full className="max-md:px-4 max-lg:px-10">
        <BreadcrumGroup />
      </Wrapper>

      <Separator />

      <MyCart />

      <Wrapper full column className="gap-5 mt-20 max-md:px-4 max-lg:px-10">
        <Div full between>
          <h1 className="text-4xl font-thin max-md:text-3xl">
            You may also need
          </h1>
          <Div flex itemsCenter pointer className="space-x-3">
            <Icon icon={Icons.ArrowLeft} className="text-2xl text-myDarkGray" />
            <Icon
              icon={Icons.ArrowRight}
              className="text-2xl text-myDarkGray"
            />
          </Div>
        </Div>
        <Div
          full
          flex
          className="gap-5 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
        >
          <ItemProduct className="min-w-80 max-w-80 snap-start snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-start snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-start snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-start snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-start snap-always" />
          <ItemProduct className="min-w-80 max-w-80 snap-start snap-always" />
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Cart;

import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import MyCart from "@/components/pages/cart/MyCart";
import ItemProduct from "@/components/pages/shop/ItemProduct";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { dataProduct, Icons } from "@/data/data";
import { cn, getRandomEvenNumber } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cart",
};

const Cart = () => {
  const randomNumber = getRandomEvenNumber(1, dataProduct.length - 10);
  const dataShow = dataProduct.slice(randomNumber, randomNumber + 10);
  return (
    <Div as={"section"} full className="">
      <Wrapper full className="max-md:px-4 max-lg:px-10">
        <BreadcrumGroup />
      </Wrapper>

      <Separator />

      <MyCart />

      <Wrapper full column className=" mt-20 max-md:px-4 max-lg:px-10">
        <Div full between itemsCenter>
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
          {dataShow.map((item, index) => (
            <ItemProduct
              key={item.id}
              title={item.title}
              price={item.price}
              discount={item.discount}
              categoryProduct={item.typeCategory}
              className={cn("min-w-80 pt-8 snap-center snap-always")}
            />
          ))}
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Cart;

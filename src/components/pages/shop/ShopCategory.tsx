import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { furnitureCategories, Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const ShopCategory = () => {
  return (
    <Wrapper full className="space-y-5 max-md:px-4 max-lg:px-10">
      <Div full flex between itemsCenter>
        <h1 className="text-4xl font-thin max-md:text-2xl">Shop by Category</h1>

        <Div flex itemsCenter pointer className="space-x-3">
          <Icon icon={Icons.ArrowLeft} className="text-2xl text-myDarkGray" />
          <Icon icon={Icons.ArrowRight} className="text-2xl text-myDarkGray" />
        </Div>
      </Div>

      <Div
        full
        flex
        className="gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar-none"
      >
        {furnitureCategories.map((item) => (
          <ItemCategory key={item.id} title={item.name} />
        ))}
      </Div>
    </Wrapper>
  );
};

export default ShopCategory;

export const ItemCategory = ({ title }: { title: string }) => {
  return (
    <Div relative pointer className="snap-center snap-always">
      <Images className="min-w-80 aspect-square" />

      <Div center absolute className="bottom-4 left-0 w-full">
        <Button
          variant={"secondary"}
          className="rounded-full capitalize bg-myBrokenWhite hover:bg-myBlack hover:text-myBrokenWhite"
        >
          <Link href={`/shop/${title}`}>{title}</Link>
        </Button>
      </Div>
    </Div>
  );
};

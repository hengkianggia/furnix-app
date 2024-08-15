import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ShopCategory = () => {
  return (
    <Wrapper full className="space-y-5">
      <Div full flex between itemsCenter>
        <h1 className="text-4xl font-thin">Shop by Category</h1>

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
      <Div full flex className="gap-5 overflow-x-scroll scrollbar-none">
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
      </Div>
    </Wrapper>
  );
};

export default ShopCategory;

export const ItemCategory = () => {
  return (
    <Div relative pointer>
      <Images className="min-w-80 aspect-square" />

      <Div center absolute className="bottom-4 left-0 w-full">
        <Button variant={"secondary"} className="rounded-full capitalize bg-myBrokenWhite hover:bg-myBlack hover:text-myBrokenWhite">
          makmukiper
        </Button>
      </Div>
    </Div>
  );
};

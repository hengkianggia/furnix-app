import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CustomFurniture = () => {
  return (
    <Div as={"section"} full>
      <Wrapper full flex between itemsCenter className="px-32 gap-6">
        <Div className="basis-6/12 space-y-4">
          <h1 className="text-4xl font-thin text-balance">
            120+ Fabrics for Your Custom Furniture
          </h1>
          <h3 className="text-xl">Get Free Swatches</h3>
          <p className="text-sm text-myDarkGray">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>

          <Div full flex between className="w-[80%]">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-myBlack"
            />
            <Div flex itemsCenter>
              <Button className="uppercase ml-3 rounded-full bg-myBlack">
                subscribe
                <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
              </Button>
            </Div>
          </Div>
        </Div>

        {/* images */}
        <Div className="basis-6/12">
          <Images className="aspect-square rounded-md" />
        </Div>
      </Wrapper>
    </Div>
  );
};

export default CustomFurniture;

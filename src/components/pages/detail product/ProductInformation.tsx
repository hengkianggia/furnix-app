import ButtonCounter from "@/components/ButtonCounter";
import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ProductInformation = () => {
  return (
    <Wrapper
      full
      flex
      className="gap-10 pb-14 border-b border-myDarkGray max-md:px-4 max-lg:px-10 max-lg:flex-col"
    >
      <Div
        grid
        className="basis-7/12 grid-cols-2 gap-5 max-md:gap-2 max-md:w-full"
      >
        <Images className="col-span-2 aspect-10/9" />
        <Div className="aspect-square">
          <Images />
        </Div>
        <Div className="aspect-square">
          <Images />
        </Div>
        <Div className="aspect-square">
          <Images />
        </Div>
        <Div className="aspect-square">
          <Images />
        </Div>
      </Div>

      {/* kanan */}
      <Div
        column
        className="basis-5/12 gap-3 h-fit sticky top-24 max-md:w-full"
      >
        {/* rating */}
        <Div flex itemsCenter className="space-x-3">
          <Div flex itemsCenter>
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
            <Icon icon={Icons.Stars} className="text-myOrange" />
          </Div>

          <p className="text-myDarkGray">2 reviews</p>
        </Div>

        {/* info */}
        <h1 className="text-6xl font-thin text-balance max-md:text-3xl">
          Cane Elegance TV Cabinet
        </h1>
        <p className="text-myDarkGray text-balances">
          Ullamcorper morbi tincidunt ornare massa eget. Viverra adipiscing at
          in tellus integer feugiat scelerisque varius. Pulvinar proin gravida
          hendrerit lectus.
        </p>
        <h2 className="text-4xl font-thin">$899</h2>

        {/* select */}
        <Div
          flex
          wrap
          itemsCenter
          className="mt-8 gap-5 max-md:mt-4 max-md:gap-3"
        >
          <Div className="space-y-2 basis-5/12 ">
            <h4 className="uppercase text-sm text-myDarkGray">primary color</h4>
            <Div>
              <Select>
                <SelectTrigger className="w-full rounded-full h-12">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Div>
          </Div>

          <Div className="space-y-2 basis-5/12">
            <h4 className="uppercase text-sm text-myDarkGray">primary color</h4>
            <Div full>
              <Select>
                <SelectTrigger className="w-full rounded-full h-12">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Div>
          </Div>

          <ButtonCounter className="basis-3/12 w-full" />

          <Button className="py-4 uppercase basis-7/12 w-full">
            add to cart
            <Icon icon={Icons.ArrowRightCircle} className="ml-2 text-xl" />
          </Button>
        </Div>

        {/* desc */}
        <Div full column className="space-y-4 mt-5">
          <h2 className="text-2xl font-thin">Description</h2>
          <Separator />
          <p className="text-myDarkGray">
            Elevate your home decor with this exquisite Mid-Century TV Cabinet
            featuring a seamless blend of wood and cane doors. Designed to
            impress, its charm and modern functionality make it the perfect
            addition to your living space.
          </p>
          <h4 className="uppercase">Features</h4>
          <ul className="space-y-2 list-disc list-inside text-myDarkGray">
            <li>
              Please note, the natural wood used in this piece showcases unique
              variations in color and texture.
            </li>
            <li>
              For safety, secure it to the wall as per the assembly instructions
              provided.
            </li>
          </ul>
        </Div>

        {/* detail */}
        <Div full column className="space-y-4 mt-5">
          <h2 className="text-2xl font-thin">Detail</h2>
          <Separator />
          <Div full column className="py-10 bg-mySmoothGray space-y-4">
            <Div flex itemsCenter full className="mx-8 max-md:mx-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">style</h4>
              <p>Mid-century modern</p>
            </Div>
            <Separator />
            <Div flex itemsCenter full className="mx-8 max-md:mx-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">
                Dimensions
              </h4>
              <p>37.5”H x 34.5”W x 18”D</p>
            </Div>
            <Separator />
            <Div flex itemsCenter full className="mx-8 max-md:mx-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">
                materials
              </h4>
              <p>Solid oak, MDF, oak veneer, steel</p>
            </Div>
            <Separator />
            <Div flex itemsCenter full className="mx-8 max-md:mx-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">SKU No.</h4>
              <p>SKU001119</p>
            </Div>
          </Div>
        </Div>
      </Div>
    </Wrapper>
  );
};

export default ProductInformation;

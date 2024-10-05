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
import { dataProduct } from "@/data/data";
import StarsRating from "@/components/StarsRating";
import { calculateFinalPrice } from "@/lib/utils";

const ProductInformation = ({ title }: { title: string }) => {
  let [dataShow] = dataProduct.filter(
    (item) => item?.title?.toLowerCase() == title.toLowerCase()
  );

  const finalPrice = calculateFinalPrice(dataShow.price, dataShow.discount);
  return (
    <Wrapper
      full
      flex
      className="gap-10 pb-14 border-b  max-md:px-4 max-lg:px-10 max-lg:flex-col"
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
          <StarsRating />

          <p className="text-myDarkGray">2 reviews</p>
        </Div>

        {/* info */}
        <h1 className="text-6xl font-thin max-lg:text-balance max-md:text-3xl">
          {dataShow.title}
        </h1>
        <p className="text-myDarkGray text-balances">{dataShow.summary}</p>
        <Div flex itemsCenter className="gap-4">
          <h2 className="text-4xl font-thin">$ {finalPrice.toFixed()}</h2>
          {dataShow.discount > 0 && (
            <Div relative flex itemsCenter className="gap-4">
              <p className="text-2xl font-thin text-red-500 line-through">
                $ {dataShow.price.toFixed()}
              </p>
              <Div className="p-1 px-2 text-sm rounded-md bg-red-500  text-white">
                {dataShow.discount}% Off
              </Div>
            </Div>
          )}
        </Div>

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
                  <SelectValue placeholder="Select Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {dataShow.colors.map((color, idx) => (
                      <SelectItem value={color} key={idx}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Div>
          </Div>

          <Div className="space-y-2 basis-5/12">
            <h4 className="uppercase text-sm text-myDarkGray">style</h4>
            <Div full>
              <Select>
                <SelectTrigger className="w-full rounded-full h-12">
                  <SelectValue placeholder="Select Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {dataShow.style.map((style, idx) => (
                      <SelectItem value={style} key={idx}>
                        {style}
                      </SelectItem>
                    ))}
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
          <p className="text-myDarkGray">{dataShow.description}</p>
        </Div>

        {/* detail */}
        <Div full column className="space-y-4 mt-5">
          <h2 className="text-2xl font-thin">Detail</h2>
          <Separator />
          <Div
            full
            column
            className="py-8 bg-mySmoothGray space-y-4 overflow-x-hidden"
          >
            <Div flex itemsCenter full className="px-8 max-md:px-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">style</h4>
              <p className="basis-8/12">{dataShow.detail.style}</p>
            </Div>
            <Separator />
            <Div flex itemsCenter full className="px-8 max-md:px-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">
                Dimensions
              </h4>
              <p className="basis-8/12">{dataShow.detail.dimension}</p>
            </Div>
            <Separator />
            <Div
              flex
              itemsCenter
              full
              className="px-8 max-md:px-4 overflow-x-hidden"
            >
              <h4 className="capitalize text-myDarkGray basis-4/12">
                materials
              </h4>
              <div className="w-fit flex-wrap flex gap-x-1 basis-8/12">
                {dataShow.detail.materials.map((item, idx) => {
                  return (
                    <p key={idx}>
                      {item}
                      {idx !== dataShow.detail.materials.length - 1
                        ? ", "
                        : "."}
                    </p>
                  );
                })}
              </div>
            </Div>
            <Separator />
            <Div flex itemsCenter full className="px-8 max-md:px-4">
              <h4 className="capitalize text-myDarkGray basis-4/12">SKU No.</h4>
              <p className="basis-8/12">{dataShow.detail.SKU}</p>
            </Div>
          </Div>
        </Div>
      </Div>
    </Wrapper>
  );
};
export default ProductInformation;

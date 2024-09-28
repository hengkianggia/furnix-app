import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";

import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ItemProduct from "./ItemProduct";
import { PaginationComponents } from "@/components/PaginationCompopnents";
import { Input } from "@/components/ui/input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { furnitureCategories } from "@/data/data";
import TinyItemProduct from "./TinyItemProduct";

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
  "Brown",
  "Black",
  "White",
];

const KompleksCatalog = ({ category }: { category: string | string[] }) => {
  const listProductType = furnitureCategories.find(
    (item) => item.name === category[0]
  )?.productTypes;

  return (
    <Wrapper full flex className="gap-10 relative max-md:px-4 max-lg:px-10 max-lg:gap-4">
      <Div column className="basis-9/12 gap-6 max-md:basis-full">
        <Div full flex itemsCenter between className="max-md:justify-end">
          <p className="uppercase text-sm text-myDarkGray max-md:hidden">
            Showing 1–12 of 71 results
          </p>

          <Div>
            <Select>
              <SelectTrigger className="w-[180px]">
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

        <Div full grid className="grid-cols-3 gap-3 max-lg:grid-cols-2">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </Div>

        <PaginationComponents />
      </Div>

      {/* right */}
      <Div column className="basis-3/12 h-fit sticky top-24 gap-6 overflow-hidden max-md:hidden max-lg:basis-4/12">
        <Input placeholder="Search by product" className="w-full m-0" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3>Product Type</h3>
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              {listProductType?.map((item, idx) => (
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  key={idx}
                >
                  <Checkbox id={item} />
                  <label
                    htmlFor={item}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Colour</AccordionTrigger>
            <AccordionContent className="space-y-3">
              {colors?.map((item, idx) => (
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  key={idx}
                >
                  <Checkbox id={item} />
                  <label
                    htmlFor={item}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Product</AccordionTrigger>
            <AccordionContent className="space-y-3">
              <TinyItemProduct />
              <TinyItemProduct />
              <TinyItemProduct />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Div>
    </Wrapper>
  );
};

export default KompleksCatalog;

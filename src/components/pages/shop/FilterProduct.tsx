"use client";

import Div from "@/components/Div";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import TinyItemProduct from "./TinyItemProduct";
import { useRouter } from "next/navigation";

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
const FilterProduct = ({
  listProductType,
  type,
  categoryPath,
}: {
  listProductType: string[] | undefined;
  type: string | string[] | undefined;
  categoryPath: string;
}) => {
  const router = useRouter();
  return (
    <Div
      column
      className="basis-3/12 h-fit sticky top-24 gap-6 overflow-hidden max-md:hidden max-lg:basis-4/12"
    >
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
                {Array.isArray(type) ? (
                  <Checkbox
                    id={item}
                    name={item}
                    value={item}
                    checked={type?.includes(item)}
                    onClick={() =>
                      router.push(`/shop/${categoryPath}?type=${item}`)
                    }
                  />
                ) : (
                  <Checkbox
                    id={item}
                    name={item}
                    value={item}
                    checked={
                      type?.toLocaleLowerCase() === item.toLocaleLowerCase()
                    }
                    onClick={() =>
                      router.push(`/shop/${categoryPath}?type=${item}`)
                    }
                  />
                )}

                <label
                  htmlFor={item}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {item}
                </label>
              </div>
            ))}{" "}
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
  );
};

export default FilterProduct;

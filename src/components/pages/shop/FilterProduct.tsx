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
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";
import {
  convertTeksToUrl,
  convertUrlToTeks,
  getCurrentUrlWithoutQuery,
} from "@/lib/utils";
import { useState } from "react";

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

function handleEnterKeyPress(
  event: React.KeyboardEvent<HTMLInputElement>,
  onEnterPress: () => void
) {
  if (event.key === "Enter") {
    onEnterPress();
  }
}
const FilterProduct = ({
  listProductType,
  type,
  categoryPath,
}: {
  listProductType: string[] | undefined;
  type: string | undefined;
  categoryPath: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getSearch = searchParams.get("search");
  const [inputValue, setInputValue] = useState(getSearch ?? "");

  const availableSearchParams =
    searchParams.get("type") ||
    searchParams.get("sort") ||
    searchParams.get("color") ||
    searchParams.get("search");

  // handle input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const url = getCurrentUrlWithoutQuery();

  const handleEnterPress = () => {
    if (inputValue !== "") {
      router.push(`${url}?search=${convertTeksToUrl(inputValue!)}`);
    } else {
      router.push(url);
    }
  };

  return (
    <Div
      column
      className="basis-3/12 h-fit sticky top-24 gap-3 overflow-hidden max-md:hidden max-lg:basis-4/12"
    >
      <Input
        placeholder="Search product and hit enter"
        className="w-full m-0"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(event) => handleEnterKeyPress(event, handleEnterPress)}
      />

      {availableSearchParams != null && (
        <Div
          full
          flex
          itemsCenter
          className="gap-3 cursor-pointer mt-3"
          onClick={() => {
            router.push(url), setInputValue("");
          }}
        >
          <p className="text-sm hover:text-red-500">Remove Filter</p>
          <Icon icon={Icons.Close} className="text-xl text-red-500" />
        </Div>
      )}

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
                      router.push(
                        `/shop/${convertTeksToUrl(
                          categoryPath
                        )}?type=${convertTeksToUrl(item)}`
                      )
                    }
                  />
                ) : (
                  <Checkbox
                    id={item}
                    name={item}
                    value={item}
                    checked={
                      //need as a teks
                      convertUrlToTeks(type!) === item.toLocaleLowerCase()
                    }
                    onClick={() => {
                      router.push(
                        `/shop/${convertTeksToUrl(
                          categoryPath
                        )}?type=${convertTeksToUrl(item)}`
                      );
                    }}
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
      </Accordion>
    </Div>
  );
};

export default FilterProduct;

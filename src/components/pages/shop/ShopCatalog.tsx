import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemProduct from "./ItemProduct";
import { PaginationComponents } from "@/components/PaginationCompopnents";
import { Button } from "@/components/ui/button";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShopCatalog = () => {
  return (
    <Wrapper full className="space-y-4 max-md:px-4 max-lg:px-10">
      <Div full flex between itemsCenter className="max-md:justify-end">
        <Div flex itemsCenter className="space-x-4 max-md:hidden">
          <Button className="bg-transparent text-myBlack border border-myBlack capitalize hover:text-myBrokenWhite">
            rice
          </Button>
          <Button className="bg-transparent text-myBlack border border-myBlack capitalize hover:text-myBrokenWhite">
            rating
          </Button>
        </Div>

        <Div flex itemsCenter className="space-x-4">
          <p className="text-myDarkGray text-sm">12 items</p>
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
      </Div>

      {/* product */}
      <Div full grid className="grid-cols-3 gap-4 max-md:grid-cols-2">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </Div>
      <PaginationComponents />
    </Wrapper>
  );
};

export default ShopCatalog;

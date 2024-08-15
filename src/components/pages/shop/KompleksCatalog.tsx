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

const KompleksCatalog = () => {
  return (
    <Wrapper full flex className="gap-4 relative">
      <Div column className="basis-9/12 gap-6">
        <Div full flex itemsCenter between>
          <p className="uppercase text-sm text-myDarkGray">
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

        <Div full grid className="grid-cols-3 gap-3">
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
      <Div column className="basis-3/12 h-fit sticky top-24 bg-orange-400">
        kanan
      </Div>
    </Wrapper>
  );
};

export default KompleksCatalog;

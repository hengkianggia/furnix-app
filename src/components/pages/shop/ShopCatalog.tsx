import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemProduct from "./ItemProduct";
import { PaginationComponents } from "@/components/PaginationComponents";
import { Button } from "@/components/ui/button";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataProduct } from "@/data/data";
import { paginateProducts } from "@/lib/utils";

const ShopCatalog = ({ page }: { page: string | undefined }) => {
  let pages = page ?? 1;
  let dataShow = paginateProducts(dataProduct, dataProduct.length, 9, +pages!);
  const totalPage = Math.ceil(dataProduct.length / 9);

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
          <p className="uppercase text-sm text-myDarkGray max-md:hidden">
            Showing{" "}
            {+pages == totalPage
              ? dataProduct.length
              : dataShow.length * +pages}{" "}
            of {dataProduct.length} results
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
      </Div>

      {/* product */}
      <Div full grid className="grid-cols-3 gap-4 max-md:grid-cols-2">
        {dataShow.map((item, idx) => (
          <ItemProduct
            key={idx}
            title={item.title}
            price={item.price}
            discount={item.discount}
            categoryProduct={item.typeCategory}
          />
        ))}
      </Div>
      <PaginationComponents
        totalPage={totalPage}
        page={String(pages)}
        pathname="shop"
      />
    </Wrapper>
  );
};

export default ShopCatalog;

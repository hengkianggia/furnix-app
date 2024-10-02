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
import { PaginationComponents } from "@/components/PaginationComponents";

import { dataProduct, furnitureCategories } from "@/data/data";
import FilterProduct from "./FilterProduct";
import { paginateProducts } from "@/lib/utils";

const KompleksCatalog = ({
  category,
  type,
  page,
}: {
  category: string | string[];
  type: string | string[] | undefined;
  page: string | string[] | undefined;
}) => {
  const listProductType = furnitureCategories.find(
    (item) => item.name === category[0]
  )?.productTypes;

  let data = dataProduct.filter(
    (item) => item?.categoryName?.toLowerCase() == category[0].toLowerCase()
  );

  let pages = page ?? 1;

  let dataShow = paginateProducts(data, data.length, 9, +pages!);
  const totalPage = Math.ceil(data.length / 9);

  return (
    <Wrapper
      full
      flex
      className="gap-10 relative max-md:px-4 max-lg:px-10 max-lg:gap-4"
    >
      <Div column className="basis-9/12 gap-6 max-md:basis-full">
        <Div full flex itemsCenter between className="max-md:justify-end">
          <p className="uppercase text-sm text-myDarkGray max-md:hidden">
            Showing{" "}
            {pages == totalPage ? data.length : dataShow.length * +pages!} of{" "}
            {data.length} results
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
          {dataShow?.map((item, idx) => (
            <ItemProduct
              key={idx}
              title={item.title}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Div>

        <PaginationComponents
          categoryPath={category[0]}
          type={type}
          page={page}
          totalPage={totalPage}
        />
      </Div>

      {/* right */}
      <FilterProduct
        listProductType={listProductType}
        type={type}
        categoryPath={category[0]}
      />
    </Wrapper>
  );
};

export default KompleksCatalog;

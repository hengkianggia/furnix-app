import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";

import ItemProduct from "./ItemProduct";
import { PaginationComponents } from "@/components/PaginationComponents";

import { dataProduct, furnitureCategories } from "@/data/data";
import FilterProduct from "./FilterProduct";
import {
  convertTeksToUrl,
  convertUrlToTeks,
  paginateProducts,
} from "@/lib/utils";
import { Product } from "@/types/Product";
import SelectFilter from "@/components/SelectFilter";

const KompleksCatalog = ({
  category,
  type, // as a teks not url
  page,
  sort,
}: {
  category: string;
  type: string | undefined;
  page: string | undefined;
  sort: string | undefined;
}) => {
  const listProductType = furnitureCategories.find(
    (item) => item.name.toLocaleLowerCase() === category
  )?.productTypes;

  let dataFilter = [];

  let data = dataProduct.filter(
    (item) => item?.categoryName?.toLowerCase() == category.toLowerCase()
  );

  dataFilter = data;

  if (type) {
    let dataType = dataFilter.filter(
      (item) => item?.typeCategory?.toLowerCase() == convertUrlToTeks(type)
    );

    dataFilter = dataType;
  }

  let pages = page ?? 1;

  let dataShow: Product[] = [];

  dataShow = paginateProducts(
    dataFilter,
    dataFilter.length,
    9,
    +pages!,
    `/shop/${convertTeksToUrl(category)}/?type=${convertTeksToUrl(type!)}` // type need as a url
  );

  const totalPage = Math.ceil(dataFilter.length / 9);

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
            {pages == totalPage ? dataFilter.length : dataShow.length * +pages!}{" "}
            of {dataFilter.length} results
          </p>

          <SelectFilter type={type} />
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
          type={type}
          page={page}
          totalPage={totalPage}
          sort={sort}
        />
      </Div>

      {/* right */}
      <FilterProduct
        listProductType={listProductType}
        type={type}
        categoryPath={category}
      />
    </Wrapper>
  );
};
export default KompleksCatalog;

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
  filterProductsByTitle,
  paginateProducts,
  sortByHighestDiscount,
  sortByHighestPrice,
  sortByLowestPrice,
} from "@/lib/utils";
import { Product } from "@/types/Product";
import SelectFilter from "@/components/SelectFilter";

const KompleksCatalog = ({
  category,
  type, // as a teks not url
  page,
  sort,
  search,
}: {
  category: string;
  type: string | undefined;
  page: string | undefined;
  sort: string | undefined;
  search: string | undefined;
}) => {
  let pages = page ?? 1;

  // fetch list product type
  const listProductType = furnitureCategories.find(
    (item) => item.name.toLocaleLowerCase() === category
  )?.productTypes;

  let dataFilter = [];

  // filter data product by category
  dataFilter = dataProduct.filter(
    (item) => item?.categoryName?.toLowerCase() == category.toLowerCase()
  );

  // filter data product by type
  if (type) {
    dataFilter = dataFilter.filter(
      (item) => item?.typeCategory?.toLowerCase() == convertUrlToTeks(type)
    );
  }

  // sorting data product
  if (sort) {
    if (sort == "lowerprice") {
      dataFilter = sortByLowestPrice(dataFilter);
    } else if (sort == "higherprice") {
      dataFilter = sortByHighestPrice(dataFilter);
    } else if (sort == "morediscount") {
      dataFilter = sortByHighestDiscount(dataFilter);
    }
  }

  // sorting and filter data product by type and sort
  if (type && sort) {
    let dataType = dataFilter.filter(
      (item) => item?.typeCategory?.toLowerCase() == convertUrlToTeks(type)
    );
    if (sort == "lowerprice") {
      dataFilter = sortByLowestPrice(dataType);
    } else if (sort == "higherprice") {
      dataFilter = sortByHighestPrice(dataType);
    } else if (sort == "morediscount") {
      dataFilter = sortByHighestDiscount(dataType);
    }
  }

  const totalPage = Math.ceil(dataFilter.length / 9);

  // searching data product
  if (search) {
    dataFilter = filterProductsByTitle(dataFilter, search);
  }
  if (dataFilter.length == 0) {
    return (
      <Wrapper
        full
        flex
        className="gap-10 relative max-md:px-4 max-lg:px-10 max-lg:gap-4"
      >
        <Div column centerColumn className="basis-9/12 gap-6 max-md:basis-full">
          <Div full flex itemsCenter center>
            <p className="text-sm text-myDarkGray">No products found.</p>
          </Div>
        </Div>

        {/* right */}
        <FilterProduct
          listProductType={listProductType}
          type={type}
          categoryPath={category}
        />
      </Wrapper>
    );
  }

  let dataShow: Product[] = [];

  // pagination data product
  dataShow = paginateProducts(
    dataFilter,
    dataFilter.length,
    9,
    +pages!,
    `/shop/${convertTeksToUrl(category)}/?type=${convertTeksToUrl(type!)}` // type need as a url
  );

  // ITS DONE FOR A MINUTE

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

          <SelectFilter type={type} sort={sort} />
        </Div>

        <Div full grid className="grid-cols-3 gap-3 max-lg:grid-cols-2">
          {dataShow &&
            dataShow?.map((item, idx) => (
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

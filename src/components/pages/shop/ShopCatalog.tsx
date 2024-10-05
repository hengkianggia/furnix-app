import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemProduct from "./ItemProduct";
import { PaginationComponents } from "@/components/PaginationComponents";

import { dataProduct } from "@/data/data";
import { paginateProducts } from "@/lib/utils";
import SelectFilter from "@/components/SelectFilter";

const ShopCatalog = ({
  page,
  sort,
}: {
  page: string | undefined;
  sort: string | undefined;
}) => {
  let pages = page ?? 1;
  let dataShow = paginateProducts(dataProduct, dataProduct.length, 9, +pages!);
  const totalPage = Math.ceil(dataProduct.length / 9);

  return (
    <Wrapper full className="space-y-4 max-md:px-4 max-lg:px-10">
      <Div full flex between itemsCenter className="justify-end">
        <Div flex itemsCenter className="space-x-4">
          <p className="uppercase text-sm text-myDarkGray max-md:hidden">
            Showing{" "}
            {+pages == totalPage
              ? dataProduct.length
              : dataShow.length * +pages}{" "}
            of {dataProduct.length} results
          </p>

          <SelectFilter />
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
        sort={sort!}
      />
    </Wrapper>
  );
};

export default ShopCatalog;

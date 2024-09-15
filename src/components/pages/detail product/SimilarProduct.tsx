import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import ItemProduct from "../shop/ItemProduct";
import { cn } from "@/lib/utils";

const similar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SimilarProduct = () => {
  return (
    <Wrapper full className="space-y-8 mt-20 max-md:px-4 max-lg:px-10">
      <Div full between itemsCenter>
        <h3 className="text-3xl font-thin">You may also need</h3>
        <Div flex itemsCenter className="space-x-3">
          <Icon icon={Icons.ArrowLeft} />
          <Icon icon={Icons.ArrowRight} />
        </Div>
      </Div>

      <Div
        full
        flex
        className="space-x-5 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
      >
        {similar.map((item, index) => (
          <ItemProduct
            key={item}
            className={cn(
              "min-w-80 pt-8 snap-center snap-always",
              item % 2 == 0 && "pt-0"
            )}
          />
        ))}
      </Div>
    </Wrapper>
  );
};

export default SimilarProduct;

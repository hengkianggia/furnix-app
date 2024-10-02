import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import ProductInformation from "@/components/pages/detail product/ProductInformation";
import ReviewProduct from "@/components/pages/detail product/ReviewProduct";
import SimilarProduct from "@/components/pages/detail product/SimilarProduct";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import React from "react";

const DetailProduct = () => {
  return (
    <Div as={"section"} full column className="gap-y-20 max-lg:gap-y-10">
      <Div>
        <Wrapper className="max-md:px-4 max-lg:px-10">
          <BreadcrumGroup />
        </Wrapper>
        <Separator />
      </Div>

      <ProductInformation />
      <ReviewProduct />

      <SimilarProduct />
    </Div>
  );
};

export default DetailProduct;

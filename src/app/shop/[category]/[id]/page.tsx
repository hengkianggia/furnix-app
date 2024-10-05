import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import ProductInformation from "@/components/pages/detail product/ProductInformation";
import ReviewProduct from "@/components/pages/detail product/ReviewProduct";
import SimilarProduct from "@/components/pages/detail product/SimilarProduct";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { dataProduct } from "@/data/data";
import { cleanPath, convertUrlToTeks } from "@/lib/utils";
import React from "react";

export function generateStaticParams() {
  return dataProduct.map((item) => ({
    id: item.title,
  }));
}

const DetailProduct = ({ params }: { params: { id: string } }) => {
  const cleanParams = convertUrlToTeks(params.id);
  return (
    <Div as={"section"} full column className="gap-y-10">
      <Div>
        <Wrapper className="max-md:px-4 max-lg:px-10">
          <BreadcrumGroup />
        </Wrapper>
        <Separator />
      </Div>

      <ProductInformation title={cleanParams} />
      <ReviewProduct />

      <SimilarProduct />
    </Div>
  );
};

export default DetailProduct;

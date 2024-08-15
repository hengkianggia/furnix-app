import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemProduct from "./ItemProduct";

const ShopCatalog = () => {
  return (
    <Wrapper full>
      <Div>atas</Div>
      <Div full grid className="grid-cols-3 gap-4">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </Div>
    </Wrapper>
  );
};

export default ShopCatalog;

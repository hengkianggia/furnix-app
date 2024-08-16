import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemProduct from "./ItemProduct";
import Images from "@/components/Images";

const RecomItem = () => {
  return (
    <Wrapper full flex className="px-32 gap-4">
      <Div className="basis-5/12">
        <Images />
      </Div>
      <Div grid className="basis-7/12 grid-cols-2 gap-4">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </Div>
    </Wrapper>
  );
};

export default RecomItem;

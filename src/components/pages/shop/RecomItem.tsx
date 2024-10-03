import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemProduct from "./ItemProduct";
import Images from "@/components/Images";
import { getRandomEvenNumber } from "@/lib/utils";
import { dataProduct } from "@/data/data";

const RecomItem = () => {
  const randomNumber = getRandomEvenNumber(1, dataProduct.length - 4);
  const dataShow = dataProduct.slice(randomNumber, randomNumber + 4);
  return (
    <Wrapper
      full
      flex
      className="px-32 gap-4 max-md:px-4 max-lg:px-10 max-md:flex-col"
    >
      <Div className="basis-5/12">
        <Images />
      </Div>
      <Div grid className="basis-7/12 grid-cols-2 gap-4">
        {dataShow.map((item, index) => (
          <ItemProduct
            key={item.id}
            title={item.title}
            price={item.price}
            discount={item.discount}
            categoryProduct={item.typeCategory}
          />
        ))}
      </Div>
    </Wrapper>
  );
};

export default RecomItem;

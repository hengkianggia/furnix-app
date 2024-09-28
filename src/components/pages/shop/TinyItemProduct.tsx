import Div from "@/components/Div";
import Images from "@/components/Images";
import React from "react";

const TinyItemProduct = () => {
  return (
    <Div full flex itemsCenter pointer className="space-x-4">
      <Images className="w-20 aspect-square" />

      <Div column className="space-y-1">
        <h3 className="line-clamp-2 text-lg text-wrap">Decorative Throw Pillow</h3>
        <Div flex itemsCenter className="space-x-4">
          <p>$ 161.40</p>
          <p className="text-gray-300 line-through">$ 161.40</p>
        </Div>
      </Div>
    </Div>
  );
};

export default TinyItemProduct;

import Div from "@/components/Div";
import Headers from "@/components/pages/Headers";
import ShopCategory from "@/components/pages/shop/ShopCategory";
import React from "react";

const Shop = () => {
  return (
    <Div as={"section"} column className="gap-32">
      <Headers
        title="Shop All"
        desc="Discover a curated collection of home essentials that elevate your space and simplify everyday living"
      />
      <ShopCategory />
    </Div>
  );
};

export default Shop;

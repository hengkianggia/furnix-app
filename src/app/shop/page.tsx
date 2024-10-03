import Div from "@/components/Div";
import { BannerShop } from "@/components/pages/Banner";
import Headers from "@/components/pages/Headers";
import ShopCatalog from "@/components/pages/shop/ShopCatalog";
import ShopCategory from "@/components/pages/shop/ShopCategory";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shop",
};

const Shop = () => {
  return (
    <Div as={"section"} column className="gap-20">
      <Headers
        title="Shop All"
        desc="Discover a curated collection of home essentials that elevate your space and simplify everyday living"
      />
      <ShopCategory />
      <ShopCatalog />
      <BannerShop />
    </Div>
  );
};

export default Shop;

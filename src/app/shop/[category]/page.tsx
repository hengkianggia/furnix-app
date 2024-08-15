"use client";
import Div from "@/components/Div";
import Headers from "@/components/pages/Headers";
import KompleksCatalog from "@/components/pages/shop/KompleksCatalog";
import { cleanPath } from "@/lib/utils";
import { useParams } from "next/navigation";
import React from "react";

const Category = () => {
  const params = useParams();
  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  return (
    <Div as={"section"} full column className="gap-32">
      <Headers
        title={cleanPath(category)}
        desc="Discover a curated collection of home essentials that elevate your space and simplify everyday living"
      />
      <KompleksCatalog />
    </Div>
  );
};

export default Category;

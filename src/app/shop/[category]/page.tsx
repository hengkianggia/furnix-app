"use client";
import Div from "@/components/Div";
import Headers from "@/components/pages/Headers";
import KompleksCatalog from "@/components/pages/shop/KompleksCatalog";
import RecomItem from "@/components/pages/shop/RecomItem";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { rules } from "@/data/data";
import { cleanPath } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
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
      <KompleksCatalog category={cleanPath(category)} />
      <RecomItem />
      <Separator />
      <Wrapper full flex center className="space-x-14">
        {rules.map((rule) => (
          <Div key={rule.title} flex itemsCenter className="space-x-3">
            <Icon icon={rule.icon} className="text-2xl" />
            <h4>{rule.title}</h4>
          </Div>
        ))}
      </Wrapper>
    </Div>
  );
};

export default Category;

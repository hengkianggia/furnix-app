import Div from "@/components/Div";
import Headers from "@/components/pages/Headers";
import KompleksCatalog from "@/components/pages/shop/KompleksCatalog";
import RecomItem from "@/components/pages/shop/RecomItem";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { furnitureCategories, rules } from "@/data/data";
import { cleanPath, convertUrlToTeks } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export function generateStaticParams() {
  return furnitureCategories.map((item) => ({
    category: item.name,
  }));
}
const Category = ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  const cleanParams = convertUrlToTeks(params.category);

  return (
    <Div as={"section"} full column className="gap-20 max-md:gap-20">
      <Headers
        title={cleanParams}
        desc="Discover a curated collection of home essentials that elevate your space and simplify everyday living"
      />
      <KompleksCatalog
        category={cleanParams}
        type={searchParams?.type}
        page={searchParams?.page}
        sort={searchParams?.sort}
        search={searchParams?.search}
      />
      <RecomItem />
      <Separator className="max-lg:hidden" />
      <Wrapper
        full
        flex
        center
        className="space-x-14 max-md:px-4 max-lg:px-10 max-md:flex-col max-md:gap-3 max-md:justify-center max-md:space-x-0"
      >
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

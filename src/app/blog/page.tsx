import Div from "@/components/Div";
import Images from "@/components/Images";
import ItemsBlog from "@/components/pages/blog/ItemsBlog";
import RecentComment from "@/components/pages/blog/RecentComment";
import TinyBlogPopular from "@/components/pages/blog/TinyBlogPopular";
import Headers from "@/components/pages/Headers";
import { PaginationComponents } from "@/components/PaginationComponents";
import Tag from "@/components/Tag";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import React from "react";

const list = [
  "Interior Design",
  "Furniture Care",
  "Home Decor ",
  "Eco-Friendly",
  "Shopping Tips",
];

const furnitureTags = [
  "InteriorDesign",
  "HomeDecor",
  "SustainableFurniture",
  "ModernFurniture",
  "DIYProjects",
  "MinimalistLiving",
  "VintageStyle",
  "SmallSpaceLiving",
  "OutdoorFurniture",
  "FurnitureTrends",
];

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = () => {
  return (
    <Div as={"section"} full className="space-y-20">
      <Headers
        title={"Our stories"}
        desc="Discover the latest interior design trends and furniture tips on our blog"
      />
      <Wrapper full flex className="gap-10 max-md:px-4 max-lg:px-10">
        {/* left */}
        <Div
          full
          column
          className="basis-8/12 gap-10 max-md:flex max-lg:basis-full max-lg:grid max-lg:grid-cols-2 max-lg:gap-5"
        >
          <ItemsBlog />
          <ItemsBlog />
          <ItemsBlog />
          <ItemsBlog />
          <ItemsBlog />
          <ItemsBlog />
          <ItemsBlog />
          <ItemsBlog />
          <Div className="max-lg:col-span-2">
            <PaginationComponents />
          </Div>
        </Div>

        {/* right */}
        <Div className="basis-4/12 h-[88vh] overflow-y-scroll scrollbar-none bg-mySmoothGray p-8 space-y-7 sticky top-24 max-lg:hidden">
          <Div className="space-y-3">
            <h4 className="uppercase">search</h4>
            <Input placeholder="Type something here" className="rounded-full" />
          </Div>

          {/* categories */}
          <Div className="space-y-5">
            <h1 className="text-2xl font-thin">Categories</h1>

            <Separator className="bg-myDarkGray" />

            <Div column className="space-y-4">
              {list.map((item, idx) => (
                <Div flex itemsCenter pointer className="space-x-3" key={idx}>
                  <Icon icon={Icons.RightTriangle} className="text-myOrange" />
                  <h4 className="uppercase">{item}</h4>
                </Div>
              ))}
            </Div>
          </Div>

          {/* popular post */}
          <Div column className="space-y-5">
            <h1 className="text-2xl font-thin">Popular Posts</h1>

            <Separator className="bg-myDarkGray" />

            <Div column className="space-y-4">
              <TinyBlogPopular />
              <TinyBlogPopular />
              <TinyBlogPopular />
            </Div>
          </Div>

          {/* popular tags */}
          <Div column className="space-y-5">
            <h1 className="text-2xl font-thin">Popular Tags</h1>

            <Separator className="bg-myDarkGray" />

            <Div flex wrap className="gap-4">
              {furnitureTags.map((tag, idx) => (
                <Tag text={tag} key={idx} />
              ))}
            </Div>
          </Div>

          {/* recent coment */}
          <Div column className="space-y-5">
            <h1 className="text-2xl font-thin">Recent Comment</h1>

            <Separator className="bg-myDarkGray" />

            <Div flex wrap className="gap-4">
              <RecentComment />
              <RecentComment />
              <RecentComment />
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Blog;

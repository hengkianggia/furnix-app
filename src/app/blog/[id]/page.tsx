import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import { BannerDetailBlogPost } from "@/components/pages/Banner";
import DetailPost from "@/components/pages/blog post/DetailPost";
import Wrapper from "@/components/Wrapper";
import React from "react";

const DetailBlogPost = () => {
  return (
    <Div as={"section"} full >
      <Wrapper className="max-md:px-4 max-lg:px-10">
        <BreadcrumGroup />
      </Wrapper>
      <BannerDetailBlogPost />
      <DetailPost />
    </Div>
  );
};

export default DetailBlogPost;

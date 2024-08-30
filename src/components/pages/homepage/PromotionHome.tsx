import React from "react";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import { ListItemHomepageOne } from "./ListItemHomepage";

const PromotionHome = () => {
  return (
    <Wrapper
      full
      centerColumn
      className="gap-5 overflow-hidden max-md:px-4 max-lg:px-10"
    >
      <h1 className="text-32 font-baiJamjure font-thin max-md:leading-8">
        Level Up Your Living Room
      </h1>

      <Div
        flex
        full
        center
        className="gap-5 max-lg:overflow-x-scroll max-lg:snap-x max-lg:snap-mandatory scrollbar-none max-lg:justify-start"
      >
        <ListItemHomepageOne />
        <ListItemHomepageOne />
        <ListItemHomepageOne under />
      </Div>
    </Wrapper>
  );
};

export default PromotionHome;

import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { ListItemHomepageOne } from "./ListItemHomepage";

const PromotionHome = () => {
  return (
    <Wrapper full centerColumn className="gap-5">
      <h1 className="text-32 font-baiJamjure font-thin">
        Level Up Your Living Room
      </h1>
      <Div flex itemsCenter className="gap-5">
        <ListItemHomepageOne />
        <ListItemHomepageOne />
        <ListItemHomepageOne under />
      </Div>
    </Wrapper>
  );
};

export default PromotionHome;

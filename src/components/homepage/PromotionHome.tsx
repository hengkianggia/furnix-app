import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import ListItemHomepage from "./ListItemHomepage";

const PromotionHome = () => {
  return (
    <Wrapper full centerColumn className="my-20 gap-5">
      <h1 className="text-32 font-baiJamjure font-thin">
        Level Up Your Living Room
      </h1>
      <Div flex itemsCenter className="gap-5">
        <ListItemHomepage />
        <ListItemHomepage />
        <ListItemHomepage under/>
      </Div>
    </Wrapper>
  );
};

export default PromotionHome;

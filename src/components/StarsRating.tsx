import React from "react";
import Div from "./Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";

const StarsRating = () => {
  return (
    <Div flex itemsCenter>
      <Icon icon={Icons.Stars} className="text-myOrange" />
      <Icon icon={Icons.Stars} className="text-myOrange" />
      <Icon icon={Icons.Stars} className="text-myOrange" />
      <Icon icon={Icons.Stars} className="text-myOrange" />
      <Icon icon={Icons.Stars} className="text-myOrange" />
    </Div>
  );
};

export default StarsRating;

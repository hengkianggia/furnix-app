import React from "react";
import Div from "./Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";

const ShareMedia = () => {
  return (
    <Div
      flex
      itemsCenter
      className="space-x-6 self-end max-md:text-sm max-md:space-x-3 py-4"
    >
      <h4 className="uppercase text-myDarkGray">share</h4>
      <Icon icon={Icons.Facebook} className="text-xl cursor-pointer" />
      <Icon icon={Icons.Instagram} className="text-xl cursor-pointer" />
      <Icon icon={Icons.Twitter} className="text-xl cursor-pointer" />
      <Icon icon={Icons.WhatsApp} className="text-xl cursor-pointer" />
    </Div>
  );
};

export default ShareMedia;

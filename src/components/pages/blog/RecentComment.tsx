import Div from "@/components/Div";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const RecentComment = () => {
  return (
    <Div
      full
      flex
      itemsCenter
      pointer
      className="space-x-4 text-myDarkGray hover:text-myBlack"
    >
      <Icon icon={Icons.Comment} className="text-5xl" />
      <h3 className="line-clamp-2 text-sm">
        Lisanne Viscaal Excepteur sint occaecat cupidatat non proiden Viscaal
        Excepteur sint occaecat cupidatat non proiden
      </h3>
    </Div>
  );
};

export default RecentComment;

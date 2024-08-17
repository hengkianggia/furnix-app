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
      <Icon icon={Icons.Comment} className="text-3xl" />
      <h3 className="line-clamp-2">
        Lisanne Viscaal Excepteur sint occaecat cupidatat non proident …
      </h3>
    </Div>
  );
};

export default RecentComment;

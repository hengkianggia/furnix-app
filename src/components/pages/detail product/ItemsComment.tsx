import Div from "@/components/Div";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";
import Tag from "@/components/Tag";

const ItemsComment = () => {
  return (
    <Div full flex className="space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Div full column className="space-y-4">
        {/* top */}
        <Div full between>
          <Div column className="space-y-1">
            <h4>Amira Anderson</h4>
            <p>October 29, 2023 at 3:30PM</p>
            <Div flex itemsCenter>
              <Icon icon={Icons.Stars} className="text-myOrange" />
              <Icon icon={Icons.Stars} className="text-myOrange" />
              <Icon icon={Icons.Stars} className="text-myOrange" />
              <Icon icon={Icons.Stars} className="text-myOrange" />
              <Icon icon={Icons.Stars} className="text-myOrange" />
            </Div>
          </Div>

          <Tag text="Reply" className="py-1" />
        </Div>

        {/* the comment */}
        <p className="line-clamp-4 text-myDarkGray">
          Im absolutely in love with my Mid-Century TV Cabinet! The combination
          of wood and cane doors adds a touch of elegance to my living room. The
          solid oak handles and legs give it a sturdy feel. The soft-close
          drawers are a bonus.
        </p>
      </Div>
    </Div>
  );
};

export default ItemsComment;

import React from "react";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import Images from "@/components/Images";
import { Separator } from "@/components/ui/separator";

const listItem = [
  {
    name: "Living Room Furniture",
    path: "/category/living-room-furniture",
  },
  {
    name: "Bedroom Furniture",
    path: "/category/bedroom-furniture",
  },
  {
    name: "Dining Room Furniture",
    path: "/category/dining-room-furniture",
  },
  {
    name: "Kitchen Furniture",
    path: "/category/kitchen-furniture",
  },
  {
    name: "Office Furniture",
    path: "/category/office-furniture",
  },
];

const Category = () => {
  return (
    <Wrapper flex full className="justify-between px-32 h-72">
      <Div
        Hfull
        column
        className="basis-5/12 border-myGray border-t border-b justify-evenly"
      >
        {listItem.map((item, index) => (
          <>
            <ThisItem key={index} index={index + 1} name={item.name} />
            {index < listItem.length - 1 && <Separator />}
          </>
        ))}
      </Div>
      <Div grow>
        <Images />
      </Div>
    </Wrapper>
  );
};

export default Category;

export const ThisItem = ({
  name,
  href,
  index,
}: {
  name: string;
  href?: string;
  index: number;
}) => {
  return (
    <Div full between itemsCenter pointer className="pr-4 group">
      <Div flex itemsCenter gap={3}>
        <p className="text-xs text-gray-300 group-hover:text-myBlack">
          0{index}
        </p>
        <h4 className="text-lg">{name}</h4>
      </Div>

      <Icon
        icon={"iconamoon:arrow-top-right-1"}
        className="text-myGray text-xl group-hover:animate-bounce group-hover:text-myBlack"
      />
    </Div>
  );
};

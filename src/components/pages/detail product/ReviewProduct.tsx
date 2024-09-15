import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ItemsComment from "./ItemsComment";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Ratings from "./Ratings";
import LeaveComment from "./LeaveComment";

const raitings = [
  {
    title: 5,
    value: 80,
  },
  {
    title: 4,
    value: 18,
  },
  {
    title: 3,
    value: 2,
  },
  {
    title: 2,
    value: 0,
  },
  {
    title: 1,
    value: 0,
  },
];

const ReviewProduct = () => {
  return (
    <Wrapper
      full
      flex
      className="gap-10 max-md:px-4 max-lg:px-10 max-md:flex-col"
    >
      <Div full column className="basis-7/12 gap-y-6 max-md:order-2">
        <h1 className="text-4xl font-thin max-md:text-3xl">2 Reviews for Product</h1>

        {/* items comment */}
        <Div full column className="space-y-10">
          <ItemsComment />
          <ItemsComment />
        </Div>

        <LeaveComment />
      </Div>

      <Div
        full
        column
        className="basis-5/12 border border-myGray h-fit p-8 space-y-5 max-md:order-1"
      >
        <Div full between itemsCenter>
          <Div flex itemsCenter>
            <Icon icon={Icons.Stars} className="text-myOrange text-2xl" />
            <Icon icon={Icons.Stars} className="text-myOrange text-2xl" />
            <Icon icon={Icons.Stars} className="text-myOrange text-2xl" />
            <Icon icon={Icons.Stars} className="text-myOrange text-2xl" />
            <Icon icon={Icons.Stars} className="text-myOrange text-2xl" />
          </Div>

          <h3 className="text-2xl font-thin">4.88</h3>
        </Div>

        {raitings.map((r, i) => (
          <Ratings key={i} text={r.title} value={r.value} />
        ))}
      </Div>
    </Wrapper>
  );
};

export default ReviewProduct;

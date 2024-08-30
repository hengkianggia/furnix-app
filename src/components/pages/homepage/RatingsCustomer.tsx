import React from "react";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import { ListItemHomepageTwo } from "./ListItemHomepage";

const listRating = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RatingsCutomer = () => {
  return (
    <section className="w-full max-md:px-4 max-lg:px-10">
      <Wrapper>
        <Div column className="gap-3">
          <h1 className="font-baiJamjure text-32 font-thin max-md:leading-8">
            Ratings from Our Customers
          </h1>
          <Div
            flex
            className="gap-4 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
          >
            {listRating.map((_, i) => (
              <ListItemHomepageTwo key={i} even={(i + 1) % 2 == 0} />
            ))}
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default RatingsCutomer;

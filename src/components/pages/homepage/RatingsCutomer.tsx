import React from "react";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import { ListItemHomepageTwo } from "./ListItemHomepage";

const listRating = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RatingsCutomer = () => {
  return (
    <section className="w-full">
      <Wrapper>
        <Div column className="gap-3">
          <h1 className="font-baiJamjure text-32 font-thin">
            Ratings from Our Customers
          </h1>
          <Div
            flex
            className="gap-4 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
          >
            {listRating.map((_, i) => (
              <ListItemHomepageTwo even={(i + 1) % 2 == 0} />
            ))}
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default RatingsCutomer;

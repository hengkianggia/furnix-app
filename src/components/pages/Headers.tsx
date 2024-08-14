import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { BreadcrumGroup } from "../BreadcrumGroup";

const Headers = () => {
  return (
    <section className="w-full overflow-hidden">
      <Wrapper>
        <BreadcrumGroup />
      </Wrapper>

      <Div full centerColumn relative className="h-[300px] bg-red-400">
        <Div column itemsCenter className="max-w-[700px] text-center space-y-4">
          <h1 className="text-48 leading-superThin font-thin">
            Helping All Create Home Anywhere
          </h1>
          <p className="max-w-[70%] text-sm">
            Discover a curated collection of home essentials that elevate your
            space and simplify everyday living
          </p>
        </Div>
      </Div>
    </section>
  );
};

export default Headers;

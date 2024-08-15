import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { BreadcrumGroup } from "../BreadcrumGroup";
import Images from "../Images";

interface Props {
  title: string | string[];
  desc?: string;
}

const Headers = ({ title, desc }: Props) => {
  return (
    <section className="w-full overflow-hidden">
      <Wrapper>
        <BreadcrumGroup />
      </Wrapper>

      <Div full centerColumn relative className="h-[300px]">
        <Div
          column
          itemsCenter
          className="max-w-[700px] text-center space-y-4 z-20"
        >
          <h1 className="text-48 leading-superThin font-thin">{title}</h1>
          <p className="max-w-[70%] text-myDarkGray text-sm">{desc}</p>
        </Div>

        <Div absolute full Hfull className="left-0 top-0">
          <Images />
        </Div>
      </Div>
    </section>
  );
};

export default Headers;

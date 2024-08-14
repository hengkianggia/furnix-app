import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

import fummy from "../../../public/dummy.png";

export const Banner1 = () => {
  return (
    <section className={`w-full aspect-16/7 max-h-[700px] relative`}>
      <Wrapper column className={`h-full justify-center z-20`}>
        <Div column className="gap-5">
          <h1 className="text-48 text-myBrokenWhite leading-[60px]">
            Light Up Your Space <br /> with Our Lamps
          </h1>
          <Button
            className="uppercase w-fit rounded-full border-myBrokenWhite border bg-transparent text-myBrokenWhite"
            variant={"outline"}
          >
            subscribe
            <Icon icon={"icons8:right-round"} className="text-24 ml-2" />
          </Button>
        </Div>
      </Wrapper>

      <Div absolute full Hfull className="top-0 left-0 z-10 ">
        <Image
          src={fummy}
          width={1000}
          height={700}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </Div>
    </section>
  );
};

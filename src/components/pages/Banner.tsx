import React from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

import fummy from "../../../public/dummy.png";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

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

export const Banner2 = () => {
  return (
    <section className="w-full bg-myBrokenWhite pt-10">
      <Wrapper className="grid grid-cols-2 gap-10 px-32 items-center">
        <Div className="space-y-7">
          <h1 className="font-normal">
            ”Absolutely thrilled with the new coffee table! We've received so
            many compliments, and friends are eager to know where we found it.”
          </h1>

          {/* icon */}
          <Div flex itemsCenter between>
            <h4 className="uppercase">Alysa Keebler</h4>
            <Div flex itemsCenter gap={3}>
              <Icon
                icon={"carbon:arrow-left"}
                className="text-xl cursor-pointer"
              />
              <Icon
                icon={"carbon:arrow-right"}
                className="text-xl cursor-pointer"
              />
            </Div>
          </Div>

          <Div flex itemsCenter gap={5}>
            <Images
              src={fummy}
              width={400}
              className="w-36 aspect-square rounded-sm"
            />

            {/* desc */}
            <Div column gap={2}>
              <h3 className="text-xl">EleganceBlend Coffee Table</h3>
              <p className="text-xs w-[70%] text-myDarkGray">
                Side table, anthracite/birch effect dark yellow, 20 7/8x19 5/8
              </p>
              <span className="flex items-center gap-4">
                <p>$ 161.40</p>
                <p className="text-myDarkGray line-through">$ 269.90</p>
              </span>
            </Div>
          </Div>
        </Div>

        {/* image */}
        <Div>
          <Image
            src={fummy}
            width={500}
            alt="image"
            className="w-full aspect-10/9 object-cover object-center rounded-tr-md rounded-tl-md"
          />
        </Div>
      </Wrapper>
    </section>
  );
};

export const BannerAbout = () => {
  return (
    <section className="w-full py-28 bg-myBrokenWhite">
      <Wrapper full column className="space-y-10">
        <Div full column itemsCenter className="space-y-8">
          <h1 className="text-48 font-thin">A Growing Customer Community</h1>
          <Div full flex center className="gap-8 px-24">
            <Div column itemsCenter className="text-center gap-5">
              <h2 className="text-4xl">biggest</h2>
              <Separator />
              <p className="w-[60%] text-myDarkGray">
                One of the biggest players in the home retail industry
              </p>
            </Div>
            <Div column itemsCenter className="text-center gap-5">
              <h2 className="text-4xl">&gt; 20 000</h2>
              <Separator />
              <p className="w-[60%] text-myDarkGray">
                Offering products for all your home requirements
              </p>
            </Div>
            <Div column itemsCenter className="text-center gap-5">
              <h2 className="text-4xl">1.8 Million</h2>
              <Separator />
              <p className="w-[60%] text-myDarkGray">
                Continuously growing with an ever-expanding customer base
              </p>
            </Div>
          </Div>
        </Div>

        {/* image */}
        <Div full className="h-[420px] overflow-hidden">
          <Images />
        </Div>
      </Wrapper>
    </section>
  );
};

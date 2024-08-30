import React from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

import fummy from "../../../public/furniture.jpg";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Icons } from "@/data/data";

export const Banner1 = () => {
  return (
    <section
      className={`w-full aspect-16/7 max-h-[700px] relative max-md:max-h-[800px]`}
    >
      <Wrapper
        column
        className={`h-full justify-center z-20 max-md:px-4 max-lg:px-10`}
      >
        <Div column className="gap-5">
          <h1 className="text-48 text-myBlack leading-[60px] font-thin max-lg:text-32 max-lg:leading-8">
            Light Up Your Space <br /> with Our Lamps
          </h1>
          <Button
            className="uppercase w-fit rounded-full border-myBlack border bg-transparent text-myBlack hover:bg-myBlack hover:text-myBrokenWhite"
            variant={"outline"}
          >
            subscribe
            <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
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
    <section className="w-full bg-myBrokenWhite pt-10 max-lg:pb-10">
      <Wrapper className="grid grid-cols-2 gap-10 px-32 items-center max-md:px-4 max-lg:px-10">
        <Div className="space-y-7 max-lg:col-span-2">
          <h1 className="font-normal max-md:w-full max-lg:w-[80%]">
            &quot;Absolutely thrilled with the new coffee table! We&apos;ve
            received so many compliments, and friends are eager to know where we
            found it.&quot;
          </h1>

          {/* icon */}
          <Div flex itemsCenter between className="max-md:w-full max-lg:w-[80%]">
            <h4 className="uppercase">Alysa Keebler</h4>
            <Div flex itemsCenter gap={3}>
              <Icon icon={Icons.ArrowLeft} className="text-xl cursor-pointer" />
              <Icon
                icon={Icons.ArrowRight}
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
        <Div className="max-lg:hidden">
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

export const BannerShop = () => {
  return (
    <Wrapper full flex itemsCenter className="p-10 bg-myBrokenWhite">
      <Div className="basis-5/12 space-y-8">
        <h1 className="text-4xl font-thin text-balance">
          Get new products and promotions in your inbox
        </h1>
        <p className="text-sm text-myDarkGray text-balance">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna
        </p>

        <Div full flex between className="w-[80%]">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-full border border-myBlack"
          />
          <Div flex itemsCenter>
            <Button className="uppercase ml-3 rounded-full bg-myBlack">
              subscribe
              <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
            </Button>
          </Div>
        </Div>
      </Div>

      <Div full relative className="basis-7/12 aspect-16/7">
        <Images />

        <Div
          absolute
          className="w-56 aspect-square bg-orange-400 -bottom-8 -left-8 shadow-lg"
        >
          <Images />
        </Div>

        <Div
          absolute
          className="w-56 aspect-square bg-orange-400 -top-8 -right-8 shadow-lg"
        >
          <Images />
        </Div>
      </Div>
    </Wrapper>
  );
};

export const BannerWishlist = () => {
  return (
    <section className="w-full bg-myBrokenWhite pt-10 relative h-80 overflow-hidden">
      <Wrapper className="grid grid-cols-2 gap-10 px-32 items-center z-30">
        <Div className="space-y-7">
          <h1 className="text-4xl text-balance font-thin">
            We&apos;re solving the biggest problems in furniture
          </h1>

          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>

          <Button className="uppercase hover:bg-gray-100 hover:text-myBlack">
            shop now
            <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
          </Button>
        </Div>
      </Wrapper>
      <Div absolute className="left-[31vw] sxl:left-[45vw] top-0 w-full">
        <Image
          src={fummy}
          width={500}
          alt="image"
          className="w-[90vw] h-full object-cover object-center rounded-tr-md rounded-tl-md"
        />
      </Div>
    </section>
  );
};

export const BannerDetailBlogPost = () => {
  return <Images className="h-full max-h-[500px]" />;
};

export const BannerContactInformation = () => {
  return (
    <Div full column className="p-10 space-y-6 bg-mySmoothGray">
      <h2 className="text-2xl font-thin">
        Have Questions? Ask Our Furnix Team!
      </h2>
      <p className="text-sm text-balance text-myDarkGray">
        Ultrices neque ornare aenean euismod elementum nisi. Vulputate mi sit
        amet mauris commodo quis. Sit amet nisl purus in mollis.
      </p>

      <Div full flex itemsCenter between>
        <Div flex itemsCenter pointer>
          <Icon icon={Icons.Call} className="text-xl mr-2" />
          +62 851 6191 9533
        </Div>
        <Div flex itemsCenter pointer>
          <Icon icon={Icons.Email} className="text-xl mr-2" />
          pengkyjd00@gmail.com
        </Div>
      </Div>

      <Button className="uppercase w-fit" variant={"outline"}>
        shop now <Icon icon={Icons.ArrowRightCircle} className="text-xl ml-2" />
      </Button>
    </Div>
  );
};

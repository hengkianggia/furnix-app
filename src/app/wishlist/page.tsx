import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import MyWishlist from "@/components/pages/wishlist/MyWishlist";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

import payments from "../../../public/images/Payments (1).svg";
import { BannerWishlist } from "@/components/pages/Banner";
import { Icons } from "@/data/data";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Wishlist",
};

const Wishlist = () => {
  return (
    <Div as={"section"} full column>
      <Wrapper full className="max-md:px-4 max-lg:px-10 max-md:border-b">
        <BreadcrumGroup />
      </Wrapper>

      <Separator />

      <MyWishlist />

      <BannerWishlist />

      <Wrapper full className="mt-32 max-lg:mt-20">
        <Div
          full
          grid
          className="grid-cols-3 gap-6 px-32 max-md:px-4 max-lg:px-10 max-md:grid-cols-1"
        >
          <Div flex className="gap-4">
            <Icon icon={Icons.Question} className="text-3xl" />
            <Div
              column
              className="text-balance text-myDarkGray space-y-2 text-sm"
            >
              <h3 className="text-2xl text-myBlack">Assistance needed?</h3>
              <p>You can always call in case of any questions</p>
              <h3 className="text-xl text-myBlack">+ 12 345 67 89</h3>
              <p>
                Mon - Fr: 9:00 - 5:00 CET.Hotline available in English and
                German.
              </p>
            </Div>
          </Div>

          {/* center */}
          <Div flex className="gap-4">
            <Icon icon={Icons.Return} className="text-3xl" />
            <Div
              column
              className="text-balance text-myDarkGray space-y-2 text-sm"
            >
              <h3 className="text-2xl text-myBlack">Return Policy</h3>
              <p>Most items can be returned within 30 days of delivery. </p>
              <p>
                Find all the specifics and finer details to make your return
                process hassle-free.
              </p>
              <Button
                className="capitalize hover:bg-gray-100 w-fit px-0 py-0 hover:bg-transparent"
                variant={"ghost"}
              >
                Details
                <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
              </Button>
            </Div>
          </Div>

          <Div flex className="gap-4">
            <Icon icon={Icons.Secure} className="text-3xl" />
            <Div
              column
              className="text-balance text-myDarkGray space-y-3 text-sm items-start"
            >
              <h3 className="text-2xl text-myBlack">100% Secure Payment</h3>
              <p>
                Experience peace of mind with our 100% secure payment system.
              </p>
              <Image src={payments} className="w-40" alt="images" width={400} />
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Wishlist;

"use client";
import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import ItemOnCart from "./ItemOnCart";
import ButtonCounter from "@/components/ButtonCounter";
import Coupon from "./Coupon";
import { Button } from "@/components/ui/button";
import Images from "@/components/Images";

import payments from "../../../../public/images/Payments (1).svg";
import Image from "next/image";
import { Icons } from "@/data/data";
import SmallCartItem from "./SmallCartItem";

const MyCart = () => {
  const router = useRouter();
  return (
    <Wrapper
      full
      column
      className="mt-20 gap-y-20 max-md:mt-10 max-md:px-4 max-lg:px-10"
    >
      <Div
        full
        flex
        relative
        className="space-x-6 max-md:hidden max-lg:flex-col max-lg:space-x-0"
      >
        {/* kiri */}
        <Div column className="basis-8/12 space-y-6">
          {/* atas */}
          <Div full between>
            <h1 className="text-4xl font-thin">My Cart</h1>
            <Div
              flex
              itemsCenter
              pointer
              className="gap-4 uppercase group hover:bg-myBlack hover:text-myBrokenWhite px-3 py-2 rounded-full"
              onClick={() => router.back()}
            >
              <Icon icon={Icons.ArrowLeftCircle} className="text-xl " />
              <p className="text-xs k">back to shopping</p>
            </Div>
          </Div>

          {/* table */}
          <Div full>
            <Separator />

            <Table>
              <TableHeader className="w-full">
                <TableRow className="w-full">
                  <TableHead className="grow">Product</TableHead>
                  <TableHead className="w-[15%]">Price</TableHead>
                  {/* <TableHead className="bg-orange-400 basis-2/12">
                    Quantity
                  </TableHead> */}
                  <TableHead className="w-[17%] text-center">
                    Quantity
                  </TableHead>
                  <TableHead className="w-[15%]">Totall</TableHead>
                  <TableHead className="w-[12%] max-lg:w-[8%]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell className="max-lg:px-0">
                    <ItemOnCart />
                  </TableCell>
                  <TableCell className="font-baiJamjure text-xl">
                    $399.20
                  </TableCell>
                  <TableCell>
                    <ButtonCounter />
                  </TableCell>
                  <TableCell className="font-baiJamjure text-xl">
                    $399.20
                  </TableCell>
                  <TableCell className="text-center cursor-pointer">
                    x remove
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Separator />
          </Div>

          <Coupon />
        </Div>

        {/* kanan */}
        <Div className="basis-4/12 mt-14 space-y-12 h-fit sticky top-24">
          <Div column full className="bg-mySmoothGray">
            <h1 className="w-full py-8 px-6 text-3xl font-thin">Cart Totals</h1>
            <Separator className="bg-gray-400" />

            <Div column full className="py-8 px-6 space-y-5">
              <Div full between itemsCenter>
                <p className="text-myDarkGray">Cart Subtotal</p>
                <h4 className="font-semibold">$1379.18</h4>
              </Div>

              <Div full between itemsCenter>
                <p className="text-myDarkGray">Shipping</p>
                <h4 className="font-semibold">FREE</h4>
              </Div>

              <Separator className="bg-gray-400" />

              <Div full between itemsCenter>
                <p className="text-myDarkGray">Total</p>
                <h4 className="font-semibold">$1379.18</h4>
              </Div>

              <Button className="uppercase bg-myBlack">
                Processed to Checkout
                <Icon icon={Icons.Cart} className="text-xl ml-3" />
              </Button>
            </Div>
          </Div>

          <Div
            full
            relative
            className="p-6 border border-myBlack space-y-2 pr-20"
          >
            <h2 className="text-2xl text-balance">
              Explore Enhanced Possibilities
            </h2>
            <p className="text-myDarkGray text-sm">
              with the StarStone Financial Card
            </p>
            <Button
              className="px-0 py-0 hover:bg-transparent"
              variant={"ghost"}
            >
              Learn more
              <Icon icon={Icons.ArrowRightCircle} className="text-xl ml-3" />
            </Button>

            <Images className="w-40 h-40 absolute right-5 -top-9 shadow-md" />
            <Images className="w-32 h-32 absolute right-0 -bottom-8 shadow-md" />
          </Div>
        </Div>
      </Div>

      <Div full column className="md:hidden gap-10">
        <Div full between>
          <h1 className="text-4xl font-thin">My Cart</h1>
          <Div
            flex
            itemsCenter
            pointer
            className="gap-4 uppercase group hover:bg-myBlack hover:text-myBrokenWhite px-3 py-2 rounded-full"
            onClick={() => router.back()}
          >
            <Icon icon={Icons.ArrowLeftCircle} className="text-xl " />
            <p className="text-xs k">back to shopping</p>
          </Div>
        </Div>

        <Div full column className="gap-3">
          <SmallCartItem />
        </Div>

        <Coupon className="w-full" />

        <Div full className="space-y-12 h-fit">
          <Div column full className="bg-mySmoothGray">
            <h1 className="w-full py-8 px-6 text-3xl font-thin">Cart Totals</h1>
            <Separator className="bg-gray-400" />

            <Div column full className="py-8 px-6 space-y-5">
              <Div full between itemsCenter>
                <p className="text-myDarkGray">Cart Subtotal</p>
                <h4 className="font-semibold">$1379.18</h4>
              </Div>

              <Div full between itemsCenter>
                <p className="text-myDarkGray">Shipping</p>
                <h4 className="font-semibold">FREE</h4>
              </Div>

              <Separator className="bg-gray-400" />

              <Div full between itemsCenter>
                <p className="text-myDarkGray">Total</p>
                <h4 className="font-semibold">$1379.18</h4>
              </Div>

              <Button className="uppercase bg-myBlack">
                Processed to Checkout
                <Icon icon={Icons.Cart} className="text-xl ml-3" />
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>

      <Separator />

      <Div
        full
        grid
        className="grid-cols-3 gap-6 px-20 max-md:grid-cols-1 max-md:px-4 max-lg:px-0 max-lg:gap-0 max-md:gap-4"
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
              Mon - Fr: 9:00 - 5:00 CET.Hotline available in English and German.
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
            <p>Experience peace of mind with our 100% secure payment system.</p>
            <Image src={payments} className="w-40" alt="images" width={400} />
          </Div>
        </Div>
      </Div>
    </Wrapper>
  );
};

export default MyCart;

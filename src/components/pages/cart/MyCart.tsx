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

const MyCart = () => {
  const router = useRouter();
  return (
    <Wrapper full column className="mt-20 space-y-20">
      <Div full flex className="space-x-6">
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
              <Icon icon={"icons8:left-round"} className="text-xl " />
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
                  <TableHead className="w-[12%]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>
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
        <Div column className="basis-4/12 bg-mySmoothGray mt-14">
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
              <Icon icon={"bi:cart"} className="text-xl ml-3" />
            </Button>
          </Div>
        </Div>
      </Div>

      <Separator />
    </Wrapper>
  );
};

export default MyCart;

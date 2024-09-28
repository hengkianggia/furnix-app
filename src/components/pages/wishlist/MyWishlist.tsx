"use client";

import Div from "@/components/Div";
import { Separator } from "@/components/ui/separator";
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
import ItemOnCart from "../cart/ItemOnCart";
import ButtonCounter from "@/components/ButtonCounter";
import { Icons } from "@/data/data";
import SmallCartItem from "../cart/SmallCartItem";

const MyWishlist = () => {
  const router = useRouter();
  return (
    <Wrapper full column className="mt-20 space-y-20 max-md:mt-10 max-md:px-4 max-lg:px-10">
      <Div
        full
        flex
        relative
        className="space-x-6 px-32 max-md:space-x-0 max-lg:px-0"
      >
        <Div full column className="space-y-6 max-md:hidden">
          {/* atas */}
          <Div full between>
            <h1 className="text-4xl font-thin">Wishlist</h1>
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
        </Div>

        <Div full column className="md:hidden gap-10">
          <Div full between>
            <h1 className="text-4xl font-thin">Wishlist</h1>
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
        </Div>
      </Div>
    </Wrapper>
  );
};

export default MyWishlist;

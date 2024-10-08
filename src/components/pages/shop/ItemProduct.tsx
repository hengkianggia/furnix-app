"use client";
import Div from "@/components/Div";
import Images from "@/components/Images";
import StarsRating from "@/components/StarsRating";
import { Button } from "@/components/ui/button";
import { Icons } from "@/data/data";
import { calculateFinalPrice, cn, convertTeksToUrl } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

interface ItemProductProps {
  position?: "center" | "normal";
  className?: string;
  title?: string;
  price?: number;
  discount?: number;
  categoryProduct?: string;
}

const ItemProduct = ({
  position = "center",
  className,
  title,
  price,
  discount,
  categoryProduct,
}: ItemProductProps) => {
  const [like, setLike] = useState(false);
  const [isPrice, setisPrice] = useState(true);

  const params = useParams();
  const priceAfterDiscount = calculateFinalPrice(price!, discount!);

  let category =
    convertTeksToUrl(
      Array.isArray(params.category) ? params.category[0] : params.category
    ) ?? convertTeksToUrl(categoryProduct!);

  let path: string = `/shop/${category}/${convertTeksToUrl(title!)}`;

  return (
    <Link href={path} className="w-full">
      <Div
        full
        column
        relative
        pointer
        className={cn(
          "space-y-4 overflow-hidden rounded-tr-md rounded-tl-md",
          className
        )}
      >
        <Div full relative>
          <Images className="aspect-square w-full relative" />
          <Div
            absolute
            full
            flex
            between
            itemsCenter
            className={cn(
              "top-0 left-0 p-4",
              discount! < 1 ? "justify-end" : ""
            )}
          >
            {discount! > 0 && (
              <Div
                center
                className="px-2 py-1 text-xs bg-myOrange text-myBlack rounded-full capitalize"
              >
                <p>{discount} % Off</p>
              </Div>
            )}

            <Div
              pointer
              onMouseEnter={() => setLike(true)}
              onMouseLeave={() => setLike(false)}
            >
              {like ? (
                <Icon icon={Icons.HeartFill} className="text-red-500" />
              ) : (
                <Icon icon={Icons.Heart} />
              )}
            </Div>
          </Div>
        </Div>

        <Div
          full
          column
          className={cn(
            "space-y-3",
            position == "center" && "items-center",
            position == "normal" && "justify-start"
          )}
        >
          <StarsRating />
          <h4 className="line-clamp-2 text-center text-balance">{title}</h4>

          <Div
            center
            onMouseEnter={() => setisPrice(false)}
            onMouseLeave={() => setisPrice(true)}
            className="h-10"
          >
            {isPrice ? (
              <Div flex itemsCenter className="space-x-4">
                <p>$ {priceAfterDiscount.toFixed()}</p>
                {discount! > 0 && (
                  <p className="text-gray-300 line-through">$ {price}</p>
                )}
              </Div>
            ) : (
              <Button className="uppercase bg-myBlack text-myBrokenWhite">
                add to cart
                <Icon icon={Icons.Cart} className="text-lg ml-2" />
              </Button>
            )}
          </Div>
        </Div>
      </Div>
    </Link>
  );
};
export default ItemProduct;

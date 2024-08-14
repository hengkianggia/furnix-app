import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

import dummy from "../../public/dummy.png";

interface ImagesProps {
  src?: StaticImageData | string;
  width?: number;
  heigth?: number;
  alt?: string;
  className?: string;
}

const Images = ({
  src,
  width,
  heigth,
  alt = "images",
  className,
}: ImagesProps) => {
  return (
    <Image
      src={src ?? dummy}
      width={width ?? 500}
      height={heigth}
      alt={alt ?? "images"}
      className={cn("w-full h-full object-cover object-center", className)}
    ></Image>
  );
};

export default Images;

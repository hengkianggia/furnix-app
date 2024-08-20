import Div from "@/components/Div";
import Images from "@/components/Images";
import Tag from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Icons } from "@/data/data";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const ItemsBlog = ({ classNameImage }: { classNameImage?: string }) => {
  return (
    <Link href={"/blog/makmu"}>
      <Div full column relative pointer className="space-y-2">
        <Images className={cn("aspect-video", classNameImage)} />

        <Div className="space-y-2">
          <Div
            flex
            itemsCenter
            className="gap-3 uppercase text-sm text-myDarkGray"
          >
            <h4>October 12, 2023</h4>
            <Icon icon={Icons.Dot} className="text-2xl" />
            <h4>Interior Design</h4>
            <Icon icon={Icons.Dot} className="text-2xl" />
            <h4>2 Comments</h4>
          </Div>

          <h1 className="text-3xl font-thin">
            Dining Table Shapes: Which One Suits Your Dining Space Best?
          </h1>
          <p className="line-clamp-2 text-sm text-myDarkGray">
            Nibh ipsum consequat nisl vel pretium lectus. Quis risus sed
            vulputate odio ut enim. Sit amet risus nullam eget felis eget nunc
            lobortis. Tellus id interdum velit laoreet id donec ultrices
            tincidunt arcu. Lectus proin
          </p>
          <Button
            className="capitalize px-0 py-0 hover:bg-transparent"
            variant={"ghost"}
          >
            read more
            <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
          </Button>
        </Div>

        {/* tag */}

        <Tag
          text="tag name"
          className="absolute top-4 left-4 border-none uppercase"
        />
      </Div>
    </Link>
  );
};

export default ItemsBlog;

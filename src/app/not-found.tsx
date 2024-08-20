"use client";
import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <Div
      relative
      column
      className="w-full h-screen justify-center bg-mySmoothGray z-[999999] fixed top-0 left-0"
    >
      <Wrapper full className="px-32 z-10">
        <Div column className="space-y-4 w-[50%]">
          <h1 className="text-5xl font-thin">That Page Can&apos;t Be Found</h1>
          <p>
            It may have been moved or removed altogether. Please try searching
            for some other page, or return to the website's homepage to find
            what you're looking for.
          </p>
          <Button
            variant={"default"}
            className="w-fit uppercase"
            onClick={() => router.push("/")}
          >
            home page
            <Icon icon={Icons.ArrowLeftCircle} className="text-left ml-3" />
          </Button>
        </Div>
      </Wrapper>

      <Div absolute className="right-0 top-0 w-[60vw]">
        <Images />
      </Div>
    </Div>
  );
};

export default NotFound;

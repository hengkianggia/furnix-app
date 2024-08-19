import Div from "@/components/Div";
import { cn } from "@/lib/utils";
import React from "react";

const Ratings = ({ text, value }: { text: number; value: number }) => {
  return (
    <Div full between itemsCenter className="space-x-4">
      <h4 className="text-lg w-5">{text}</h4>
      <div className="h-2 bg-slate-100 w-[100%]">
        <div
          className={cn(
            "h-full bg-myBlack w-[0%]",
            value && (`w-[${value}%]` as string)
          )}
        ></div>
      </div>
      <h4 className="text-lg w-12">{value}%</h4>
    </Div>
  );
};

export default Ratings;

import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({
  children,
  className,
  full,
  Hfull,
  flex,
  column,
  center,
  centerColumn,
}: {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  Hfull?: boolean;
  flex?: boolean;
  column?: boolean;
  center?: boolean;
  centerColumn?: boolean;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1320px] relative",
        className,
        full && "w-full",
        Hfull && "h-full",
        flex && `flex`,
        column && `flex flex-col`,
        center && `flex justify-center items-center`,
        centerColumn && `flex flex-col justify-center items-center`
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;

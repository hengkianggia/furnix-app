import Div from "@/components/Div";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/data/data";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Coupon = ({ className }: { className?: string }) => {
  return (
    <Div flex itemsCenter className={cn("space-x-3 w-fit", className)}>
      <Input placeholder="Add Gift Cart/Promo code" className="rounded-full" />
      <Button className="capitalize hover:bg-gray-100" variant={"ghost"}>
        apply
        <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
      </Button>
    </Div>
  );
};

export default Coupon;

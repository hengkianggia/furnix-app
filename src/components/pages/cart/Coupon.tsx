import Div from "@/components/Div";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Coupon = () => {
  return (
    <Div flex itemsCenter className="space-x-3 w-fit">
      <Input placeholder="Add Gift Cart/Promo code" className="rounded-full" />
      <Button className="capitalize hover:bg-gray-100" variant={"ghost"}>
        apply
        <Icon icon={"icons8:right-round"} className="text-24 ml-2" />
      </Button>
    </Div>
  );
};

export default Coupon;

import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import MyCart from "@/components/pages/cart/MyCart";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Cart = () => {
  return (
    <Div as={"section"} full>
      <Wrapper full>
        <BreadcrumGroup />
      </Wrapper>

      <Separator />

      <MyCart />
    </Div>
  );
};

export default Cart;

import Div from "@/components/Div";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const LeaveComment = () => {
  return (
    <Div full className="mt-10 space-y-5">
      <h1 className="text-4xl font-thin">Leave Your Comment</h1>

      {/* rating */}
      <Div full flex itemsCenter className="space-x-4 uppercase">
        <h4 className="text-sm text-myDarkGray">your rating</h4>
        <Div flex itemsCenter>
          <Icon icon={Icons.Stars} className="text-myGray" />
          <Icon icon={Icons.Stars} className="text-myGray" />
          <Icon icon={Icons.Stars} className="text-myGray" />
          <Icon icon={Icons.Stars} className="text-myGray" />
          <Icon icon={Icons.Stars} className="text-myGray" />
        </Div>
      </Div>

      {/* inputan */}

      <Div full grid className="grid-cols-2 gap-4">
        <Div column className="space-y-2 uppercase text-sm text-myDarkGray">
          <h4>your name</h4>
          <Input placeholder="Name" className="rounded-full" />
        </Div>
        <Div column className="space-y-2 uppercase text-sm text-myDarkGray">
          <h4>your email</h4>
          <Input placeholder="Email" type="email" className="rounded-full" />
        </Div>
        <Div
          column
          className="space-y-2 uppercase text-sm text-myDarkGray col-span-2"
        >
          <h4>your comment</h4>
          <Textarea className="rounded-xl  min-h-52" />
        </Div>

        <Button className="uppercase bg-myBlack w-fit">
          post Comment
          <Icon icon={Icons.ArrowRightCircle} className="ml-3 text-xl" />
        </Button>
      </Div>
    </Div>
  );
};

export default LeaveComment;

import Div from "@/components/Div";
import Images from "@/components/Images";
import Headers from "@/components/pages/Headers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Contact = () => {
  return (
    <Div as={"section"} full className="space-y-20">
      <Headers
        title={"Contacts"}
        desc="Have questions? Contact us using the form below"
      />
      <Wrapper full className="px-32">
        <Div full grid className="grid-cols-2 gap-16 place-items-center">
          <h1 className="text-4xl font-thin text-balance">
            Contact Information for Furnix in Different Cities
          </h1>
          <p className="text-sm text-myDarkGray">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna
          </p>

          <Div column full className="space-y-4 text-sm text-myDarkGray">
            <h3 className="text-2xl">Furnix House Baltimore</h3>
            <Separator />
            <p>14 Pelham Road, Baltimore,nh, 3051 </p>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Call} />
              <p>+62 851 6191 9533</p>
            </Div>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Email} />
              <p>pengkyjd00@gmail.com</p>
            </Div>
          </Div>
          <Div column full className="space-y-4 text-sm text-myDarkGray">
            <h3 className="text-2xl">Furnix House Baltimore</h3>
            <Separator />
            <p>14 Pelham Road, Baltimore,nh, 3051 </p>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Call} />
              <p>+62 851 6191 9533</p>
            </Div>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Email} />
              <p>pengkyjd00@gmail.com</p>
            </Div>
          </Div>
          <Div column full className="space-y-4 text-sm text-myDarkGray">
            <h3 className="text-2xl">Furnix House Baltimore</h3>
            <Separator />
            <p>14 Pelham Road, Baltimore,nh, 3051 </p>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Call} />
              <p>+62 851 6191 9533</p>
            </Div>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Email} />
              <p>pengkyjd00@gmail.com</p>
            </Div>
          </Div>
          <Div column full className="space-y-4 text-sm text-myDarkGray">
            <h3 className="text-2xl">Furnix House Baltimore</h3>
            <Separator />
            <p>14 Pelham Road, Baltimore,nh, 3051 </p>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Call} />
              <p>+62 851 6191 9533</p>
            </Div>
            <Div flex itemsCenter className="space-x-3">
              <Icon icon={Icons.Email} />
              <p>pengkyjd00@gmail.com</p>
            </Div>
          </Div>

          <Div full className="aspect-square">
            <Images />
          </Div>

          <Div grid className="grid-cols-2 gap-4">
            <h2 className="col-span-2 text-4xl font-thin">Contact Us</h2>
            <p className="col-span-2 text-sm">
              We'd like to hear from you. Please complete the form below so we
              can respond to your enquiry
            </p>

            <Div full grid className="grid-cols-2 gap-4 col-span-2">
              <Div
                column
                className="space-y-2 uppercase text-sm text-myDarkGray"
              >
                <h4>your name</h4>
                <Input placeholder="Name" className="rounded-full" />
              </Div>
              <Div
                column
                className="space-y-2 uppercase text-sm text-myDarkGray"
              >
                <h4>your email</h4>
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full"
                />
              </Div>
              <Div
                column
                className="space-y-2 uppercase text-sm text-myDarkGray col-span-2"
              >
                <h4>message</h4>
                <Textarea className="rounded-xl  min-h-32" />
              </Div>

              <Button className="uppercase bg-myBlack w-fit">
                submit
                <Icon icon={Icons.ArrowRightCircle} className="ml-3 text-xl" />
              </Button>
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Contact;

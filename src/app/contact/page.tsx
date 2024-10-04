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
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <Div as={"section"} full className="space-y-20">
      <Headers
        title={"Contacts"}
        desc="Have questions? Contact us using the form below"
      />
      <Wrapper full className="lg:px-32 max-md:px-4 max-lg:px-10">
        <Div full grid className="grid-cols-2 gap-16 place-items-center max-md:grid-cols-1 max-md:gap-6 max-lg:gap-10">
          <h1 className="text-4xl font-thin text-balance max-md:col-span-1 max-lg:col-span-2 max-lg:text-center max-md:text-start">
            Contact Information for Furnix in Different Cities
          </h1>
          <p className="text-sm text-myDarkGray max-md:col-span-1 max-lg:col-span-2 max-lg:text-center max-md:text-start max-md:w-full max-lg:w-[60%]">
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

          <Div full className="aspect-square max-lg:hidden">
            <Images />
          </Div>

          <Div full grid className="grid-cols-2 gap-4 max-md:col-span-1 max-lg:col-span-2">
            <h2 className="col-span-2 text-4xl font-thin max-lg:text-2xl">Contact Us</h2>
            <p className="col-span-2 text-sm">
              We&apos;d like to hear from you. Please complete the form below so we
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
                <Textarea className="rounded-xl  min-h-32 max-lg:min-h-20" />
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

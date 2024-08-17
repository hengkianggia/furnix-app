import Div from "@/components/Div";
import Images from "@/components/Images";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const location = [
  {
    title: "Furnix House NY",
    location: "21 County Route 3/6, New York,wv, 26101 ",
  },
  {
    title: "Furnix House Baltimore",
    location: "14 Pelham Road, Baltimore,nh, 3051 ",
  },
  {
    title: "Furnix House Chicago",
    location: "3 SW Montclair Street, Chicago,or, 93828",
  },
  {
    title: "Furnix House Jacksonville",
    location: "13 Lamar Road, Jacksonville ,al, 36445",
  },
];

const OurStore = () => {
  return (
    <Div as={"section"} full>
      <Wrapper full column itemsCenter className="gap-6">
        <h1 className="text-4xl font-thin">Visit Our Stores</h1>

        <Div full grid className="grid-cols-2 gap-4 px-32">
          {location.map((item, index) => (
            <ItemLocation
              key={index}
              title={item.title}
              location={item.location}
            />
          ))}
        </Div>

        <Div className="w-[50%] text-center mt-20 space-y-3">
          <h1 className="text-3xl font-thin">Not in your town yet?</h1>
          <p className="text-sm text-myDarkGray">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna. Ut enim ad minim veniam, quis nostrud
          </p>
          <Button
            className="uppercase rounded-full bg-myBlack text-myBrokenWhite"
            variant={"ghost"}
          >
            shop now
            <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
          </Button>
        </Div>
      </Wrapper>
    </Div>
  );
};

export default OurStore;

export const ItemLocation = ({
  title,
  location,
}: {
  title: string;
  location: string;
}) => {
  return (
    <Div
      full
      column
      className="space-y-3 rounded-tr-md rounded-tl-md overflow-hidden"
    >
      <Images className="aspect-video" />
      <Div className="space-y-1">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-sm text-myDarkGray">{location}</p>
        <Div flex itemsCenter>
          <Button
            className="uppercase p-0 hover:bg-transparent text-sm text-myDarkGray"
            variant={"ghost"}
          >
            Book an appointment
            <Icon icon={Icons.ArrowRightCircle} className="text-24 ml-2" />
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

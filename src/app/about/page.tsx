import Div from "@/components/Div";
import CustomFurniture from "@/components/pages/about/CustomFurniture";
import Details from "@/components/pages/about/Details";
import OurStore from "@/components/pages/about/OurStore";
import { BannerAbout } from "@/components/pages/Banner";
import Headers from "@/components/pages/Headers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

const About = () => {
  return (
    <Div column className="gap-44">
      <Headers title="Helping All Create Home Anywhere" />
      <Details />
      <BannerAbout />
      <CustomFurniture />
      <OurStore />
    </Div>
  );
};

export default About;

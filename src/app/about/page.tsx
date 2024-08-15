import Div from "@/components/Div";
import CustomFurniture from "@/components/pages/about/CustomFurniture";
import Details from "@/components/pages/about/Details";
import { BannerAbout } from "@/components/pages/Banner";
import Headers from "@/components/pages/Headers";
import React from "react";

const About = () => {
  return (
    <Div column className="gap-44">
      <Headers title="Helping All Create Home Anywhere" />
      <Details />
      <BannerAbout />
      <CustomFurniture />
    </Div>
  );
};

export default About;

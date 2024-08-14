import Div from "@/components/Div";
import Details from "@/components/pages/about/Details";
import Headers from "@/components/pages/Headers";
import React from "react";

const About = () => {
  return (
    <Div column className="gap-20">
      <Headers title="Helping All Create Home Anywhere" />
      <Details />
    </Div>
  );
};

export default About;

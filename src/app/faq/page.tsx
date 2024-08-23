import { BreadcrumGroup } from "@/components/BreadcrumGroup";
import Div from "@/components/Div";
import DetailFaq from "@/components/pages/faq/DetailFaq";
import Headers from "@/components/pages/Headers";
import Wrapper from "@/components/Wrapper";
import { rules } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FAQ",
};

const Faq = () => {
  return (
    <Div as={"section"} full className="space-y-20">
      <Headers
        title={"Help Center"}
        desc="You'll find a selection of our most frequently sought-after topics to assist you further"
      />
      <DetailFaq />
      <Wrapper full flex center className="space-x-14">
        {rules.map((rule) => (
          <Div key={rule.title} flex itemsCenter className="space-x-3">
            <Icon icon={rule.icon} className="text-2xl" />
            <h4>{rule.title}</h4>
          </Div>
        ))}
      </Wrapper>
    </Div>
  );
};

export default Faq;

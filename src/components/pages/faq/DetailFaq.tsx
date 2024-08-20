import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Images from "@/components/Images";
import { cn, getRandomEvenNumber } from "@/lib/utils";
import { BannerContactInformation } from "../Banner";
import { ListFaq } from "@/data/data";

const DetailFaq = () => {
  return (
    <Wrapper full flex className="gap-10">
      <Div className="basis-7/12">
        <Accordion type="single" collapsible className="w-full">
          {ListFaq.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <Div
                full
                flex
                itemsCenter
                className={cn("space-x-5 mb-6", idx !== 0 && "mt-10")}
              >
                <Images className="w-20 aspect-16/10" />
                <h3 className="text-2xl capitalize">{item.category}</h3>
              </Div>
              {item.list.map((item, idx) => (
                <AccordionItem
                  value={`item-${idx + getRandomEvenNumber(2, 1000)}`}
                  className="pb-2"
                  key={idx}
                >
                  <AccordionTrigger>
                    <h3 className="text-lg">{item.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-myDarkGray">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))}
        </Accordion>
      </Div>

      {/* kanan */}
      <Div className="basis-5/12 space-y-10">
        <BannerContactInformation />
        <Div full className="aspect-square">
          <Images />
        </Div>
      </Div>
    </Wrapper>
  );
};

export default DetailFaq;

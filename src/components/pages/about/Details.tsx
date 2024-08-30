import Div from "@/components/Div";
import Images from "@/components/Images";
import Wrapper from "@/components/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const listSHaping = [
  {
    icon: "hugeicons:stars",
    title: "Premium Materials",
    description:
      "High-quality materials like solid wood, genuine leather, and durable upholstery for long-lasting furniture",
  },
  {
    icon: "carbon:area-custom",
    title: "Customizable Finishes",
    description:
      "Variety of finishes, stains, and color options to allow customers to match their furniture with their existing decor",
  },
  {
    icon: "material-symbols:texture",
    title: "Texture and Comfort",
    description:
      "Highlight the texture, comfort, and tactile qualities of materials, especially for upholstery",
  },
  {
    icon: "ant-design:safety-outlined",
    title: "Safety Standards",
    description:
      "Highlight compliance with safety standards, especially for child-related products or specific safety concerns",
  },
  {
    icon: "ph:virus",
    title: "Low Allergenic",
    description:
      "Note if materials are hypoallergenic, promoting a healthier environment for those with allergies.",
  },
  {
    icon: "iconamoon:delivery-light",
    title: "Delivery and Assembly ",
    description:
      "Provide convenient delivery and assembly options to ensure a hassle-free experience for customers",
  },
];

const Details = () => {
  return (
    <section className="w-full">
      <Wrapper full className="space-y-20 max-md:px-4 max-lg:px-10">
        <Div full column className="gap-8 overflow-hidden">
          <Div flex className="gap-5 max-md:flex-col">
            <h3 className="text-2xl basis-7/12 text-balance">
              Our mission is to create timeless, versatile, and minimalist
              furniture that seamlessly complements any space
            </h3>
            <p className="text-sm basis-5/12 text-balance">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris
            </p>
          </Div>

          <Div flex className="gap-5 overflow-hidden">
            <Div className="basis-7/12 max-md:basis-full">
              <Images className="h-96" />
            </Div>
            <Div className="basis-5/12 max-md:hidden">
              <Images className="h-96" />
            </Div>
          </Div>
        </Div>

        <Div full className="space-y-6">
          <h1 className="text-4xl font-thin max-md:text-3xl">Shaping the Future</h1>
          <Div grid className="grid-cols-3 gap-6 gap-y-10 max-md:grid-cols-1 max-lg:grid-cols-2">
            {listSHaping.map((item, index) => (
              <ItemShaping
                key={index}
                title={item.title}
                icon={item.icon}
                desc={item.description}
              />
            ))}
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default Details;

export const ItemShaping = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <Div full flex className="gap-4">
      <Icon icon={icon} className="w-10 h-10" />
      <Div column>
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm text-myDarkGray text-balance">{desc}</p>
      </Div>
    </Div>
  );
};

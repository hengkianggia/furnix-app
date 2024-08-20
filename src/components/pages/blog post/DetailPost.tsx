import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import ItemProduct from "../shop/ItemProduct";
import Images from "@/components/Images";
import { Separator } from "@/components/ui/separator";
import LeaveComment from "../detail product/LeaveComment";
import ItemsBlog from "../blog/ItemsBlog";

const DetailPost = () => {
  return (
    <Wrapper className="space-y-6">
      <Div column className="px-32 mt-6 gap-4">
        <Div
          flex
          itemsCenter
          className="gap-3 uppercase text-sm text-myDarkGray"
        >
          <h4>October 12, 2023</h4>
          <Icon icon={Icons.Dot} className="text-xl cursor-pointer" />
          <h4>Interior Design</h4>
          <Icon icon={Icons.Dot} className="text-xl cursor-pointer" />
          <h4>2 Comments</h4>
        </Div>
        <h1 className="text-5xl cursor-pointer font-thin text-balance mb-4">
          Living in Style: A Journey Through Contemporary Furniture Trends
        </h1>
        <p className="text-myDarkGray">
          Praesent elementum facilisis leo vel fringilla est. Semper feugiat
          nibh sed pulvinar proin gravida hendrerit lectus a. Platea dictumst
          quisque sagittis purus sit. Nibh sit amet commodo nulla facilisi
          nullam vehicula ipsum a. Senectus et netus et malesuada fames ac.
          Tempor nec feugiat nisl pretium fusce id. Nunc lobortis mattis aliquam
          faucibus purus in massa tempor. <br /> <br /> Tempus egestas sed sed
          risus pretium quam vulputate. Vitae ultricies leo integer malesuada
          nunc vel risus commodo viverra. Velit egestas dui id ornare arcu odio
          ut sem. Venenatis lectus magna fringilla urna porttitor rhoncus dolor.
        </p>

        <h3 className="text-3xl cursor-pointer font-thin">
          Design that never fades
        </h3>
        <p className="text-myDarkGray">
          Sem et tortor consequat id porta nibh venenatis cras. Fusce id velit
          ut tortor pretium viverra suspendisse potenti nullam. Lacinia at quis
          risus sed vulputate odio ut enim. Placerat vestibulum lectus mauris
          ultrices. At volutpat diam ut venenatis. Odio ut sem nulla pharetra
          diam sit amet nisl suscipit.
        </p>

        <ul className="list-decimal max-w-[60%] space-y-2 px-4">
          <li>
            Turpis egestas maecenas pharetra convallis posuere morbi leo. Ornare
            massa eget egestas purus viverra:
            <ul className="list-disc space-y-2 px-4">
              <li>Magna sit amet purus consequat gravida. </li>
              <li>Purus sit amet volutpat mauris nunc congue nisi. </li>
            </ul>
          </li>
          <li>
            Sed pulvinar proin gravida hendrerit lectus. Nulla facilisi nullam
            vehicula ipsum a arcu cursus vitae.
          </li>
        </ul>

        <h3 className="text-3xl cursor-pointer font-thin">Materials Matter</h3>
        <p className="text-myDarkGray">
          Aliquam etiam erat velit scelerisque in dictum non consectetur. Congue
          eu consequat ac felis. Dui ut ornare lectus sit. Morbi tempus iaculis
          urna id volutpat lacus. Eu consequat ac felis donec et odio. Id leo in
          vitae turpis massa sed. Nulla posuere sollicitudin aliquam ultrices.
          Viverra maecenas accumsan lacus vel facilisis volutpat est. Quis
          commodo odio aenean sed adipiscing diam donec adipiscing.
        </p>
      </Div>

      <Div full className="grid grid-cols-3 gap-4">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </Div>

      <Div column className="px-32 mt-6 gap-4">
        <p className="text-myDarkGray">
          Quisque egestas diam in arcu cursus euismod quis viverra nibh. Eu
          consequat ac felis donec et odio pellentesque diam volutpat. Elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Libero justo laoreet sit amet cursus. Sed arcu non
          odio euismod lacinia at.
        </p>
        <span className="space-y-3">
          <p className="font-semibold">
            Dining tables come in various shapes, each with its own unique
            charm. Choosing the right shape is like finding the perfect puzzle
            piece for your dining space, completing the picture of your homes
            style and functionality.
          </p>
          <p className="uppercase text-myDarkGray">Jack Renner</p>
        </span>
        <h3 className="text-3xl cursor-pointer font-thin">
          Stories are forever
        </h3>
        <p className="text-myDarkGray">
          Pharetra magna ac placerat vestibulum lectus mauris. Purus sit amet
          luctus venenatis lectus magna fringilla. Scelerisque in dictum non
          consectetur. Euismod nisi porta lorem mollis aliquam ut. Amet nisl
          purus in mollis nunc sed id semper. Nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus.
        </p>
      </Div>

      <Div full grid className="grid-cols-2 gap-4">
        <Div column itemsCenter className="space-y-3">
          <Images className="aspect-video" />
          <h3 className="text-lg text-myDarkGray font-thin">
            Designing Unique Pieces for Your Home
          </h3>
        </Div>
        <Div column itemsCenter className="space-y-3">
          <Images className="aspect-video" />
          <h3 className="text-lg text-myDarkGray font-thin">
            Ideal Chairs for Modern Decor
          </h3>
        </Div>
      </Div>

      <Div column className="px-32 mt-6 gap-4">
        <p className="text-myDarkGray">
          Ac turpis egestas integer eget aliquet nibh praesent tristique. Tempor
          orci dapibus ultrices in iaculis nunc sed augue lacus. Pellentesque
          pulvinar pellentesque habitant morbi tristique senectus. Auctor urna
          nunc id cursus metus aliquam eleifend. Diam maecenas ultricies mi eget
          mauris pharetra et ultrices neque. Id consectetur purus ut faucibus.
          Lacus sed turpis tincidunt id aliquet. <br /> <br /> Et tortor
          consequat id porta nibh. Nulla facilisi cras fermentum odio eu feugiat
          pretium nibh ipsum. Lorem ipsum dolor sit amet consectetur. Duis ut
          diam quam nulla. Commodo viverra maecenas accumsan lacus. Urna
          porttitor rhoncus dolor purus non enim praesent elementum facilisis.
        </p>

        <Div flex itemsCenter className="space-x-6 self-end">
          <h4 className="uppercase text-myDarkGray">share</h4>
          <Icon icon={Icons.Facebook} className="text-xl cursor-pointer" />
          <Icon icon={Icons.Instagram} className="text-xl cursor-pointer" />
          <Icon icon={Icons.Twitter} className="text-xl cursor-pointer" />
          <Icon icon={Icons.WhatsApp} className="text-xl cursor-pointer" />
        </Div>
      </Div>

      <Separator />

      <Div full flex between itemsCenter className="px-32">
        <Div column pointer className="space-y-3 w-80">
          <Div flex itemsCenter className="space-x-3 text-myDarkGray">
            <Icon icon={Icons.ArrowLeft} className="text-xl" />
            <p className="uppercase text-sm">previous</p>
          </Div>

          <h4 className="text-xl font-thin text-myDarkGray">
            Accessorizing with Accent Chairs: Adding Flair to Any Room
          </h4>
        </Div>

        <Div column pointer className="space-y-3 items-end w-80">
          <Div flex itemsCenter className="space-x-3 text-myDarkGray">
            <p className="uppercase text-sm">next</p>
            <Icon icon={Icons.ArrowRight} className="text-xl" />
          </Div>

          <h4 className="text-xl font-thin text-myDarkGray text-end">
            Furniture Choices for an Eco-Conscious Home
          </h4>
        </Div>
      </Div>

      <Div full flex itemsCenter className="px-32">
        <LeaveComment />
      </Div>

      <Div full grid className="grid-cols-3 gap-4">
        <ItemsBlog classNameImage="aspect-square" />
        <ItemsBlog classNameImage="aspect-square" />
        <ItemsBlog classNameImage="aspect-square" />
      </Div>
    </Wrapper>
  );
};

export default DetailPost;

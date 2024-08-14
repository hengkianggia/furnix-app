import Div from "@/components/Div";
import { Banner1, Banner2 } from "@/components/homepage/Banner";
import Category from "@/components/homepage/Category";
import Header from "@/components/homepage/Header";
import PromotionHome from "@/components/homepage/PromotionHome";
import RatingsCutomer from "@/components/homepage/RatingsCutomer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Div full column className="gap-44">
      <Header />
      <PromotionHome />
      {/* <Separator /> */}
      <Banner1 />
      <Category />
      <RatingsCutomer />
      <Banner2 />
    </Div>
  );
}

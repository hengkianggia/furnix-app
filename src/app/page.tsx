import Div from "@/components/Div";
import { Banner1 } from "@/components/homepage/Banner";
import Header from "@/components/homepage/Header";
import PromotionHome from "@/components/homepage/PromotionHome";
import RatingsCutomer from "@/components/homepage/RatingsCutomer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Div full column className="gap-20">
      <Header />
      <PromotionHome />
      <Separator />
      <Banner1 />
      <Separator />
      <RatingsCutomer />
    </Div>
  );
}

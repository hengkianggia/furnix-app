import Div from "@/components/Div";
import { Banner1, Banner2 } from "@/components/pages/Banner";
import Category from "@/components/pages/homepage/Category";
import Header from "@/components/pages/homepage/Header";
import PromotionHome from "@/components/pages/homepage/PromotionHome";
import RatingsCutomer from "@/components/pages/homepage/RatingsCustomer";


export default function Home() {
  return (
    <Div full column className="gap-44">
      <Header />
      <PromotionHome />
      <Banner1 />
      <Category />
      <RatingsCutomer />
      <Banner2 />
    </Div>
  );
}

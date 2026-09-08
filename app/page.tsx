import Balance from "@/componnets/Balance";
import BookEvet from "@/componnets/BookEvent";
import ExploreSection from "@/componnets/ExploreSection";
import HeaderCarousel from "@/componnets/HeaderCarousel";
import LipsSection from "@/componnets/LipsSection";
import PopularSection from "@/componnets/PopularSection";
import SummerProductSection from "@/componnets/SummerProductSection";
import TrendingSection from "@/componnets/TrendingSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 ">
      <HeaderCarousel />
      <SummerProductSection />
      <LipsSection />
      <ExploreSection />
      <TrendingSection />
      <PopularSection />
      <BookEvet />
      <Balance />
    </main>
  );
}

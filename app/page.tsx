import HeaderCarousel from "@/componnets/HeaderCarousel";
import SummerProductSection from "@/componnets/SummerProductSection";


export default function Home() {
  return (
    <main className="flex flex-col flex-1 ">
      <HeaderCarousel />
      <SummerProductSection />
    
    </main>
  );
}

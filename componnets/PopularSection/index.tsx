"use client";
import Image from "next/image";
import { popularItems } from "@/data/popularItems";

const PopularSection = () => {
  return (
    <section className="m-auto my-20 text-center">
      <h2 className="pb-2 text-2xl">FOR EVERY OCCASION</h2>
      <h3 className="pb-9 text-4xl text-gray-500">
        Our most popular gifts sets
      </h3>
      <div className="flex flex-row flex-wrap justify-center item-center gap-6 mt-20">
        {popularItems.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-70 w-full max-w-105 sm:h-125 sm:w-74.75">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-3xl text-gray-500 my-10">{item.title}</h2>
            <button className="group-hover:text-black group-hover:bg-gray-300 tracking-wider font-serif border border-gray-300   cursor-pointer p-4">
              SHOP NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PopularSection;

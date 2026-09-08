"use client";

import Image from "next/image";
import { popularItems } from "@/data/popularItems";

const PopularSection = () => {
  return (
    <section className="mx-auto my-20 w-full px-4 text-center">
      <h2 className="pb-2 text-2xl">FOR EVERY OCCASION</h2>

      <h3 className="pb-9 text-3xl text-gray-500 sm:text-4xl">
        Our most popular gifts sets
      </h3>

      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {popularItems.map((item, index) => (
          <div
            key={index}
            className="group w-full max-w-[300px] cursor-pointer"
          >
            <div className="relative aspect-[299/357] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 300px"
              />
            </div>

            <h2 className="my-10 text-2xl text-gray-500 sm:text-3xl">
              {item.title}
            </h2>

            <button className="border border-gray-300 p-4 font-serif tracking-wider cursor-pointer transition group-hover:bg-gray-300 group-hover:text-black">
              SHOP NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
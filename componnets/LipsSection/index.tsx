"use client";

import Image from "next/image";
import { useState } from "react";

const LipsSection = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="mx-4 mt-20 mb-20 flex flex-col gap-10 sm:mx-8 md:mx-16 lg:mx-28 lg:mb-50 lg:flex-row-reverse lg:gap-20">
      
      {/* TEXT */}
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 px-4 text-center sm:px-8 lg:items-start lg:px-0 lg:text-left">
        <span className="text-xl tracking-wide text-gray-500">
          FOR MEMBERS ONLY
        </span>

        <h2 className="text-3xl tracking-wide sm:text-4xl">
          Save more on makeup
        </h2>

        <p className="text-base tracking-wide text-gray-500 sm:text-lg">
          When you shop for at least 550 SEK, you will receive a free lip
          glaze and an exclusive voucher with 25% off all makeup products the
          next time you shop!*
        </p>

        <button className="mt-8 w-fit cursor-pointer border px-6 py-3 text-lg sm:mt-10">
          START SHOPPING
        </button>
      </div>

      {/* FLIP CARD */}
      <div
        className="relative h-87.5 w-full flex-1 perspective-[1000px] sm:h-112.5 lg:h-125"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* ROTATING CARD */}
        <div
          className={`relative h-full w-full transition-transform duration-700 transform-3d ${
            flipped ? "transform-[rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT */}
          <div className="absolute inset-0 backface-vhidden">
            <Image
              src="/images/summer-product-image/lipstick.jpg"
              alt="Lips Section"
              fill
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          {/* BACK */}
          <div className="absolute inset-0 transform-[rotateY(180deg)] backface-hidden">
            <Image
              src="/images/summer-product-image/lipstick-1.jpg"
              alt="Lips Section"
              fill
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LipsSection;
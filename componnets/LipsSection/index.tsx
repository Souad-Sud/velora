"use client";

import Image from "next/image";
import { useState } from "react";

const LipsSection = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="flex flex-row-reverse mt-20 mb-50 mx-50 gap-20">
      {/* TEXT */}
      <div className="flex-1 flex flex-col gap-2 items-center justify-center">
        <span className="text-xl tracking-wide text-gray-500">
          FOR MEMBERS ONLY
        </span>

        <h2 className="text-4xl tracking-wide">Save more on makeup</h2>

        <p className="tracking-wide text-lg text-gray-500">
          When you shop for at least 550 SEK, you will receive a free lip glaze
          and an exclusive voucher with 25% off all makeup products the next
          time you shop!*
        </p>

        <button className="w-fit text-lg border py-3 px-6 cursor-pointer mt-10">
          START SHOPPING
        </button>
      </div>

      {/* FLIP CARD */}
      <div
        className="relative flex-1 min-h-125 [perspective:1000px]"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* ROTATING CARD */}
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <Image
              src="/images/summer-product-image/lipstick.jpg"
              alt="Lips Section"
              fill
              className="object-contain"
            />
          </div>

          {/* BACK */}
          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <Image
              src="/images/summer-product-image/lipstick-1.jpg"
              alt="Lips Section"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LipsSection;

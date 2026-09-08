"use client";

import Image from "next/image";

const BookEvet = () => {
  return (
    <section className="mx-10 mt-20 mb-50 flex flex-row-reverse flex-wrap gap-8 lg:mx-20">
      {/* TEXT */}
      <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-[calc(50%-16px)]">
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

      <div className="relative min-h-125 w-full lg:w-[calc(50%-16px)]">
        <Image
          src="/images/bookEvent-1.jpg"
          alt="Lips Section"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default BookEvet;

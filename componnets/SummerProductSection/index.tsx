"use client";

import { useState } from "react";
import { products } from "@/data/summerProduct";
import IntroductionTitle from "../IntroductionTitle";
import SummerProductCard from "../SummerProductCard";

const PRODUCTS_PER_SLIDE = 5;

const SummerProductSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(
    products.length / PRODUCTS_PER_SLIDE
  );

  return (
    <section className="mt-30 w-full mb-30">
      {/* Title */}
      <IntroductionTitle />

      {/* Slider */}
      <div className="mt-30 mx-auto w-full max-w-7xl overflow-hidden px-6 md:px-7 lg:px-2">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map(
            (_, slideIndex) => {
              const slideProducts = products.slice(
                slideIndex * PRODUCTS_PER_SLIDE,
                (slideIndex + 1) * PRODUCTS_PER_SLIDE
              );

              return (
                <div
                  key={slideIndex}
                  className="grid w-full min-w-full grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5"
                >
                  {slideProducts.map((product) => (
                    <SummerProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalSlides > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: totalSlides }).map(
            (_, index) => {
              const isActive =
                currentSlide === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setCurrentSlide(index)
                  }
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    isActive ? "true" : undefined
                  }
                  className="flex h-4 items-center justify-center cursor-pointer"
                >
                  <span
                    className={`block transition-all duration-300 ${
                      isActive
                        ? "h-0.5 w-8 bg-cyan-900"
                        : "h-4 w-4 rounded-full bg-cyan-900"
                    }`}
                  />
                </button>
              );
            }
          )}
        </div>
      )}
    </section>
  );
};

export default SummerProductSection;
"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/summerProduct";
import IntroductionTitle from "../IntroductionTitle";
import SummerProductCard from "../SummerProductCard";

const SummerProductSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(2);

  // Responsive products per slide
  useEffect(() => {
    const updateProductsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerSlide(5);
      } else if (window.innerWidth >= 768) {
        setProductsPerSlide(3);
      } else {
        setProductsPerSlide(2);
      }
    };

    updateProductsPerSlide();

    window.addEventListener(
      "resize",
      updateProductsPerSlide
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateProductsPerSlide
      );
    };
  }, []);

  // Number of slides
  const totalSlides = Math.ceil(
    products.length / productsPerSlide
  );

  // Reset current slide if screen size changes
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(
        Math.max(totalSlides - 1, 0)
      );
    }
  }, [currentSlide, totalSlides]);

  return (
    <section className="mb-30 mt-30 w-full">
      {/* ================================
          INTRODUCTION TITLE
      ================================= */}
      <IntroductionTitle />

      {/* ================================
          SLIDER
      ================================= */}
      <div className="mx-auto mt-20 w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        {/* Slider track */}
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentSlide * 100
            }%)`,
          }}
        >
          {Array.from({
            length: totalSlides,
          }).map((_, slideIndex) => {
            const startIndex =
              slideIndex * productsPerSlide;

            const endIndex =
              startIndex + productsPerSlide;

            const slideProducts =
              products.slice(
                startIndex,
                endIndex
              );

            return (
              <div
                key={slideIndex}
                className="grid w-full min-w-full shrink-0 grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6"
              >
                {slideProducts.map(
                  (product) => (
                    <SummerProductCard
                      key={product.id}
                      product={product}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================
          PAGINATION
      ================================= */}
      {totalSlides > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({
            length: totalSlides,
          }).map((_, index) => {
            const isActive =
              currentSlide === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentSlide(index)
                }
                aria-label={`Go to slide ${
                  index + 1
                }`}
                aria-current={
                  isActive
                    ? "true"
                    : undefined
                }
                className="flex h-4 cursor-pointer items-center justify-center"
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
          })}
        </div>
      )}
    </section>
  );
};

export default SummerProductSection;
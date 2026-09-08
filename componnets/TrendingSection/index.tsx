"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { trendingProducts } from "@/data/trendingProducts";
import { ShoppingCart } from "lucide-react";

const TrendingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(2);

  const [hoveredImages, setHoveredImages] = useState<
    Record<number, string>
  >({});

  const [cart, setCart] = useState<
    typeof trendingProducts
  >([]);

  // ================================
  // ADD TO CART
  // ================================

  const addToCart = (
    item: (typeof trendingProducts)[number]
  ) => {
    setCart((prevCart) => [
      ...prevCart,
      item,
    ]);
  };

  // ================================
  // RESPONSIVE PRODUCTS PER SLIDE
  // ================================

  useEffect(() => {
    const updateProductsPerSlide = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setProductsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        // Tablet
        setProductsPerSlide(3);
      } else {
        // Desktop
        setProductsPerSlide(4);
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

  // ================================
  // CREATE SLIDES
  // ================================

  const slides = [];

  for (
    let i = 0;
    i < trendingProducts.length;
    i += productsPerSlide
  ) {
    slides.push(
      trendingProducts.slice(
        i,
        i + productsPerSlide
      )
    );
  }

  // ================================
  // RESET SLIDE AFTER RESIZE
  // ================================

  useEffect(() => {
    if (
      currentSlide >
      slides.length - 1
    ) {
      setCurrentSlide(
        Math.max(
          0,
          slides.length - 1
        )
      );
    }
  }, [
    productsPerSlide,
    slides.length,
    currentSlide,
  ]);

  // ================================
  // NEXT SLIDE
  // ================================

  const nextSlide = () => {
    if (
      currentSlide <
      slides.length - 1
    ) {
      setCurrentSlide(
        currentSlide + 1
      );
    }
  };

  // ================================
  // PREVIOUS SLIDE
  // ================================

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(
        currentSlide - 1
      );
    }
  };

  return (
    <section className="mx-auto my-20 w-full max-w-[1600px] overflow-hidden px-4 text-center sm:my-28 sm:px-6 lg:my-40 lg:px-8">
      {/* ================================
          TITLE
      ================================= */}

      <h2 className="pb-2 text-xl sm:text-2xl">
        EXPLORE
      </h2>

      <h3 className="pb-8 text-2xl text-gray-500 sm:pb-9 sm:text-3xl lg:text-4xl">
        Trending products
      </h3>

      {/* ================================
          CAROUSEL
      ================================= */}

      <div className="relative w-full">
        {/* Viewport */}
        <div className="w-full overflow-hidden">
          {/* Sliding track */}
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${
                currentSlide * 100
              }%)`,
              transition:
                "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {slides.map(
              (
                slide,
                slideIndex
              ) => (
                /* ================================
                   ONE SLIDE
                ================================= */

                <div
                  key={slideIndex}
                  className="flex w-full min-w-full shrink-0"
                >
                  {slide.map(
                    (item) => (
                      /* ================================
                         PRODUCT
                      ================================= */

                      <div
                        key={item.id}
                        className="
                          w-1/2
                          shrink-0
                          px-1.5
                          sm:w-1/3
                          sm:px-2
                          lg:w-1/4
                          lg:px-3
                        "
                      >
                        <div
                          className="
                            flex
                            min-w-0
                            flex-col
                            bg-white
                            p-2
                            shadow-md
                            sm:p-3
                            lg:h-175
                            lg:p-4
                          "
                        >
                          {/* ================================
                              PRODUCT IMAGE
                          ================================= */}

                          <div
                            className="group relative shrink-0"
                            onMouseLeave={() => {
                              setHoveredImages(
                                (prev) => {
                                  const updated = {
                                    ...prev,
                                  };

                                  delete updated[
                                    item.id
                                  ];

                                  return updated;
                                }
                              );
                            }}
                          >
                            {/* Main Image */}

                            <div
                              className="
                                relative
                                h-48
                                w-full
                                overflow-hidden
                                sm:h-60
                                md:h-64
                                lg:h-75
                              "
                            >
                              <Image
                                src={
                                  hoveredImages[
                                    item.id
                                  ] ||
                                  item.image
                                }
                                alt={
                                  item.title
                                }
                                fill
                                className="object-cover transition-all duration-300"
                                sizes="
                                  (max-width: 639px) 50vw,
                                  (max-width: 1023px) 33vw,
                                  25vw
                                "
                              />
                            </div>

                            {/* ================================
                                VARIANT IMAGES
                            ================================= */}

                            {item.variants &&
                              item.variants
                                .length >
                                0 && (
                                <div className="mt-2 flex flex-wrap justify-center gap-1.5 sm:mt-3 sm:gap-2">
                                  {item.variants.map(
                                    (
                                      variant
                                    ) => (
                                      <div
                                        key={
                                          variant.id
                                        }
                                        className="
                                          relative
                                          h-9
                                          w-9
                                          cursor-pointer
                                          overflow-hidden
                                          border
                                          border-gray-200
                                          transition
                                          hover:border-black
                                          sm:h-12
                                          sm:w-12
                                        "
                                        onMouseEnter={() => {
                                          setHoveredImages(
                                            (
                                              prev
                                            ) => ({
                                              ...prev,
                                              [item.id]:
                                                variant.image,
                                            })
                                          );
                                        }}
                                      >
                                        <Image
                                          src={
                                            variant.image
                                          }
                                          alt={`${item.title} variant`}
                                          fill
                                          className="object-cover"
                                          sizes="48px"
                                        />
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                          </div>

                          {/* ================================
                              INFORMATION
                          ================================= */}

                          <div className="flex min-w-0 flex-1 flex-col">
                            {/* Title */}

                            <h3 className="pt-3 pb-2 text-base sm:pt-4 sm:text-lg lg:text-xl">
                              {item.title}
                            </h3>

                            {/* Description */}

                            <p className="line-clamp-3 text-xs text-gray-500 sm:text-sm lg:text-base">
                              {
                                item.description
                              }
                            </p>

                            {/* Price */}

                            <h4 className="mt-auto pt-4 pb-4 text-base sm:text-lg lg:mb-6 lg:text-xl">
                              {item.price.toFixed(
                                2
                              )}{" "}
                              SEK
                            </h4>

                            {/* Cart button */}

                            <button
                              onClick={() =>
                                addToCart(
                                  item
                                )
                              }
                              aria-label={`Add ${item.title} to cart`}
                              className="
                                flex
                                h-9
                                w-9
                                cursor-pointer
                                items-center
                                justify-center
                                self-center
                                rounded-full
                                border
                                border-black
                                bg-transparent
                                text-black
                                transition
                                hover:border-blue-600
                                hover:text-blue-600
                                sm:h-10
                                sm:w-10
                              "
                            >
                              <ShoppingCart
                                size={
                                  18
                                }
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* ================================
            PREVIOUS BUTTON
        ================================= */}

        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          aria-label="Previous products"
          className="
            absolute
            left-1
            top-1/2
            z-10
            flex
            h-8
            w-8
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            text-lg
            shadow-lg
            transition
            hover:bg-gray-100
            disabled:cursor-not-allowed
            disabled:opacity-30
            sm:left-2
            sm:h-10
            sm:w-10
            sm:text-2xl
            lg:-left-5
          "
        >
          ←
        </button>

        {/* ================================
            NEXT BUTTON
        ================================= */}

        <button
          onClick={nextSlide}
          disabled={
            currentSlide ===
            slides.length - 1
          }
          aria-label="Next products"
          className="
            absolute
            right-1
            top-1/2
            z-10
            flex
            h-8
            w-8
            -translate-y-1/2
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            text-lg
            shadow-lg
            transition
            hover:bg-gray-100
            disabled:cursor-not-allowed
            disabled:opacity-30
            sm:right-2
            sm:h-10
            sm:w-10
            sm:text-2xl
            lg:-right-5
          "
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TrendingSection;
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { trendingProducts } from "@/data/trendingProducts";
import { ShoppingCart } from "lucide-react";

const TrendingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(5);
  const [hoveredImages, setHoveredImages] = useState<Record<number, string>>(
    {},
  );
  const [cart, setCart] = useState<typeof trendingProducts>([]);
  const addToCart = (item: (typeof trendingProducts)[number]) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  // Detect screen size
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

    window.addEventListener("resize", updateProductsPerSlide);

    return () => {
      window.removeEventListener("resize", updateProductsPerSlide);
    };
  }, []);

  // Create slides
  const slides = [];

  for (let i = 0; i < trendingProducts.length; i += productsPerSlide) {
    slides.push(trendingProducts.slice(i, i + productsPerSlide));
  }

  // Make sure current slide still exists after resizing
  useEffect(() => {
    if (currentSlide > slides.length - 1) {
      setCurrentSlide(Math.max(0, slides.length - 1));
    }
  }, [productsPerSlide, slides.length, currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="max-w-[1600px] m-auto my-40 text-center">
      <h2 className="pb-2 text-2xl">EXPLORE</h2>

      <h3 className="pb-9 text-4xl text-gray-500">Trending products</h3>

      {/* Carousel */}
      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden ">
          {/* Sliding track */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {slides.map((slide, slideIndex) => (
              /* One slide */
              <div key={slideIndex} className="flex w-full shrink-0">
                {slide.map((item) => (
                  /* Product */
                  <div
                    key={item.id}
                    className="
                       w-1/2
                       shrink-0
                       px-2
                       sm:w-1/3
                       lg:w-1/4"
                  >
                    <div className="flex h-[700px] flex-col bg-white p-4 shadow-md">
                      {/* Image */}
                      {/* Product Images */}
                      <div
                        className="group relative shrink-0"
                        onMouseLeave={() => {
                          setHoveredImages((prev) => {
                            const updated = { ...prev };
                            delete updated[item.id];
                            return updated;
                          });
                        }}
                      >
                        {/* Main Image */}
                        <div className="relative h-75 w-full overflow-hidden">
                          <Image
                            src={hoveredImages[item.id] || item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-all duration-300"
                          />
                        </div>

                        {/* Variant Images */}
                        {item.variants && item.variants.length > 0 && (
                          <div className="mt-3 flex justify-center gap-2">
                            {item.variants.map((variant) => (
                              <div
                                key={variant.id}
                                className="relative h-12 w-12 cursor-pointer overflow-hidden border border-gray-200 transition hover:border-black"
                                onMouseEnter={() => {
                                  setHoveredImages((prev) => ({
                                    ...prev,
                                    [item.id]: variant.image,
                                  }));
                                }}
                              >
                                <Image
                                  src={variant.image}
                                  alt={`${item.title} variant`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Information */}
                      <div className="flex flex-1 flex-col">
                        <h3 className="pt-4 pb-2 text-xl">{item.title}</h3>

                        <p className="text-gray-500">{item.description}</p>

                        <h4 className="mt-auto pt-4 text-xl mb-10">
                          {item.price.toFixed(2)} SEK
                        </h4>
                        <button
                          onClick={() => addToCart(item)}
                          className="flex
                        
    h-10
    w-10
    cursor-pointer
    items-center
    justify-center
    rounded-full
    border
    border-black
    bg-transparent
    text-black
    transition
    hover:border-blue-600
"
                        >
                          <ShoppingCart size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Previous */}
        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="
            absolute
            -left-5
            top-1/2
            z-10
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-2xl
            shadow-lg
            transition
            hover:bg-gray-100
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          ←
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="
            absolute
            -right-5
            top-1/2
            z-10
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-2xl
            shadow-lg
            transition
            hover:bg-gray-100
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TrendingSection;

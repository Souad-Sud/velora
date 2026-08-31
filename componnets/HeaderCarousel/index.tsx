"use client";
import { useState, useEffect } from "react";
import { slides } from "@/data/slides";

const HeaderCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(time);
  }, []);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const slide = slides[current];
  return (
    <section className="relative h-125 w-full overflow-hidden sm:h-150 lg:h-175">
      {/* Image / Video */}
      <div className="absolute inset-0">
        {slide.type === "video" ? (
          <video
            key={slide.src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ) : (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-12 left-1/2 z-10 w-full  -translate-x-1/2 text-center text-white sm:bottom-16 lg:bottom-20 ">
        {" "}
        <h1 className="mb-4 text-4xl font-light md:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="mb-6 text-center text-white/80 md:text-lg">
          {slide.description}
        </p>
        <button className="bg-white px-8 py-4 text-xs cursor-pointer tracking-[0.2em] text-[#242222] transition hover:bg-[#242222] hover:text-white">
          {slide.button}
        </button>
      </div>

      {/* Previous */}
      <button
        onClick={previousSlide}
        className="absolute cursor-pointer left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-2xl text-white hover:bg-white/70"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-2xl text-white hover:bg-white/70"
      >
        ›
      </button>
    </section>
  );
};

export default HeaderCarousel;

"use client";

import Image from "next/image";
import { useState } from "react";
import type {
  Summerproducts,
  ProductVariant,
} from "@/types/summerproducts";

type ProductCardProps = {
  product: Summerproducts;
};

const SummerProductCard = ({
  product,
}: ProductCardProps) => {
  const [hoverVariant, setHoverVariant] =
    useState<ProductVariant | null>(null);

  // Display variant image when hovering
  const displayedImage =
    hoverVariant?.image ?? product.image;

  // Get variant label
  const getVariantLabel = (
    variant: ProductVariant
  ) => {
    return (
      variant.size ??
      variant.color ??
      variant.parfume ??
      variant.title ??
      "Variant"
    );
  };

  return (
    <article className="flex gap-5  w-full min-w-0 max-w-full flex-col overflow-hidden">
      {/* =================================
          PRODUCT IMAGE
      ================================== */}
      <div className="relative aspect-3/4 py-1 w-full overflow-hidden">
        <Image
          src={displayedImage}
          alt={product.title}
          fill
          className="object-contain transition-opacity duration-300"
          sizes="
            (max-width: 767px) 50vw,
            (max-width: 1023px) 33vw,
            20vw
          "
        />
      </div>

      {/* =================================
          PRODUCT INFORMATION
      ================================== */}
      <div className="mt-4 flex h-full min-w-0 max-w-full flex-col overflow-hidden bg-slate-50 p-2 sm:p-3">
        {/* Product title */}
        <h2 className="min-w-0 max-w-full truncate pt-1 text-lg font-medium sm:text-xl lg:text-2xl">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-1 line-clamp-2 min-w-0 max-w-full pt-1.5 pb-1.5 text-sm text-gray-500 sm:text-base">
          {product.description}
        </p>

        {/* =================================
            VARIANTS
        ================================== */}
        {product.variants &&
          product.variants.length > 0 && (
            <div className="mt-3 flex min-w-0 max-w-full flex-wrap gap-2 overflow-hidden sm:mt-4 sm:gap-3">
              {product.variants.map(
                (variant) => {
                  if (
                    !variant ||
                    !variant.image
                  ) {
                    return null;
                  }

                  const variantLabel =
                    getVariantLabel(
                      variant
                    );

                  return (
                    <div
                      key={variant.id}
                      className="min-w-0 max-w-full cursor-pointer"
                      onMouseEnter={() =>
                        setHoverVariant(
                          variant
                        )
                      }
                      onMouseLeave={() =>
                        setHoverVariant(null)
                      }
                    >
                      {/* Variant image */}
                      <div className="relative h-10 w-10 overflow-hidden border border-gray-200 sm:h-12 sm:w-12">
                        <Image
                          src={
                            variant.image
                          }
                          alt={
                            variantLabel
                          }
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>

                      {/* Variant label */}
                      <span className="mt-1 block max-w-16 truncate text-xs text-gray-500 sm:max-w-20">
                        {
                          variantLabel
                        }
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          )}

        {/* Price */}
        <h3 className="mt-3 text-lg text-mauve-600 sm:text-xl lg:text-2xl">
          {product.price.toFixed(2)} kr
        </h3>
      </div>
    </article>
  );
};

export default SummerProductCard;
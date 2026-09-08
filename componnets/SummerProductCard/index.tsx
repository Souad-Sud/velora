"use client";

import Image from "next/image";
import { useState } from "react";
import type { Summerproducts, ProductVariant } from "@/types/summerproducts";

type ProductCardProps = {
  product: Summerproducts;
};

const SummerProductCard = ({ product }: ProductCardProps) => {
  const [hoverVariant, setHoverVariant] = useState<ProductVariant | null>(null);

  // Main image
  // If a variant is hovered, show the variant image.
  // Otherwise show the normal product image.
  const displayedImage = hoverVariant?.image ?? product.image;

  // Get the text to display under each variant
  const getVariantLabel = (variant: ProductVariant) => {
    return (
      variant.size ??
      variant.color ??
      variant.parfume ??
      variant.title ??
      "Variant"
    );
  };

  return (
    <article className="w-full min-w-0">
      {/* =================================
          PRODUCT IMAGE
      ================================== */}
      <div className="relative aspect-3/4 w-full overflow-hidden ">
        <Image
          src={displayedImage}
          alt={product.title}
          fill
          className="object-contain transition-opacity duration-300"
          sizes="10vw"
        />
      </div>

      {/* =================================
          PRODUCT INFORMATION
      ================================== */}
      <div className="mt-4 flex h-full flex-col bg-slate-50 p-2">
        <h2 className="text-2xl font-medium pt-1">{product.title}</h2>

        <p className="mt-1 line-clamp-2 text-md pt-1.5 pb-1.5 text-gray-500">
          {product.description}
        </p>
            {product.variants && product.variants.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {product.variants.map((variant) => {
            // Safety check
            if (!variant || !variant.image) {
              return null;
            }

            const variantLabel = getVariantLabel(variant);

            return (
              <div
                key={variant.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoverVariant(variant)}
                onMouseLeave={() => setHoverVariant(null)}
              >
                {/* Variant image */}
                <div className="relative h-12 w-12 overflow-hidden border border-gray-200">
                  <Image
                    src={variant.image}
                    alt={variantLabel}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                {/* Variant label */}
                <span className="mt-1 block max-w-20 text-xs text-gray-500">
                  {variantLabel}
                </span>
              </div>
            );
          })}
        </div>
      )}

        <h3 className="mt-3 text-2xl text-mauve-600">{product.price.toFixed(2)} kr</h3>
      </div>

      {/* =================================
          VARIANTS
      ================================== */}
  
    </article>
  );
};

export default SummerProductCard;

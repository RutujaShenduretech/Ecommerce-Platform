"use client"
import { Product } from "@/types/product";
import Link from "next/link";

type Props = {
  product: Product;
};

const categoryStyles: Record<
  string,
  {
    label: string;
    badgeClass: string;
  }
> = {
  Men: {
    label: "MEN",
    badgeClass: "bg-black text-white",
  },

  Women: {
    label: "WOMEN",
    badgeClass: "bg-white text-black",
  },

  Kids: {
    label: "KIDS",
    badgeClass: "bg-white text-black",
  },

  "New Arrivals": {
    label: "NEW",
    badgeClass: "bg-black text-white",
  },

  "New & Latest": {
    label: "LATEST",
    badgeClass: "bg-black text-white",
  },

  Sports: {
    label: "SPORTS",
    badgeClass: "bg-white text-black",
  },

  Running: {
    label: "RUNNING",
    badgeClass: "bg-black text-white",
  },

  Basketball: {
    label: "BASKETBALL",
    badgeClass: "bg-white text-black",
  },

  Volleyball: {
    label: "VOLLEYBALL",
    badgeClass: "bg-black text-white",
  },

  Lifestyle: {
    label: "LIFESTYLE",
    badgeClass: "bg-white text-black",
  },

  Training: {
    label: "TRAINING",
    badgeClass: "bg-black text-white",
  },
};

export default function ProductCard({ product }: Props) {
  const category = categoryStyles[product.category] ?? {
    label: product.category.toUpperCase(),
    badgeClass: "bg-white text-black",
  };

  return (
    <article className="group min-w-0">
      {/* PRODUCT IMAGE */}
      <Link
        href={`/products/${product.id}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-neutral-100">

          {/* CATEGORY BADGE */}
          <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
            <span
              className={`rounded-full px-3 py-1.5 text-[10px] font-black tracking-[0.15em] shadow-sm ${category.badgeClass}`}
            >
              {category.label}
            </span>

            {product.badge && (
              <span className="rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-wide text-black shadow-sm backdrop-blur">
                {product.badge}
              </span>
            )}
          </div>

          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* DARK HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          {/* VIEW PRODUCT BUTTON */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="block rounded-full bg-black px-5 py-3.5 text-center text-xs font-bold tracking-wide text-white shadow-xl">
              VIEW PRODUCT →
            </span>
          </div>

          {/* QUICK ACTION */}
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            aria-label={`Add ${product.name} to wishlist`}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm backdrop-blur transition hover:scale-105"
          >
            ♡
          </button>
        </div>
      </Link>

      {/* PRODUCT INFORMATION */}
      <div className="px-1 pt-5">

        {/* CATEGORY */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          {product.category}
        </p>

        {/* NAME + PRICE */}
        <div className="mt-2 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link
              href={`/products/${product.id}`}
              className="block truncate text-base font-bold tracking-tight transition hover:text-black/60 sm:text-lg"
            >
              {product.name}
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-1 line-clamp-1 text-xs text-black/45">
              {product.description}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-sm font-black sm:text-base">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            {product.oldPrice && (
              <p className="text-xs text-black/35 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </p>
            )}
          </div>
        </div>

        {/* RATING */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs">
            <span className="text-black">★</span>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-black/35">/ 5</span>
          </div>

          {/* COLOR DOTS */}
          <div className="flex items-center gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={color}
                title={color}
                className="h-3 w-3 rounded-full border border-black/15 bg-neutral-300"
              />
            ))}

            {product.colors.length > 3 && (
              <span className="ml-1 text-[10px] text-black/40">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
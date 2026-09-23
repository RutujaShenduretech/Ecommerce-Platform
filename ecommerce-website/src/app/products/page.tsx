"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = [
    "All",
    "Running",
    "Training",
    "Lifestyle",
    "Basketball",
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
     {/* =========================
    PREMIUM SHOP HEADER
========================= */}
<section className="relative mb-10 overflow-hidden rounded-[2rem] bg-black sm:mb-14">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1800&q=85"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full scale-110 object-cover blur-[3px]"
  />

  {/* Blur + Overlay */}
  <div className="absolute inset-0 bg-white/95 backdrop-blur-[8px]" />

  {/* Subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40" />

  {/* Content */}
  <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

      {/* Heading */}
      <div className="max-w-3xl">

        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-black" />

          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-black/50 sm:text-[11px]">
            ShopSphere Collection
          </p>
        </div>

        <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          ALL
          <span className="block text-black/30">
            PRODUCTS.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm font-medium leading-6 text-black/55 sm:text-base">
          Discover performance-inspired footwear and everyday essentials
          designed for movement, comfort and modern style.
        </p>

      </div>

      {/* Product Count */}
      <div className="self-start lg:self-auto">

        <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-xl shadow-black/5 backdrop-blur-xl">

          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black" />
          </span>

          <span className="text-xs font-black uppercase tracking-[0.15em] text-black/70">
            {filteredProducts.length} Products
          </span>

        </div>

      </div>
    </div>
  </div>

  {/* Bottom decorative line */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />
</section>


{/* =========================
    PREMIUM FILTER CONTROLS
========================= */}
<section className="mb-12">
  <div className="rounded-[1.75rem] border border-black/10 bg-neutral-100 p-3 sm:p-4">

    {/* Search */}
    <div className="relative mb-3">
      <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-black/40">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </div>

      <input
        type="search"
        placeholder="Search products, styles or categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-14 w-full rounded-2xl border border-black/5 bg-white pl-12 pr-5 text-sm font-medium outline-none transition placeholder:text-black/30 focus:border-black/20 focus:ring-2 focus:ring-black/10"
      />
    </div>

    {/* Filters */}
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">

      {/* Category */}
      <div className="relative">
        <label className="pointer-events-none absolute left-4 top-2 text-[9px] font-black uppercase tracking-[0.18em] text-black/35">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-16 w-full appearance-none rounded-2xl border border-black/5 bg-white px-4 pb-1 pt-6 text-sm font-bold outline-none transition hover:border-black/15 focus:border-black/30 focus:ring-2 focus:ring-black/10"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-black/40">
          ↓
        </span>
      </div>

      {/* Sort */}
      <div className="relative">
        <label className="pointer-events-none absolute left-4 top-2 text-[9px] font-black uppercase tracking-[0.18em] text-black/35">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-16 w-full appearance-none rounded-2xl border border-black/5 bg-white px-4 pb-1 pt-6 text-sm font-bold outline-none transition hover:border-black/15 focus:border-black/30 focus:ring-2 focus:ring-black/10 sm:min-w-[190px]"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-black/40">
          ↓
        </span>
      </div>

      {/* Reset */}
      <button
        type="button"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setSort("featured");
        }}
        className="h-16 rounded-2xl bg-black px-6 text-xs font-black uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black/80 active:translate-y-0 sm:px-8"
      >
        Reset Filters
      </button>
    </div>
  </div>

  {/* Active filter / result information */}
  <div className="mt-4 flex flex-col gap-2 px-1 text-xs sm:flex-row sm:items-center sm:justify-between">
    <p className="text-black/40">
      Showing{" "}
      <span className="font-bold text-black">
        {filteredProducts.length}
      </span>{" "}
      products
      {category !== "All" && (
        <>
          {" "}
          in{" "}
          <span className="font-bold text-black">
            {category}
          </span>
        </>
      )}
    </p>

    {search && (
      <button
        type="button"
        onClick={() => setSearch("")}
        className="w-fit font-bold text-black underline underline-offset-4 transition hover:text-black/50"
      >
        Clear search
      </button>
    )}
  </div>
</section>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-black/50">
          {filteredProducts.length} products
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-neutral-100 py-24 text-center">
          <h2 className="text-2xl font-bold">No products found</h2>

          <p className="mt-2 text-black/50">
            Try another search or category.
          </p>
        </div>
      )}
    </main>
  );
}
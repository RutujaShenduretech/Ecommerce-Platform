"use client";

import Link from "next/link";
import { useMemo, useState, useEffect} from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


const lifestyleSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=2000&q=90",
    eyebrow: "ShopSphere Lifestyle",
    title: ["EVERYDAY", "LOOKS."],
    description:
      "Modern essentials designed for everyday movement, effortless comfort and confident street style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=90",
    eyebrow: "New Lifestyle",
    title: ["STYLE", "WITHOUT", "LIMITS."],
    description:
      "Clean silhouettes and versatile pieces made to move naturally through your everyday.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2000&q=90",
    eyebrow: "The Everyday Edit",
    title: ["OWN", "YOUR", "STYLE."],
    description:
      "From casual days to weekend plans, discover pieces built around your personal style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=2000&q=90",
    eyebrow: "ShopSphere Collection",
    title: ["MOVE", "LOOK", "GOOD."],
    description:
      "Premium everyday footwear and essentials designed for comfort, confidence and movement.",
  },
];

  
const lifestyleHighlights = [
  {
    title: "EVERYDAY",
    subtitle: "Comfort",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=85",
  },
  {
    title: "STREET",
    subtitle: "Style",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=1400&q=85",
  },
  {
    title: "MOVE",
    subtitle: "Different",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1400&q=85",
  },
];

export default function LifestyleHero() {
  const [current, setCurrent] = useState(0);
  const slide = lifestyleSlides[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lifestyleSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  
  const [sort, setSort] = useState("featured");

  const lifestyleProducts = useMemo(() => {
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === "lifestyle"
    );

    if (sort === "low") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      return [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [sort]);

  return (
    <main className="bg-white text-black">

      {/* =====================================================
          HERO
      ====================================================== */}
 
    <section className="relative min-h-[650px] overflow-hidden bg-black sm:min-h-[760px]">

      {/* =====================================================
          SLIDES
      ====================================================== */}
      {lifestyleSlides.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-in-out ${
            index === current
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Editorial gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:min-h-[760px] sm:px-8 lg:px-10">

        <div
          key={current}
          className="max-w-4xl text-white animate-[lifestyleFadeUp_0.8s_ease-out]"
        >

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-white/60">
            {slide.eyebrow}
          </p>

          <h1 className="text-6xl font-black leading-[0.84] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-[9rem]">
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <a
              href="#lifestyle-products"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90"
            >
              Shop Lifestyle
            </a>

            <Link
              href="/products"
              className="rounded-full border border-white/40 px-8 py-4 text-center text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
            >
              Explore All
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          SLIDER CONTROLS
      ====================================================== */}
      <div className="absolute bottom-8 left-5 right-5 flex items-end justify-between sm:left-8 sm:right-8 lg:left-10 lg:right-10">

        {/* Progress indicators */}
        <div className="flex gap-2">

          {lifestyleSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to lifestyle slide ${index + 1}`}
              className="group h-1.5 w-12 overflow-hidden rounded-full bg-white/30 sm:w-20"
            >
              <span
                className={`block h-full rounded-full bg-white transition-all duration-300 ${
                  index === current ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}

        </div>

        {/* Slide counter */}
        <div className="text-xs font-bold tracking-[0.2em] text-white/60">
          {String(current + 1).padStart(2, "0")}
          {" / "}
          {String(lifestyleSlides.length).padStart(2, "0")}
        </div>

      </div>

    </section>
  



      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/40">
              Designed for everyday
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-5xl lg:text-7xl">
              STYLE THAT MOVES
              <br />
              WITH YOU.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-black/50 lg:pb-2">
            From morning coffee runs to weekend plans, discover versatile
            pieces created to fit naturally into your everyday lifestyle.
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURE COLLECTIONS
      ====================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">

          {lifestyleHighlights.map((item, index) => (
            <Link
              href="#lifestyle-products"
              key={item.title}
              className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-neutral-100 sm:min-h-[520px]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-white/70">
                  {item.subtitle}
                </p>

                <span className="mt-5 inline-block text-xs font-bold tracking-wide underline underline-offset-4">
                  EXPLORE →
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* =====================================================
          SPLIT EDITORIAL BANNER
      ====================================================== */}
      <section className="bg-neutral-100">

        <div className="mx-auto grid max-w-[1100px] lg:grid-cols-2">

          <div className="relative min-h-[500px] overflow-hidden sm:min-h-[620px]">

            <img
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1400&q=85"
              alt="Lifestyle clothing"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div className="flex min-h-[500px] items-center px-7 py-16 sm:px-12 lg:min-h-[620px] lg:px-20">

            <div className="max-w-xl">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                The Everyday Edit
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl">
                LESS
                <br />
                EFFORT.
                <br />
                MORE
                <br />
                STYLE.
              </h2>

              <p className="mt-7 text-sm leading-7 text-black/55">
                Clean silhouettes, versatile colors and comfortable
                materials come together for a collection made to work
                beyond the gym.
              </p>

              <Link
                href="/products?category=Lifestyle"
                className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/80"
              >
                Shop The Edit →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT SECTION
      ====================================================== */}
      <section
        id="lifestyle-products"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >

        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <div className="flex flex-col gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                Shop Lifestyle
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
                EVERYDAY ESSENTIALS.
              </h2>

              <p className="mt-3 text-sm text-black/45">
                {lifestyleProducts.length} products
              </p>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">

              <label
                htmlFor="lifestyle-sort"
                className="text-xs font-bold uppercase tracking-wider text-black/40"
              >
                Sort
              </label>

              <select
                id="lifestyle-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-xs font-bold outline-none transition focus:border-black"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>

            </div>

          </div>


          {/* Products */}
          {lifestyleProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {lifestyleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-2xl">
                ✦
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Coming Soon
              </h3>

              <p className="mt-2 text-sm text-black/45">
                New lifestyle products are on their way.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
              >
                Browse All Products
              </Link>

            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          CATEGORY STRIP
      ====================================================== */}
      <section className="border-y border-black/10">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          {[
            ["01", "MEN", "/products?category=Men"],
            ["02", "WOMEN", "/products?category=Women"],
            ["03", "KIDS", "/products?category=Kids"],
            ["04", "NEW", "/products?category=New%20Arrivals"],
          ].map(([number, title, href]) => (
            <Link
              key={number}
              href={href}
              className="group border-black/10 p-7 transition hover:bg-black hover:text-white sm:p-10 lg:border-r last:lg:border-r-0"
            >

              <span className="text-[10px] font-bold tracking-[0.3em] text-black/30 transition group-hover:text-white/40">
                {number}
              </span>

              <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">
                {title}
              </h3>

              <p className="mt-3 text-xs text-black/40 transition group-hover:text-white/50">
                EXPLORE →
              </p>

            </Link>
          ))}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">
            ShopSphere Lifestyle
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
            MAKE EVERYDAY
            <br />
            YOUR STYLE.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55">
            Discover footwear and essentials designed for the way
            you actually live.
          </p>

          <Link
            href="/products?category=Lifestyle"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:scale-105 hover:bg-white/90"
          >
            SHOP LIFESTYLE →
          </Link>

        </div>

      </section>

    </main>
  );
}
"use client";

import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useMemo, useState, useEffect} from "react";


const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1800&q=85",
    eyebrow: "ShopSphere Running",
    title: ["RUN", "YOUR", "WAY."],
    description:
      "Lightweight comfort, responsive cushioning and modern performance footwear designed to keep you moving.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1800&q=85",
    eyebrow: "Performance Collection",
    title: ["MOVE", "WITH", "PURPOSE."],
    description:
      "Engineered for everyday movement with comfort, confidence and performance in every step.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1800&q=85",
    eyebrow: "New Season",
    title: ["STEP", "INTO", "MORE."],
    description:
      "Discover fresh silhouettes built for your runs, workouts and everyday lifestyle.",
  },
];


export default function RunningPage() {
  const [sort, setSort] = useState("featured");

  const runningProducts = useMemo(() => {
    const filtered = products.filter(
      (product) =>
        product.category.toLowerCase() === "running"
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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  
  return (
    <main className="bg-white text-black">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}




    <section className="relative min-h-[620px] overflow-hidden bg-black sm:min-h-[720px]">
      {/* Background Images */}
      {slides.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
            index === current
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:min-h-[720px] sm:px-8 lg:px-10">
        <div
          key={current}
          className="max-w-3xl text-white animate-[fadeUp_0.8s_ease-out]"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
            {slide.eyebrow}
          </p>

          <h1 className="text-6xl font-black leading-[0.86] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-9xl">
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#running-products"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90"
            >
              Shop Running
            </a>

            <Link
              href="/products"
              className="rounded-full border border-white/40 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
            >
              View All Shoes
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-5 right-5 flex items-end justify-between sm:left-8 sm:right-8 lg:left-10 lg:right-10">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group h-1.5 w-14 overflow-hidden rounded-full bg-white/30 sm:w-20"
            >
              <span
                className={`block h-full rounded-full bg-white transition-all ${
                  index === current ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        <span className="text-xs font-bold tracking-[0.2em] text-white/60">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>




      {/* ================================================= */}
      {/* INTRO */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Performance Collection
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Built for the miles ahead.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/55 sm:text-base">
            Whether you're preparing for your first 5K or simply enjoying
            your daily run, discover footwear designed around comfort,
            stability and movement.
          </p>

        </div>

      </section>


      {/* ================================================= */}
      {/* FEATURE CARDS */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

        <div className="grid gap-5 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-neutral-100">

            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&q=85"
              alt="Daily running"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Everyday
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Daily Runs
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Comfort for every morning mile.
              </p>

            </div>
          </div>


          {/* Card 2 */}
          <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-neutral-100">

            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=85"
              alt="Performance running"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Performance
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Go Further
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Responsive footwear for serious movement.
              </p>

            </div>
          </div>


          {/* Card 3 */}
          <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-neutral-100">

            <img
              src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=85"
              alt="Running lifestyle"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Lifestyle
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Run Everyday
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Performance-inspired style beyond the track.
              </p>

            </div>
          </div>


        </div>

      </section>

<section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
          Explore Collections
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
          RUN FOR EVERYONE.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-black/50">
        Performance-inspired running styles designed for women and kids,
        combining comfort, movement and everyday style.
      </p>
    </div>

    {/* Collection Cards */}
    <div className="grid gap-5 md:grid-cols-2">

      {/* Women */}
      <Link
        href="/products?category=Women"
        className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-neutral-100 sm:min-h-[620px]"
      >
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=85"
          alt="Women running"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Women's Running
          </p>

          <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
            RUN STRONG.
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Lightweight running styles built for everyday miles,
            workouts and everything in between.
          </p>

          <span className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold text-black transition group-hover:bg-white/80">
            SHOP WOMEN →
          </span>
        </div>
      </Link>

      {/* Kids */}
      <Link
        href="/products?category=Kids"
        className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-neutral-100 sm:min-h-[620px]"
      >
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&q=85"
          alt="Kids running"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Kids' Running
          </p>

          <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
            PLAY. RUN. REPEAT.
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Comfortable, lightweight styles made for active kids
            who never stop moving.
          </p>

          <span className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold text-black transition group-hover:bg-white/80">
            SHOP KIDS →
          </span>
        </div>
      </Link>

    </div>
  </div>
</section>
      {/* ================================================= */}
      {/* PRODUCTS */}
      {/* ================================================= */}

      <section
        id="running-products"
        className="bg-neutral-50 py-20 sm:py-24 lg:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Header */}

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                Running Collection
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Find your pace.
              </h2>

              <p className="mt-3 text-sm text-black/50">
                {runningProducts.length} running styles available
              </p>

            </div>


            {/* Sort */}

            <div className="flex items-center gap-3">

              <label
                htmlFor="sort"
                className="text-xs font-bold uppercase tracking-wider text-black/40"
              >
                Sort
              </label>

              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold outline-none transition focus:border-black"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

            </div>

          </div>


          {/* Product Grid */}

          {runningProducts.length > 0 ? (

            <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

              {runningProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-[2rem] bg-white px-6 py-20 text-center">

              <div className="text-4xl">
                👟
              </div>

              <h3 className="mt-5 text-2xl font-black">
                No running shoes found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm text-black/50">
                We don't have running products available right now.
              </p>

              <Link
                href="/products"
                className="mt-7 inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white"
              >
                Browse All Products
              </Link>

            </div>

          )}

        </div>

      </section>


      {/* ================================================= */}
      {/* PERFORMANCE BANNER */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1800&q=85"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />

        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Designed To Move
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              EVERY
              <br />
              STEP
              <br />
              COUNTS.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Discover footwear created to support your everyday movement,
              from the first step to the final mile.
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* BENEFITS */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-black/10 p-7">
            <span className="text-2xl">⚡</span>

            <h3 className="mt-6 font-black">
              Lightweight
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Designed to keep every stride feeling light and comfortable.
            </p>
          </div>


          <div className="rounded-3xl border border-black/10 p-7">
            <span className="text-2xl">◉</span>

            <h3 className="mt-6 font-black">
              Responsive
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Built for smooth transitions and confident movement.
            </p>
          </div>


          <div className="rounded-3xl border border-black/10 p-7">
            <span className="text-2xl">✓</span>

            <h3 className="mt-6 font-black">
              Everyday Comfort
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Comfortable designs for daily runs and active lifestyles.
            </p>
          </div>


          <div className="rounded-3xl border border-black/10 p-7">
            <span className="text-2xl">★</span>

            <h3 className="mt-6 font-black">
              Premium Style
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Performance-inspired designs that look great beyond the track.
            </p>
          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section className="mx-5 mb-16 overflow-hidden rounded-[2rem] bg-neutral-100 sm:mx-8 lg:mx-10">

        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 sm:py-24">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
            Your Run Starts Here
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Find the shoes that match your pace.
          </h2>

          <Link
            href="/products"
            className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-black/80"
          >
            Explore All Collections
          </Link>

        </div>

      </section>

    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=90",
    name: "AURA MOTION",
    category: "WOMEN / PERFORMANCE",
    price: "₹4,999",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&q=90",
    name: "LUNA STREET",
    category: "WOMEN / LIFESTYLE",
    price: "₹4,499",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1000&q=90",
    name: "NOVA RUN",
    category: "WOMEN / RUNNING",
    price: "₹5,299",
  },
];

export default function WomenHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const product = products[current];

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#e9e7e2] sm:min-h-[850px]">

      {/* Background decorative shapes */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-neutral-300/60 blur-3xl" />

      {/* Giant background typography */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden">
        <p className="whitespace-nowrap text-center text-[24vw] font-black leading-none tracking-[-0.09em] text-black/[0.035]">
          WOMEN
        </p>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-24 sm:min-h-[850px] sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-20">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-black" />

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50">
                ShopSphere Women
              </p>
            </div>

            <h1 className="max-w-3xl text-[4.5rem] font-black leading-[0.82] tracking-[-0.07em] text-black sm:text-[7rem] lg:text-[8rem]">
              MOVE
              <span className="block text-black/25">
                YOUR
              </span>
              WAY.
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-black/55 sm:text-base">
              Performance, confidence and everyday style designed for women
              who move differently.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/products?category=Women"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-black px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80"
              >
                Shop Women

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/products?category=New Arrivals"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-black backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                New Arrivals
              </Link>

            </div>

            {/* Small stats */}
            <div className="mt-12 flex gap-8 border-t border-black/10 pt-6">

              <div>
                <p className="text-xl font-black">24/7</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                  Movement
                </p>
              </div>

              <div>
                <p className="text-xl font-black">360°</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                  Comfort
                </p>
              </div>

              <div>
                <p className="text-xl font-black">NEW</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                  Collection
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT 3D PRODUCT */}
          <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[520px]">

            {/* Rotating circle */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-black/10 sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]">
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-black" />
            </div>

            <div className="absolute h-[270px] w-[270px] rounded-full bg-white/50 blur-xl sm:h-[390px] sm:w-[390px]" />

            {/* Product shadow */}
            <div className="absolute bottom-12 h-10 w-64 rounded-[50%] bg-black/20 blur-2xl sm:w-80" />

            {/* Product */}
            <div
              key={current}
              className="relative z-10 animate-[productFloat_4s_ease-in-out_infinite]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[280px] w-[380px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-1000 sm:h-[400px] sm:w-[520px] lg:h-[450px] lg:w-[580px]"
              />
            </div>

            {/* Floating product information */}
            <div className="absolute bottom-3 right-0 z-20 w-48 rounded-2xl border border-white/50 bg-white/65 p-4 shadow-2xl backdrop-blur-xl sm:right-5 sm:w-56">

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black/40">
                {product.category}
              </p>

              <h2 className="mt-2 text-sm font-black tracking-tight sm:text-base">
                {product.name}
              </h2>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-black">
                  {product.price}
                </span>

                <span className="text-xs font-bold">
                  →
                </span>
              </div>

            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-3 left-0 flex gap-2 sm:left-5">
              {products.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show product ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    current === index
                      ? "w-10 bg-black"
                      : "w-5 bg-black/20"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-black/10 bg-white/30 backdrop-blur-xl">
        <div className="flex min-w-max animate-[ticker_20s_linear_infinite] gap-12 py-4">
          {[
            "WOMEN'S COLLECTION",
            "MOVE WITH CONFIDENCE",
            "NEW SEASON",
            "SHOPSPHERE",
            "EVERYDAY PERFORMANCE",
          ].map((text) => (
            <span
              key={text}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-black/45"
            >
              {text} •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
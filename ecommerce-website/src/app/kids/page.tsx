"use client";

import Link from "next/link";
import { products } from "@/data/products";

export default function KidsPage() {
  const kidsProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes("kids") ||
      product.category.toLowerCase().includes("children")
  );

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[680px] overflow-hidden bg-black sm:min-h-[760px]">

        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1800&q=90"
          alt="Kids fashion"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:min-h-[760px] sm:px-8 lg:px-10">

          <div className="max-w-3xl text-white">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white/70" />

              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
                ShopSphere Kids
              </p>
            </div>

            <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-9xl">
              PLAY.
              <br />
              MOVE.
              <br />
              GROW.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Comfortable everyday styles and sporty essentials designed
              for every adventure, every game and every little moment.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#kids-collection"
                className="rounded-full bg-white px-7 py-4 text-center text-xs font-black tracking-wide text-black transition duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                SHOP KIDS
              </a>

              <Link
                href="/products"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-xs font-black tracking-wide text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
              >
                VIEW ALL PRODUCTS
              </Link>

            </div>

          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-7 left-0 right-0 px-5 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
            <span>Kids Collection</span>
            <span>01 / 04</span>
          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
              Designed For Movement
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">
              LITTLE
              <br />
              <span className="text-black/30">
                MOVERS.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-black/50 sm:text-base">
            From playground adventures to weekend outings, ShopSphere Kids
            combines comfort, durability and modern style in one collection.
            Easy-to-wear silhouettes keep up with every move.
          </p>

        </div>
      </section>


      {/* ================= CATEGORY CARDS ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Shoes */}
          <Link
            href="/products?category=Kids"
            className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-black"
          >
            <img
              src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1000&q=85"
              alt="Kids shoes"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Collection
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight">
                KIDS SHOES
              </h3>

              <p className="mt-2 text-xs text-white/60">
                Everyday comfort & active styles
              </p>

              <span className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-[10px] font-black text-black">
                SHOP →
              </span>
            </div>
          </Link>


          {/* Sport */}
          <Link
            href="/products?category=Sports"
            className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-neutral-200"
          >
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=85"
              alt="Kids sports"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Active
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight">
                PLAY HARD
              </h3>

              <p className="mt-2 text-xs text-white/60">
                Built for games and adventures
              </p>

              <span className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-[10px] font-black text-black">
                EXPLORE →
              </span>
            </div>
          </Link>


          {/* Everyday */}
          <Link
            href="/products?category=Kids"
            className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-neutral-200 sm:col-span-2 lg:col-span-1"
          >
            <img
              src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1000&q=85"
              alt="Kids lifestyle"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Everyday
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight">
                DAILY STYLE
              </h3>

              <p className="mt-2 text-xs text-white/60">
                Comfortable looks for every day
              </p>

              <span className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-[10px] font-black text-black">
                SHOP NOW →
              </span>
            </div>
          </Link>

        </div>
      </section>


      {/* ================= FEATURE BANNER ================= */}
      <section className="relative overflow-hidden bg-black">

        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">

          <div className="order-2 px-5 py-16 text-white sm:px-8 lg:order-1 lg:px-10 lg:py-24">

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              Made To Move
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              READY
              <br />
              FOR
              <br />
              ANYTHING.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Lightweight materials, comfortable fits and versatile designs
              made for active kids.
            </p>

            <Link
              href="/products?category=Kids"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-xs font-black text-black transition hover:-translate-y-1"
            >
              SHOP THE COLLECTION →
            </Link>

          </div>

          <div className="order-1 h-[500px] overflow-hidden lg:order-2 lg:h-[650px]">

            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&q=90"
              alt="Active kids"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        id="kids-collection"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
              ShopSphere Kids
            </p>

            <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              KIDS COLLECTION.
            </h2>
          </div>

          <Link
            href="/products?category=Kids"
            className="self-start rounded-full border border-black/10 bg-white px-6 py-3 text-xs font-black transition hover:bg-black hover:text-white sm:self-auto"
          >
            VIEW ALL →
          </Link>

        </div>


        {kidsProducts.length > 0 ? (

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">

            {kidsProducts.slice(0, 8).map((product) => (

              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >

                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-neutral-100">

                  {product.badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase shadow-lg">
                      {product.badge}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                    <span className="block rounded-full bg-black px-4 py-3 text-center text-[10px] font-black text-white">
                      VIEW PRODUCT →
                    </span>

                  </div>

                </div>

                <div className="pt-4">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
                    {product.category}
                  </p>

                  <div className="mt-1 flex items-start justify-between gap-2">

                    <h3 className="text-sm font-black sm:text-base">
                      {product.name}
                    </h3>

                    <p className="shrink-0 text-sm font-black">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                  </div>

                  <p className="mt-1 text-xs text-black/45">
                    ★ {product.rating}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="rounded-[2rem] bg-white px-6 py-20 text-center">

            <p className="text-sm text-black/40">
              Kids products will appear here once they are added to your
              product data.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-xs font-black text-white"
            >
              VIEW ALL PRODUCTS
            </Link>

          </div>

        )}

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">

        <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-900 px-6 py-16 text-center text-white sm:px-10 sm:py-24">

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              ShopSphere Kids
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              LET THEM MOVE
              <br />
              THEIR WAY.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/50">
              Discover comfortable styles made for play, movement and
              everyday adventures.
            </p>

            <Link
              href="/products?category=Kids"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-xs font-black text-black transition hover:-translate-y-1 hover:bg-white/90"
            >
              EXPLORE KIDS →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

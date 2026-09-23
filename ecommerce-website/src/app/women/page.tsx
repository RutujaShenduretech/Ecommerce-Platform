"use client"
import WomenHero from "@/components/WomenHero";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function WomenPage() {
  const womenProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === "women"
  );

  return (
    <main className="bg-white">

      {/* Premium Hero */}
      <WomenHero />

      {/* Collection Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
              The Women's Edit
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              DESIGNED
              <span className="block text-black/25">
                FOR HER.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/50 sm:text-base">
            Explore versatile silhouettes created for running, training,
            everyday movement and effortless street style.
          </p>

        </div>

      </section>


      {/* Category Cards */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">

        <div className="grid gap-4 md:grid-cols-3">

          {[
            {
              title: "RUNNING",
              image:
                "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=85",
              link: "/products/running",
            },
            {
              title: "LIFESTYLE",
              image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85",
              link: "/products/lifestyle",
            },
            {
              title: "NEW ARRIVALS",
              image:
                "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85",
              link: "/products?category=New Arrivals",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="group relative h-[420px] overflow-hidden rounded-[2rem] bg-neutral-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <h3 className="text-2xl font-black tracking-tight">
                  {item.title}
                </h3>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}

        </div>

      </section>


      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">

        <div className="mb-10 flex items-end justify-between">

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
              Shop The Collection
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
              WOMEN'S FAVORITES
            </h2>
          </div>

          <Link
            href="/products?category=Women"
            className="hidden rounded-full bg-black px-5 py-3 text-xs font-bold text-white transition hover:bg-black/80 sm:block"
          >
            View All
          </Link>

        </div>

        {womenProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {womenProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-neutral-100 py-20 text-center">
            <p className="text-sm font-semibold text-black/40">
              Women's collection coming soon.
            </p>
          </div>
        )}

      </section>


      {/* Final CTA */}
      <section className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">
            ShopSphere Women
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            MOVE
            <span className="text-white/25"> DIFFERENT.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
            Your movement. Your style. Your rules.
          </p>

          <Link
            href="/products?category=Women"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition hover:-translate-y-1"
          >
            Shop Women's Collection
          </Link>

        </div>

      </section>

    </main>
  );
}
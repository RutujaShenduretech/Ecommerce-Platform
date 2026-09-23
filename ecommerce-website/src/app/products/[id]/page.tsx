"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const { addToCart } = useCart();
  const product = products.find((item) => item.id === id);

  const [size, setSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-black">Product not found</h1>

          <Link
            href="/products"
            className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-widest text-black/40">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-2xl font-bold">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.oldPrice && (
              <span className="text-lg text-black/40 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            )}

            <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
              ★ {product.rating}
            </span>
          </div>

          <p className="mt-6 max-w-xl leading-7 text-black/60">
            {product.description}
          </p>

          {/* Color */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-bold">Color</p>

            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black ${
                    selectedColor === color ? "border-black bg-black text-white" : ""
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <div className="mb-3 flex justify-between">
              <p className="text-sm font-bold">Select Size</p>
              <button className="text-xs underline">Size Guide</button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`rounded-xl border py-3 text-sm font-semibold transition ${
                    size === item
                      ? "border-black bg-black text-white"
                      : "border-black/10 hover:border-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                addToCart(
                  {
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    image: product.image,
                    size: size,
                    color: selectedColor,
                  },
                  quantity
                );
              }}
              className="w-full rounded-full bg-black px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 active:scale-[0.98]"
            >
              ADD TO CART →
            </button>

            <button className="rounded-full border border-black/10 px-7 py-4 text-sm font-bold transition hover:bg-neutral-100">
              ♡ Wishlist
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-black/10 pt-8 text-center text-xs text-black/50">
            <div>Free Shipping</div>
            <div>Easy Returns</div>
            <div>Secure Payment</div>
          </div>
        </div>
      </div>
    </main>
  );
}
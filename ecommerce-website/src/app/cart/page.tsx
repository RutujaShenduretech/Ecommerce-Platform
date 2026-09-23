"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  color?: string;
  quantity: number;
}

export default function CartPage() {
  const cartContext = useCart() as unknown as {
    cart?: CartItem[];
    removeFromCart?: (
      id: number,
      size?: string,
      color?: string
    ) => void;
    updateQuantity?: (
      id: number,
      change: number,
      size?: string,
      color?: string
    ) => void;
    subtotal?: number;
  };

  const cart = cartContext.cart ?? [];
  const removeFromCart =
    cartContext.removeFromCart ?? (() => {});
  const updateQuantity =
    cartContext.updateQuantity ?? (() => {});
  const subtotal = cartContext.subtotal ?? 0;

  const [promo, setPromo] = useState("");

  const shipping =
    subtotal === 0 || subtotal >= 5000 ? 0 : 199;

  const discount =
    promo.trim().toUpperCase() === "SHOP10"
      ? subtotal * 0.1
      : 0;

  const total = subtotal + shipping - discount;

  const itemCount = cart.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-neutral-100 text-black">

      {/* Top spacing for fixed Navbar */}
      <section className="px-4 pb-8 pt-32 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
              SHOPSPHERE / CART
            </p>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  YOUR CART.
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                  Review your selected products before checkout.
                </p>
              </div>

              {cart.length > 0 && (
                <div className="rounded-full bg-white px-5 py-3 text-xs font-bold shadow-sm">
                  {itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}
                </div>
              )}
            </div>
          </div>

          {/* Empty Cart */}
          {cart.length === 0 ? (
            <div className="overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">
              <div className="px-6 py-20 text-center sm:px-12 sm:py-28">

                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-3xl">
                  🛒
                </div>

                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  SHOPSPHERE
                </p>

                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                  YOUR CART IS EMPTY.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
                  Discover something you love and add it to your cart.
                </p>

                <Link
                  href="/products"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-xs font-black tracking-wide text-black transition hover:-translate-y-1 hover:bg-white/90"
                >
                  START SHOPPING →
                </Link>

              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_390px]">

              {/* PRODUCTS */}
              <section className="space-y-4">

                {cart.map((item: CartItem) => (
                  <article
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="rounded-[1.5rem] bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex gap-4 sm:gap-6">

                      {/* Product Image */}
                      <Link
                        href={`/products/${item.id}`}
                        className="relative h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-40 sm:w-36"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex min-w-0 flex-1 flex-col">

                        <div className="flex items-start justify-between gap-3">

                          <div className="min-w-0">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black/35">
                              {item.category}
                            </p>

                            <Link
                              href={`/products/${item.id}`}
                              className="mt-1 block truncate text-base font-black sm:text-lg"
                            >
                              {item.name}
                            </Link>

                            {item.size && (
                              <p className="mt-2 text-xs text-black/50">
                                Size:{" "}
                                <span className="font-bold text-black">
                                  {item.size}
                                </span>
                              </p>
                            )}

                            {item.color && (
                              <p className="mt-1 text-xs text-black/50">
                                Color:{" "}
                                <span className="font-bold text-black">
                                  {item.color}
                                </span>
                              </p>
                            )}
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.id,
                                item.size,
                                item.color
                              )
                            }
                            aria-label={`Remove ${item.name}`}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-lg text-black/50 transition hover:bg-black hover:text-white"
                          >
                            ×
                          </button>

                        </div>

                        <div className="mt-auto flex items-end justify-between gap-3 pt-4">

                          {/* Quantity */}
                          <div className="flex items-center rounded-full border border-black/10">

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1,
                                  item.size,
                                  item.color
                                )
                              }
                              aria-label="Decrease quantity"
                              className="flex h-9 w-9 items-center justify-center text-lg transition hover:bg-black hover:text-white"
                            >
                              −
                            </button>

                            <span className="w-8 text-center text-xs font-black">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  1,
                                  item.size,
                                  item.color
                                )
                              }
                              aria-label="Increase quantity"
                              className="flex h-9 w-9 items-center justify-center text-lg transition hover:bg-black hover:text-white"
                            >
                              +
                            </button>

                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-base font-black sm:text-lg">
                              ₹
                              {(
                                item.price * item.quantity
                              ).toLocaleString("en-IN")}
                            </p>

                            {item.quantity > 1 && (
                              <p className="text-[10px] text-black/35">
                                ₹
                                {item.price.toLocaleString(
                                  "en-IN"
                                )} each
                              </p>
                            )}
                          </div>

                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Continue Shopping */}
                <Link
                  href="/products"
                  className="flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white px-6 py-5 text-sm font-bold transition hover:border-black"
                >
                  <span>Continue Shopping</span>
                  <span>←</span>
                </Link>

              </section>

              {/* SUMMARY */}
              <aside className="lg:sticky lg:top-28 lg:h-fit">

                <div className="rounded-[1.75rem] bg-black p-6 text-white shadow-2xl sm:p-7">

                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                    ORDER SUMMARY
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight">
                    CHECKOUT.
                  </h2>

                  {/* Price Breakdown */}
                  <div className="mt-8 space-y-4 border-b border-white/10 pb-6">

                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">
                        Subtotal
                      </span>
                      <span className="font-bold">
                        ₹{subtotal.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">
                        Shipping
                      </span>

                      <span className="font-bold">
                        {shipping === 0
                          ? "FREE"
                          : `₹${shipping}`}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">
                          Discount
                        </span>

                        <span className="font-bold">
                          −₹
                          {discount.toLocaleString(
                            "en-IN",
                            {
                              maximumFractionDigits: 0,
                            }
                          )}
                        </span>
                      </div>
                    )}

                  </div>

                  {/* Promo */}
                  <div className="mt-6">
                    <label
                      htmlFor="promo"
                      className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-white/40"
                    >
                      PROMO CODE
                    </label>

                    <div className="flex gap-2">
                      <input
                        id="promo"
                        type="text"
                        value={promo}
                        onChange={(e) =>
                          setPromo(e.target.value)
                        }
                        placeholder="Enter code"
                        className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setPromo(promo.trim())
                        }
                        className="rounded-full bg-white px-5 py-3 text-xs font-black text-black transition hover:bg-white/90"
                      >
                        APPLY
                      </button>
                    </div>

                    <p className="mt-2 text-[10px] text-white/30">
                      Try SHOP10 for 10% off.
                    </p>
                  </div>

                  {/* Total */}
                  <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                        TOTAL
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Inclusive of applicable taxes
                      </p>
                    </div>

                    <p className="text-2xl font-black sm:text-3xl">
                      ₹{total.toLocaleString("en-IN")}
                    </p>

                  </div>

                  {/* Checkout */}
                  <button
                    type="button"
                    className="mt-7 w-full rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    PROCEED TO CHECKOUT →
                  </button>

                  {/* Benefits */}
                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 text-center">

                    <div>
                      <p className="text-lg">✓</p>
                      <p className="mt-1 text-[9px] font-bold text-white/40">
                        SECURE
                      </p>
                    </div>

                    <div>
                      <p className="text-lg">↻</p>
                      <p className="mt-1 text-[9px] font-bold text-white/40">
                        EASY RETURNS
                      </p>
                    </div>

                    <div>
                      <p className="text-lg">✦</p>
                      <p className="mt-1 text-[9px] font-bold text-white/40">
                        PREMIUM
                      </p>
                    </div>

                  </div>

                </div>

                {/* Free Shipping Message */}
                {subtotal < 5000 && (
                  <div className="mt-4 rounded-2xl bg-white p-5 text-center shadow-sm">
                    <p className="text-xs font-bold">
                      Add ₹
                      {(5000 - subtotal).toLocaleString(
                        "en-IN"
                      )}{" "}
                      more for FREE shipping.
                    </p>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-black transition-all"
                        style={{
                          width: `${Math.min(
                            (subtotal / 5000) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

              </aside>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/20 bg-black/25 px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6 lg:px-7">

          {/* Main Navbar */}
          <div className="flex h-[68px] items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="group shrink-0 text-xl font-black tracking-[-0.08em] text-white sm:text-2xl"
            >
              <span className="transition-opacity duration-300 group-hover:opacity-70">
                SHOPSPHERE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">

              <Link
                href="/"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Shop
              </Link>

              <Link
                href="/products/running"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Running
              </Link>

              <Link
                href="/products/lifestyle"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Lifestyle
              </Link>

              <Link
                href="/women"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Women
              </Link>

              <Link
                href="/products?category=Kids"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Kids
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Login */}
              <Link
                href="/login"
                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white sm:block"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:block"
              >
                Register
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                aria-label={`Shopping cart with ${cartCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-lg text-black shadow-sm transition-all duration-300 hover:bg-black hover:text-white"
              >
                🛒

                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[9px] font-black text-white ring-2 ring-white">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:hidden"
              >
                {open ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              open
                ? "max-h-[600px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-4">

              <nav className="flex flex-col">

                <Link
                  href="/"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Shop All
                </Link>

                <Link
                  href="/products/running"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Running
                </Link>

                <Link
                  href="/products/lifestyle"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Lifestyle
                </Link>

                <Link
                  href="/women"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Women
                </Link>

                <Link
                  href="/products?category=Kids"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Kids
                </Link>

                {/* Mobile Cart */}
                <Link
                  href="/cart"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  <span>Shopping Cart</span>

                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-black">
                    {cartCount}
                  </span>
                </Link>

                {/* Mobile Auth */}
                <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">

                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="rounded-xl border border-white/20 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMenu}
                    className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-white/90"
                  >
                    Register
                  </Link>

                </div>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
```

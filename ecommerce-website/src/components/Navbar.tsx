

"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart as useCartContext } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

import {
  ShoppingCart,
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { cartCount } = useCartContext();
  const { user, isAuthenticated, loading, logout } = useAuth();

  const closeMenu = () => setOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Unable to logout. Please try again.");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Running", href: "/running" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Women", href: "/women" },
    { label: "Kids", href: "/kids" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-black/40 px-4 shadow-2xl backdrop-blur-xl sm:px-6 lg:px-7">

          <div className="flex h-[68px] items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 text-xl font-black tracking-tighter text-white transition hover:opacity-80 sm:text-2xl"
            >
              SHOPSPHERE
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className="ml-2 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-600/20 px-4 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">

              {/* Cart */}
              <Link
                href="/cart"
                aria-label={`Shopping cart with ${cartCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <ShoppingCart className="h-4 w-4" />

                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white ring-2 ring-black">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              {/* Desktop Authentication */}
              <div className="hidden items-center gap-3 sm:flex">
                {!loading && (
                  isAuthenticated ? (
                    <>
                      <Link
                        href="/dashboard"
                        aria-label="My Profile"
                        title={user?.name || "My Profile"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-600/20 text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                      >
                        <User className="h-5 w-5" />
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        title="Logout"
                        aria-label="Logout"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-red-500/30 hover:bg-red-500/20 hover:text-red-400"
                      >
                        <LogOut className="h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                      >
                        Login
                      </Link>

                      <Link
                        href="/register"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"
                      >
                        Register
                      </Link>
                    </>
                  )
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:hidden"
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              open
                ? "max-h-[600px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-4">

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}

                {isAuthenticated && (
                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-600/20 px-4 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                )}
              </nav>

              {/* Mobile Authentication */}
              <div className="mt-3 border-t border-white/10 pt-4">
                {loading ? null : isAuthenticated ? (
                  <div className="flex items-center justify-between px-2">
                    <Link
                      href="/dashboard"
                      onClick={closeMenu}
                      aria-label="My Profile"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-600/20 text-indigo-300"
                    >
                      <User className="h-5 w-5" />
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/20 px-4 py-2.5 text-xs font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
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
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

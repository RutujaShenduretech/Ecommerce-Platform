


   

 "use client";

import { useState } from "react";
import Link from "next/link";
import { useCart as useCartContext } from "@/context/CartContext";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  LayoutDashboard, 
  LogOut, 
  User 
} from "lucide-react";

interface NavbarProps {
  isAuthenticated?: boolean;
  user?: {
    avatar?: string;
    name?: string;
  };
  onLogout?: () => void;
}

export default function Navbar({
  isAuthenticated = false,
  user,
  onLogout = () => {},
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCartContext();

  const closeMenu = () => setOpen(false);

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
        {/* Main Glassmorphic Container */}
        <div className="rounded-2xl border border-white/10 bg-black/40 px-4 shadow-2xl backdrop-blur-xl sm:px-6 lg:px-7">
          
          {/* Main Desktop & Header Bar */}
          <div className="flex h-[68px] items-center justify-between">

            {/* Brand Logo */}
            <Link
              href="/"
              className="shrink-0 text-xl font-black tracking-tighter text-white transition hover:opacity-80 sm:text-2xl"
            >
              SHOPSPHERE
            </Link>

            {/* Desktop Navigation Links */}
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

              {/* Protected Dashboard Link (Desktop) */}
              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className="ml-2 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-600/20 px-4 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">

              {/* Shopping Cart Button */}
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

              {/* Auth Controls (Desktop) */}
              <div className="hidden items-center gap-3 sm:flex">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3 border-l border-white/10 pl-3">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 rounded-full p-1 transition hover:opacity-80"
                    >
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name || "User Avatar"}
                          className="h-8 w-8 rounded-full border border-indigo-500 object-cover"
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                      <span className="text-xs font-semibold text-white/90">
                        {user?.name || "User"}
                      </span>
                    </Link>

                    <button
                      onClick={onLogout}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-red-500/30 hover:bg-red-500/20 hover:text-red-400"
                      title="Logout"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              open ? "max-h-[600px] pb-5 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-4">
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

                {/* Dashboard Link in Mobile (If Authenticated) */}
                {isAuthenticated && (
                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-600/20 px-4 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                )}

                {/* Mobile Auth Controls */}
                <div className="mt-3 border-t border-white/10 pt-4">
                  {isAuthenticated ? (
                    <div className="flex items-center justify-between gap-3 px-2">
                      <div className="flex items-center gap-3">
                        {user?.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name || "User Avatar"}
                            className="h-9 w-9 rounded-full border border-indigo-500 object-cover"
                          />
                        ) : (
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
                            <User className="h-4 w-4" />
                          </div>
                        )}
                        <span className="text-sm font-semibold text-white">
                          {user?.name || "User"}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onLogout();
                          closeMenu();
                        }}
                        className="flex items-center gap-2 rounded-xl bg-red-500/20 px-4 py-2.5 text-xs font-bold text-red-400 border border-red-500/30 transition hover:bg-red-500 hover:text-white"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
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
              </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
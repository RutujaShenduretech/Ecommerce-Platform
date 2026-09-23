
// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { useCart } from "@/context/CartContext";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const { cartCount } = useCart();

// // return (
// //     <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
// //       <div className="mx-auto max-w-7xl">
// //         <div className="rounded-2xl border border-white/20 bg-black/20 px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6 lg:px-7">
          
// //           {/* Main Navbar */}
// //           <div className="flex h-[68px] items-center justify-between">

// //             {/* Logo */}
// //             <Link
// //               href="/"
// //               className="group shrink-0 text-xl font-black tracking-[-0.08em] text-white sm:text-2xl"
// //             >
// //               <span className="transition-opacity duration-300 group-hover:opacity-70">
// //                 SHOPSPHERE
// //               </span>
// //             </Link>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden items-center gap-1 md:flex">

// //               <Link
// //                 href="/"
// //                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
// //               >
// //                 Home
// //               </Link>

// //               <Link
// //                 href="/products"
// //                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
// //               >
// //                 Shop
// //               </Link>

// //               <Link
// //                 href="/running"
// //                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
// //               >
// //                 Running
// //               </Link>

// //               <Link
// //                 href="/lifestyle"
// //                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
// //               >
// //                 Lifestyle
// //               </Link>

// //               <Link
// //                 href="/women"
// //                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
// //               >
// //                 Women
// //               </Link>

// //               <Link
// //                 href="/products?category=Kids"
// //                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
// //               >
// //                 Kids
// //               </Link>
// //             </nav>

// //             {/* Right Actions */}
// //             <div className="flex items-center gap-2 sm:gap-3">

// //               {/* Login */}
// //               <Link
// //                 href="/login"
// //                 className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white sm:block"
// //               >
// //                 Login
// //               </Link>

// //               {/* Register */}
// //               <Link
// //                 href="/register"
// //                 className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:block"
// //               >
// //                 Register
// //               </Link>

// //               {/* Cart */}
// //               <Link
// //   href="/cart"
// //   aria-label={`Shopping cart with ${cartCount} items`}
// //   className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg transition hover:bg-black hover:text-white"
// // >
// //   🛒

// //   {cartCount > 0 && (
// //     <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[9px] font-black text-white ring-2 ring-white">
// //       {cartCount > 99 ? "99+" : cartCount}
// //     </span>
// //   )}
// // </Link>

// //               {/* Mobile Menu Button */}
// //               <button
// //                 type="button"
// //                 onClick={() => setOpen(!open)}
// //                 aria-label={open ? "Close menu" : "Open menu"}
// //                 aria-expanded={open}
// //                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:hidden"
// //               >
// //                 {open ? (
// //                   <svg
// //                     width="20"
// //                     height="20"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                   >
// //                     <path d="M6 6l12 12M18 6 6 18" />
// //                   </svg>
// //                 ) : (
// //                   <svg
// //                     width="20"
// //                     height="20"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                   >
// //                     <path d="M4 7h16M4 12h16M4 17h16" />
// //                   </svg>
// //                 )}
// //               </button>
// //             </div>
// //           </div>

// //           {/* Mobile Menu */}
// //           <div
// //             className={`overflow-hidden transition-all duration-300 md:hidden ${
// //               open ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
// //             }`}
// //           >
// //             <div className="border-t border-white/10 pt-4">

// //               <nav className="flex flex-col">

// //                 <Link
// //                   href="/"
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
// //                 >
// //                   Home
// //                 </Link>

// //                 <Link
// //                   href="/products"
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
// //                 >
// //                   Shop All
// //                 </Link>

// //                 <Link
// //                   href="/running"
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
// //                 >
// //                   Running
// //                 </Link>

// //                 <Link
// //                   href="/lifestyle"
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
// //                 >
// //                   Lifestyle
// //                 </Link>

// //                 <Link
// //                   href="/women"
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
// //                 >
// //                   Women
// //                 </Link>

// //                 <Link
// //                   href="/kids"
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
// //                 >
// //                   Kids
// //                 </Link>

// //                 {/* Mobile Auth */}
// //                 <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">

// //                   <Link
// //                     href="/login"
// //                     onClick={() => setOpen(false)}
// //                     className="rounded-xl border border-white/20 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
// //                   >
// //                     Login
// //                   </Link>

// //                   <Link
// //                     href="/register"
// //                     onClick={() => setOpen(false)}
// //                     className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-white/90"
// //                   >
// //                     Register
// //                   </Link>

// //                 </div>
// //               </nav>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useCart as useCartContext } from "@/context/CartContext";
// import { LogOut, LayoutDashboard } from "lucide-react";



// interface NavbarProps {
//   isAuthenticated?: boolean;
//   user?: {
//     avatar?: string;
//     name?: string;
//   };
//   onLogout?: () => void;
// }

// export default function Navbar({
//   isAuthenticated = false,
//   user,
//   onLogout = () => {},
// }: NavbarProps) {
//   const [open, setOpen] = useState(false);

//   const { cartCount } = useCartContext();

//   const closeMenu = () => {
//     setOpen(false);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
//       <div className="mx-auto max-w-7xl">

//         {/* Navbar Container */}
//         <div className="rounded-2xl border border-white/20 bg-black/25 px-4 shadow-2xl backdrop-blur-xl sm:px-6 lg:px-7">

//           {/* Main Row */}
//           <div className="flex h-[68px] items-center justify-between">

//             {/* LOGO */}
//             <Link
//               href="/"
//               className="shrink-0 text-xl font-black tracking-[-0.08em] text-white transition-opacity hover:opacity-70 sm:text-2xl"
//             >
//               SHOPSPHERE
//             </Link>

//             {/* DESKTOP NAVIGATION */}
//             <nav className="hidden items-center gap-1 md:flex">

//               <Link
//                 href="/"
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
//               >
//                 Home
//               </Link>

//               <Link
//                 href="/products"
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
//               >
//                 Shop
//               </Link>

//               <Link
//                 href="/running"
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
//               >
//                 Running
//               </Link>

//               <Link
//                 href="/lifestyle"
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
//               >
//                 Lifestyle
//               </Link>

//               <Link
//                 href="/women"
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
//               >
//                 Women
//               </Link>

//               <Link
//                 href="/kids"
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
//               >
//                 Kids
//               </Link>

//             </nav>

//             {/* RIGHT ACTIONS */}
//             <div className="flex items-center gap-2 sm:gap-3">

//               {/* LOGIN */}
//               <Link
//                 href="/login"
//                 className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white sm:block"
//               >
//                 Login
//               </Link>

//               {/* REGISTER */}
//               <Link
//                 href="/register"
//                 className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90 sm:block"
//               >
//                 Register
//               </Link>

//               {/* CART */}
//               <Link
//                 href="/cart"
//                 aria-label={`Shopping cart with ${cartCount} items`}
//                 className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-black shadow-md transition hover:bg-black hover:text-white"
//               >
//                 🛒

//                 {cartCount > 0 && (
//                   <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[9px] font-black text-white ring-2 ring-white">
//                     {cartCount > 99 ? "99+" : cartCount}
//                   </span>
//                 )}
//               </Link>

//               {/* MOBILE MENU BUTTON */}
//               <button
//                 type="button"
//                 onClick={() => setOpen((value) => !value)}
//                 aria-label={open ? "Close menu" : "Open menu"}
//                 aria-expanded={open}
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:hidden"
//               >
//                 {open ? (
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     aria-hidden="true"
//                   >
//                     <path d="M6 6l12 12M18 6L6 18" />
//                   </svg>
//                 ) : (
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     aria-hidden="true"
//                   >
//                     <path d="M4 7h16M4 12h16M4 17h16" />
//                   </svg>
//                 )}
//               </button>

//             </div>
//           </div>
//    {/* Brand Logo */}
//       <Link href="/" className="text-xl font-black tracking-widest text-indigo-400">
//         KICKS
//       </Link>

//       {/* Navigation Links */}
//       <div className="flex items-center gap-6 text-sm font-medium">
//         <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
//         <Link href="/products" className="hover:text-indigo-400 transition">Shop</Link>

//         {/* 🔒 DASHBOARD LINK (Only visible after Registration / Login) */}
//         {isAuthenticated && (
//           <Link 
//             href="/dashboard" 
//             className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition"
//           >
//             <LayoutDashboard className="w-4 h-4" />
//             <span>Dashboard</span>
//           </Link>
//         )}
//       </div>

//       {/* Right Side: Profile / Login Buttons */}
//       <div className="flex items-center gap-4">
//         {isAuthenticated ? (
//           <div className="flex items-center gap-3">
//             {/* User Avatar & Name */}
//             <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition">
//               <img 
//                 src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"} 
//                 alt="Avatar" 
//                 className="w-8 h-8 rounded-full border border-indigo-500 object-cover"
//               />
//               <span className="text-xs font-semibold hidden sm:inline">{user?.name || "Rutuja"}</span>
//             </Link>

//             {/* Logout Button */}
//             <button 
//               onClick={onLogout}
//               className="p-2 rounded-lg bg-slate-800 hover:bg-rose-600/20 hover:text-rose-400 transition"
//               title="Logout"
//             >
//               <LogOut className="w-4 h-4" />
//             </button>
//           </div>
//         ) : (
//           /* Login / Register Link when NOT registered */
//           <Link 
//             href="/register" 
//             className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition"
//           >
//             Register / Login
//           </Link>
//         )}
//       </div>
//           {/* MOBILE MENU */}
//           <div
//             className={`overflow-hidden transition-all duration-300 md:hidden ${
//               open
//                 ? "max-h-[650px] pb-5 opacity-100"
//                 : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="border-t border-white/10 pt-4">

//               <nav className="flex flex-col">

//                 <Link
//                   href="/"
//                   onClick={closeMenu}
//                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   href="/products"
//                   onClick={closeMenu}
//                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//                 >
//                   Shop All
//                 </Link>

//                 <Link
//                   href="/running"
//                   onClick={closeMenu}
//                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//                 >
//                   Running
//                 </Link>

//                 <Link
//                   href="/lifestyle"
//                   onClick={closeMenu}
//                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//                 >
//                   Lifestyle
//                 </Link>

//                 <Link
//                   href="/women"
//                   onClick={closeMenu}
//                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//                 >
//                   Women
//                 </Link>

//                 <Link
//                   href="/kids"
//                   onClick={closeMenu}
//                   className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
//                 >
//                   Kids
//                 </Link>

//                 {/* MOBILE CART */}
//                 <Link
//                   href="/cart"
//                   onClick={closeMenu}
//                   className="mt-2 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
//                 >
//                   <span>Shopping Cart</span>

//                   <span className="flex min-w-7 items-center justify-center rounded-full bg-white px-2 py-1 text-xs font-black text-black">
//                     {cartCount > 99 ? "99+" : cartCount}
//                   </span>
//                 </Link>

//                 {/* MOBILE LOGIN / REGISTER */}
//                 <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">

//                   <Link
//                     href="/login"
//                     onClick={closeMenu}
//                     className="rounded-xl border border-white/20 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
//                   >
//                     Login
//                   </Link>

//                   <Link
//                     href="/register"
//                     onClick={closeMenu}
//                     className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-white/90"
//                   >
//                     Register
//                   </Link>

//                 </div>

//               </nav>
//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }

   

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
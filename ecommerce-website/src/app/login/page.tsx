"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your authentication logic here.
    console.log("Login submitted", { remember });
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-black pt-5" >
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT - IMAGE */}
        <section className="relative hidden overflow-hidden bg-black lg:block">
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1800&q=90"
            alt="Runner"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-10 top-10 z-20 text-2xl font-black tracking-[-0.08em] text-white"
          >
            SHOPSPHERE
          </Link>

          {/* Large background text */}
          <div className="absolute bottom-8 left-10 right-10">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/50">
              Move Different
            </p>

            <h1 className="mt-4 text-7xl font-black leading-[0.82] tracking-[-0.08em] text-white xl:text-8xl">
              WELCOME
              <span className="block text-white/30">BACK.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/55">
              Sign in to access your account, manage orders and continue
              discovering the ShopSphere collection.
            </p>
          </div>

          {/* Decorative circle */}
          <div className="absolute right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute right-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />
        </section>

        {/* RIGHT - LOGIN */}
        <section className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 lg:px-12 xl:px-20">
          {/* Mobile background */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-10 lg:hidden">
              <Link
                href="/"
                className="text-xl font-black tracking-[-0.08em] text-white"
              >
                SHOPSPHERE
              </Link>
            </div>

            {/* Login card */}
            <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-2xl shadow-black/10 sm:p-10 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
                  ShopSphere Account
                </p>

                <h2 className="mt-10 text-5xl font-black tracking-[-0.07em] sm:text-6xl">
                  SIGN
                  <span className="text-black/25"> IN.</span>
                </h2>

                <p className="mt-5 text-sm leading-6 text-black/45">
                  Welcome back. Enter your details to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-black/45"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="h-14 w-full rounded-2xl border border-black/10 bg-neutral-50 px-5 text-sm font-medium outline-none transition placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/5"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-[10px] font-black uppercase tracking-[0.18em] text-black/45"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-[10px] font-bold text-black/45 underline underline-offset-4 transition hover:text-black"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      required
                      className="h-14 w-full rounded-2xl border border-black/10 bg-neutral-50 px-5 pr-14 text-sm font-medium outline-none transition placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/5"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-black/40 transition hover:bg-black/5 hover:text-black"
                    >
                      {showPassword ? (
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M3 3l18 18" />
                          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                          <path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c5.2 0 9 4 10 8a11.8 11.8 0 0 1-3.1 5.2" />
                          <path d="M6.6 6.6A11.8 11.8 0 0 0 2 12c1 4 4.8 8 10 8 1.4 0 2.7-.3 3.9-.8" />
                        </svg>
                      ) : (
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                          <circle cx="12" cy="12" r="2.5" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-black/20 accent-black"
                  />

                  <span className="text-xs font-medium text-black/50">
                    Remember me
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-4 rounded-full bg-black text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-black/85 active:translate-y-0"
                >
                  Sign In
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-black/10" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/25">
                  Or
                </span>
                <span className="h-px flex-1 bg-black/10" />
              </div>

              {/* Social */}
              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white text-xs font-bold transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-neutral-50"
              >
                <span className="text-base font-black">G</span>
                Continue with Google
              </button>

              {/* Register */}
              <p className="mt-8 text-center text-xs text-black/45">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-black text-black underline underline-offset-4"
                >
                  Create Account
                </Link>
              </p>

              {/* Security */}
              <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-black/25">
                <span>🔒</span>
                Secure Account Access
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
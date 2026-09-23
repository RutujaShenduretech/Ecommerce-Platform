"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add registration/authentication logic here.
    console.log("Registration submitted");
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-black">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <section className="relative hidden overflow-hidden bg-black lg:block">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1800&q=90"
            alt="ShopSphere fashion collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* LOGO */}
          <Link
            href="/"
            className="absolute left-10 top-10 z-20 text-2xl font-black tracking-[-0.08em] text-white"
          >
            SHOPSPHERE
          </Link>

          {/* CONTENT */}
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/50">
              ShopSphere Community
            </p>

            <h1 className="mt-4 text-7xl font-black leading-[0.82] tracking-[-0.08em] text-white xl:text-8xl">
              CREATE
              <span className="block text-white/25">YOUR SPACE.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/55">
              Create your ShopSphere account and make shopping easier. Save
              your details, manage orders and discover new collections.
            </p>
          </div>

          {/* DECORATIVE ELEMENTS */}
          <div className="absolute right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/10" />

          <div className="absolute right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-white/10" />
        </section>

        {/* RIGHT REGISTER */}
        <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
          {/* MOBILE IMAGE */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 w-full max-w-md">
            {/* MOBILE LOGO */}
            <div className="mb-10 lg:hidden">
              <Link
                href="/"
                className="text-xl font-black tracking-[-0.08em] text-white"
              >
                SHOPSPHERE
              </Link>
            </div>

            {/* CARD */}
            <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-2xl shadow-black/10 sm:p-10 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
              {/* HEADING */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
                  ShopSphere Account
                </p>

                <h2 className="mt-8 text-5xl font-black tracking-[-0.07em] sm:text-6xl">
                  JOIN
                  <span className="text-black/25"> US.</span>
                </h2>

                <p className="mt-5 text-sm leading-6 text-black/45">
                  Create your account and start your ShopSphere journey.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-black/45"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    className="h-14 w-full rounded-2xl border border-black/10 bg-neutral-50 px-5 text-sm font-medium outline-none transition placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/5"
                  />
                </div>

                {/* EMAIL */}
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

                {/* PASSWORD */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-black/45"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Create a password"
                      required
                      minLength={6}
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
                      {showPassword ? "◉" : "◌"}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-black/45"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Confirm your password"
                      required
                      minLength={6}
                      className="h-14 w-full rounded-2xl border border-black/10 bg-neutral-50 px-5 pr-14 text-sm font-medium outline-none transition placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/5"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-black/40 transition hover:bg-black/5 hover:text-black"
                    >
                      {showConfirmPassword ? "◉" : "◌"}
                    </button>
                  </div>
                </div>

                {/* TERMS */}
                <label className="flex cursor-pointer items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 accent-black"
                  />

                  <span className="text-xs leading-5 text-black/45">
                    I agree to the{" "}
                    <Link
                      href="/company#terms"
                      className="font-bold text-black underline underline-offset-4"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/company#privacy"
                      className="font-bold text-black underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {/* CREATE ACCOUNT */}
                <button
                  type="submit"
                  className="group mt-2 flex h-14 w-full items-center justify-center gap-4 rounded-full bg-black text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-black/85 active:translate-y-0"
                >
                  Create Account

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              {/* DIVIDER */}
              <div className="my-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-black/10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/25">
                  Or
                </span>

                <span className="h-px flex-1 bg-black/10" />
              </div>

              {/* GOOGLE */}
              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white text-xs font-bold transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-neutral-50"
              >
                <span className="text-base font-black">G</span>

                Continue with Google
              </button>

              {/* LOGIN */}
              <p className="mt-7 text-center text-xs text-black/45">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-black text-black underline underline-offset-4"
                >
                  Sign In
                </Link>
              </p>

              {/* SECURITY */}
              <div className="mt-7 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-black/25">
                <span>🔒</span>
                Secure Account Registration
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
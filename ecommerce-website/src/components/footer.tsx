import Link from "next/link";
import support from "@/app/support/page";
import company from "@/app/company/page";
export default function Footer() {
  return (
    <footer className="mt-24 bg-black text-white">
      {/* Newsletter */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-16">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Stay in motion
            </p>

            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Get the latest drops.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
              Join our community for new releases, exclusive offers and
              product updates.
            </p>
          </div>

          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-white/40 focus:bg-white/10"
            />

            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/80"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-[-0.08em] sm:text-3xl"
            >
              SHOPSPHERE
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Performance-inspired footwear and everyday essentials designed
              for people who keep moving.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white hover:text-black"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white hover:text-black"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white hover:text-black"
              >
                X
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white hover:text-black"
              >
                YT
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Shop
            </h3>

            <nav className="flex flex-col gap-3.5">
              <Link
                href="/products"
                className="text-sm text-white/65 transition hover:text-white"
              >
                All Products
              </Link>

              <Link
                href="/products?category=Running"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Running
              </Link>

              <Link
                href="/products?category=Training"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Training
              </Link>

              <Link
                href="/products?category=Lifestyle"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Lifestyle
              </Link>

              <Link
                href="/products?category=Basketball"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Basketball
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Support
            </h3>

            <nav className="flex flex-col gap-3.5">
              <Link
                href="/support"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/support"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Shipping
              </Link>

              <Link
                href="/support"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Returns
              </Link>

              <Link
                href="/support"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Size Guide
              </Link>

              <Link
                href="/support"
                className="text-sm text-white/65 transition hover:text-white"
              >
                FAQs
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>

            <nav className="flex flex-col gap-3.5">
              <Link
                href="/company"
                className="text-sm text-white/65 transition hover:text-white"
              >
                About ShopSphere
              </Link>

              <Link
                href="/company"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Careers
              </Link>

              <Link
                href="/company"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Sustainability
              </Link>

              <Link
                href="/company"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/company"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ShopSphere. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <span>India</span>
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
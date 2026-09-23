"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How can I contact ShopSphere?",
    answer:
      "You can contact our support team by email at support@shopsphere.com for help with orders, products, shipping and returns.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard delivery usually takes 3–7 business days after your order is confirmed.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Tracking information will be provided once your order has been shipped.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Eligible unused and unworn products can generally be returned within 7 days of delivery.",
  },
  {
    question: "How long does a refund take?",
    answer:
      "After an approved return is received, refunds are generally processed within 5–7 business days.",
  },
];

const sizes = [
  ["XS", '32–34"', '26–28"', '34–36"'],
  ["S", '34–36"', '28–30"', '36–38"'],
  ["M", '36–38"', '30–32"', '38–40"'],
  ["L", '38–40"', '32–34"', '40–42"'],
  ["XL", '40–42"', '34–36"', '42–44"'],
];

export default function support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50">
            ShopSphere Support
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.85] tracking-[-0.07em] sm:text-8xl lg:text-9xl">
            HOW CAN
            <span className="block text-white/30">WE HELP?</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Find information about shipping, returns, sizing, orders and
            customer support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-[0.15em] text-black"
            >
              Contact Us
            </a>

            <a
              href="#faq"
              className="rounded-full border border-white/20 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.15em] text-white"
            >
              FAQs
            </a>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-b border-black/10 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Contact Us", "#contact"],
            ["02", "Shipping", "#shipping"],
            ["03", "Returns", "#returns"],
            ["04", "Size Guide", "#size-guide"],
          ].map(([number, title, href]) => (
            <a
              key={number}
              href={href}
              className="border-b border-black/10 p-7 transition hover:bg-white"
            >
              <span className="text-[10px] font-black text-black/25">
                {number}
              </span>

              <h2 className="mt-8 text-lg font-black">{title}</h2>

              <span className="mt-4 block">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
            Customer Support
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            CONTACT
            <span className="text-black/25"> US.</span>
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-neutral-100 p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">
                Email
              </p>

              <h3 className="mt-4 text-xl font-black">
                support@shopsphere.com
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/45">
                For orders, products, shipping and returns.
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-100 p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">
                Help Center
              </p>

              <h3 className="mt-4 text-xl font-black">
                Frequently Asked Questions
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Find quick answers in the FAQ section below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPPING */}
      <section
        id="shipping"
        className="scroll-mt-24 bg-neutral-100 px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
            Delivery
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            SHIPPING
            <span className="block text-black/25">INFORMATION.</span>
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Order Confirmed", "Your order is received."],
              ["02", "Packed", "Your items are prepared."],
              ["03", "Shipped", "Your package is on the way."],
              ["04", "Delivered", "Your order reaches you."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-3xl bg-white p-7">
                <span className="text-xs font-black text-black/25">
                  {number}
                </span>

                <h3 className="mt-10 font-black">{title}</h3>

                <p className="mt-2 text-xs leading-5 text-black/45">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm text-black/45">
            Standard delivery generally takes 3–7 business days after order
            confirmation.
          </p>
        </div>
      </section>

      {/* RETURNS */}
      <section
        id="returns"
        className="scroll-mt-24 bg-black px-5 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
            Easy Process
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            RETURNS
            <span className="block text-white/25">MADE EASY.</span>
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Request", "Contact support with your order details."],
              ["02", "Return", "Send the eligible item back."],
              ["03", "Refund", "Receive your refund after approval."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-xs font-black text-white/25">
                  {number}
                </span>

                <h3 className="mt-10 font-black">{title}</h3>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm leading-6 text-white/40">
            Eligible products should generally be unused, unworn and in their
            original packaging.
          </p>
        </div>
      </section>

      {/* SIZE GUIDE */}
      <section
        id="size-guide"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
            Find Your Fit
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            SIZE
            <span className="text-black/25"> GUIDE.</span>
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-black text-left text-white">
                  <tr>
                    <th className="px-6 py-5 text-xs">SIZE</th>
                    <th className="px-6 py-5 text-xs">CHEST</th>
                    <th className="px-6 py-5 text-xs">WAIST</th>
                    <th className="px-6 py-5 text-xs">HIP</th>
                  </tr>
                </thead>

                <tbody>
                  {sizes.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-black/5 last:border-0"
                    >
                      {row.map((value, index) => (
                        <td
                          key={`${row[0]}-${index}`}
                          className={`px-6 py-5 text-sm ${
                            index === 0
                              ? "font-black"
                              : "text-black/50"
                          }`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 bg-neutral-100 px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
              Need Answers?
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
              FAQ<span className="text-black/25">.</span>
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                  >
                    <span className="text-sm font-black sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-7 text-black/50">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-5 py-24 text-center text-white sm:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
          ShopSphere Support
        </p>

        <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
          WE'RE HERE
          <span className="block text-white/25">TO HELP.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/45">
          Need more help? Contact our support team or continue exploring
          ShopSphere.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:support@shopsphere.com"
            className="rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-black"
          >
            Email Support
          </a>

          <Link
            href="/products"
            className="rounded-full border border-white/20 px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
"use client"
import Link from "next/link";

const companyLinks = [
  { number: "01", title: "About ShopSphere", href: "#about" },
  { number: "02", title: "Careers", href: "#careers" },
  { number: "03", title: "Sustainability", href: "#sustainability" },
  { number: "04", title: "Privacy Policy", href: "#privacy" },
  { number: "05", title: "Terms & Conditions", href: "#terms" },
];

export default function company() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2000&q=90"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 sm:pb-28 lg:px-10">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white" />

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                ShopSphere Company
              </p>
            </div>

            <h1 className="text-6xl font-black leading-[0.84] tracking-[-0.08em] sm:text-8xl lg:text-[9rem]">
              MOVE
              <span className="block text-white/25">FORWARD.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              ShopSphere is a modern eCommerce experience built around
              movement, everyday style and products designed for people who
              keep moving forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="rounded-full bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-[0.15em] text-black transition hover:-translate-y-1 hover:bg-white/90"
              >
                About Us →
              </a>

              <a
                href="#careers"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY NAVIGATION */}
      <section className="border-b border-black/10 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-5">
          {companyLinks.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group border-b border-black/10 p-6 transition hover:bg-white sm:border-r lg:p-7"
            >
              <span className="text-[10px] font-black tracking-[0.2em] text-black/25">
                {item.number}
              </span>

              <h2 className="mt-8 text-sm font-black tracking-tight">
                {item.title}
              </h2>

              <span className="mt-5 block text-sm transition group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
              Who We Are
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              ABOUT
              <span className="block text-black/25">SHOPSPHERE.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg font-bold leading-8 tracking-tight sm:text-2xl">
              We believe shopping should feel simple, inspiring and
              effortless.
            </p>

            <p className="mt-6 text-sm leading-7 text-black/50 sm:text-base">
              ShopSphere is a modern eCommerce platform focused on
              performance-inspired footwear, apparel and everyday products.
              Our goal is to bring together thoughtful design, easy
              navigation and a smooth digital shopping experience.
            </p>

            <p className="mt-5 text-sm leading-7 text-black/50 sm:text-base">
              From discovering a new product to receiving it at your door,
              every part of the ShopSphere experience is designed with
              simplicity and usability in mind.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-7">
              <div>
                <p className="text-2xl font-black">01</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                  Purpose
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">02</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                  Design
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">03</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                  Movement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-neutral-100 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
              What Drives Us
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
              OUR
              <span className="text-black/25"> VALUES.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "SIMPLICITY",
                text: "We make the shopping journey clear, intuitive and easy to navigate.",
              },
              {
                number: "02",
                title: "QUALITY",
                text: "We focus on thoughtful products and a reliable customer experience.",
              },
              {
                number: "03",
                title: "MOVEMENT",
                text: "We create an experience that supports active and everyday lifestyles.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[1.75rem] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <span className="text-[10px] font-black tracking-[0.2em] text-black/25">
                  {item.number}
                </span>

                <h3 className="mt-14 text-2xl font-black tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="scroll-mt-24 bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
              Work With Us
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              BUILD
              <span className="block text-white/25">THE FUTURE.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              We are interested in people who enjoy solving problems,
              creating great digital experiences and building products that
              people love to use.
            </p>

            <a
              href="mailto:careers@shopsphere.com"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition hover:-translate-y-1 hover:bg-white/90"
            >
              careers@shopsphere.com →
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Frontend Development",
              "Backend Development",
              "UI / UX Design",
              "Product & Operations",
            ].map((role, index) => (
              <div
                key={role}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <span className="text-[10px] font-black text-white/25">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-sm font-black">{role}</h3>

                <p className="mt-2 text-xs text-white/35">
                  Explore opportunities with ShopSphere.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section
        id="sustainability"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1800&q=85"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-white/65 backdrop-blur-[3px]" />

            <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:p-16">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
                  Our Responsibility
                </p>

                <h2 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                  MOVE
                  <span className="block text-black/25">RESPONSIBLY.</span>
                </h2>
              </div>

              <div>
                <p className="text-lg font-bold leading-8 sm:text-2xl">
                  Better products should also mean better choices.
                </p>

                <p className="mt-6 text-sm leading-7 text-black/50">
                  Sustainability is an ongoing journey. We aim to make
                  thoughtful decisions around product design, packaging,
                  operations and the long-term impact of the shopping
                  experience.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["01", "Thoughtful Design"],
                    ["02", "Less Waste"],
                    ["03", "Better Choices"],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur-xl"
                    >
                      <span className="text-[10px] font-black text-black/25">
                        {number}
                      </span>

                      <p className="mt-8 text-xs font-black">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section
        id="privacy"
        className="scroll-mt-24 border-t border-black/10 bg-neutral-50 px-5 py-5 sm:px-8 sm:py-10 lg:px-10"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
            Legal
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            PRIVACY
            <span className="text-black/25"> POLICY.</span>
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-lg font-black">
                Your information matters
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                ShopSphere respects your privacy. Information provided while
                creating an account, placing an order or contacting support
                should be used only to provide and improve the services
                associated with your shopping experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Information we may collect</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                This may include account information, contact details, order
                information, delivery information and information you
                voluntarily provide when contacting customer support.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">How information is used</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                Information may be used to process orders, provide customer
                support, improve the website, communicate important service
                information and maintain account security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Your choices</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                If you have questions about your information or want to
                request changes, please contact the ShopSphere support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section
        id="terms"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">
            Legal
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            TERMS
            <span className="text-black/25"> & CONDITIONS.</span>
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-lg font-black">Using ShopSphere</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                By using ShopSphere, you agree to use the website for lawful
                purposes and provide accurate information when creating an
                account or placing an order.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Products and pricing</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                Product descriptions, availability and prices may change.
                ShopSphere aims to provide accurate information, but
                occasional errors may occur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Orders</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                An order is subject to availability and successful payment.
                Order confirmation and shipping information will be provided
                through the available communication channels.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Returns and refunds</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                Returns and refunds are handled according to the applicable
                ShopSphere return policy and the eligibility of the purchased
                product.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Changes to these terms</h3>

              <p className="mt-3 text-sm leading-7 text-black/50">
                ShopSphere may update these terms when necessary. Updated
                terms will be reflected on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">
            ShopSphere
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            KEEP
            <span className="text-white/25"> MOVING.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">
            Explore the latest products and discover your next everyday
            essential.
          </p>

          <Link
            href="/products"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition hover:-translate-y-1 hover:bg-white/90"
          >
            Shop Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
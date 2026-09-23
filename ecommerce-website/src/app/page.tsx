"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import products from "@/app/products/page";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Dashboard from '@/app/dashboard/page';
import ProtectedRoute from '@/components/ProductRoute';
import Image from "next/image";
import { LayoutDashboard, ArrowRight, Sparkles } from "lucide-react";


const Register = ({ onRegisterSuccess }: { onRegisterSuccess: (registeredUserData: Record<string, any>) => void }) => null;


const slides = [
  {
    category: "SHOPSPHERE SPORT",
    title: ["MOVE", "WITHOUT", "LIMITS."],
    description:
      "Performance-inspired essentials built for every kind of movement.",
    image:
      "https://media.istockphoto.com/id/2155826184/photo/running-in-a-city-by-the-sea.jpg?s=612x612&w=0&k=20&c=M8yshxSxzOpE5WbTp0EKTYInQxT_fnXLkeq75CuDLq4=",
    button: "Explore Sport",
  },
  {
    category: "WOMEN'S COLLECTION",
    title: ["OWN", "YOUR", "MOVEMENT."],
    description:
      "Modern silhouettes designed for confidence, comfort and everyday performance.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1800&q=90",
    button: "Shop Women",
  },
  {
    category: "KIDS COLLECTION",
    title: ["PLAY.", "RUN.", "REPEAT."],
    description:
      "Comfortable everyday styles made for little adventures and big energy.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1800&q=90",
    button: "Shop Kids",
  },
  {
    category: "BASKETBALL",
    title: ["OWN", "THE", "COURT."],
    description:
      "Built for quick moves, powerful jumps and confident game-day style.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1800&q=90",
    button: "Shop Basketball",
  },
  {
    category: "RUNNING COLLECTION",
    title: ["RUN", "YOUR", "WAY."],
    description:
      "Lightweight comfort and responsive performance for every step.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1800&q=90",
    button: "Shop Running",
  },
];



type Product = { id: string | number; [key: string]: any };

export default function Home() {
  // products may be a React component (default export of a page) rather than
  // an array of product data. Guard at runtime and coerce to any to satisfy TS.
  const featuredProducts: Product[] = Array.isArray(products as any)
    ? ((products as any).slice(0, 4) as Product[])
    : ([] as Product[]);

    const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = slides[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };


  // Authentication state (set to true after registration/login)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Record<string, any> | null>(null);

  // Called when user completes Registration
  const handleRegisterSuccess = (registeredUserData: Record<string, any>) => {
    setUser(registeredUserData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <main>
      {/* Hero */}
      {/* <section className="relative min-h-[650px] overflow-hidden bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1800&q=85"
          alt="Athlete running"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em]">
              Move Different
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Built to
              <br />
              Move.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              Discover performance footwear designed for training,
              running and everyday movement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/80"
              >
                Shop Collection
              </Link>

              <Link
                href="/products?category=Running"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Running
              </Link>
            </div>
          </div>
        </div>
      </section> */}


    <section
      className="relative min-h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================
          BACKGROUND SLIDES
      ========================= */}
      {slides.map((item, index) => (
        <div
          key={item.category}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
            index === current
              ? "visible opacity-100"
              : "invisible opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${
              index === current ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />


      {/* =========================
          GIANT BACKGROUND NUMBER
      ========================= */}
      <div className="pointer-events-none absolute right-[-2rem] top-1/2 hidden -translate-y-1/2 select-none lg:block">
        <span className="text-[25rem] font-black leading-none tracking-[-0.12em] text-white/[0.035]">
          {String(current + 1).padStart(2, "0")}
        </span>
      </div>


      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-28 pt-32 sm:px-8 lg:px-10">

        <div
          key={current}
          className="max-w-3xl animate-[homeHeroContent_0.8s_ease-out]"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 sm:text-xs">
              {slide.category}
            </p>
          </div>


          {/* Heading */}
          <h1 className="text-[4rem] font-black leading-[0.82] tracking-[-0.07em] text-white sm:text-[6.5rem] lg:text-[8rem]">
            {slide.title.map((line, index) => (
              <span
                key={line}
                className={`block ${
                  index === 1 ? "text-white/35" : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h1>


          {/* Description */}
          <p className="mt-8 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
            {slide.description}
          </p>


          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
            >
              {slide.button}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              Explore All
            </Link>

          </div>
        </div>


        {/* =========================
            3D FLOATING IMAGE
        ========================= */}
        <div className="pointer-events-none absolute bottom-24 right-[-12%] hidden w-[55%] lg:block">

          <div
            key={`image-${current}`}
            className="relative animate-[hero3DFloat_4s_ease-in-out_infinite]"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

            {/* Rotating ring */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 [transform:perspective(800px)_rotateX(65deg)]" />

            {/* Image */}
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="relative z-10 h-[500px] w-full object-cover object-center drop-shadow-[0_40px_50px_rgba(0,0,0,0.6)] [transform:perspective(1000px)_rotateY(-10deg)_rotateX(3deg)]"
            />

            {/* Glass label */}
            <div className="absolute bottom-10 left-10 z-20 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
                ShopSphere
              </p>

              <p className="mt-1 text-sm font-black text-white">
                {slide.category}
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* =========================
          SLIDE CONTROLS
      ========================= */}
      <div className="absolute bottom-7 left-5 right-5 z-20 sm:left-8 sm:right-8 lg:left-10 lg:right-10">

        <div className="mx-auto flex max-w-7xl items-end justify-between">

          {/* Progress */}
          <div className="flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.category}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/20 sm:w-16"
              >
                <span
                  className={`absolute inset-y-0 left-0 rounded-full bg-white transition-all duration-300 ${
                    current === index ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>


          {/* Counter + Arrows */}
          <div className="flex items-center gap-3">

            <span className="text-xs font-black tracking-[0.2em] text-white/60">
              {String(current + 1).padStart(2, "0")}
              <span className="mx-1 text-white/20">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              →
            </button>

          </div>
        </div>
      </div>


      {/* =========================
          MOBILE 3D IMAGE
      ========================= */}
      <div className="absolute bottom-24 right-[-18%] z-[1] w-[75%] sm:right-[-12%] sm:w-[60%] lg:hidden">

        <div
          key={`mobile-${current}`}
          className="animate-[hero3DFloat_4s_ease-in-out_infinite]"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 blur-[70px]" />

          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="h-[330px] w-full object-cover opacity-45 drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)] [transform:perspective(800px)_rotateY(-8deg)] sm:h-[400px]"
          />
        </div>
      </div>

    </section>
  
    
      {/* Featured */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-black/40">
              Featured
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
              Latest drops
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden text-sm font-bold underline underline-offset-4 sm:block"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category banner */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-3xl bg-black text-white md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-widest text-white/50">
              Performance
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Run your way.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-white/60">
              Lightweight silhouettes made for everyday miles and
              serious training.
            </p>

            <Link
              href="/products?category=Running"
              className="mt-8 w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
            >
              Shop Running
            </Link>
          </div>

          <div className="min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1000&q=80"
              alt="Running collection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
            
              <div className="relative min-h-screen bg-white text-slate-600 overflow-hidden ">
      {/* Dynamic Navbar */}
      <Navbar isAuthenticated={true} user={{ name: "Alex" }} />

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[100px]" />

      <main className="mx-auto max-w-7xl px-6 pt-42 pb-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Hero Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Next-Gen Shopping Experience</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-tight">
              Welcome to <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ShopSphere
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Explore your personal shopping hub. Click the{" "}
              <strong className="text-indigo-400 font-semibold">Dashboard</strong>{" "}
              button in the top navigation bar or launch it directly below.
            </p>

            {/* Dashboard Action Button */}
            <div className="pt-2">
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <LayoutDashboard className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Open Dashboard</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card & Graphic */}
          <div className="relative group [perspective:1000px]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:[transform:rotateY(-6deg)_rotateX(6deg)] group-hover:shadow-indigo-500/20">
              
              {/* High-Quality 3D Render Banner */}
              <div className="relative h-[340px] w-full overflow-hidden rounded-2xl sm:h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                  alt="3D Spatial Abstract Graphic"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Glassmorphism Badge on 3D Banner */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-indigo-300">
                        Quick Route
                      </p>
                      <h3 className="text-lg font-bold text-white">
                        User Control Panel
                      </h3>
                    </div>
                    
                    <Link
                      href="/dashboard"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 hover:scale-110"
                      aria-label="Go to Dashboard"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </div>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">
              ShopSphere
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Designed for every version of you.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/60 lg:justify-self-end">
            From your morning run to everyday street style, explore footwear
            created to keep you moving with confidence.
          </p>
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          {/* WOMEN */}
          <Link
            href="/products?category=Women"
            className="group relative min-h-[500px] overflow-hidden rounded-3xl bg-neutral-100"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=85"
              alt="Women's footwear collection"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Women
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Move Your Way.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                Performance and everyday styles designed for your next move.
              </p>

              <span className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition group-hover:bg-white/85">
                Shop Women →
              </span>
            </div>
          </Link>

          {/* KIDS */}
          <Link
            href="/products?category=Kids"
            className="group relative min-h-[500px] overflow-hidden rounded-3xl bg-neutral-100"
          >
            <img
              src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=1200&q=85"
              alt="Kids footwear collection"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Kids
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to Play.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                Comfortable, playful styles made for every adventure.
              </p>

              <span className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition group-hover:bg-white/85">
                Shop Kids →
              </span>
            </div>
          </Link>
        </div>




        {/* ================= NEW ARRIVALS ================= */}
<section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
        Just Dropped
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
        New arrivals.
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
        Meet the latest styles designed to bring fresh energy to every step.
      </p>
    </div>

    <Link
      href="/products"
      className="w-fit rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/80"
    >
      Shop New Arrivals →
    </Link>
  </div>

  {/* Large editorial collection */}
  <div className="mt-12 grid gap-5 lg:grid-cols-2">
    
    {/* Main shoe */}
    <Link
      href="/products/1"
      className="group relative min-h-[560px] overflow-hidden rounded-3xl bg-neutral-100"
    >
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=85"
        alt="Latest shoe collection"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute left-7 right-7 bottom-7 text-white sm:left-9 sm:right-9 sm:bottom-9">
        <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
          NEW
        </span>

        <h3 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
          Aero Run Pro
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
          Lightweight performance meets everyday style.
        </p>

        <span className="mt-6 inline-block text-sm font-bold underline underline-offset-4">
          Discover the shoe →
        </span>
      </div>
    </Link>

    {/* Right side */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
      
      {/* Collection 1 */}
      <Link
        href="/products/2"
        className="group relative min-h-[270px] overflow-hidden rounded-3xl bg-neutral-100"
      >
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&q=85"
          alt="Lifestyle shoes"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white sm:left-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Lifestyle
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Everyday Motion
          </h3>

          <span className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">
            Shop Collection →
          </span>
        </div>
      </Link>

      {/* Collection 2 */}
      <Link
        href="/products/5"
        className="group relative min-h-[270px] overflow-hidden rounded-3xl bg-neutral-100"
      >
        <img
          src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1200&q=85"
          alt="Performance shoes"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white sm:left-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Performance
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Made to Perform
          </h3>

          <span className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">
            Explore Performance →
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-neutral-50 py-5 sm:py-4">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
         {/* ================= SHOP BY CATEGORY ================= */}

  <div className="text-center">
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
      Explore
    </p>

    <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
      Shop by category.
    </h2>

    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
      Find the perfect pair for running, training, lifestyle and everyday
      movement.
    </p>
  </div>

  <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">

    {/* Running */}
    <Link
      href="/products?category=Running"
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100"
    >
      <img
        src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&q=85"
        alt="Running shoes"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60">
          Collection
        </p>

        <h3 className="mt-1 text-2xl font-black sm:text-3xl">
          Running
        </h3>

        <span className="mt-2 block text-xs font-bold sm:text-sm">
          Shop now →
        </span>
      </div>
    </Link>

    {/* Lifestyle */}
    <Link
      href="/products?category=Lifestyle"
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100"
    >
      <img
        src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&q=85"
        alt="Lifestyle shoes"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60">
          Collection
        </p>

        <h3 className="mt-1 text-2xl font-black sm:text-3xl">
          Lifestyle
        </h3>

        <span className="mt-2 block text-xs font-bold sm:text-sm">
          Shop now →
        </span>
      </div>
    </Link>

    {/* Training */}
    <Link
      href="/products?category=Training"
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100"
    >
      <img
        src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=85"
        alt="Training shoes"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60">
          Collection
        </p>

        <h3 className="mt-1 text-2xl font-black sm:text-3xl">
          Training
        </h3>

        <span className="mt-2 block text-xs font-bold sm:text-sm">
          Shop now →
        </span>
      </div>
    </Link>

    {/* Basketball */}
    <Link
      href="/products?category=Basketball"
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100"
    >
      <img
        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&q=85"
        alt="Basketball shoes"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60">
          Collection
        </p>

        <h3 className="mt-1 text-2xl font-black sm:text-3xl">
          Basketball
        </h3>

        <span className="mt-2 block text-xs font-bold sm:text-sm">
          Shop now →
        </span>
      </div>
    </Link>

  </div>
          <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


    <BrowserRouter>
      {/* Top Navbar */}
      <Navbar 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={handleLogout} 
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<div className="p-8 text-center">Home Page</div>} />
        
        {/* Registration Route */}
        <Route 
          path="/register" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Register onRegisterSuccess={handleRegisterSuccess} />
            )
          } 
        />

        {/* 🔒 Protected Dashboard Route (Accessible ONLY after registration) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>


      {/* ================= RUNNING BANNER ================= */}
      <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Performance Collection
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            RUN YOUR WAY.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">
            Lightweight comfort. Responsive cushioning. Confidence with every
            step.
          </p>

          <Link
            href="/products?category=Running"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-white/80"
          >
            Shop Running
          </Link>
        </div>
      </section>

      {/* ================= WHY SHOPSPHERE ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">
            Why ShopSphere
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Made for your everyday.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Premium Quality",
              text: "Thoughtfully selected products designed for comfort and performance.",
            },
            {
              number: "02",
              title: "Fast Experience",
              text: "Simple browsing, powerful search and a smooth shopping journey.",
            },
            {
              number: "03",
              title: "Easy Shopping",
              text: "Find your style quickly with categories, filters and product details.",
            },
            {
              number: "04",
              title: "Responsive Design",
              text: "A seamless experience across mobile, tablet and desktop.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-black/10 p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-xs font-bold text-black/35">
                {item.number}
              </span>

              <h3 className="mt-8 text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-5 mb-10 overflow-hidden rounded-3xl bg-neutral-100 sm:mx-8 lg:mx-10">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            Your next move starts here
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Find your next favorite pair.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/55">
            Explore the latest collections and discover footwear built for
            every journey.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-black/80"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      
    </main>
  );
}



  

  
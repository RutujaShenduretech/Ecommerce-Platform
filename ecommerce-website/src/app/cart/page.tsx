"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  color?: string;
  quantity: number;
}

type PaymentMethod =
  | "upi"
  | "card"
  | "netbanking"
  | "cod"
  | "";

type MessageType = "success" | "error";

export default function CartPage() {
  const cartContext = useCart() as unknown as {
    cart?: CartItem[];
    removeFromCart?: (
      id: number,
      size?: string,
      color?: string
    ) => void;
    updateQuantity?: (
      id: number,
      change: number,
      size?: string,
      color?: string
    ) => void;
    clearCart?: () => void;
    subtotal?: number;
  };

  const cart = cartContext.cart ?? [];

  const removeFromCart =
    cartContext.removeFromCart ?? (() => {});

  const updateQuantity =
    cartContext.updateQuantity ?? (() => {});

  const clearCart =
    cartContext.clearCart ?? (() => {});

  const subtotal = cartContext.subtotal ?? 0;

  /* ================================
     PROMO
  ================================= */

  const [promo, setPromo] = useState("");

  /* ================================
     PAYMENT
  ================================= */

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("");

  const [upiId, setUpiId] = useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] = useState("");

  const [bank, setBank] = useState("");

  /* ================================
     POPUP
  ================================= */

  const [showMessage, setShowMessage] =
    useState(false);

  const [messageType, setMessageType] =
    useState<MessageType>("error");

  const [messageTitle, setMessageTitle] =
    useState("");

  const [messageText, setMessageText] =
    useState("");

  const [showConfirmation, setShowConfirmation] =
    useState(false);

  const [isPlacingOrder, setIsPlacingOrder] =
    useState(false);

  /* ================================
     PRICE CALCULATION
  ================================= */

  const shipping =
    subtotal === 0 || subtotal >= 5000
      ? 0
      : 199;

  const discount =
    promo.trim().toUpperCase() === "SHOP10"
      ? subtotal * 0.1
      : 0;

  const total =
    subtotal + shipping - discount;

  const itemCount = cart.reduce(
    (count: number, item: CartItem) =>
      count + item.quantity,
    0
  );

  /* ================================
     PAYMENT NAME
  ================================= */

  const paymentMethodName: Record<
    PaymentMethod,
    string
  > = {
    upi: "UPI",
    card: "Credit / Debit Card",
    netbanking: "Net Banking",
    cod: "Cash on Delivery",
    "": "Not selected",
  };

  /* ================================
     SHOW MESSAGE POPUP
  ================================= */

  const showPopupMessage = (
    type: MessageType,
    title: string,
    message: string
  ) => {
    setMessageType(type);
    setMessageTitle(title);
    setMessageText(message);
    setShowMessage(true);
  };

  /* ================================
     VALIDATE PAYMENT
  ================================= */

  const validatePayment = () => {
    if (!paymentMethod) {
      showPopupMessage(
        "error",
        "Payment Method Required",
        "Please select a payment method before placing your order."
      );

      return false;
    }

    /* UPI */
    if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        showPopupMessage(
          "error",
          "UPI ID Required",
          "Please enter your UPI ID to continue."
        );

        return false;
      }

      if (!upiId.includes("@")) {
        showPopupMessage(
          "error",
          "Invalid UPI ID",
          "Please enter a valid UPI ID such as example@upi."
        );

        return false;
      }
    }

    /* CARD */
    if (paymentMethod === "card") {
      const cleanCardNumber =
        cardNumber.replace(/\s/g, "");

      if (!cardNumber.trim()) {
        showPopupMessage(
          "error",
          "Card Number Required",
          "Please enter your card number."
        );

        return false;
      }

      if (cleanCardNumber.length !== 16) {
        showPopupMessage(
          "error",
          "Invalid Card Number",
          "Card number must contain exactly 16 digits."
        );

        return false;
      }

      if (!expiry.trim()) {
        showPopupMessage(
          "error",
          "Expiry Date Required",
          "Please enter your card expiry date."
        );

        return false;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        showPopupMessage(
          "error",
          "Invalid Expiry Date",
          "Please enter the expiry date in MM/YY format."
        );

        return false;
      }

      if (!cvv.trim()) {
        showPopupMessage(
          "error",
          "CVV Required",
          "Please enter your 3-digit CVV."
        );

        return false;
      }

      if (cvv.length !== 3) {
        showPopupMessage(
          "error",
          "Invalid CVV",
          "CVV must contain exactly 3 digits."
        );

        return false;
      }
    }

    /* NET BANKING */
    if (paymentMethod === "netbanking") {
      if (!bank) {
        showPopupMessage(
          "error",
          "Bank Required",
          "Please select your bank to continue."
        );

        return false;
      }
    }

    return true;
  };

  /* ================================
     PLACE ORDER
  ================================= */

  const handlePlaceOrder = async () => {
    const isValid = validatePayment();

    if (!isValid) {
      return;
    }

    setIsPlacingOrder(true);

    try {
      /*
        DEMO ORDER FLOW

        Later, connect this to:

        POST /api/orders

        Example body:

        {
          items: cart.map((item) => ({
            productId: item.id,
            quantity: item.quantity
          })),
          paymentMethod,
          totalAmount: total
        }
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      setIsPlacingOrder(false);

      setShowMessage(true);
      setMessageType("success");
      setMessageTitle("Payment Successful");
      setMessageText(
        "Your payment details have been successfully verified."
      );

      /*
        Show confirmation after success message.
      */

      setTimeout(() => {
        setShowMessage(false);
        setShowConfirmation(true);
      }, 1600);
    } catch (error) {
      console.error(
        "PLACE ORDER ERROR:",
        error
      );

      setIsPlacingOrder(false);

      showPopupMessage(
        "error",
        "Order Failed",
        "Something went wrong while placing your order. Please try again."
      );
    }
  };

  /* ================================
     EMPTY CART
  ================================= */

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-neutral-100 text-black">
        <section className="px-4 pb-8 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mb-8 sm:mb-10">

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
                SHOPSPHERE / CART
              </p>

              <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                YOUR CART.
              </h1>

            </div>

            <div className="overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">

              <div className="px-6 py-20 text-center sm:px-12 sm:py-28">

                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-3xl">
                  🛒
                </div>

                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  SHOPSPHERE
                </p>

                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                  YOUR CART IS EMPTY.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
                  Discover something you love and add it to your cart.
                </p>

                <Link
                  href="/products"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-xs font-black tracking-wide text-black transition hover:-translate-y-1 hover:bg-white/90"
                >
                  START SHOPPING →
                </Link>

              </div>

            </div>

          </div>
        </section>
      </main>
    );
  }

  /* ================================
     MAIN CART
  ================================= */

  return (
    <>
      <main className="min-h-screen bg-neutral-100 text-black">

        <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            {/* HEADER */}
            <div className="mb-8 sm:mb-10">

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
                SHOPSPHERE / CART
              </p>

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>

                  <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    YOUR CART.
                  </h1>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                    Review your selected products and choose your preferred payment method.
                  </p>

                </div>

                <div className="w-fit rounded-full bg-white px-5 py-3 text-xs font-bold shadow-sm">
                  {itemCount}{" "}
                  {itemCount === 1 ? "ITEM" : "ITEMS"}
                </div>

              </div>

            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_420px]">

              {/* ==================================
                  PRODUCTS
              ================================== */}

              <section className="space-y-4">

                {cart.map((item: CartItem) => (
                  <article
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="rounded-[1.5rem] bg-white p-4 shadow-sm sm:p-5"
                  >

                    <div className="flex gap-4 sm:gap-6">

                      {/* IMAGE */}

                      <Link
                        href={`/products/${item.id}`}
                        className="relative h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-40 sm:w-36"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />

                      </Link>

                      {/* INFO */}

                      <div className="flex min-w-0 flex-1 flex-col">

                        <div className="flex items-start justify-between gap-3">

                          <div className="min-w-0">

                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black/35">
                              {item.category}
                            </p>

                            <Link
                              href={`/products/${item.id}`}
                              className="mt-1 block truncate text-base font-black sm:text-lg"
                            >
                              {item.name}
                            </Link>

                            {item.size && (
                              <p className="mt-2 text-xs text-black/50">
                                Size:{" "}
                                <span className="font-bold text-black">
                                  {item.size}
                                </span>
                              </p>
                            )}

                            {item.color && (
                              <p className="mt-1 text-xs text-black/50">
                                Color:{" "}
                                <span className="font-bold text-black">
                                  {item.color}
                                </span>
                              </p>
                            )}

                          </div>

                          {/* REMOVE */}

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.id,
                                item.size,
                                item.color
                              )
                            }
                            aria-label={`Remove ${item.name}`}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-lg text-black/50 transition hover:bg-black hover:text-white"
                          >
                            ×
                          </button>

                        </div>

                        {/* QUANTITY + PRICE */}

                        <div className="mt-auto flex items-end justify-between gap-3 pt-4">

                          <div className="flex items-center rounded-full border border-black/10">

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1,
                                  item.size,
                                  item.color
                                )
                              }
                              aria-label="Decrease quantity"
                              className="flex h-9 w-9 items-center justify-center text-lg transition hover:bg-black hover:text-white"
                            >
                              −
                            </button>

                            <span className="w-8 text-center text-xs font-black">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  1,
                                  item.size,
                                  item.color
                                )
                              }
                              aria-label="Increase quantity"
                              className="flex h-9 w-9 items-center justify-center text-lg transition hover:bg-black hover:text-white"
                            >
                              +
                            </button>

                          </div>

                          <div className="text-right">

                            <p className="text-base font-black sm:text-lg">
                              ₹
                              {(
                                item.price *
                                item.quantity
                              ).toLocaleString("en-IN")}
                            </p>

                            {item.quantity > 1 && (
                              <p className="text-[10px] text-black/35">
                                ₹
                                {item.price.toLocaleString(
                                  "en-IN"
                                )}{" "}
                                each
                              </p>
                            )}

                          </div>

                        </div>

                      </div>

                    </div>

                  </article>
                ))}

                {/* CONTINUE SHOPPING */}

                <Link
                  href="/products"
                  className="flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white px-6 py-5 text-sm font-bold transition hover:border-black"
                >
                  <span>
                    Continue Shopping
                  </span>

                  <span>
                    ←
                  </span>
                </Link>

              </section>

              {/* ==================================
                  CHECKOUT SIDEBAR
              ================================== */}

              <aside className="lg:sticky lg:top-28 lg:h-fit">

                <div className="rounded-[1.75rem] bg-black p-6 text-white shadow-2xl sm:p-7">

                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                    ORDER SUMMARY
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight">
                    CHECKOUT.
                  </h2>

                  {/* PRICE BREAKDOWN */}

                  <div className="mt-8 space-y-4 border-b border-white/10 pb-6">

                    <div className="flex justify-between text-sm">

                      <span className="text-white/50">
                        Subtotal
                      </span>

                      <span className="font-bold">
                        ₹
                        {subtotal.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                    </div>

                    <div className="flex justify-between text-sm">

                      <span className="text-white/50">
                        Shipping
                      </span>

                      <span className="font-bold">
                        {shipping === 0
                          ? "FREE"
                          : `₹${shipping}`}
                      </span>

                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-sm">

                        <span className="text-white/50">
                          Discount
                        </span>

                        <span className="font-bold">
                          −₹
                          {discount.toLocaleString(
                            "en-IN",
                            {
                              maximumFractionDigits: 0,
                            }
                          )}
                        </span>

                      </div>
                    )}

                  </div>

                  {/* PROMO */}

                  <div className="mt-6">

                    <label
                      htmlFor="promo"
                      className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-white/40"
                    >
                      PROMO CODE
                    </label>

                    <div className="flex gap-2">

                      <input
                        id="promo"
                        type="text"
                        value={promo}
                        onChange={(e) =>
                          setPromo(e.target.value)
                        }
                        placeholder="Enter code"
                        className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          if (
                            promo.trim().toUpperCase() ===
                            "SHOP10"
                          ) {
                            showPopupMessage(
                              "success",
                              "Promo Applied",
                              "SHOP10 has been applied. You received 10% off your order."
                            );
                          } else if (
                            promo.trim() !== ""
                          ) {
                            showPopupMessage(
                              "error",
                              "Invalid Promo Code",
                              "The promo code you entered is not valid."
                            );
                          }
                        }}
                        className="rounded-full bg-white px-5 py-3 text-xs font-black text-black transition hover:bg-white/90"
                      >
                        APPLY
                      </button>

                    </div>

                    <p className="mt-2 text-[10px] text-white/30">
                      Try SHOP10 for 10% off.
                    </p>

                  </div>

                  {/* ==================================
                      PAYMENT METHOD
                  ================================== */}

                  <div className="mt-7 border-t border-white/10 pt-6">

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      PAYMENT METHOD
                    </p>

                    <p className="mt-2 text-xs text-white/40">
                      Select your preferred payment option.
                    </p>

                    <div className="mt-4 space-y-2">

                      {/* UPI */}

                      <button
                        type="button"
                        onClick={() =>
                          setPaymentMethod("upi")
                        }
                        className={`w-full rounded-2xl border p-4 text-left transition ${
                          paymentMethod === "upi"
                            ? "border-white bg-white text-black"
                            : "border-white/10 bg-white/5 text-white hover:border-white/30"
                        }`}
                      >

                        <div className="flex items-center gap-3">

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-lg">
                            📱
                          </span>

                          <div>

                            <p className="text-sm font-bold">
                              UPI
                            </p>

                            <p
                              className={`mt-0.5 text-[10px] ${
                                paymentMethod === "upi"
                                  ? "text-black/50"
                                  : "text-white/40"
                              }`}
                            >
                              Google Pay • PhonePe • Paytm
                            </p>

                          </div>

                        </div>

                      </button>

                      {/* CARD */}

                      <button
                        type="button"
                        onClick={() =>
                          setPaymentMethod("card")
                        }
                        className={`w-full rounded-2xl border p-4 text-left transition ${
                          paymentMethod === "card"
                            ? "border-white bg-white text-black"
                            : "border-white/10 bg-white/5 text-white hover:border-white/30"
                        }`}
                      >

                        <div className="flex items-center gap-3">

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-lg">
                            💳
                          </span>

                          <div>

                            <p className="text-sm font-bold">
                              Credit / Debit Card
                            </p>

                            <p
                              className={`mt-0.5 text-[10px] ${
                                paymentMethod === "card"
                                  ? "text-black/50"
                                  : "text-white/40"
                              }`}
                            >
                              Visa • Mastercard • RuPay
                            </p>

                          </div>

                        </div>

                      </button>

                      {/* NET BANKING */}

                      {/* COD */}

                      <button
                        type="button"
                        onClick={() =>
                          setPaymentMethod("cod")
                        }
                        className={`w-full rounded-2xl border p-4 text-left transition ${
                          paymentMethod === "cod"
                            ? "border-white bg-white text-black"
                            : "border-white/10 bg-white/5 text-white hover:border-white/30"
                        }`}
                      >

                        <div className="flex items-center gap-3">

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-lg">
                            💵
                          </span>

                          <div>

                            <p className="text-sm font-bold">
                              Cash on Delivery
                            </p>

                            <p
                              className={`mt-0.5 text-[10px] ${
                                paymentMethod === "cod"
                                  ? "text-black/50"
                                  : "text-white/40"
                              }`}
                            >
                              Pay when your order arrives
                            </p>

                          </div>

                        </div>

                      </button>

                    </div>

                    {/* UPI FORM */}

                    {paymentMethod === "upi" && (
                      <div className="mt-3 rounded-2xl bg-white/5 p-4">

                        <label
                          htmlFor="upi"
                          className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/50"
                        >
                          UPI ID
                        </label>

                        <input
                          id="upi"
                          type="text"
                          value={upiId}
                          onChange={(e) =>
                            setUpiId(e.target.value)
                          }
                          placeholder="example@upi"
                          className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40"
                        />

                      </div>
                    )}

                    {/* CARD FORM */}

                    {paymentMethod === "card" && (
                      <div className="mt-3 rounded-2xl bg-white/5 p-4">

                        <label
                          htmlFor="cardNumber"
                          className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/50"
                        >
                          CARD NUMBER
                        </label>

                        <input
                          id="cardNumber"
                          type="text"
                          inputMode="numeric"
                          value={cardNumber}
                          onChange={(e) => {
                            const digits =
                              e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 16);

                            const formatted =
                              digits.replace(
                                /(.{4})/g,
                                "$1 "
                              ).trim();

                            setCardNumber(formatted);
                          }}
                          placeholder="1234 5678 9012 3456"
                          className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40"
                        />

                        <div className="mt-3 grid grid-cols-2 gap-3">

                          <div>

                            <label
                              htmlFor="expiry"
                              className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/50"
                            >
                              EXPIRY
                            </label>

                            <input
                              id="expiry"
                              type="text"
                              inputMode="numeric"
                              value={expiry}
                              onChange={(e) => {
                                const digits =
                                  e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 4);

                                const formatted =
                                  digits.length > 2
                                    ? `${digits.slice(
                                        0,
                                        2
                                      )}/${digits.slice(
                                        2
                                      )}`
                                    : digits;

                                setExpiry(formatted);
                              }}
                              placeholder="MM/YY"
                              className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40"
                            />

                          </div>

                          <div>

                            <label
                              htmlFor="cvv"
                              className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/50"
                            >
                              CVV
                            </label>

                            <input
                              id="cvv"
                              type="password"
                              inputMode="numeric"
                              value={cvv}
                              onChange={(e) =>
                                setCvv(
                                  e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 3)
                                )
                              }
                              placeholder="•••"
                              className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40"
                            />

                          </div>

                        </div>

                        <p className="mt-3 text-[9px] leading-4 text-white/30">
                          Demo checkout only. Never store card
                          numbers or CVV in your database.
                        </p>

                      </div>
                    )}

                    {/* NET BANKING */}

                    {/* COD */}

                    {paymentMethod === "cod" && (
                      <div className="mt-3 rounded-2xl bg-white/5 p-4">

                        <div className="flex gap-3">

                          <span className="text-lg">
                            ✓
                          </span>

                          <div>

                            <p className="text-sm font-bold">
                              Cash on Delivery selected
                            </p>

                            <p className="mt-1 text-[10px] leading-4 text-white/40">
                              Pay the order amount when your
                              package is delivered.
                            </p>

                          </div>

                        </div>

                      </div>
                    )}

                  </div>

                  {/* TOTAL */}

                  <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-6">

                    <div>

                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                        TOTAL
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Inclusive of applicable taxes
                      </p>

                    </div>

                    <p className="text-2xl font-black sm:text-3xl">
                      ₹
                      {total.toLocaleString(
                        "en-IN",
                        {
                          maximumFractionDigits: 0,
                        }
                      )}
                    </p>

                  </div>

                  {/* SELECTED PAYMENT */}

                  {paymentMethod && (
                    <div className="mt-4 rounded-2xl bg-white/5 px-4 py-3">

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] uppercase tracking-wider text-white/40">
                          PAYMENT
                        </span>

                        <span className="text-xs font-bold">
                          {
                            paymentMethodName[
                              paymentMethod
                            ]
                          }
                        </span>

                      </div>

                    </div>
                  )}

                  {/* PLACE ORDER */}

                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    disabled={isPlacingOrder}
                    className="mt-5 w-full rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isPlacingOrder
                      ? "PROCESSING..."
                      : "PLACE ORDER →"}
                  </button>

                  {/* SECURITY */}

                  <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-5">

                    <span className="text-sm">
                      🔒
                    </span>

                    <p className="text-[10px] text-white/40">
                      Secure checkout • Your payment information is protected
                    </p>

                  </div>

                  {/* BENEFITS */}

                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">

                    <div>
                      <p className="text-lg">
                        ✓
                      </p>

                      <p className="mt-1 text-[9px] font-bold text-white/40">
                        SECURE
                      </p>
                    </div>

                    <div>
                      <p className="text-lg">
                        ↻
                      </p>

                      <p className="mt-1 text-[9px] font-bold text-white/40">
                        EASY RETURNS
                      </p>
                    </div>

                    <div>
                      <p className="text-lg">
                        ✦
                      </p>

                      <p className="mt-1 text-[9px] font-bold text-white/40">
                        PREMIUM
                      </p>
                    </div>

                  </div>

                </div>

                {/* FREE SHIPPING */}

                {subtotal < 5000 && (
                  <div className="mt-4 rounded-2xl bg-white p-5 text-center shadow-sm">

                    <p className="text-xs font-bold">
                      Add ₹
                      {(5000 - subtotal).toLocaleString(
                        "en-IN"
                      )}{" "}
                      more for FREE shipping.
                    </p>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">

                      <div
                        className="h-full rounded-full bg-black transition-all"
                        style={{
                          width: `${Math.min(
                            (subtotal / 5000) * 100,
                            100
                          )}%`,
                        }}
                      />

                    </div>

                  </div>
                )}

              </aside>

            </div>

          </div>

        </section>

      </main>

      {/* ==================================
          RED / GREEN MESSAGE POPUP
      ================================== */}

      {showMessage && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setShowMessage(false)}
        >

          <div
            className="w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* COLOURED HEADER */}

            <div
              className={`px-6 py-8 text-center text-white ${
                messageType === "success"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >

              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl font-black ${
                  messageType === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {messageType === "success"
                  ? "✓"
                  : "!"}
              </div>

              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                SHOPSPHERE
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                {messageTitle}
              </h2>

            </div>

            {/* MESSAGE BODY */}

            <div className="p-6 text-center sm:p-8">

              <p className="mx-auto max-w-sm text-sm leading-6 text-black/60">
                {messageText}
              </p>

              <div
                className={`mt-5 rounded-2xl px-4 py-3 text-xs font-bold ${
                  messageType === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {messageType === "success"
                  ? "✓ Everything looks good."
                  : "Please correct the issue and try again."}
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowMessage(false)
                }
                className={`mt-6 w-full rounded-full px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 ${
                  messageType === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {messageType === "success"
                  ? "CONTINUE"
                  : "TRY AGAIN"}
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ==================================
          ORDER CONFIRMATION
      ================================== */}

      {showConfirmation && (
        <div
          className="fixed inset-0 z-[1050] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() =>
            setShowConfirmation(false)
          }
        >

          <div
            className="w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* HEADER */}

            <div className="bg-black px-6 py-8 text-center text-white">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl font-black text-white">
                ✓
              </div>

              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                SHOPSPHERE
              </p>

              <h2 className="mt-2 text-3xl font-black">
                ORDER CONFIRMED
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Your order has been successfully placed.
              </p>

            </div>

            {/* DETAILS */}

            <div className="p-6 sm:p-8">

              <div className="space-y-4 rounded-2xl bg-neutral-50 p-5">

                <div className="flex justify-between text-sm">

                  <span className="text-black/50">
                    Payment
                  </span>

                  <span className="font-bold">
                    {
                      paymentMethodName[
                        paymentMethod
                      ]
                    }
                  </span>

                </div>

                <div className="flex justify-between text-sm">

                  <span className="text-black/50">
                    Amount
                  </span>

                  <span className="font-black">
                    ₹
                    {total.toLocaleString(
                      "en-IN",
                      {
                        maximumFractionDigits: 0,
                      }
                    )}
                  </span>

                </div>

                <div className="flex justify-between text-sm">

                  <span className="text-black/50">
                    Status
                  </span>

                  <span className="font-bold text-green-600">
                    Confirmed
                  </span>

                </div>

              </div>

              <p className="mt-5 text-center text-xs leading-5 text-black/40">
                Thank you for shopping with ShopSphere.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <Link
                  href="/products"
                  onClick={() => {
                    clearCart();
                    setShowConfirmation(false);
                  }}
                  className="flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-xs font-black transition hover:border-black"
                >
                  CONTINUE SHOPPING
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    clearCart();
                    setShowConfirmation(false);
                  }}
                  className="rounded-full bg-black px-5 py-3 text-xs font-black text-white transition hover:bg-neutral-800"
                >
                  DONE
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
}
``

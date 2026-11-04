

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { products as mockProducts } from "../../data/mockdata";

import {
  Sun,
  Moon,
  Package,
  Clock,
  CheckCircle2,
  Heart,
  MapPin,
  Mail,
  User,
  Truck,
  ChevronRight,
  X,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

interface OrderItem {
  id: number;
  productId: number;
  quantity: number;
  price: string | number;
  size?: string | null;
  color?: string | null;
  product: {
    id: number;
    name: string;
    image: string;
    category: string;
  };
}

interface Order {
  id: number;
  total: string | number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}

export default function Dashboard() {
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [ordersError, setOrdersError] = useState("");

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  // Wishlist is currently local demo data.
  const [wishlist, setWishlist] = useState(
    mockProducts.slice(3, 5)
  );

  // Redirect visitors who are not logged in.
  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/login");
    }
  }, [authLoading, user, router]);

  // Fetch orders belonging to the logged-in customer.
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setOrders([]);
      setOrdersLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        setOrdersLoading(true);
        setOrdersError("");

        const response = await fetch("/api/orders", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to fetch orders"
          );
        }

        setOrders(data.orders || []);
      } catch (error) {
        console.error("Orders fetch error:", error);

        setOrdersError(
          error instanceof Error
            ? error.message
            : "Unable to load orders"
        );
      } finally {
        setOrdersLoading(false);
      }
    };

    fetchOrders();
  }, [user?.id, authLoading]);

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  const pendingOrders = orders.filter(
    (order) =>
      !["Delivered", "Cancelled"].includes(
        order.status
      )
  );

  const completedOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  const totalSpent = orders.reduce(
    (total, order) => total + Number(order.total || 0),
    0
  );

  const stats = {
    totalOrders: orders.length,
    pendingOrders: pendingOrders.length,
    completedOrders: completedOrders.length,
    wishlistCount: wishlist.length,
  };

  const formatPrice = (price: string | number) =>
    Number(price).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

      case "cancelled":
        return "bg-red-500/10 text-red-400 border-red-500/20";

      case "shipped":
      case "out for delivery":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";

      default:
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    }
  };

  // Loading screen
  if (authLoading || (!user && ordersLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent mx-auto" />
          <p className="text-sm text-slate-400">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans pt-24 ${
        darkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-30 ${
            darkMode ? "bg-indigo-600" : "bg-indigo-300"
          }`}
        />

        <div
          className={`absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20 ${
            darkMode ? "bg-purple-600" : "bg-purple-300"
          }`}
        />

        <div
          className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-[120px] opacity-20 ${
            darkMode ? "bg-blue-600" : "bg-blue-300"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Dashboard Header */}
        <header
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border shadow-2xl ${
            darkMode
              ? "bg-slate-900/60 border-slate-800 shadow-black/40"
              : "bg-white/70 border-slate-200 shadow-slate-200/50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                SHOPSPHERE
              </h1>
              <p className="text-xs opacity-60">
                Customer Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <div
              className={`flex p-1 rounded-2xl border ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              {[
                { id: "dashboard", label: "Dashboard" },
                { id: "orders", label: "Orders" },
                { id: "wishlist", label: "Wishlist" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-md"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {tab.label}
                  {tab.id === "wishlist" &&
                    ` (${wishlist.length})`}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-3 rounded-2xl border transition hover:scale-105 ${
                darkMode
                  ? "bg-slate-800 border-slate-700 text-amber-400"
                  : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </header>

        {/* Customer Profile */}
        <section
          className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 border shadow-2xl ${
            darkMode
              ? "bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border-slate-800"
              : "bg-gradient-to-r from-white via-indigo-50 to-purple-50 border-slate-200"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">

            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur opacity-75" />

                <div className="relative w-24 h-24 rounded-full border-2 border-white/20 bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                  {getInitials(user.name || "Customer")}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Welcome, {user.name?.split(" ")[0] || "Customer"} 👋
                </h2>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Registered Customer
                </span>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs opacity-75">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    {user.email}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-purple-400" />
                    Customer ID: #{user.id}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            {
              label: "Total Orders",
              value: stats.totalOrders,
              description: "Lifetime orders",
              icon: Package,
              color: "indigo",
            },
            {
              label: "Pending Orders",
              value: stats.pendingOrders,
              description: "Processing or in transit",
              icon: Clock,
              color: "amber",
            },
            {
              label: "Completed",
              value: stats.completedOrders,
              description: "Successfully delivered",
              icon: CheckCircle2,
              color: "emerald",
            },
            {
              label: "Total Spent",
              value: `₹${formatPrice(totalSpent)}`,
              description: "Total purchase amount",
              icon: ShoppingBag,
              color: "purple",
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`p-6 rounded-3xl border transition hover:-translate-y-1 shadow-xl ${
                  darkMode
                    ? "bg-slate-900/60 border-slate-800"
                    : "bg-white/80 border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold opacity-60 uppercase tracking-wider">
                    {stat.label}
                  </p>

                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mt-4 break-words">
                  {stat.value}
                </h3>

                <p className="text-xs opacity-60 mt-1">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Dashboard and Orders */}
        {activeTab !== "wishlist" && (
          <section
            className={`p-6 sm:p-8 rounded-3xl border shadow-2xl ${
              darkMode
                ? "bg-slate-900/60 border-slate-800"
                : "bg-white/80 border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">
                  {activeTab === "orders"
                    ? "My Order History"
                    : "Recent Orders"}
                </h3>

                <p className="text-xs opacity-60 mt-1">
                  Your purchases and delivery status
                </p>
              </div>

              <Package className="w-6 h-6 text-indigo-400" />
            </div>

            {ordersLoading ? (
              <p className="text-center py-10 opacity-60">
                Loading your orders...
              </p>
            ) : ordersError ? (
              <div className="text-center py-10">
                <p className="text-red-400">{ordersError}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-3 text-indigo-400 underline text-sm"
                >
                  Try again
                </button>
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-14">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-40" />

                <h4 className="font-bold text-lg">
                  No orders yet
                </h4>

                <p className="text-sm opacity-60 mt-2">
                  Your purchases will appear here.
                </p>

                <Link
                  href="/products"
                  className="inline-flex mt-5 px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        setSelectedOrder(order);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`group p-4 sm:p-5 rounded-2xl border transition cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      darkMode
                        ? "bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/50 hover:border-indigo-500/50"
                        : "bg-slate-50 hover:bg-white border-slate-200 hover:border-indigo-400"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                        {order.items[0]?.product?.image ? (
                          <img
                            src={order.items[0].product.image}
                            alt={order.items[0].product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Package />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold">
                            Order #{order.id}
                          </span>

                          <span
                            className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase ${getStatusStyle(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </div>

                        <p className="text-xs opacity-70 mt-1 truncate">
                          {order.items
                            .map((item) => item.product?.name || "Product")
                            .join(", ")}
                        </p>

                        <p className="text-[11px] opacity-50 mt-1">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-5 border-t sm:border-0 border-slate-700/30 pt-3 sm:pt-0">
                      <div className="text-left sm:text-right">
                        <p className="text-base font-bold text-indigo-400">
                          ₹{formatPrice(order.total)}
                        </p>

                        <p className="text-[11px] opacity-60">
                          {order.items.length} item(s)
                        </p>
                      </div>

                      <ChevronRight className="w-5 h-5 text-indigo-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Wishlist */}
        {activeTab === "wishlist" && (
          <section
            className={`p-6 sm:p-8 rounded-3xl border shadow-2xl ${
              darkMode
                ? "bg-slate-900/60 border-slate-800"
                : "bg-white/80 border-slate-200"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">
              My Wishlist ({wishlist.length})
            </h3>

            {wishlist.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 mx-auto mb-3 opacity-40" />

                <p className="font-medium">
                  Your wishlist is empty
                </p>

                <Link
                  href="/products"
                  className="inline-block mt-4 text-indigo-400 text-sm"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-2xl overflow-hidden border ${
                      darkMode
                        ? "bg-slate-800/40 border-slate-700"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                      <button
                        onClick={() =>
                          removeFromWishlist(item.id)
                        }
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-rose-400 hover:bg-rose-500 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-4 space-y-3">
                      <span className="text-[10px] font-bold uppercase text-indigo-400">
                        {item.category}
                      </span>

                      <h4 className="font-bold">
                        {item.name}
                      </h4>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-extrabold">
                          ₹{formatPrice(item.price)}
                        </span>

                        <Link
                          href={`/products/${item.id}`}
                          className="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border shadow-2xl ${
              darkMode
                ? "bg-slate-900 border-slate-800 text-slate-100"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-700/30">
              <div>
                <span className="text-xs text-indigo-400 font-bold uppercase">
                  Order Details
                </span>

                <h3 className="text-2xl font-black">
                  Order #{selectedOrder.id}
                </h3>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                aria-label="Close order details"
                className="p-2 rounded-full hover:bg-slate-800/50"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Status */}
            <div className="py-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs opacity-60">
                  Order Date
                </p>

                <p className="font-semibold">
                  {formatDate(selectedOrder.createdAt)}
                </p>
              </div>

              <span
                className={`px-3 py-2 rounded-full border text-xs font-bold ${getStatusStyle(selectedOrder.status)}`}
              >
                {selectedOrder.status}
              </span>
            </div>

            {/* Products */}
            <div className="space-y-4 py-5 border-t border-slate-700/30">
              <h4 className="font-bold">Purchased Products</h4>

              {selectedOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >
                  {item.product?.image ? (
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center">
                      <Package />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm">
                      {item.product?.name || "Product unavailable"}
                    </p>

                    <p className="text-xs opacity-60 mt-1">
                      Size: {item.size || "N/A"} |
                      Color: {item.color || "N/A"} |
                      Qty: {item.quantity}
                    </p>

                    <p className="text-sm text-indigo-400 font-semibold mt-1">
                      ₹{formatPrice(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div
              className={`p-4 rounded-2xl border ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  Total Amount
                </span>

                <span className="text-xl font-extrabold text-indigo-400">
                  ₹{formatPrice(selectedOrder.total)}
                </span>
              </div>
            </div>

            {/* Tracking information */}
            <div className="mt-5 p-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Truck className="w-5 h-5" />
                Order Tracking
              </div>

              <p className="text-xs opacity-70 mt-2">
                Current order status: {selectedOrder.status}.
                Detailed shipment tracking will be available
                when tracking information is added to your
                order database.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

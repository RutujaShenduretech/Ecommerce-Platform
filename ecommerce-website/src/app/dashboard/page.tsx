"use client";
import React, { useState } from 'react';
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
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Search
} from 'lucide-react';
import { products, initialProfile, sampleOrders } from '../../data/mockdata';
import type { Order } from '../../types/dashboard';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [wishlist, setWishlist] = useState([products[3], products[4]]);

  const stats = {
    totalOrders: sampleOrders.length,
    pendingOrders: sampleOrders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').length,
    completedOrders: sampleOrders.filter(o => o.status === 'Delivered').length,
    wishlistCount: wishlist.length,
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans pt-15 sm:pt-10 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full filter blur-[120px] opacity-30 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-300'
        }`} />
        <div className={`absolute top-1/3 -right-20 w-96 h-96 rounded-full filter blur-[120px] opacity-20 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-300'
        }`} />
        <div className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full filter blur-[120px] opacity-20 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-300'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Top Navbar Header */}
        <header className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border transition-all shadow-2xl ${
          darkMode 
            ? 'bg-slate-900/60 border-slate-800/80 shadow-black/40' 
            : 'bg-white/70 border-slate-200/80 shadow-slate-200/50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">KICKS STORE</h1>
              <p className="text-xs opacity-60">Premium Member Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            {/* Quick Navigation Pills */}
            <div className={`flex p-1 rounded-2xl border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'orders'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'wishlist'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Wishlist ({wishlist.length})
              </button>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-3 rounded-2xl border transition-all duration-300 hover:scale-105 active:scale-95 ${
                darkMode
                  ? 'bg-slate-800/80 border-slate-700 text-amber-400 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Profile Welcome Banner Card */}
        <section className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 backdrop-blur-2xl border transition-all shadow-2xl ${
          darkMode 
            ? 'bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-indigo-950/40 border-slate-800' 
            : 'bg-gradient-to-r from-white/90 via-indigo-50/50 to-purple-50/50 border-slate-200'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              {/* User Avatar with 3D ring effect */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-500" />
                <img
                  src={initialProfile.avatar}
                  alt={initialProfile.name}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-xl"
                />
              </div>

              {/* User Details */}
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Welcome, {initialProfile.name.split(' ')[0]} 👋
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs opacity-75 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    {initialProfile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-400" />
                    {initialProfile.phone}
                  </span>
                </div>

                <div className="flex items-start justify-center sm:justify-start gap-1.5 text-xs opacity-75 pt-1 max-w-md">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    {initialProfile.address.street}, {initialProfile.address.city},{' '}
                    {initialProfile.address.state} - {initialProfile.address.pincode}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button 
              onClick={() => setSelectedOrder(sampleOrders[0])}
              className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
            >
              <Truck className="w-4 h-4" />
              <span>Track Active Order</span>
            </button>

          </div>
        </section>

        {/* 4 Key Metric Cards (3D Depth Aesthetics) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Total Orders */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:translate-y-[-4px] shadow-xl ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Orders</p>
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <Package className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold mt-4">{stats.totalOrders}</h3>
            <p className="text-xs opacity-60 mt-1">Lifetime purchases</p>
          </div>

          {/* Card 2: Pending Orders */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:translate-y-[-4px] shadow-xl ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pending Orders</p>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Clock className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold mt-4">{stats.pendingOrders}</h3>
            <p className="text-xs opacity-60 mt-1">In transit or processing</p>
          </div>

          {/* Card 3: Completed Orders */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:translate-y-[-4px] shadow-xl ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Completed</p>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold mt-4">{stats.completedOrders}</h3>
            <p className="text-xs opacity-60 mt-1">Successfully delivered</p>
          </div>

          {/* Card 4: Wishlist */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:translate-y-[-4px] shadow-xl ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Wishlist</p>
              <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
                <Heart className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold mt-4">{stats.wishlistCount}</h3>
            <p className="text-xs opacity-60 mt-1">Saved items</p>
          </div>

        </section>

        {/* Main Content View (Dashboard View or Wishlist View) */}
        {activeTab === 'dashboard' || activeTab === 'orders' ? (
          <section className={`p-6 sm:p-8 rounded-3xl backdrop-blur-xl border transition-all shadow-2xl ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Recent Orders</h3>
                <p className="text-xs opacity-60">Click on any order to track its live location</p>
              </div>
            </div>

            <div className="space-y-4">
              {sampleOrders.map((order) => (
                <div
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    darkMode
                      ? 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/50 hover:border-indigo-500/50'
                      : 'bg-slate-50/80 hover:bg-white border-slate-200/80 hover:border-indigo-400 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                      <img
                        src={order.items[0].product.image}
                        alt={order.items[0].product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base">{order.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : order.status === 'Out for Delivery'
                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs opacity-70 mt-1">
                        {order.items.map(i => i.product.name).join(', ')} ({order.items.length} item)
                      </p>
                      <p className="text-[11px] opacity-50 mt-0.5">{order.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-2 sm:pt-0 border-t sm:border-0 border-slate-700/30">
                    <div className="text-left sm:text-right">
                      <p className="text-base font-bold text-indigo-400">₹{order.totalAmount.toLocaleString('en-IN')}</p>
                      <p className="text-[11px] opacity-60">Estimated: {order.estimatedDelivery}</p>
                    </div>

                    <button className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Wishlist View */
          <section className={`p-6 sm:p-8 rounded-3xl backdrop-blur-xl border transition-all shadow-2xl ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <h3 className="text-xl font-bold tracking-tight mb-6">Saved Wishlist ({wishlist.length})</h3>

            {wishlist.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-50" />
                <p className="text-base font-medium">Your wishlist is empty</p>
                <p className="text-xs opacity-60 mt-1">Explore our product catalog to save items for later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:translate-y-[-4px] ${
                      darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        aria-label="Remove item"
                        className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-rose-400 hover:bg-rose-500 hover:text-white transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-4 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-base truncate">{item.name}</h4>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-extrabold">₹{item.price.toLocaleString('en-IN')}</span>
                        <button className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

      </div>

      {/* Interactive 3D Order Tracking Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-700/30 pt-20 sm:pt-15">
              <div>
                <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Live Status</span>
                <h3 className="text-2xl font-black">Track Order {selectedOrder.id}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-slate-800/50 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Order Items Preview */}
            <div className="py-4 border-b border-slate-700/30 flex items-center gap-4 overflow-x-auto">
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                  />
                  <div>
                    <p className="text-xs font-bold">{item.product.name}</p>
                    <p className="text-[10px] opacity-60">
                      Size: {item.selectedSize} | Color: {item.selectedColor} | Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Tracking Stepper */}
            <div className="py-6 space-y-6">
              <h4 className="text-sm font-bold opacity-80">Shipment Timeline</h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
                {selectedOrder.trackingSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Stepper Dot */}
                    <div className={`absolute -left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      step.completed
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/50'
                        : step.current
                        ? 'bg-amber-500 border-amber-300 text-white ring-4 ring-amber-500/20'
                        : 'bg-slate-800 border-slate-600'
                    }`}>
                      {step.completed && <CheckCircle2 className="w-3 h-3" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-bold ${step.current ? 'text-indigo-400' : ''}`}>
                          {step.title}
                        </p>
                        <span className="text-[10px] opacity-50">{step.time}</span>
                      </div>
                      <p className="text-xs opacity-60 mt-0.5">{step.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address Summary */}
            <div className={`p-4 rounded-2xl border text-xs space-y-1 ${
              darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="flex items-center gap-1.5 font-bold">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Shipping Address</span>
              </div>
              <p className="opacity-70">{selectedOrder.shippingAddress}</p>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
              >
                Close Tracking
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
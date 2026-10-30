import { Product, UserProfile, Order } from '../types/dashboard';

export const products: Product[] = [
  {
    id: 1,
    name: "Aero Run Pro",
    category: "Running",
    price: 6999,
    oldPrice: 7999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    description: "Lightweight performance shoes designed for everyday running and high-intensity training.",
    colors: ["Black", "White", "Red"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.8,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Velocity Street",
    category: "Lifestyle",
    price: 5499,
    oldPrice: 6499,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&q=80",
    description: "Clean everyday sneakers combining street style with lightweight comfort.",
    colors: ["White", "Grey", "Black"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.7,
    badge: "New",
  },
  {
    id: 5,
    name: "Court Edge",
    category: "Basketball",
    price: 7499,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&q=80",
    description: "High-performance basketball footwear designed for grip and quick movement.",
    colors: ["White", "Red", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.9,
    badge: "Premium",
  },
  {
    id: 7,
    name: "Luna Air Women",
    category: "Women",
    price: 5799,
    oldPrice: 6799,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80",
    description: "Modern women's sneakers combining lightweight comfort with a clean everyday silhouette.",
    colors: ["White", "Pink", "Black"],
    sizes: ["5", "6", "7", "8", "9"],
    rating: 4.8,
    badge: "New Arrival",
  },
  {
    id: 15,
    name: "Nova X1",
    category: "New Arrivals",
    price: 7999,
    oldPrice: 8999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
    description: "A fresh performance silhouette featuring a lightweight build and responsive cushioning.",
    colors: ["Black", "White", "Grey"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    rating: 4.9,
    badge: "Just Dropped",
  },
  {
    id: 18,
    name: "Active Duo Combo",
    category: "Combo",
    price: 8999,
    oldPrice: 10998,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80",
    description: "A premium activewear-inspired combo featuring everyday footwear and coordinated essentials.",
    colors: ["Black", "White"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.8,
    badge: "Combo Offer",
  }
];

export const initialProfile: UserProfile = {
  name: "Rutuja Sharma",
  email: "rutuja.sharma@example.com",
  phone: "+91 98765 43210",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  address: {
    street: "Flat 402, Royal Palms Residency, Mg Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
  },
};

export const sampleOrders: Order[] = [
  {
    id: "ORD-1001",
    date: "Sep 20, 2026",
    totalAmount: 12798,
    status: "Out for Delivery",
    estimatedDelivery: "Today by 7:00 PM",
    shippingAddress: "Flat 402, Royal Palms Residency, Mg Road, Mumbai, MH - 400001",
    items: [
      { product: products[0], quantity: 1, selectedColor: "Red", selectedSize: "8" },
      { product: products[1], quantity: 1, selectedColor: "White", selectedSize: "8" }
    ],
    trackingSteps: [
      { title: "Order Placed", location: "Mumbai Hub", time: "Sep 20, 10:00 AM", completed: true, current: false },
      { title: "Packed & Verified", location: "Warehouse A1", time: "Sep 20, 02:30 PM", completed: true, current: false },
      { title: "In Transit", location: "Central Courier Depot", time: "Sep 21, 08:15 AM", completed: true, current: false },
      { title: "Out for Delivery", location: "Local Delivery Express", time: "Sep 23, 09:00 AM", completed: true, current: true },
      { title: "Delivered", location: "Destination", time: "Pending", completed: false, current: false },
    ],
  },
  {
    id: "ORD-1002",
    date: "Sep 18, 2026",
    totalAmount: 7499,
    status: "Processing",
    estimatedDelivery: "Sep 25, 2026",
    shippingAddress: "Flat 402, Royal Palms Residency, Mg Road, Mumbai, MH - 400001",
    items: [
      { product: products[2], quantity: 1, selectedColor: "Black", selectedSize: "9" }
    ],
    trackingSteps: [
      { title: "Order Placed", location: "System Automated", time: "Sep 18, 04:20 PM", completed: true, current: false },
      { title: "Processing Order", location: "Warehouse B4", time: "Sep 19, 11:00 AM", completed: true, current: true },
      { title: "In Transit", location: "Main Transport Hub", time: "Pending", completed: false, current: false },
      { title: "Out for Delivery", location: "Local Station", time: "Pending", completed: false, current: false },
      { title: "Delivered", location: "Destination", time: "Pending", completed: false, current: false },
    ],
  },
  {
    id: "ORD-1003",
    date: "Sep 05, 2026",
    totalAmount: 8999,
    status: "Delivered",
    estimatedDelivery: "Delivered on Sep 08",
    shippingAddress: "Flat 402, Royal Palms Residency, Mg Road, Mumbai, MH - 400001",
    items: [
      { product: products[5], quantity: 1, selectedColor: "Black", selectedSize: "8" }
    ],
    trackingSteps: [
      { title: "Order Placed", location: "Online Portal", time: "Sep 05, 01:10 PM", completed: true, current: false },
      { title: "Packed", location: "Warehouse A1", time: "Sep 05, 06:00 PM", completed: true, current: false },
      { title: "Shipped", location: "Express Logistics", time: "Sep 06, 09:30 AM", completed: true, current: false },
      { title: "Out for Delivery", location: "Local Hub", time: "Sep 08, 08:00 AM", completed: true, current: false },
      { title: "Delivered", location: "Doorstep", time: "Sep 08, 02:15 PM", completed: true, current: true },
    ],
  },
];
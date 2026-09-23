import { Product } from "@/types/product";


export const products: Product[] = [
  // ================= MEN / PERFORMANCE =================
  {
    id: 1,
    name: "Aero Run Pro",
    category: "Running",
    price: 6999,
    oldPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    description:
      "Lightweight performance shoes designed for everyday running and high-intensity training.",
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
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&q=80",
    description:
      "Clean everyday sneakers combining street style with lightweight comfort.",
    colors: ["White", "Grey", "Black"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.7,
    badge: "New",
  },

  {
    id: 3,
    name: "Motion Flex",
    category: "Training",
    price: 6299,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80",
    description:
      "Flexible training shoes built for movement, stability and everyday workouts.",
    colors: ["Black", "Blue"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.6,
  },

  {
    id: 4,
    name: "Urban Runner",
    category: "Running",
    price: 4799,
    oldPrice: 5599,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=900&q=80",
    description:
      "Modern running silhouette with a comfortable sole and breathable upper.",
    colors: ["Black", "Green", "White"],
    sizes: ["6", "7", "8", "9"],
    rating: 4.5,
    badge: "Popular",
  },

  {
    id: 5,
    name: "Court Edge",
    category: "Basketball",
    price: 7499,
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&q=80",
    description:
      "High-performance basketball footwear designed for grip and quick movement.",
    colors: ["White", "Red", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.9,
    badge: "Premium",
  },

  {
    id: 6,
    name: "Daily Move",
    category: "Lifestyle",
    price: 3999,
    oldPrice: 4499,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900&q=80",
    description:
      "Minimal everyday footwear designed for comfort from morning to evening.",
    colors: ["White", "Beige"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.4,
  },

  // ================= WOMEN =================
  {
    id: 7,
    name: "Luna Air Women",
    category: "Women",
    price: 5799,
    oldPrice: 6799,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80",
    description:
      "Modern women's sneakers combining lightweight comfort with a clean everyday silhouette.",
    colors: ["White", "Pink", "Black"],
    sizes: ["5", "6", "7", "8", "9"],
    rating: 4.8,
    badge: "New Arrival",
  },

  {
    id: 8,
    name: "Aura Street",
    category: "Women",
    price: 4999,
    oldPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80",
    description:
      "Minimal lifestyle sneakers designed for everyday outfits and all-day comfort.",
    colors: ["White", "Beige", "Grey"],
    sizes: ["5", "6", "7", "8", "9"],
    rating: 4.7,
    badge: "Trending",
  },

  {
    id: 9,
    name: "Flex Motion Women",
    category: "Women",
    price: 6299,
    image:
      "https://images.unsplash.com/photo-1554130840-1d4e1c2d2f1b?w=900&q=80",
    description:
      "Flexible performance footwear designed for workouts, training and active lifestyles.",
    colors: ["Black", "White", "Blue"],
    sizes: ["5", "6", "7", "8", "9"],
    rating: 4.6,
    badge: "Performance",
  },

  {
    id: 10,
    name: "Cloud Step Women",
    category: "Women",
    price: 4599,
    oldPrice: 5299,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&q=80",
    description:
      "Soft and comfortable everyday sneakers with a lightweight feel and modern design.",
    colors: ["White", "Cream", "Grey"],
    sizes: ["5", "6", "7", "8", "9"],
    rating: 4.5,
    badge: "Popular",
  },

  // ================= KIDS =================
  {
    id: 11,
    name: "Mini Sprint Kids",
    category: "Kids",
    price: 2999,
    oldPrice: 3499,
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&q=80",
    description:
      "Lightweight and comfortable kids' sneakers designed for running, playing and everyday adventures.",
    colors: ["Blue", "Red", "Black"],
    sizes: ["1", "2", "3", "4", "5"],
    rating: 4.8,
    badge: "Kids Favorite",
  },

  {
    id: 12,
    name: "Play Move Kids",
    category: "Kids",
    price: 2699,
    oldPrice: 3199,
    image:
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&q=80",
    description:
      "Fun everyday footwear with a flexible sole and comfortable fit for active kids.",
    colors: ["White", "Blue", "Green"],
    sizes: ["1", "2", "3", "4", "5"],
    rating: 4.6,
    badge: "New",
  },

  {
    id: 13,
    name: "Junior Street",
    category: "Kids",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1551861568-7c5c6a2f7a2b?w=900&q=80",
    description:
      "Stylish everyday sneakers created for school, weekends and outdoor adventures.",
    colors: ["Black", "White", "Grey"],
    sizes: ["2", "3", "4", "5"],
    rating: 4.5,
  },

  {
    id: 14,
    name: "Little Runner",
    category: "Kids",
    price: 2899,
    oldPrice: 3399,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&q=80",
    description:
      "Breathable and lightweight running shoes made for comfortable everyday movement.",
    colors: ["Pink", "Purple", "White"],
    sizes: ["1", "2", "3", "4", "5"],
    rating: 4.7,
    badge: "Best Seller",
  },

  // ================= NEW ARRIVALS =================
  {
    id: 15,
    name: "Nova X1",
    category: "New Arrivals",
    price: 7999,
    oldPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
    description:
      "A fresh performance silhouette featuring a lightweight build and responsive cushioning.",
    colors: ["Black", "White", "Grey"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    rating: 4.9,
    badge: "Just Dropped",
  },

  {
    id: 16,
    name: "Velocity X",
    category: "New Arrivals",
    price: 6999,
    oldPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1554130840-1d4e1c2d2f1b?w=900&q=80",
    description:
      "Contemporary sneakers combining performance technology with a premium streetwear aesthetic.",
    colors: ["Black", "White", "Red"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.8,
    badge: "New Arrival",
  },

  {
    id: 17,
    name: "Aero Street X",
    category: "New Arrivals",
    price: 5899,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
    description:
      "A modern everyday sneaker designed with a bold silhouette and lightweight comfort.",
    colors: ["White", "Black", "Green"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.7,
    badge: "Latest",
  },

  // ================= COMBO / BUNDLES =================
  {
    id: 18,
    name: "Active Duo Combo",
    category: "Combo",
    price: 8999,
    oldPrice: 10998,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80",
    description:
      "A premium activewear-inspired combo featuring everyday footwear and coordinated essentials.",
    colors: ["Black", "White"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.8,
    badge: "Combo Offer",
  },

  {
    id: 19,
    name: "Weekend Style Combo",
    category: "Combo",
    price: 7499,
    oldPrice: 8998,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900&q=80",
    description:
      "A versatile style combo designed for relaxed weekends and everyday street looks.",
    colors: ["White", "Beige", "Black"],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.6,
    badge: "Save More",
  },

  {
    id: 20,
    name: "Family Move Combo",
    category: "Combo",
    price: 9999,
    oldPrice: 12997,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
    description:
      "A family-focused footwear bundle created for everyday movement and shared adventures.",
    colors: ["Black", "White", "Grey"],
    sizes: ["1", "5", "7", "8", "9", "10"],
    rating: 4.7,
    badge: "Family Pack",
  },
];
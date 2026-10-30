export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
  rating: number;
  badge?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
}

export type OrderStatus = 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export interface TrackingStep {
  title: string;
  location: string;
  time: string;
  completed: boolean;
  current: boolean;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface Order {
  id: string;
  date: string;
  totalAmount: number;
  status: OrderStatus;
  items: OrderItem[];
  trackingSteps: TrackingStep[];
  estimatedDelivery: string;
  shippingAddress: string;
}
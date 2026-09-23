"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (
    item: Omit<CartItem, "quantity">,
    quantity?: number
  ) => void;
  removeFromCart: (
    id: number,
    size?: string,
    color?: string
  ) => void;
  updateQuantity: (
    id: number,
    change: number,
    size?: string,
    color?: string
  ) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("shopsphere-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("shopsphere-cart");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "shopsphere-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (
    item: Omit<CartItem, "quantity">,
    quantity = 1
  ) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (
    id: number,
    size?: string,
    color?: string
  ) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            item.color === color
          )
      )
    );
  };

  const updateQuantity = (
    id: number,
    change: number,
    size?: string,
    color?: string
  ) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id &&
          item.size === size &&
          item.color === color
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cart]
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}


// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
// } from "react";

// type CartContextType = {
//   cartCount: number;
//   addToCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(
//   undefined
// );

// export function CartProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = () => {
//     setCartCount((count) => count + 1);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartCount,
//         addToCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error(
//       "useCart must be used inside CartProvider"
//     );
//   }

//   return context;
// }


// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
//   ReactNode,
// } from "react";

// export type CartItem = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//   quantity: number;
//   size?: string;
//   color?: string;
// };

// type CartContextType = {
//   cart: CartItem[];

//   addToCart: (
//     item: Omit<CartItem, "quantity">,
//     quantity?: number
//   ) => void;

//   removeFromCart: (
//     id: number,
//     size?: string,
//     color?: string
//   ) => void;

//   updateQuantity: (
//     id: number,
//     change: number,
//     size?: string,
//     color?: string
//   ) => void;

//   clearCart: () => void;

//   cartCount: number;

//   subtotal: number;
// };

// const CartContext = createContext<CartContextType | undefined>(
//   undefined
// );

// export function CartProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   /* Load cart from browser storage */
//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem("shopsphere-cart");

//       if (savedCart) {
//         setCart(JSON.parse(savedCart));
//       }
//     } catch (error) {
//       console.error("Failed to load cart:", error);
//     }
//   }, []);

//   /* Save cart whenever cart changes */
//   useEffect(() => {
//     try {
//       localStorage.setItem(
//         "shopsphere-cart",
//         JSON.stringify(cart)
//       );
//     } catch (error) {
//       console.error("Failed to save cart:", error);
//     }
//   }, [cart]);

//   /* Add product */
//   const addToCart = (
//     item: Omit<CartItem, "quantity">,
//     quantity = 1
//   ) => {
//     setCart((currentCart) => {
//       const existingItem = currentCart.find(
//         (cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.size === item.size &&
//           cartItem.color === item.color
//       );

//       if (existingItem) {
//         return currentCart.map((cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.size === item.size &&
//           cartItem.color === item.color
//             ? {
//                 ...cartItem,
//                 quantity: cartItem.quantity + quantity,
//               }
//             : cartItem
//         );
//       }

//       return [
//         ...currentCart,
//         {
//           ...item,
//           quantity,
//         },
//       ];
//     });
//   };

//   /* Remove product */
//   const removeFromCart = (
//     id: number,
//     size?: string,
//     color?: string
//   ) => {
//     setCart((currentCart) =>
//       currentCart.filter(
//         (item) =>
//           !(
//             item.id === id &&
//             item.size === size &&
//             item.color === color
//           )
//       )
//     );
//   };

//   /* Increase / decrease quantity */
//   const updateQuantity = (
//     id: number,
//     change: number,
//     size?: string,
//     color?: string
//   ) => {
//     setCart((currentCart) =>
//       currentCart
//         .map((item) =>
//           item.id === id &&
//           item.size === size &&
//           item.color === color
//             ? {
//                 ...item,
//                 quantity: item.quantity + change,
//               }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   /* Clear entire cart */
//   const clearCart = () => {
//     setCart([]);
//   };

//   /* Total number of products */
//   const cartCount = useMemo(() => {
//     return cart.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//   }, [cart]);

//   /* Total price */
//   const subtotal = useMemo(() => {
//     return cart.reduce(
//       (total, item) =>
//         total + item.price * item.quantity,
//       0
//     );
//   }, [cart]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         cartCount,
//         subtotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// /* Cart hook */
// export function useCart() {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error(
//       "useCart must be used inside CartProvider"
//     );
//   }

//   return context;
// }


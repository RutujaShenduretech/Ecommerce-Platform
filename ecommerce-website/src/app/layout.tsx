// // import type { Metadata } from "next";
// // import Navbar from "@/components/Navbar";
// // import "./globals.css";
// // import Footer from "@/components/footer"
// // import { CartProvider } from "@/context/CartContext";
// // export const metadata: Metadata = {
// //   title: "ShopSphere | Move Different",
// //   description:
// //     "Premium performance-inspired eCommerce shopping experience",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body className="min-h-screen bg-white text-black antialiased">
// //       <CartProvider>
// //         <Navbar />
// //         {children}
// //         <Footer />
// //       </CartProvider>
// //       </body>
// //     </html>
// //   );
// // }


// import type { Metadata } from "next";
// import Navbar from "@/components/Navbar";
// import { CartProvider } from "@/context/CartContext";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "ShopSphere",
//   description: "ShopSphere eCommerce",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           <Navbar />
//           {children}
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopSphere | Move Different",
  description:
    "Premium performance-inspired eCommerce shopping experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">

        <CartProvider>
          <Navbar />

          {children}

          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}

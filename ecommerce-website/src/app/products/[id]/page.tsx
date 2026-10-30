// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useState } from "react";
// import { products } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// export default function ProductDetailsPage() {
//   const params = useParams();
//   const id = Number(params.id);

//   const { addToCart } = useCart();
//   const product = products.find((item) => item.id === id);

//   const [size, setSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);
// const [showDeleteModal, setShowDeleteModal] = useState(false);
// const [isDeleting, setIsDeleting] = useState(false);
//   if (!product) {
//     return (
//       <main className="flex min-h-[70vh] items-center justify-center px-5">
//         <div className="text-center">
//           <h1 className="text-3xl font-black">Product not found</h1>

//           <Link
//             href="/products"
//             className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
//           >
//             Back to Shop
//           </Link>
//         </div>
//       </main>
//     );
//   }
// const handleDelete = async () => {
//   setIsDeleting(true);

//   try {
//     const response = await fetch(`/api/products/${product.id}`, {
//       method: "DELETE",
//     });

//     const data = await response.json();

//     console.log("DELETE RESPONSE:", data);

//     if (!response.ok) {
//       setIsDeleting(false);
//       setShowDeleteModal(false);

//       alert(data.message || "Failed to delete product");
//       return;
//     }

//     setShowDeleteModal(false);

//     alert(data.message || "Product deleted successfully!");

//     window.location.href = "/products";
//   } catch (error) {
//     console.error("DELETE ERROR:", error);

//     setIsDeleting(false);
//     setShowDeleteModal(false);

//     alert("Something went wrong while deleting the product.");
//   }
// };
  
//   return (
//     <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
//       <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
//         {/* Image */}
//         <div className="overflow-hidden rounded-3xl bg-neutral-100">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="aspect-square h-full w-full object-cover"
//           />
//         </div>

//         {/* Details */}
//         <div className="flex flex-col justify-center">
//           <p className="text-sm font-bold uppercase tracking-widest text-black/40">
//             {product.category}
//           </p>

//           <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
//             {product.name}
//           </h1>

//           <div className="mt-5 flex items-center gap-4">
//             <span className="text-2xl font-bold">
//               ₹{product.price.toLocaleString("en-IN")}
//             </span>

//             {product.oldPrice && (
//               <span className="text-lg text-black/40 line-through">
//                 ₹{product.oldPrice.toLocaleString("en-IN")}
//               </span>
//             )}

//             <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
//               ★ {product.rating}
//             </span>
//           </div>

//           <p className="mt-6 max-w-xl leading-7 text-black/60">
//             {product.description}
//           </p>

//           {/* Color */}
//           <div className="mt-8">
//             <p className="mb-3 text-sm font-bold">Color</p>

//             <div className="flex flex-wrap gap-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black ${
//                     selectedColor === color ? "border-black bg-black text-white" : ""
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Size */}
//           <div className="mt-6">
//             <div className="mb-3 flex justify-between">
//               <p className="text-sm font-bold">Select Size</p>
//               <button className="text-xs underline">Size Guide</button>
//             </div>

//             <div className="grid grid-cols-5 gap-2">
//               {product.sizes.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setSize(item)}
//                   className={`rounded-xl border py-3 text-sm font-semibold transition ${
//                     size === item
//                       ? "border-black bg-black text-white"
//                       : "border-black/10 hover:border-black"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//             <button
//               type="button"
//               onClick={() => {
//                 addToCart(
//                   {
//                     id: product.id,
//                     name: product.name,
//                     category: product.category,
//                     price: product.price,
//                     image: product.image,
//                     size: size,
//                     color: selectedColor,
//                   },
//                   quantity
//                 );
//               }}
//               className="w-full rounded-full bg-black px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 active:scale-[0.98]"
//             >
//               ADD TO CART →
//             </button>


//             <button className="rounded-full border border-black/10 px-7 py-4 text-sm font-bold transition hover:bg-neutral-100">
//               ♡ Wishlist
//             </button>
//           </div>
// {showDeleteModal && (
//   <div
//     className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
//     onClick={() => !isDeleting && setShowDeleteModal(false)}
//   >
//     <div
//       className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
//       onClick={(e) => e.stopPropagation()}
//     >
//       {/* Top Section */}
//       <div className="px-6 pb-6 pt-8 text-center sm:px-8">
//         {/* Delete Icon */}
//         <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-7 w-7 text-red-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"
//             />
//           </svg>
//         </div>

//         <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
//           Delete Product?
//         </h2>

//         <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
//           Are you sure you want to delete{" "}
//           <span className="font-semibold text-gray-900">
//             {product.name}
//           </span>
//           ?
//         </p>

//         <p className="mt-1 text-xs text-gray-400">
//           This action cannot be undone.
//         </p>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
//         <button
//           type="button"
//           disabled={isDeleting}
//           onClick={() => setShowDeleteModal(false)}
//           className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
//         >
//           Cancel
//         </button>

//         <button
//           type="button"
//           disabled={isDeleting}
//           onClick={handleDelete}
//           className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
//         >
//           {isDeleting ? "Deleting..." : "Yes, Delete"} Delete 
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//           <div className="mt-8 grid grid-cols-3 gap-3 border-t border-black/10 pt-8 text-center text-xs text-black/50">
//             <div>Free Shipping</div>
//             <div>Easy Returns</div>
//             <div>Secure Payment</div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const { addToCart } = useCart();
  const product = products.find((item) => item.id === id);

  const [size, setSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-black">Product not found</h1>

          <Link
            href="/products"
            className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      console.log("DELETE RESPONSE:", data);

      if (!response.ok) {
        setIsDeleting(false);
        return;
      }

      setShowDeleteModal(false);


      window.location.href = "/products";
    } catch (error) {
      console.error("DELETE ERROR:", error);

      setIsDeleting(false);
    }
  };

  return (
    <>
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-bold uppercase tracking-widest text-black/40">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <span className="text-lg text-black/40 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}

              <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
                ★ {product.rating}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl leading-7 text-black/60">
              {product.description}
            </p>

            {/* COLOR */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-bold">Color</p>

              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedColor === color
                        ? "border-black bg-black text-white"
                        : "border-black/10 hover:border-black"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-6">
              <div className="mb-3 flex justify-between">
                <p className="text-sm font-bold">Select Size</p>

                <button
                  type="button"
                  className="text-xs underline"
                >
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSize(item)}
                    className={`rounded-xl border py-3 text-sm font-semibold transition ${
                      size === item
                        ? "border-black bg-black text-white"
                        : "border-black/10 hover:border-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CART + WISHLIST */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => {
                  addToCart(
                    {
                      id: product.id,
                      name: product.name,
                      category: product.category,
                      price: product.price,
                      image: product.image,
                      size,
                      color: selectedColor,
                    },
                    quantity
                  );
                }}
                className="w-full rounded-full bg-black px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 active:scale-[0.98]"
              >
                ADD TO CART →
              </button>

              <button
                type="button"
                className="rounded-full border border-black/10 px-7 py-4 text-sm font-bold transition hover:bg-neutral-100"
              >
                ♡ Wishlist
              </button>
            </div>

            {/* DELETE BUTTON */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setShowDeleteModal(true)}
                className="w-full rounded-full border border-red-200 bg-white px-6 py-4 text-sm font-bold tracking-wide text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-50 hover:shadow-md active:scale-[0.98]"
              >
                🗑 DELETE PRODUCT
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-black/10 pt-8 text-center text-xs text-black/50">
              <div>Free Shipping</div>
              <div>Easy Returns</div>
              <div>Secure Payment</div>
            </div>
          </div>
        </div>
      </main>

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => {
            if (!isDeleting) {
              setShowDeleteModal(false);
            }
          }}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* ICON + MESSAGE */}
            <div className="px-6 pb-6 pt-8 text-center sm:px-8">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Delete Product?
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-gray-900">
                  {product.name}
                </span>
                ?
              </p>

              <p className="mt-2 text-xs text-gray-400">
                This action cannot be undone.
              </p>
            </div>

            {/* MODAL BUTTONS */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">

              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setShowDeleteModal(false)}
                className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

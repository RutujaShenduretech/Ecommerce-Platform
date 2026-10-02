// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/db";
// import { products } from "@/db/schema";
// import { eq } from "drizzle-orm";


// export async function DELETE(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;
//     const productId = Number(id);

//     if (Number.isNaN(productId)) {
//       return NextResponse.json(
//         { message: "Invalid product ID" },
//         { status: 400 }
//       );
//     }

//     const deletedProduct = await db
//       .delete(products)
//       .where(eq(products.id, productId))
//       .returning();

//     if (deletedProduct.length === 0) {
//       return NextResponse.json(
//         { message: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       message: "Product deleted successfully",
//       product: deletedProduct[0],
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { message: "Failed to delete product" },
//       { status: 500 }
//     );
//   }
// }

// type Context = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export async function GET(
//   request: NextRequest,
//   context: Context
// ) {
//   try {
//     const { id } = await context.params;

//     const productId = Number(id);

//     if (Number.isNaN(productId)) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid product ID",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     const result = await db
//       .select()
//       .from(products)
//       .where(eq(products.id, productId));

//     if (result.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Product not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       product: result[0],
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch product",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// export async function PUT(
//   request: NextRequest,
//   context: Context
// ) {
//   try {
//     const { id } = await context.params;

//     const productId = Number(id);

//     if (Number.isNaN(productId)) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid product ID",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     const body = await request.json();

//     const result = await db
//       .update(products)
//       .set({
//         ...(body.name && {
//           name: body.name,
//         }),

//         ...(body.category && {
//           category: body.category,
//         }),

//         ...(body.price !== undefined && {
//           price: String(body.price),
//         }),

//         ...(body.oldPrice !== undefined && {
//           oldPrice: String(body.oldPrice),
//         }),

//         ...(body.image && {
//           image: body.image,
//         }),

//         ...(body.description && {
//           description: body.description,
//         }),

//         ...(body.rating !== undefined && {
//           rating: String(body.rating),
//         }),
//       })
//       .where(eq(products.id, productId))
//       .returning();

//     if (result.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Product not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Product updated successfully",
//       product: result[0],
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to update product",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    message: "DELETE API is working",
    productId: id,
  });
}
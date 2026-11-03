

// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/db";
// import {
//   orders,
//   orderItems,
//   products,
// } from "@/db/schema";
// import { getUserSession } from "@/lib/auth";
// import { eq, desc } from "drizzle-orm";

// export async function GET() {
//   try {
//     const userId = await getUserSession();

//     if (!userId) {
//       return NextResponse.json(
//         { success: false, message: "Please login first" },
//         { status: 401 }
//       );
//     }

//     const rows = await db
//       .select({
//         orderId: orders.id,
//         total: orders.total,
//         status: orders.status,
//         createdAt: orders.createdAt,

//         itemId: orderItems.id,
//         productId: orderItems.productId,
//         quantity: orderItems.quantity,
//         price: orderItems.price,
//         size: orderItems.size,
//         color: orderItems.color,

//         productName: products.name,
//         productImage: products.image,
//         productCategory: products.category,
//       })
//       .from(orders)
//       .leftJoin(
//         orderItems,
//         eq(orders.id, orderItems.orderId)
//       )
//       .leftJoin(
//         products,
//         eq(orderItems.productId, products.id)
//       )
//       .where(eq(orders.userId, userId))
//       .orderBy(desc(orders.createdAt));

//     const groupedOrders = new Map<number, any>();

//     for (const row of rows) {
//       if (!groupedOrders.has(row.orderId)) {
//         groupedOrders.set(row.orderId, {
//           id: row.orderId,
//           total: row.total,
//           status: row.status,
//           createdAt: row.createdAt,
//           items: [],
//         });
//       }

//       if (row.itemId !== null) {
//         groupedOrders.get(row.orderId).items.push({
//           id: row.itemId,
//           productId: row.productId,
//           quantity: row.quantity,
//           price: row.price,
//           size: row.size,
//           color: row.color,
//           product: {
//             id: row.productId,
//             name: row.productName || "Product unavailable",
//             image: row.productImage || "",
//             category: row.productCategory || "",
//           },
//         });
//       }
//     }

//     return NextResponse.json({
//       success: true,
//       orders: Array.from(groupedOrders.values()),
//     });
//   } catch (error) {
//     console.error("Fetch orders error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch orders",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const userId = await getUserSession();

//     if (!userId) {
//       return NextResponse.json(
//         { success: false, message: "Please login first" },
//         { status: 401 }
//       );
//     }

//     const body = await request.json();
//     const { total, items } = body;

//     const orderTotal = Number(total);

//     if (
//       !Number.isFinite(orderTotal) ||
//       orderTotal <= 0 ||
//       !Array.isArray(items) ||
//       items.length === 0
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Valid total and order items are required",
//         },
//         { status: 400 }
//       );
//     }

//     for (const item of items) {
//       if (
//         !Number.isInteger(Number(item.productId)) ||
//         Number(item.productId) <= 0 ||
//         !Number.isInteger(Number(item.quantity)) ||
//         Number(item.quantity) <= 0 ||
//         !Number.isFinite(Number(item.price)) ||
//         Number(item.price) < 0
//       ) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: "Invalid order item details",
//           },
//           { status: 400 }
//         );
//       }
//     }

//     const order = await db.transaction(async (tx) => {
//       const [newOrder] = await tx
//         .insert(orders)
//         .values({
//           userId,
//           total: String(orderTotal),
//           status: "Pending",
//         })
//         .returning();

//       await tx.insert(orderItems).values(
//         items.map((item: any) => ({
//           orderId: newOrder.id,
//           productId: Number(item.productId),
//           quantity: Number(item.quantity),
//           price: String(item.price),
//           size: item.size ?? null,
//           color: item.color ?? null,
//         }))
//       );

//       return newOrder;
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Order created successfully",
//         order,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Create order error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create order",
//       },
//       { status: 500 }
//     );
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import {
  orders,
  orderItems,
  products,
} from "@/db/schema";
import {
  eq,
  desc,
  inArray,
} from "drizzle-orm";
import { getUserSession } from "@/lib/auth";

// GET: Fetch all orders for the logged-in user
export async function GET() {
  try {
    const userId = await getUserSession();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login first",
        },
        { status: 401 }
      );
    }

    const rows = await db
      .select({
        orderId: orders.id,
        total: orders.total,
        status: orders.status,
        createdAt: orders.createdAt,

        itemId: orderItems.id,
        productId: orderItems.productId,
        quantity: orderItems.quantity,
        price: orderItems.price,
        size: orderItems.size,
        color: orderItems.color,

        productIdFromTable: products.id,
        productName: products.name,
        productImage: products.image,
        productCategory: products.category,
      })
      .from(orders)
      .leftJoin(
        orderItems,
        eq(orders.id, orderItems.orderId)
      )
      .leftJoin(
        products,
        eq(orderItems.productId, products.id)
      )
      .where(eq(orders.userId, userId))
      .orderBy(desc(orders.createdAt));

    // Group order items under their respective orders
    const groupedOrders = new Map<number, any>();

    for (const row of rows) {
      if (!groupedOrders.has(row.orderId)) {
        groupedOrders.set(row.orderId, {
          id: row.orderId,
          total: row.total,
          status: row.status,
          createdAt: row.createdAt,
          items: [],
        });
      }

      if (row.itemId !== null) {
        groupedOrders.get(row.orderId).items.push({
          id: row.itemId,
          productId: row.productId,
          quantity: row.quantity,
          price: row.price,
          size: row.size,
          color: row.color,
          product: {
            id: row.productIdFromTable ?? row.productId,
            name: row.productName ?? "Product unavailable",
            image: row.productImage ?? "",
            category: row.productCategory ?? "",
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      orders: Array.from(groupedOrders.values()),
    });
  } catch (error) {
    console.error("Fetch orders error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch orders",
      },
      { status: 500 }
    );
  }
}

// POST: Create a new order
export async function POST(request: NextRequest) {
  try {
    const userId = await getUserSession();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login first",
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { total, items } = body;

    const orderTotal = Number(total);

    if (
      !Number.isFinite(orderTotal) ||
      orderTotal <= 0 ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid total and order items are required",
        },
        { status: 400 }
      );
    }

    // Validate every order item
    for (const item of items) {
      if (
        !Number.isInteger(Number(item.productId)) ||
        Number(item.productId) <= 0 ||
        !Number.isInteger(Number(item.quantity)) ||
        Number(item.quantity) <= 0 ||
        !Number.isFinite(Number(item.price)) ||
        Number(item.price) < 0
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid order item details",
          },
          { status: 400 }
        );
      }
    }

    // Check that all product IDs exist
    const productIds = [
      ...new Set(items.map((item: any) => Number(item.productId))),
    ];

    const existingProducts = await db
      .select({
        id: products.id,
      })
      .from(products)
      .where(inArray(products.id, productIds));

    if (existingProducts.length !== productIds.length) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more products were not found",
        },
        { status: 400 }
      );
    }

    // Save order and items together
    const newOrder = await db.transaction(async (tx) => {
      const [createdOrder] = await tx
        .insert(orders)
        .values({
          userId,
          total: String(orderTotal),
          status: "Pending",
        })
        .returning();

      await tx.insert(orderItems).values(
        items.map((item: any) => ({
          orderId: createdOrder.id,
          productId: Number(item.productId),
          quantity: Number(item.quantity),
          price: String(item.price),
          size: item.size ?? null,
          color: item.color ?? null,
        }))
      );

      return createdOrder;
    });

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create order error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order",
      },
      { status: 500 }
    );
  }
}

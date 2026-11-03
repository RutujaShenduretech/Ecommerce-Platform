
// import { NextResponse } from "next/server";
// import { inArray, eq } from "drizzle-orm";
// import { db } from "@/db";
// import { products, bills, billItems } from "@/db/schema";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const items = body.items;
//     const promoCode = body.promoCode ?? "";

//     // Validate cart
//     if (!Array.isArray(items) || items.length === 0) {
//       return NextResponse.json(
//         { error: "Your cart is empty." },
//         { status: 400 }
//       );
//     }

//     for (const item of items) {
//       if (
//         !Number.isInteger(item.productId) ||
//         !Number.isInteger(item.quantity) ||
//         item.productId <= 0 ||
//         item.quantity <= 0 ||
//         item.quantity > 99
//       ) {
//         return NextResponse.json(
//           { error: "Invalid cart item." },
//           { status: 400 }
//         );
//       }
//     }

//     // Get actual products and prices from PostgreSQL
//     const productIds = [
//       ...new Set(items.map((item) => item.productId)),
//     ];

//     const databaseProducts = await db
//       .select()
//       .from(products)
//       .where(inArray(products.id, productIds));

//     if (databaseProducts.length !== productIds.length) {
//       return NextResponse.json(
//         { error: "One or more products were not found." },
//         { status: 404 }
//       );
//     }

//     const productMap = new Map(
//       databaseProducts.map((product) => [
//         product.id,
//         product,
//       ])
//     );

//     let subtotal = 0;

//     const billItemValues = items.map((item) => {
//       const product = productMap.get(item.productId)!;
//       const price = Number(product.price);

//       subtotal += price * item.quantity;

//       return {
//         productName: product.name,
//         quantity: item.quantity,
//         price: price.toFixed(2),
//       };
//     });

//     // Calculate shipping and discount on the server
//     const shipping = subtotal === 0 || subtotal >= 5000
//       ? 0
//       : 199;

//     const discount =
//       String(promoCode).trim().toUpperCase() === "SHOP10"
//         ? subtotal * 0.1
//         : 0;

//     const total = Number(
//       (subtotal + shipping - discount).toFixed(2)
//     );

//     const billNumber = `SS-${Date.now()}-${Math.floor(
//       Math.random() * 1000
//     )}`;

//     // Save bill and its items together
//     const result = await db.transaction(async (tx) => {
// const [newBill] = await tx
//   .insert(bills)
//   .values({
//     billNumber,
//     subtotal: subtotal.toFixed(2),
//     shipping: shipping.toFixed(2),
//     discount: discount.toFixed(2),
//     total: total.toFixed(2),
//   })
//   .returning({
//     id: bills.id,
//     billNumber: bills.billNumber,
//   });
//       await tx.insert(billItems).values(
//         billItemValues.map((item) => ({
//           ...item,
//           billId: newBill.id,
//         }))
//       );

//       return newBill;
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Bill saved successfully.",
//         bill: {
//           id: result.id,
//           billNumber: result.billNumber,
//           subtotal,
//           shipping,
//           discount,
//           total,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("BILL API ERROR:", error);

//     return NextResponse.json(
//       { error: "Unable to save the bill." },
//       { status: 500 }
//     );
//   }
// }
// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const billNumber = searchParams.get("billNumber");

//     if (!billNumber) {
//       return NextResponse.json(
//         { error: "Bill number is required." },
//         { status: 400 }
//       );
//     }

//     // Find saved bill
//     const [bill] = await db
//       .select()
//       .from(bills)
//       .where(eq(bills.billNumber, billNumber))
//       .limit(1);

//     if (!bill) {
//       return NextResponse.json(
//         { error: "Bill not found." },
//         { status: 404 }
//       );
//     }

//     // Find products belonging to this bill
//     const items = await db
//       .select()
//       .from(billItems)
//       .where(eq(billItems.billId, bill.id));

//     return NextResponse.json({
//       success: true,
//       bill,
//       items,
//     });
//   } catch (error) {
//     console.error("GET BILL ERROR:", error);

//     return NextResponse.json(
//       { error: "Unable to retrieve bill." },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { inArray, eq } from "drizzle-orm";

import { db } from "@/db";
import {
  products,
  bills,
  billItems,
  orders,
  orderItems,
  users,
} from "@/db/schema";

import { getUserSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    // 1. Check logged-in customer
    const userId = await getUserSession();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Please login before placing an order." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const items = body.items;
    const promoCode = body.promoCode ?? "";

    // 2. Validate cart
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Your cart is empty." },
        { status: 400 }
      );
    }

    for (const item of items) {
      if (
        !Number.isInteger(item.productId) ||
        !Number.isInteger(item.quantity) ||
        item.productId <= 0 ||
        item.quantity <= 0 ||
        item.quantity > 99
      ) {
        return NextResponse.json(
          { success: false, error: "Invalid cart item." },
          { status: 400 }
        );
      }
    }

    // 3. Get customer details
    const [customer] = await db
      .select({
        id: users.id,
        name: users.name,
      })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!customer) {
      return NextResponse.json(
        { success: false, error: "Customer account not found." },
        { status: 404 }
      );
    }

    // 4. Get actual product prices from database
    const productIds = [
      ...new Set(items.map((item) => item.productId)),
    ];

    const databaseProducts = await db
      .select()
      .from(products)
      .where(inArray(products.id, productIds));

    if (databaseProducts.length !== productIds.length) {
      return NextResponse.json(
        { success: false, error: "One or more products were not found." },
        { status: 404 }
      );
    }

    const productMap = new Map(
      databaseProducts.map((product) => [
        product.id,
        product,
      ])
    );

    // 5. Calculate bill and order totals using database prices
    let subtotal = 0;

    const billItemValues = items.map((item) => {
      const product = productMap.get(item.productId)!;
      const price = Number(product.price);

      subtotal += price * item.quantity;

      return {
        productName: product.name,
        quantity: item.quantity,
        price: price.toFixed(2),
      };
    });

    const shipping =
      subtotal === 0 || subtotal >= 5000 ? 0 : 199;

    const discount =
      String(promoCode).trim().toUpperCase() === "SHOP10"
        ? subtotal * 0.1
        : 0;

    const total = Number(
      (subtotal + shipping - discount).toFixed(2)
    );

    const billNumber = `SS-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    // 6. Create bill AND order in one transaction
    const result = await db.transaction(async (tx) => {
      // Save bill
      const [newBill] = await tx
        .insert(bills)
        .values({
          billNumber,
          customerName: customer.name,
          subtotal: subtotal.toFixed(2),
          shipping: shipping.toFixed(2),
          discount: discount.toFixed(2),
          total: total.toFixed(2),
        })
        .returning({
          id: bills.id,
          billNumber: bills.billNumber,
        });

      // Save invoice items
      await tx.insert(billItems).values(
        billItemValues.map((item) => ({
          ...item,
          billId: newBill.id,
        }))
      );

      // Save customer order
      const [newOrder] = await tx
        .insert(orders)
        .values({
          userId: customer.id,
          total: total.toFixed(2),
          status: "Pending",
        })
        .returning({
          id: orders.id,
        });

      // Save order products
      await tx.insert(orderItems).values(
        items.map((item) => {
          const product = productMap.get(item.productId)!;

          return {
            orderId: newOrder.id,
            productId: item.productId,
            quantity: item.quantity,
            price: Number(product.price).toFixed(2),
            size: item.size ?? null,
            color: item.color ?? null,
          };
        })
      );

      return {
        billId: newBill.id,
        billNumber: newBill.billNumber,
        orderId: newOrder.id,
      };
    });

    // 7. Send response to checkout page
    return NextResponse.json(
      {
        success: true,
        message: "Order and bill saved successfully.",
        bill: {
          id: result.billId,
          billNumber: result.billNumber, 
           customerName: customer.name, // Add this line
          subtotal,
          shipping,
          discount,
          total,
        },
        orderId: result.orderId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CHECKOUT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to complete your order.",
      },
      { status: 500 }
    );
  }
}

// Retrieve a saved bill using its bill number
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const billNumber = searchParams.get("billNumber");

    if (!billNumber) {
      return NextResponse.json(
        { success: false, error: "Bill number is required." },
        { status: 400 }
      );
    }

    const [bill] = await db
      .select()
      .from(bills)
      .where(eq(bills.billNumber, billNumber))
      .limit(1);

    if (!bill) {
      return NextResponse.json(
        { success: false, error: "Bill not found." },
        { status: 404 }
      );
    }

    const items = await db
      .select()
      .from(billItems)
      .where(eq(billItems.billId, bill.id));

    return NextResponse.json({
      success: true,
      bill,
      items,
    });
  } catch (error) {
    console.error("GET BILL ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Unable to retrieve bill." },
      { status: 500 }
    );
  }
}
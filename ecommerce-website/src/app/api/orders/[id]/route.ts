
import { NextResponse } from "next/server";
import { db } from "@/db";
import {
  orders,
  orderItems,
  products,
} from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { getUserSession } from "@/lib/auth";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: Context
) {
  try {
    // Get logged-in user's ID
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

    // Get order ID from URL
    const { id } = await context.params;
    const orderId = Number(id);

    if (!Number.isInteger(orderId) || orderId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid order ID",
        },
        { status: 400 }
      );
    }

    // Find order belonging to logged-in user
    const [order] = await db
      .select()
      .from(orders)
      .where(
        and(
          eq(orders.id, orderId),
          eq(orders.userId, userId)
        )
      )
      .limit(1);

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found",
        },
        { status: 404 }
      );
    }

    // Fetch order items with product details
    const items = await db
      .select({
        id: orderItems.id,
        productId: orderItems.productId,
        quantity: orderItems.quantity,
        price: orderItems.price,
        size: orderItems.size,
        color: orderItems.color,

        product: {
          id: products.id,
          name: products.name,
          image: products.image,
          category: products.category,
        },
      })
      .from(orderItems)
      .leftJoin(
        products,
        eq(orderItems.productId, products.id)
      )
      .where(eq(orderItems.orderId, orderId));

    return NextResponse.json({
      success: true,
      order: {
        ...order,
        items,
      },
    });
  } catch (error) {
    console.error("Fetch single order error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch order",
      },
      { status: 500 }
    );
  }
}

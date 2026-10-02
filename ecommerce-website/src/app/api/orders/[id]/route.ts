import { NextResponse } from "next/server";
import { db } from "@/db";
import { orders, orderItems } from "@/db/schema";
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
    const userId = await getUserSession();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login first",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await context.params;

    const orderResult = await db
      .select()
      .from(orders)
      .where(
        and(
          eq(orders.id, Number(id)),
          eq(orders.userId, userId)
        )
      );

    if (orderResult.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found",
        },
        {
          status: 404,
        }
      );
    }

    const items = await db
      .select()
      .from(orderItems)
      .where(
        eq(
          orderItems.orderId,
          Number(id)
        )
      );

    return NextResponse.json({
      success: true,
      order: orderResult[0],
      items,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch order",
      },
      {
        status: 500,
      }
    );
  }
}
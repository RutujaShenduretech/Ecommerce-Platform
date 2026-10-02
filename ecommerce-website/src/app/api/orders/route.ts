import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import {
  orders,
  orderItems,
} from "@/db/schema";
import { getUserSession } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function GET() {
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

    const result = await db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId));

    return NextResponse.json({
      success: true,
      orders: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch orders",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  request: NextRequest
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

    const body = await request.json();

    const {
      total,
      items,
    } = body;

    if (
      total === undefined ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Total and order items are required",
        },
        {
          status: 400,
        }
      );
    }

    const orderResult = await db
      .insert(orders)
      .values({
        userId,
        total: String(total),
        status: "Pending",
      })
      .returning();

    const order = orderResult[0];

    for (const item of items) {
      await db.insert(orderItems).values({
        orderId: order.id,
        productId: Number(item.productId),
        quantity: Number(item.quantity),
        price: String(item.price),
        size: item.size,
        color: item.color,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        order,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order",
      },
      {
        status: 500,
      }
    );
  }
}
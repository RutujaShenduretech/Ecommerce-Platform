import { NextResponse } from "next/server";
import { db } from "@/db";
import { cartItems } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { getUserSession } from "@/lib/auth";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
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

    const result = await db
      .delete(cartItems)
      .where(
        and(
          eq(cartItems.id, Number(id)),
          eq(cartItems.userId, userId)
        )
      )
      .returning();

    if (result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Cart item not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Cart item removed",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to remove cart item",
      },
      {
        status: 500,
      }
    );
  }
}
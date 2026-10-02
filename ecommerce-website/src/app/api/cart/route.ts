import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { cartItems, products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getUserSession } from "@/lib/auth";

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
      .select({
        id: cartItems.id,
        productId: cartItems.productId,
        quantity: cartItems.quantity,
        size: cartItems.size,
        color: cartItems.color,
        name: products.name,
        price: products.price,
        image: products.image,
      })
      .from(cartItems)
      .innerJoin(
        products,
        eq(cartItems.productId, products.id)
      )
      .where(eq(cartItems.userId, userId));

    return NextResponse.json({
      success: true,
      cart: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch cart",
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
      productId,
      quantity = 1,
      size,
      color,
    } = body;

    if (!productId) {
      return NextResponse.json(
        {
          success: false,
          message: "Product ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(productId)));

    if (product.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    const result = await db
      .insert(cartItems)
      .values({
        userId,
        productId: Number(productId),
        quantity: Number(quantity),
        size,
        color,
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        message: "Product added to cart",
        item: result[0],
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
        message: "Failed to add product to cart",
      },
      {
        status: 500,
      }
    );
  }
}
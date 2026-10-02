import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const result = await db
      .select()
      .from(products)
      .orderBy(desc(products.createdAt));

    return NextResponse.json({
      success: true,
      products: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      category,
      price,
      oldPrice,
      image,
      description,
      rating,
    } = body;

    if (
      !name ||
      !category ||
      price === undefined ||
      !image ||
      !description
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Required product fields are missing",
        },
        {
          status: 400,
        }
      );
    }

    const result = await db
      .insert(products)
      .values({
        name,
        category,
        price: String(price),
        oldPrice:
          oldPrice !== undefined
            ? String(oldPrice)
            : undefined,
        image,
        description,
        rating:
          rating !== undefined
            ? String(rating)
            : "0",
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        product: result[0],
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
        message: "Failed to create product",
      },
      {
        status: 500,
      }
    );
  }
}
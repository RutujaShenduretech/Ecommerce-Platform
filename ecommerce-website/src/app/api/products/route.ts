

import { db } from "@/db";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";

export async function GET() {
  try {
    const result = await db
      .select()
      .from(products)
      .orderBy(asc(products.id));

    return NextResponse.json({
      success: true,
      products: result,
    });
  } catch (error) {
    console.error("Error fetching products:", error);

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
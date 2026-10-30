
import { describe, it, expect } from "vitest";
import { calculateCartTotal } from "./calculateCartTotal";

describe("calculateCartTotal", () => {
  it("calculates the total for multiple products", () => {
    const cartItems = [
      { price: 1000, quantity: 2 },
      { price: 500, quantity: 1 }
    ];

    expect(calculateCartTotal(cartItems)).toBe(2500);
  });

  it("returns zero for an empty cart", () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  it("returns zero when all quantities are zero", () => {
    const cartItems = [
      { price: 1000, quantity: 0 },
      { price: 500, quantity: 0 }
    ];

    expect(calculateCartTotal(cartItems)).toBe(0);
  });
});

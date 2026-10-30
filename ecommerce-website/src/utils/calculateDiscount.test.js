
import { describe, it, expect } from "vitest";
import { calculateDiscount } from "./calculateDiscount";

describe("calculateDiscount", () => {
  it("applies a 10% discount correctly", () => {
    expect(calculateDiscount(1000, 10)).toBe(900);
  });

  it("returns the original price for zero discount", () => {
    expect(calculateDiscount(1000, 0)).toBe(1000);
  });

  it("returns zero for a 100% discount", () => {
    expect(calculateDiscount(1000, 100)).toBe(0);
  });
});

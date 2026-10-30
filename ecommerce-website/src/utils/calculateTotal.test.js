import { describe, it, expect } from "vitest";
import { calculateTotal } from "./calculateTotal";

describe("calculateTotal", () => {
  it("calculates the total price correctly", () => {
    expect(calculateTotal(1000, 2)).toBe(2000);
  });

  it("returns zero when quantity is zero", () => {
    expect(calculateTotal(1000, 0)).toBe(0);
  });

  it("calculates the price for one item", () => {
    expect(calculateTotal(500, 1)).toBe(500);
  });
});
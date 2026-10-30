
export function calculateDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) / 100;
}

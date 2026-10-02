import { db } from "./index";
import { products } from "./schema";

const productData = [
  {
    name: "Aero Run Pro",
    category: "Running",
    price: "6999",
    oldPrice: "7999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    description:
      "Lightweight performance shoes designed for everyday running.",
    rating: "4.8",
  },
  {
    name: "Velocity Street",
    category: "Lifestyle",
    price: "5499",
    oldPrice: "6499",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&q=80",
    description:
      "Clean everyday sneakers combining street style with comfort.",
    rating: "4.7",
  },
  {
    name: "Motion Flex",
    category: "Training",
    price: "6299",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80",
    description:
      "Flexible training shoes built for movement and stability.",
    rating: "4.6",
  },
];

async function seed() {
  await db.insert(products).values(productData);

  console.log("Products inserted successfully");

  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
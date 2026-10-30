// import {
//   pgTable,
//   serial,
//   varchar,
//   integer,
//   decimal,
//   timestamp,
//   text,
// } from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
//   id: serial("id").primaryKey(),

//   name: varchar("name", {
//     length: 100,
//   }).notNull(),

//   email: varchar("email", {
//     length: 255,
//   }).notNull().unique(),

//   password: varchar("password", {
//     length: 255,
//   }).notNull(),

//   createdAt: timestamp("created_at")
//     .defaultNow()
//     .notNull(),
// });

// export const products = pgTable("products", {
//   id: integer("id").primaryKey(),

//   name: varchar("name", {
//     length: 200,
//   }).notNull(),

//   category: varchar("category", {
//     length: 100,
//   }).notNull(),

//   price: decimal("price", {
//     precision: 10,
//     scale: 2,
//   }).notNull(),

//   oldPrice: decimal("old_price", {
//     precision: 10,
//     scale: 2,
//   }),

//   image: text("image").notNull(),

//   description: text("description").notNull(),

//   colors: text("colors").array(),

//   sizes: text("sizes").array(),

//   rating: decimal("rating", {
//     precision: 2,
//     scale: 1,
//   }),

//   badge: varchar("badge", {
//     length: 100,
//   }),

//   createdAt: timestamp("created_at")
//     .defaultNow()
//     .notNull(),
// });
// export const cartItems = pgTable("cart_items", {
//   id: serial("id").primaryKey(),

//   userId: integer("user_id")
//     .notNull()
//     .references(() => users.id),

//   productId: integer("product_id")
//     .notNull()
//     .references(() => products.id),

//   quantity: integer("quantity")
//     .notNull()
//     .default(1),

//   size: varchar("size", {
//     length: 20,
//   }),

//   color: varchar("color", {
//     length: 50,
//   }),
// });

// export const orders = pgTable("orders", {
//   id: serial("id").primaryKey(),

//   userId: integer("user_id")
//     .notNull()
//     .references(() => users.id),

//   total: decimal("total", {
//     precision: 10,
//     scale: 2,
//   }).notNull(),

//   status: varchar("status", {
//     length: 50,
//   })
//     .notNull()
//     .default("Pending"),

//   createdAt: timestamp("created_at")
//     .defaultNow()
//     .notNull(),
// });

// export const orderItems = pgTable("order_items", {
//   id: serial("id").primaryKey(),

//   orderId: integer("order_id")
//     .notNull()
//     .references(() => orders.id),

//   productId: integer("product_id")
//     .notNull()
//     .references(() => products.id),

//   quantity: integer("quantity").notNull(),

//   price: decimal("price", {
//     precision: 10,
//     scale: 2,
//   }).notNull(),

//   size: varchar("size", {
//     length: 20,
//   }),

//   color: varchar("color", {
//     length: 50,
//   }),
// });

import {
  pgTable,
  serial,
  varchar,
  integer,
  decimal,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  email: varchar("email", {
    length: 255,
  }).notNull().unique(),

  password: varchar("password", {
    length: 255,
  }).notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const products = pgTable("products", {
  id: integer("id").primaryKey(),

  name: varchar("name", {
    length: 200,
  }).notNull(),

  category: varchar("category", {
    length: 100,
  }).notNull(),

  price: decimal("price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  oldPrice: decimal("old_price", {
    precision: 10,
    scale: 2,
  }),

  image: text("image").notNull(),

  description: text("description").notNull(),

  colors: text("colors").array(),

  sizes: text("sizes").array(),

  rating: decimal("rating", {
    precision: 2,
    scale: 1,
  }),

  badge: varchar("badge", {
    length: 100,
  }),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),

  userId: integer("user_id")
    .notNull()
    .references(() => users.id),

  productId: integer("product_id")
    .notNull()
    .references(() => products.id),

  quantity: integer("quantity")
    .notNull()
    .default(1),

  size: varchar("size", {
    length: 20,
  }),

  color: varchar("color", {
    length: 50,
  }),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),

  userId: integer("user_id")
    .notNull()
    .references(() => users.id),

  total: decimal("total", {
    precision: 10,
    scale: 2,
  }).notNull(),

  status: varchar("status", {
    length: 50,
  })
    .notNull()
    .default("Pending"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),

  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id),

  productId: integer("product_id")
    .notNull()
    .references(() => products.id),

  quantity: integer("quantity").notNull(),

  price: decimal("price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  size: varchar("size", {
    length: 20,
  }),

  color: varchar("color", {
    length: 50,
  }),
});
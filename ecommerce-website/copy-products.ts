import pg from "pg";

const { Client } = pg;

async function copyProducts() {
  const local = new Client({
    connectionString: process.env.LOCAL_DATABASE_URL,
  });

  const neon = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await local.connect();
    console.log("Connected to local PostgreSQL");

    await neon.connect();
    console.log("Connected to Neon PostgreSQL");

    const result = await local.query(
      'SELECT * FROM "products"'
    );

    console.log("Local products:", result.rows.length);

    if (result.rows.length === 0) {
      console.log("No products found. Nothing copied.");
      return;
    }

    const columns = Object.keys(result.rows[0]);

    const columnNames = columns
      .map((column) => `"${column}"`)
      .join(", ");

    const placeholders = columns
      .map((_, index) => `$${index + 1}`)
      .join(", ");

    await neon.query("BEGIN");

    for (const product of result.rows) {
      const values = columns.map(
        (column) => product[column]
      );

      await neon.query(
        `INSERT INTO "products" (${columnNames})
         VALUES (${placeholders})
         ON CONFLICT DO NOTHING`,
        values
      );
    }

    await neon.query("COMMIT");

    const count = await neon.query(
      'SELECT COUNT(*) FROM "products"'
    );

    console.log("Products in Neon:", count.rows[0].count);
    console.log("Product copy completed!");

  } catch (error) {
    await neon.query("ROLLBACK").catch(() => {});
    console.error("Copy failed:", error);
  } finally {
    await local.end();
    await neon.end();
  }
}

copyProducts();
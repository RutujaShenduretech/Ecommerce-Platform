
import "dotenv/config";
import { Client } from "pg";

async function testDB() {
  const connectionString = process.env.DIRECT_URL;

  if (!connectionString) {
    console.error("DIRECT_URL is missing in .env.local");
    return;
  }

  const client = new Client({
    connectionString,
    connectionTimeoutMillis: 15000,
  });

  try {
    console.log("Connecting to Neon...");
    await client.connect();

    console.log("Neon database connected successfully!");

    const result = await client.query("SELECT NOW()");
    console.log("Database time:", result.rows[0]);
  } catch (error) {
    console.error("Neon connection failed:", error);
  } finally {
    await client.end().catch(() => {});
  }
}

testDB();

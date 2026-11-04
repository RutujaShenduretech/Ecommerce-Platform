import { config } from "dotenv";
import { Client } from "pg";

config({ path: ".env.local" });

async function testDB() {
  const connectionString = process.env.DIRECT_URL;

  if (!connectionString) {
    console.log("DIRECT_URL is missing in .env.local");
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
    console.log(result.rows);
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await client.end().catch(() => {});
  }
}

testDB();

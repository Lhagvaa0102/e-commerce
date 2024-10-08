import "dotenv/config";
import express from "express";
import { neon } from "@neondatabase/serverless";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT;
const sql = neon(`${process.env.DATABASE_URL}`);
app.use(bodyParser.json());
app.get("/", async (_, res) => {
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});

app.get("/products", async (_, res) => {
  const response = await sql`SELECT * FROM products`;
  res.json({ data: response });
});
app.post("/products", async (_, res) => {
  const { name, description, price, image_url } = request.body;
  const response =
    await sql`INSERT INTO products(name, description, price, image_url ) VALUES ( ${name}, ${description}, ${price}, ${image_url} )`;
  res.json({ data: response });
});
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});

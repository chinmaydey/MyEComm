import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Server listening...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  res.json(products.find((t) => t._id === req.params.id));
});

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server mode ${ENV} running at ${PORT}`));

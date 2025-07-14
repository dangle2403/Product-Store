import express from "express";
import connectDB from "./database/db.js";
import productRouter from "./routes/product.route.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/dist")));
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/dist/index.html"));
  });
}

app.listen(process.env.PORT || 8000, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});

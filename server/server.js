import express from "express";
import connectDB from "./database/db.js";
import productRouter from "./routes/product.route.js";
const app = express();


app.use(express.json());

app.use("/api/products", productRouter);

app.listen(process.env.PORT || 8000, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});

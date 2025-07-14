import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/", createProduct);

productRouter.delete("/:id", deleteProduct);

productRouter.get("/", getAllProducts);

productRouter.put("/:id", updateProduct);

export default productRouter;

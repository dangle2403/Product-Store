import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: "false", message: "Please provide all field!" });
  }
  const newProduct = new Product({
    name: product.name,
    price: product.price,
    image: product.image,
  });
  try {
    await newProduct.save();
    res.status(201).json({
      success: "true",
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ success: "false", message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: "false", message: "Invalid product ID" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: "true", message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res
      .status(404)
      .json({ success: "false", message: "Product not found" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: "true",
      message: "Products fetched successfully",
      products: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ success: "false", message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: "false", message: "Invalid product ID" });
  }
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: "true",
      message: "Product updated successfully",
      product: updateProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ success: "false", message: "Server error" });
  }
};

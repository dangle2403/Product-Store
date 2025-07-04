import Product from "../models/product.model.js";


export const createPost = async (req, res) => {
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
    res
      .status(201)
      .json({
        success: "true",
        message: "Product created successfully",
        product: newProduct,
      });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ success: "false", message: "Server error" });
  }
};
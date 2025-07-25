import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if(!newProduct.name || !newProduct.price || !newProduct.image) {
      return {success: false, message: "Please fill in all the fields."}
    }
    const res = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });
    const data = await res.json();
    set((state) => ({
      products: [...state.products, data.product]
    }))
    return { success: true, message: "Product created successfully!"}
  },
  fetchProducts: async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    set({ products: data.products });
  },
  deleteProduct: async (id) => {
    const res = await fetch(`api/products/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    if(!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.filter(product => product._id !== id)
    }));
    return { success: true, message: "Product deleted successfully!"}
  },
  updateProduct: async (id, updateProduct) => {
    const res = await fetch(`api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateProduct)
    })
    const data = await res.json();
    if(!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.map(product => product._id === product.id ? data.product : product)
    }));
    return { success: true, message: data.message}
    
  }
}));
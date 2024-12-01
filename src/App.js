import React, { useState, useEffect, useCallback } from "react";

import { ProductList, ProductDetails } from "./components";

import { fetchProducts } from "../api/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };
    loadProducts();
  }, []);

  const handleNextProduct = useCallback(() => {
    if (!selectedProduct || products.length === 0) return;

    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
  }, [products, selectedProduct]);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <ProductList
        products={products}
        selectedProduct={selectedProduct}
        onSelect={handleSelectProduct}
      />
      <ProductDetails product={selectedProduct} onNext={handleNextProduct} />
    </div>
  );
};

export default App;

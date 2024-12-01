import React, { useState, useEffect, useCallback } from "react";

import { ProductList, ProductDetails, Loading } from "./components/index";

import { fetchProducts } from "../api/products";
import { ProductTypes } from "./types/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductTypes | null>(null );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
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

  const handleSelectProduct = useCallback((product: ProductTypes) => {
    setSelectedProduct(product);
  }, []);

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <ProductList
        products={products}
        selectedProduct={selectedProduct}
        onSelect={handleSelectProduct}
      />
      <ProductDetails product={selectedProduct} onNext={handleNextProduct} />
    </>
  );
};

export default App;

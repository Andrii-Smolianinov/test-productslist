import React from "react";
import { ProductTypes } from "../../types/Product";

interface ProductListItemProps {
  products: ProductTypes[];
  selectedProduct: ProductTypes | null;
  onSelect: (product: ProductTypes) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = 
  ({ products, selectedProduct, onSelect }) => {
    const getBorderStyle = (isSelected: boolean): string =>
      isSelected ? "2px solid red" : "1px solid gray";

    return (
      <div style={{ flex: 1 }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: getBorderStyle(selectedProduct?.id === product.id),
              padding: "10px",
              cursor: "pointer",              
            }}
            onClick={() => onSelect(product)}
          >
            <h3>
              #{product.id} {product.name}
            </h3>
            <p>${product.price} USD</p>
          </div>
        ))}
      </div>
    );
  }
;

export default ProductListItem;
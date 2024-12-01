import React from "react";
import { ProductTypes } from "../types/Product";

interface ProductDetailsProps {
  product: ProductTypes | null;
  onNext: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = React.memo(({ product, onNext }) => (
  <div style={{ flex: 1, padding: "20px", justifyContent: "center", borderLeft: "1px solid gray" }}>
    {product ? (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "70%",
            padding: "0 30px",
          }}
        >
          <h3>
            #{product.id} {product.name}
          </h3>
          <h3>${product.price} USD</h3>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={product.photo || "https://loremflickr.com/640/480/abstract"}
            alt={product.name}
            style={{ maxWidth: "35%", marginRight: "20px" }}
          />
          <p style={{ margin: "0px", maxWidth: "55%" }}>{product.description}</p>
        </div>

        <button
          onClick={onNext}
          style={{ marginTop: "30px", padding: "6px", width: "15%", cursor: "pointer" }}
        >
          Next Product
        </button>
      </div>
    ) : (
      <p>Select a product to see details</p>
    )}
  </div>
));

export default ProductDetails;
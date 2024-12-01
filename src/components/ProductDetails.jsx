import React from "react";

const ProductDetails = React.memo(({ product, onNext }) => (
  <div style={{ flex: 1, padding: "10px", borderLeft: "1px solid gray" }}>
    {product ? (
      <>
        <h3>
          #{product.id} {product.name}
        </h3>        
        <img
          src={product.photo || "https://loremflickr.com/640/480/abstract"}
          alt={product.name}
          style={{ maxWidth: "100%" }}
        />
        <p>${product.price} USD</p>
        <p>{product.description}</p>
        <button onClick={onNext}>Next Product</button>
      </>
    ) : (
      <p>Select a product to see details</p>
    )}
  </div>
));

export default ProductDetails;
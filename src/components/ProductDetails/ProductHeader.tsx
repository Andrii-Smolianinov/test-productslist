import React from "react";

interface ProductHeaderProps {
  id: string;
  name: string;
  price: number;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ id, name, price }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "70%",
      padding: "0 30px",
    }}
  >
    <h3>
      #{id} {name}
    </h3>
    <h3>${price} USD</h3>
  </div>
);

export default ProductHeader;
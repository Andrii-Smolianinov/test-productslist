import React from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => (
  <p style={{ margin: "0px", maxWidth: "55%" }}>{description}</p>
);

export default ProductDescription;
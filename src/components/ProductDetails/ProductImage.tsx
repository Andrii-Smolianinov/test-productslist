import React from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  onLoad: () => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, onLoad }) => (
  <img
    src={src}
    alt={alt}
    style={{ maxWidth: "35%", marginRight: "20px" }}
    onLoad={onLoad}
  />
);

export default ProductImage;

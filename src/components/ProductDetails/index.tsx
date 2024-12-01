import React, { useState } from "react";
import { Loading, ProductHeader, ProductImage, ProductDescription, Button } from "../index";
import { ProductTypes } from "../../types/Product";

interface ProductDetailsProps {
  product: ProductTypes | null;
  onNext: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = React.memo(
  ({ product, onNext }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsImageLoaded(true);
    };

    if (!product) {
      return (
        <p style={{ width: "50%", marginLeft: "20px" }}>
          Select a product to see details
        </p>
      );
    }

    return (
      <div
        style={{
          flex: 1,
          padding: "20px",
          justifyContent: "center",
          borderLeft: "1px solid gray",
        }}
      >
        {!isImageLoaded && <Loading />}
        <div style={{ display: isImageLoaded ? "block" : "none" }}>
          <ProductHeader
            name={product.name}
            id={product.id}
            price={product.price}
          />

          <div style={{ display: "flex" }}>
            <ProductImage
              onLoad={handleImageLoad}
              src={product.photo || "https://loremflickr.com/640/480/abstract"}
              alt={product.name}
            />
            <ProductDescription description={product.description} />
          </div>

          <Button text={"Next Product"} onClick={onNext} />
        </div>
      </div>
    );
  }
);

export default ProductDetails;

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>Title: {product?.attributes?.title}</h3>
      <p>Language: {product?.attributes?.language}</p>
      <p>Discription: {product?.attributes?.description}</p>
      <p>ContentType: {product?.attributes?.contentType}</p>
      <p>Theme: {product?.attributes?.themes}</p>
    </div>
  );
};

export default ProductCard;

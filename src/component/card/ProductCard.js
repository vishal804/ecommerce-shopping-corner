import React from "react";
import "./productCard.css";

const ProductCard = ({ productDetails }) => {
  const {
    brand,
    title,
    priceAfterDiscount,
    originalPrice,
    discount,
    sizeAvailable,
    idealFor,
    category,
    Image,
  } = productDetails;
  return (
    <>
      <div className="card">
        <div className="card-image-container">
          <img className="image-responsive" src={Image} alt="product Image" />
          <i className="card-badge far fa-heart"></i>
        </div>
        <div>
          <div className="card-text-container">
            <p>{brand}</p>
            <h5 className="card-heading">{title}</h5>
            <div className="flex">
              <p className="card-subheading">₹ {priceAfterDiscount}</p>
              <p className="card-subheading line-strike">₹ {originalPrice}</p>
              <p className="card-subheading"> {discount}% off </p>
            </div>
          </div>
          <div className="card-btn-container">
            <button className="btn btn-primary btn-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };

import React from "react";
import { useData } from "../../context/data-context";
import { useNavigate } from "react-router-dom";
import "./productCard.css";
import { addToCart, addToWishlist, removeFromWishlist } from "../../utility";

const ProductCard = ({ productDetails }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();

  const {
    _id,
    brand,
    title,
    priceAfterDiscount,
    originalPrice,
    discount,
    category,
    Image,
    alt,
  } = productDetails;
  return (
    <>
      <div className="card">
        <div className="card-image-container">
          <img className="image-responsive" src={Image} alt={alt} />
          {state.wishlist.find((product) => product._id === _id) ? (
            <i
              className="card-badge red-heart fas fa-heart"
              onClick={() => removeFromWishlist(_id, dispatch)}
            ></i>
          ) : (
            <i
              className="card-badge far fa-heart"
              onClick={() => addToWishlist(productDetails, dispatch)}
            ></i>
          )}
        </div>
        <div>
          <div className="card-text-container">
            <p> {category} </p>
            <p>{brand}</p>

            <h5 className="card-heading">{title}</h5>
            <div className="flex">
              <p className="card-subheading">₹ {priceAfterDiscount}</p>
              <p className="card-subheading line-strike">₹ {originalPrice}</p>
              <p className="card-subheading"> {discount}% off </p>
            </div>
          </div>
          <div className="card-btn-container">
            {state.cart.find((element) => element._id === _id) ? (
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={() => addToCart({ ...productDetails }, dispatch)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };

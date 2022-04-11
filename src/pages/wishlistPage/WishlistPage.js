import React from "react";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import { addToCart, removeFromWishlist } from "../../utility";

const WishlistPage = () => {
  const { state, dispatch } = useData();

  const {
    authState: { token },
  } = useAuth();

  return (
    <>
      {
        <div>
          <div className="title flex flex-center">My Wishlist</div>
          <div className="product-container card-style">
            {state.wishlist.map((product) => {
              const {
                _id,
                brand,
                title,
                priceAfterDiscount,
                originalPrice,
                discount,
                Image,
                alt,
              } = product;
              return (
                <div className="card" key={_id}>
                  <div className="card-image-container">
                    <img className="image-responsive" src={Image} alt={alt} />
                  </div>
                  <div>
                    <div className="card-text-container">
                      <p>{brand}</p>
                      <h5 className="card-heading">{title}</h5>
                      <div className="flex">
                        <p className="card-subheading">
                          ₹ {priceAfterDiscount}
                        </p>
                        <p className="card-subheading">₹ {originalPrice}</p>
                        <p className="card-subheading"> {discount} %off </p>
                      </div>
                    </div>
                    <div className="card-btn-container">
                      <button
                        className="btn btn-secondary btn-lg"
                        onClick={() => removeFromWishlist(_id, dispatch, token)}
                      >
                        Remove
                      </button>

                      <button
                        className="btn btn-lg"
                        onClick={() =>
                          addToCart({ ...product }, dispatch, token)
                        }
                      >
                        Move to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
};

export { WishlistPage };

import React from "react";
import { useData } from "../../context/data-context";
import { addToCart, removeFromWishlist } from "../../utility";

const WishlistPage = () => {
  const { state, dispatch } = useData();

  return (
    <>
      {
        <div>
          <div class="title flex flex-center">My Wishlist</div>
          <div class="product-container card-style">
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
                <div class="card">
                  <div class="card-image-container">
                    <img class="image-responsive" src={Image} alt={alt} />
                  </div>
                  <div>
                    <div class="card-text-container">
                      <p>{brand}</p>
                      <h5 class="card-heading">{title}</h5>
                      <div className="flex">
                        <p class="card-subheading">₹ {priceAfterDiscount}</p>
                        <p class="card-subheading">₹ {originalPrice}</p>
                        <p class="card-subheading"> {discount} %off </p>
                      </div>
                    </div>
                    <div class="card-btn-container">
                      <button
                        class="btn btn-secondary btn-lg"
                        onClick={() => removeFromWishlist(_id, dispatch)}
                      >
                        Remove
                      </button>

                      <button
                        class="btn btn-lg"
                        onClick={() => addToCart({ ...product }, dispatch)}
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

import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import "./cartPage.css";
import { addToWishlist, removeFromCart, updateQuantity } from "../../utility";
import { PriceSummary } from "../../component";
import { useAuth } from "../../context/auth-context";

const CartPage = () => {
  const { state, dispatch } = useData();
  const {
    authState: { token },
  } = useAuth();

  return (
    <>
      {state.cart && state.cart.length > 0 ? (
        <section className="cart-section">
          <div className="cart-container flex">
            <div className="cart-item-container card-horizontal-style">
              <h2 className="cart-heading">
                My Cart (<span>{state.cart.length}</span>)
              </h2>
              {/* card */}
              {state.cart.map((product) => {
                const {
                  _id,
                  brand,
                  title,
                  priceAfterDiscount,
                  discount,
                  Image,
                  alt,
                } = product;
                return (
                  <div className="card card-Horizontal" key={_id}>
                    <div>
                      <img className="image-responsive" src={Image} alt={alt} />
                    </div>
                    <div className="card-container">
                      <div className="card-text-container">
                        <p>{brand}</p>
                        <h5 className="card-heading">{title}</h5>
                        <p className="card-subheading">
                          ₹ {priceAfterDiscount}
                        </p>
                        <span className="small-text">{discount}% off</span>
                        <div className="quantity flex flex-align-center">
                          <span>Quantity : </span>
                          <div className="counter">
                            <span className="counter-item">
                              <i
                                className="fas fa-minus"
                                onClick={() =>
                                  updateQuantity(
                                    _id,
                                    dispatch,
                                    "decrement",
                                    token
                                  )
                                }
                              ></i>
                            </span>
                            <span className="counter-item">{product.qty}</span>
                            <span className="counter-item">
                              <i
                                className="fas fa-plus"
                                onClick={() =>
                                  updateQuantity(
                                    _id,
                                    dispatch,
                                    "increment",
                                    token
                                  )
                                }
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card-btn-container">
                        <button
                          className="btn btn-secondary btn-lg"
                          onClick={() => removeFromCart(_id, dispatch, token)}
                        >
                          Remove From Cart
                        </button>
                        <button
                          className="btn btn-lg"
                          onClick={() =>
                            addToWishlist(product, dispatch, token)
                          }
                        >
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="price-breakout flex-grow-1">
              <PriceSummary />
            </aside>
          </div>
        </section>
      ) : (
        <section className="cart-section">
          <div className="cart-container flex">
            <div className="cart-item-container card-horizontal-style">
              <p>
                There is nothing in cart <Link to="/product">click here</Link>{" "}
                to Explore Products
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export { CartPage };

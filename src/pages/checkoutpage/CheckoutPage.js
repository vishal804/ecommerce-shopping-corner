import React, { useEffect } from "react";
import "./checkoutPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import { getAddress } from "../../utility/addressFunction";
import { PriceSummary, AddressModal, AddressCard } from "../../component";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  const {
    dispatch,
    state: {
      cart,
      addresses: { address, selectedAddress, showAddressModal },
    },
  } = useData();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/product");
    }
  }, [cart, navigate]);

  useEffect(() => {
    getAddress(dispatch, token);
  }, [token, dispatch]);

  return (
    <>
      {showAddressModal && <AddressModal />}
      <section className="checkout-section">
        <div className="flex flex-wrap">
          <div className="address-section">
            <p className="cart-heading">Select Address</p>
            <button
              className="btn btn-secondary"
              onClick={() =>
                dispatch({ type: "SHOW_ADDRESS_MODAL", payload: true })
              }
            >
              Add New Address
            </button>

            {address &&
              address.length > 0 &&
              address.map((singleAddress) => {
                return (
                  <AddressCard
                    address={singleAddress}
                    key={singleAddress._id}
                  />
                );
              })}
          </div>

          <aside className="price-breakout flex-grow-1">
            <div className="box-container">
              <p className="cart-title">ORDER DETAILS </p>

              <div>
                <div className="price-breakdown flex flex-space-between">
                  <span className="sm-title">Items</span>
                  <span className="sm-title">Quantity</span>
                </div>
                {cart &&
                  cart.map((productDetails) => (
                    <div
                      key={productDetails._id}
                      className="price-breakdown flex flex flex-space-between"
                    >
                      <span>{productDetails.title}</span>
                      <span>{productDetails.qty}</span>
                    </div>
                  ))}
              </div>
            </div>

            {selectedAddress && (
              <div className="box-container">
                <p className="cart-title">DEVILERING TO</p>
                <div className="price-breakout">
                  <p className="sentence-title">{selectedAddress.name}</p>
                  <p className="sentence">{selectedAddress.street}</p>
                  <p className="sentence">
                    {selectedAddress.city}, {selectedAddress.state},
                    {selectedAddress.country}
                  </p>
                  <p className="sentence">{selectedAddress.phone}</p>
                </div>
              </div>
            )}

            <div>
              <PriceSummary />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export { CheckoutPage };

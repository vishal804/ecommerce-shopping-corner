import React from "react";
import { useData } from "../../context/data-context";
import "./priceSummary.css";

const PriceSummary = () => {
  const { state } = useData();

  const priceDetails = state.cart.reduce(
    ({ total, originalPrice }, curr) => {
      total = total + curr.priceAfterDiscount * curr.qty;

      originalPrice = originalPrice + curr.originalPrice * curr.qty;

      return { total, originalPrice };
    },
    {
      total: 0,
      originalPrice: 0,
    }
  );

  return (
    <>
      <div className="cart-price-heading">PRICE DETAILS</div>
      <hr />
      <div>
        <div className="price-breakdown flex flex-space-between">
          <span>Price ({state.cart.length} items)</span>
          <span>{priceDetails.originalPrice}</span>
        </div>
        <div className="price-breakdown flex flex-space-between">
          <span>Discount</span>
          <span>{priceDetails.total - priceDetails.originalPrice}</span>
        </div>
        <div className="price-breakdown flex flex-space-between">
          <span>Delivery Charges</span>
          <span>FREE</span>
        </div>
        <hr />
        <div className="total-price flex flex-space-between">
          <span>TOTAL AMOUNT</span>
          <span>{priceDetails.total}</span>
        </div>
        <hr />
        <button className="btn btn-link btn-lg">
          <p>PLACE ORDER</p>
        </button>
      </div>
    </>
  );
};

export { PriceSummary };

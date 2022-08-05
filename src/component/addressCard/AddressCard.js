import React, { useEffect } from "react";
import "./addressCard.css";
import { useData } from "../../context/data-context";

const AddressCard = ({ address }) => {
  const {
    dispatch,
    state: {
      addresses: { selectedAddress },
    },
  } = useData();

  useEffect(() => {
    if (selectedAddress && Object.keys(selectedAddress).length === 0) {
      dispatch({
        type: "SET_SELECTED_ADDRESS",
        payload: address,
      });
    }
  });

  return (
    <>
      <div className="box">
        <div className="flex">
          <input
            type="radio"
            onChange={() =>
              dispatch({
                type: "SET_SELECTED_ADDRESS",
                payload: address,
              })
            }
            checked={selectedAddress._id === address._id}
          />
          <div>
            <p className="sentence-title">{address.name}</p>
            <p className="sentence">{address.street}</p>
            <p className="sentence">
              {address.city}, {address.state}, {address.country}
            </p>
            <p className="sentence">{address.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { AddressCard };

import React from "react";
import { useData } from "../../context/data-context";

const Filter = () => {
  const { dispatch } = useData();
  return (
    <>
      <div className="list-heading flex flex-space-between">
        <h3>Filters</h3>

        <p onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>Clear</p>
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Sort by</h4>
        <label htmlfor="radio">
          <input
            id="radio"
            type="radio"
            name="sort-by"
            onChange={() =>
              dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
            }
          ></input>
          Price - Low to High
        </label>
        <label htmlfor="radio">
          <input
            id="radio-2"
            type="radio"
            name="sort-by"
            onChange={() =>
              dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
            }
          ></input>
          Price - High to Low
        </label>
      </div>
    </>
  );
};

export { Filter };

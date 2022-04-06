import React from "react";
import { collection } from "../../assets";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import "./categoryCard.css";

const CategoryCard = ({ value }) => {
  const { dispatch } = useData();
  return (
    <>
      <div class="card">
        <Link to="/product">
          <img class="image-responsive" src={collection} alt="collection" />
          <div
            class="card-container"
            onClick={() =>
              dispatch({ type: "SORT_BY_CATEGORY", payload: value })
            }
          >
            <div class="card-text-container">
              <h5 class="card-heading">{value}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export { CategoryCard };

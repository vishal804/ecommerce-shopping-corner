import React from "react";
import { collection } from "../../assets";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import "./categoryCard.css";

const CategoryCard = ({ value }) => {
  const { dispatch } = useData();
  return (
    <>
      <div className="card">
        <Link to="/product">
          <img className="image-responsive" src={collection} alt="collection" />
          <div
            className="card-container"
            onClick={() =>
              dispatch({ type: "SORT_BY_CATEGORY", payload: value })
            }
          >
            <div className="card-text-container">
              <h5 className="card-heading">{value}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export { CategoryCard };

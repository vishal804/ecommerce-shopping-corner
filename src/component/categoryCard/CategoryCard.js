import React from "react";
import "./categoryCard.css";
import { collection } from "../../assets";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";

const CategoryCard = ({ value }) => {
  const { dispatch } = useData();
  return (
    <div className="card">
      <Link to="/product">
        <img
          className="category-image-responsive"
          src={collection}
          alt="collection"
        />
        <div
          className="card-container"
          onClick={() => dispatch({ type: "SORT_BY_CATEGORY", payload: value })}
        >
          <div className="card-text-container centered">
            <h5 className="card-heading">{value}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { CategoryCard };

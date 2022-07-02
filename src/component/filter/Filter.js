import React from "react";
import { useData } from "../../context/data-context";

const Filter = ({ shownav, setShownav }) => {
  const { state, dispatch } = useData();

  const brands = ["AmorMente", "Nike", "Reebok", "TRIPR"];
  const idealFor = ["Men", "Women"];
  const sizeAvailable = ["S", "M", "L"];
  const ratingStar = [1, 2, 3, 4, 5];
  const categories = [
    "Summer Collection",
    "Winter Collection",
    "Monsoon Collection",
  ];

  return (
    <>
      <div className="list-heading flex flex-space-between">
        <div className="show">
          <p className="closebtn" onClick={() => setShownav(!shownav)}>
            <i className="fas fa-times"></i>
          </p>
        </div>
        <h3>Filters</h3>

        <p
          className="list-subheading"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          CLEAR ALL
        </p>
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Price</h4>
        <datalist id="tickmarks">
          <option value="5000" label="5K"></option>
          <option value="4000" label="4K"></option>
          <option value="3000" label="3K"></option>
          <option value="2000" label="2K"></option>
          <option value="1000" label="1K"></option>
        </datalist>
        <input
          type="range"
          value={state.filters.priceRange}
          list="tickmarks"
          min="1000"
          max="5000"
          step="1000"
          onChange={(e) =>
            dispatch({
              type: "SORT_BY_PRICERANGE",
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Sort by</h4>
        <label htmlFor="radio">
          <input
            id="radio"
            type="radio"
            name="sort-by"
            checked={state.filters.sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
            }
          ></input>
          Price - Low to High
        </label>
        <label htmlFor="radio">
          <input
            id="radio"
            type="radio"
            name="sort-by"
            checked={state.filters.sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
            }
          ></input>
          Price - High to Low
        </label>
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Brands</h4>
        {brands.map((brand) => {
          return (
            <div key={brand}>
              <input
                type="checkbox"
                id="brand"
                checked={state.filters.sortByBrand.includes(brand)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_BRAND", payload: brand })
                }
              ></input>
              <label htmlFor="brand">{brand}</label>
            </div>
          );
        })}
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Categories</h4>
        {categories.map((category) => {
          return (
            <div key={category}>
              <input
                type="checkbox"
                id="category"
                checked={state.filters.sortByCategory.includes(category)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_CATEGORY", payload: category })
                }
              ></input>
              <label htmlFor="category">{category}</label>
            </div>
          );
        })}
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Rating</h4>
        {ratingStar.map((rating) => {
          return (
            <div key={rating}>
              <label htmlFor="rating">
                <input
                  type="radio"
                  id="rating"
                  name="radio"
                  checked={state.filters.sortByRating === rating}
                  onChange={() =>
                    dispatch({ type: "SORT_BY_RATING", payload: rating })
                  }
                ></input>
                {rating} Star & Above
              </label>
            </div>
          );
        })}
      </div>
      <div className="list-heading flex flex-coloum">
        <h4>Ideal For</h4>
        {idealFor.map((idealFor) => {
          return (
            <div key={idealFor}>
              <input
                type="checkbox"
                id="idealFor"
                checked={state.filters.sortByIdealFor.includes(idealFor)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_IDEALFOR", payload: idealFor })
                }
              ></input>
              <label htmlFor="idealFor">{idealFor}</label>
            </div>
          );
        })}
      </div>

      <div className="list-heading flex flex-coloum">
        <h4>Sizes</h4>
        {sizeAvailable.map((sizeAvailable) => {
          return (
            <div key={sizeAvailable}>
              <input
                type="checkbox"
                id="sizeAvailable"
                checked={state.filters.sortBySize.includes(sizeAvailable)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_SIZE", payload: sizeAvailable })
                }
              ></input>
              <label htmlFor="sizeAvailable">{sizeAvailable}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Filter };

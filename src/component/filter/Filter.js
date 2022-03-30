import React from "react";
import { useData } from "../../context/data-context";

const Filter = () => {
  const { state, dispatch } = useData();

  const brands = ["AmorMente", "Nike", "Reebok", "TRIPR", "Eyebogler"];
  const idealFor = ["Men", "Women"];
  const sizeAvailable = ["S", "M", "L"];
  const categories = [
    "Summer Collection",
    "Winter Collection",
    "Mansoom Collection",
  ];

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
    </>
  );
};

export { Filter };

import React, { useEffect } from "react";
import axios from "axios";
import { Filter, ProductCard } from "../../component";
import "./productPage.css";
import { useData } from "../../context/data-context";

const ProductPage = () => {
  const { dispatch, filteredData } = useData();

  const getData = async () => {
    const response = await axios.get("/api/products");
    dispatch({ type: "SET_PRODUCTS", payload: response.data.products });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="product-page-container">
        <div className="aside" id="sidebar">
          <div className="sidenav">
            <Filter />
          </div>
        </div>

        {/* Section Contain All Products   */}

        <section className="flex-grow-1">
          <h2 className="product-heading">
            Showing All Products
            <span>
              (Showing <span>{filteredData.length}</span> products)
            </span>
          </h2>
          <div className="product-container card-style">
            {filteredData.length &&
              filteredData.map((product) => (
                <ProductCard key={product.id} productDetails={product} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { ProductPage };

import React, { useState } from "react";
import "./productPage.css";
import { useData } from "../../context/data-context";
import { Filter, ProductCard } from "../../component";

const ProductPage = () => {
  const { filteredData } = useData();

  const [shownav, setShownav] = useState(false);
  return (
    <>
      <main className="product-page-container">
        <div
          className={`aside
          ${shownav === true ? "width-250" : "width-0"}
          `}
        >
          <div className="sidenav">
            <Filter shownav={shownav} setShownav={setShownav} />
          </div>
        </div>

        {/* Section Contain All Products   */}

        <section className="flex-grow-1">
          <button
            className="show btn btn-lg"
            onClick={() => setShownav(!shownav)}
          >
            Filter
          </button>
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

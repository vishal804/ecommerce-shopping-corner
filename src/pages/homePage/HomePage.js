import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard, Footer } from "../../component";
import { useData } from "../../context/data-context";
import "./homePage.css";
import { shopcategory } from "../../assets";

const HomePage = () => {
  const { dispatch } = useData();
  const categories = [
    "Summer Collection",
    "Winter Collection",
    "Mansoom Collection",
  ];

  return (
    <>
      {/* Banner  */}
      <section>
        <div className="banner">
          <div className="banner-content">
            <div className="banner-title">Get the Best Deal</div>
            <div className="banner-subtitle">
              Get Exclusive Deals on Permium Produts
            </div>
            <Link to="/product">
              <button className="btn btn-primary btn-link">Shop Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive Deals */}

      <section className="wrapper-container">
        <div className="category-title">Exclusive Deals</div>

        <div className="shop-card card-style flex flex-space-between">
          {categories.length !== 0 &&
            categories.map((category) => <CategoryCard value={category} />)}
        </div>
      </section>

      <section className="wrapper-category-container">
        <div className="category-title">Shop By Category</div>
        <div className="category-container flex flex-wrap">
          <div className="category-container-card">
            <Link to="/product">
              <img
                className="img-responsive"
                src={shopcategory}
                alt="shopcategory"
                onClick={() =>
                  dispatch({ type: "SORT_BY_IDEALFOR", payload: "Men" })
                }
              />
              <div className="title">Shop For Him</div>
            </Link>
          </div>

          <div className="category-container-card">
            <Link to="/product">
              <img
                className="img-responsive"
                src={shopcategory}
                alt="shopcategory"
                onClick={() =>
                  dispatch({ type: "SORT_BY_IDEALFOR", payload: "Women" })
                }
              />
              <div className="title">Shop For Her</div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export { HomePage };

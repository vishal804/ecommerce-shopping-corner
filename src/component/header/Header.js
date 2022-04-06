import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";

const Header = () => {
  const { state } = useData();

  return (
    <>
      {/* Header Navigation */}
      <header>
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <div className="logo">
              <Link to="/">Shoplify</Link>
            </div>
            <div className="flex quick-links">
              <Link to="/">
                <p className="quick-link">Home</p>
              </Link>
              <Link to="/product">
                <p className="quick-link">products</p>
              </Link>
            </div>
          </div>
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input className="search" placeholder="Search" />
          </div>
          <ul className="right-navbar">
            <li className="no-show">
              <button className="btn btn-link btn-style">
                <Link to="/">Login</Link>
              </button>
            </li>

            <li className="notification no-show">
              <Link to="/wishlist">
                <i className="fa-2x far fa-heart"></i>
                {state.wishlist.length > 0 ? (
                  <span className="badge">{state.wishlist.length}</span>
                ) : null}
              </Link>
            </li>
            <li className="notification no-show">
              <Link to="/cart">
                <i className="fas fa-shopping-cart fa-2x"></i>

                {state.cart.length > 0 ? (
                  <span className="badge">{state.cart.length}</span>
                ) : null}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Header Navigation */}
    </>
  );
};

export { Header };

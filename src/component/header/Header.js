import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* Header Navigation */}
      <header>
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <div className="logo">
              <Link to="/">Shoplify</Link>
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
            <li className="no-show">
              <Link to="/wishlist">
                <i className="fa-2x far fa-heart"></i>
              </Link>
            </li>
            <li className="notification no-show">
              <Link to="/cart">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <span className="badge">0</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Header Navigation */}
    </div>
  );
};

export { Header };

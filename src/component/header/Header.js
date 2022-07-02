import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";

const Header = () => {
  const { state } = useData();
  const { authState, authDispatch } = useAuth();

  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("userAuthToken");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const loginHandler = () => {
    if (authState.token) {
      logoutHandler();
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <header>
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <div>
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
          <div className="search-box no-show">
            <i className="fas fa-search"></i>
            <input className="search" placeholder="Search" />
          </div>
          <ul className="right-navbar">
            <li>
              {authState.token ? (
                <Link to="/">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Logout
                  </button>
                  <p onClick={loginHandler}>
                    <i className="show fas fa-sign-out-alt fa-2x"></i>
                  </p>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                  <p onClick={loginHandler}>
                    <i className="show fas fa-sign-in-alt fa-2x"></i>
                  </p>
                </Link>
              )}
            </li>

            <li className="notification no-show">
              <Link to="/wishlist">
                <i className="fa-2x far fa-heart"></i>
                {authState.user && state.wishlist.length > 0 ? (
                  <span className="badge">{state.wishlist.length}</span>
                ) : null}
              </Link>
            </li>
            <li className="notification no-show">
              <Link to="/cart">
                <i className="fas fa-shopping-cart fa-2x"></i>

                {authState.user && state.cart.length > 0 ? (
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

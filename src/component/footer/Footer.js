import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer flex">
        <div className="flex flex-coloum flex-grow-1 brand">
          <div className="logo">
            <Link to="/">Shoplify</Link>
          </div>
          <p>You Shop Fast We Ship Faster</p>
          <div className="links-handle flex">
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-snapchat fa-2x"></i>
          </div>
        </div>

        <div className="flex flex-coloum flex-grow-1">
          <div className="item-title">Quick Links</div>
          <ul className="quick-links">
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/">Orders</Link>
            </li>
            <li>
              <Link to="/">Track Orders</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-coloum flex-grow-1">
          <div className="item-title">Contact Info</div>
          <ul className="quick-links">
            <li>
              <p>Location</p>
            </li>
            <li>
              <p>+91 999999999</p>
            </li>
            <li>
              <p>shoplify@mail.com</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export { Footer };

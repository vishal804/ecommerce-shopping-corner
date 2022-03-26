import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer class="footer flex">
        <div class="flex flex-coloum flex-grow-1 brand">
          <div class="logo">
            <Link to="/">Shoplify</Link>
          </div>
          <p>You Shop Fast We Ship Faster</p>
          <div class="links-handle flex">
            <i class="fab fa-facebook fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>
            <i class="fab fa-snapchat fa-2x"></i>
          </div>
        </div>

        <div class="flex flex-coloum flex-grow-1">
          <div class="item-title">Quick Links</div>
          <ul class="quick-links">
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

        <div class="flex flex-coloum flex-grow-1">
          <div class="item-title">Contact Info</div>
          <ul class="quick-links">
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

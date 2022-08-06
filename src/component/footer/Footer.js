import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer flex">
        <div className="flex flex-coloum brand">
          <div className="logo">
            <Link to="/">Shoplify</Link>
          </div>
          <p>You Shop Fast We Ship Faster</p>
          <div className="links-handle flex">
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://twitter.com/" rel="noreferrer" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://accounts.snapchat.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-snapchat fa-2x"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-coloum no-show">
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

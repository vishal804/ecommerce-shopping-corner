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
        </div>

        <div className="flex flex-coloum left-footer no-show">
          <p>© All Rights Reserved @ Shoplify</p>
        </div>
      </footer>
    </>
  );
};

export { Footer };

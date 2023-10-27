import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <Link
          to="/"
          className="home-link"
          style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          to="/cart"
          className="cart-link"
          style={{ color: "white", fontSize: "20px" }}
        >
          <i class="fa-solid fa-cart-shopping">cart</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

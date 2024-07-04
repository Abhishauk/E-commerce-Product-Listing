import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./nav.css";

const Navbar = () => {
  const cart = useSelector(state => state.cart.cart);

  const totalCount = cart.length;

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ProductListing">Products</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="cart-total-count">
            {totalCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

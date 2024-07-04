import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux"; // Import useSelector hook
import "./nav.css"; 

const Navbar = () => {
  const cart = useSelector(state => state.cart.cart); // Fetch cart state from Redux

  // Calculate total count of unique products in cart
  const totalCount = cart.length;

  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div> */}
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
          <span className="cart-total-count">{totalCount}</span> 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; 

const Navbar = () => {
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
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import "./product.css";
import Navbar from "./navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(null); // null, 'low', or 'high'
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("API Response:", data);
        if (Array.isArray(data.products)) {
          setProducts(
            data.products.map(product => ({
              ...product,
              addedToCart: false
            }))
          );
        } else {
          throw new Error("API response does not contain an array of products");
        }
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    setProducts(
      products.map(p =>
        p.id === product.id ? { ...p, addedToCart: true } : p
      )
    );
  };

  const handleSortChange = event => {
    const value = event.target.value;
    setSortByPrice(value);
    let sortedProducts = [...products];
    if (value === "low") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="product-filters">
        <div className="sorted">
          <label>
            <select value={sortByPrice} onChange={handleSortChange}>
              <option value="">Select</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </label>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="product-listing">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.title}</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-desc">{product.description}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                {product.addedToCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

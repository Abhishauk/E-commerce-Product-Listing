import React, { useState, useEffect } from "react";
import "./product.css";
import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducer";

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const [products, setProducts] = useState([]);

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
          setProducts(data.products);
        } else {
          throw new Error("API response does not contain an array of products");
        }
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("Cart after dispatch:", cart); 
  };

  return (
    <div>
      <Navbar />
      <div className="product-listing">
        {products.map(product =>
          <div key={product.id} className="product-card">
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">
                {product.title}
              </h3>
              <p className="product-price">
                ₹{product.price}
              </p>
              <p className="product-desc">
                {product.description}
              </p>
              <button 
                className="add-to-cart" 
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
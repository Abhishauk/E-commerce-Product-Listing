import React from "react";
import ProductListing from "../components/productListing";
import Navbar from "../components/navbar";
import './productPage.css';


const ProductListPage = () => {
  return (
    <div>
      <Navbar />

      <div className="product-list-page">
        <ProductListing />
      </div>
    </div>
  );
};

export default ProductListPage;
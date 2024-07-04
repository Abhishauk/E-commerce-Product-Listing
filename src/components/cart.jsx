import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from '../redux/reducer'; 
import './cart.css';
import Navbar from "./navbar";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart); 
  console.log("Cart state:", cart); 

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>₹{item.price}</p>
                </div>
                <div className='cart-icon'>
                <FontAwesomeIcon 
                  icon={faTimes} 
                  className="remove-icon" 
                  onClick={() => handleRemoveFromCart(item.id)} 
                />
                  </div>
                
              </div>
            ))}
            <div className="cart-total">
              <h4>Total Price:</h4>
              <p>₹{calculateTotalPrice()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

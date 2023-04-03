import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import laptop from '../Images/laptop.png'
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <>
      <div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                {item.name} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Cart;

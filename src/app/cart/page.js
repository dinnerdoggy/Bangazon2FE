'use client';

import React, { useEffect, useState } from 'react';
import { getCart } from '../../api/cartData';
import { useAuth } from '../../utils/context/authContext';

function CartPage() {
  const user = useAuth();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user && user.uid) {
      // Ensure user exists before fetching
      getCart(user.uid)
        .then(setCartItems)
        .catch((error) => console.error('Cart fetch error:', error));
    }
  }, [user]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.productName} x {item.quantity}
            </p>
            <h2>{item.total}</h2>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p> // Display a message if cart is empty
      )}
    </div>
  );
}

export default CartPage;

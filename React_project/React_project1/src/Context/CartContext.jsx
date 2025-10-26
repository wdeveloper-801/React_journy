import React, { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity = 1) => {
    setCartCount((prev) => prev + quantity);
  };

  const removeFromCart = (quantity = 1) => {
    setCartCount((prev) => Math.max(prev - quantity, 0));
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

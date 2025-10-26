import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Toggle sidebar
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCount, isCartOpen, toggleCart, }}>{children}
    </CartContext.Provider>
  );
};

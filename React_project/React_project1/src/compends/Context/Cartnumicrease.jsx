import React, { createContext, useState } from "react";

export const CartContext = createContext();

const Cartnumicrease = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // slider open/close
  const [billpage, setBillpage] = useState([])

  return (
    <CartContext.Provider value={{
      cartCount,
      setCartCount,
      cartItems,
      setCartItems,
      isCartOpen,
      setIsCartOpen,
      billpage,
      setBillpage
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartnumicrease;

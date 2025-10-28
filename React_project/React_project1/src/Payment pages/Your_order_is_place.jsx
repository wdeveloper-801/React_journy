
import { Check } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../compends/Context/Cartnumicrease";


const Your_order_is_place = () => {
    
    const [show, setShow] = useState(false);
    const { setCartCount, setIsCartOpen,setCartItems } = useContext(CartContext);

    useEffect(() => {
        setShow(true);
        setCartCount(0);       // Reset cart count
        setIsCartOpen(false);  // Close sidebar
        setCartItems([]);      // Clear cart items
    }, []);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen flex-col bg-gray-100">
                <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center
          bg-green-500 text-white text-4xl font-bold
          transform transition-all duration-700
          ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
                >
                    <Check size={80} strokeWidth={3} />
                </div>
                <h1 className="text-3xl font-bold mt-4">your Order is confirm Now</h1>
            </div>
        </>
    )
}

export default Your_order_is_place
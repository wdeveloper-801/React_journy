// Cart_slider.jsx
import React, { useContext } from 'react'
import { CartContext } from './Cartnumicrease';
import { Link } from 'react-router-dom';

const Cart_slider = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

    return (
        <>
            {/* Slider */}
            <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform z-50
                ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex justify-between items-center p-4 border-b'>
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button className="cursor-pointer" onClick={() => setIsCartOpen(false)}>✖️</button>
                </div>

                <div className='flex items-center flex-col h-full w-full '>
                    {cartItems.length === 0 ? (
                        <p className='p-4'>Your cart is empty!</p>)
                        :
                        (cartItems.map((item, index) => (
                            <div key={index} className="flex gap-2 p-2 border-b">
                                <img src={item.img} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Rs {item.price}</p>
                                    <p>Qty: {item.quantity}</p>
                                </div>
                            </div>
                        ))
                        )}
                    <Link to="/address_confirm_page" className="w-11/12 h-10 bg-black text-white flex items-center justify-center fixed bottom-10">checkout</Link>
                </div>
            </div>
        </>
    )
}

export default Cart_slider;

import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { X } from 'lucide-react'

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart } = useContext(CartContext)

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className='flex justify-between items-center p-4 border-b'>
        <h2 className='text-xl font-semibold'>Your Cart</h2>
        <button onClick={toggleCart}>
          <X />
        </button>
      </div>

      {/* Cart Items */}
      <div className='p-4 overflow-y-auto h-[calc(100%-160px)]'>
        {cartItems.length === 0 ? (
          <p className='text-center text-gray-500'>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className='flex items-center mb-4 border-b pb-2'>
              <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
              <div className='ml-3 flex-1'>
                <h3 className='font-medium'>{item.name}</h3>
                <p className='text-sm text-gray-600'>Rs. {item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className='text-red-500 hover:text-red-700 cousor-pointer'
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className='p-4 border-t'>
        <button className='w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition'>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartSidebar

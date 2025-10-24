
import { ArrowRight, ChevronDown, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const [first, setfirst] = useState(1)
  return (
    <>
    {/* main header */}
      <div className='w-full bg-white h-16 border-b-2 border-b-black flex  items-center gap-4 justify-around'>

        {/* div1 */}
        <div id='logo' className='w-60 h-10 '>
          <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/Logo-min-560x87.png?height=80&v=1756630106" alt="" />
        </div>

        {/* div2 */}
        <div id='links' className='flex gap-4 items-center'>
          <Link to="/">Home</Link>
          <Link to="/the_brand">The brand</Link>
          <Link to="/">All Products</Link>
          <div className='flex'>
            <Link to="/">All Chappals </Link>
            <ChevronDown className='cursor-pointer' color=" RGB(29, 30, 27)" strokeWidth={1} />
          </div>
          <Link to="/">Best Sellers </Link>
          <Link to="/">Sale</Link>
          <Link to="/">Shoes</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* div3 */}
        <div id='input' className='border-2 border-gray-300 flex justify-center items-center rounded-2xl h-8  '>
          <input type="text" className='border-none outline-none text-center' placeholder='Start typing...' />
          <button className='bg-amber-950 rounded-full mr-1 cursor-pointer'><ArrowRight color="#ffffff" /></button>
        </div>

        {/* div4 */}
        <div className='flex'>
          <button className='cursor-pointer'><ShoppingCart color="#000000" /></button>
          <p>({first})</p>
        </div>

      </div>
    </>
  )
}

export default Header
import { ArrowRight, ChevronDown, ShoppingCart, Menu, X } from 'lucide-react'
import { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from './Use context/Useconext1'


const Header = () => {

  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* main header */}
      <div className='w-full bg-white h-auto  border-b-2 border-b-black flex items-center gap-4   justify-between fixed top-0 z-50 overflow-hidden  '>

        {/* div1 */}
        <div id='logo' className='w-60 h-10 hidden  lg:block xl:block 2xl:block'>
          <img
            className='w-full h-full'
            src="//www.peshawarichappals.pk/cdn/shop/files/Logo-min-560x87.png?height=80&v=1756630106"
            alt=""
          />
        </div>

        {/* div2 */}
        <div id='links' className='hidden gap-4 items-center  lg:flex xl:flex 2xl:flex'>
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
        <div id='input' className='border-2 border-gray-300  justify-center items-center rounded-2xl h-8 hidden  lg:hidden xl:flex 2xl:flex'>
          <input type="text" className='border-none outline-none text-center' placeholder='Start typing...' />
          <button onClick={() => setOpen(!open)} className='bg-amber-950 rounded-full mr-1 cursor-pointer'>
            <ArrowRight color="#ffffff" />
          </button>
        </div>


        {/* mobile */}
        <div className="flex items-center ml-4 gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="block lg:hidden"  >    {menuOpen ? <X /> : <Menu />} </button>
        </div>

        <div className='flex  mr-5'>
          <button onClick={() => setIsCartOpen(!isCartOpen)} className="cursor-pointer relative"> <ShoppingCart color="#000000" /></button>
          <p className="text-sm">{cartCount}</p>
        </div>
      </div>

      {/* Mobile menu (with animation) */}
      <div className={` top-5 left-0 w-full bg-white border-t border-b border-gray-500 flex flex-col items-start gap-3 px-4 py-3 lg:hidden z-40 transition-all duration-300 ease-in-out fixed ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`} >
        <Link to="/" onClick={() => setMenuOpen(false)}> Home</Link>
        <Link to="/the_brand" onClick={() => setMenuOpen(false)}>  The brand</Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>  All Products</Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>  All Chappals</Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>  Best Sellers</Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>  Sale</Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>  Shoes</Link>
        <Link to="/" onClick={() => setMenuOpen(false)}>  Contact</Link>
      </div>

    </>
  )
}

export default Header

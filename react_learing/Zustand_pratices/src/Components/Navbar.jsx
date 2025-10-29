import React from 'react'
import zustand_st1 from './zustand Store/zustand1'

const Navbar = () => {
  const { Navbaropen } = zustand_st1()

  return (
    <div
      className={`
        h-screen w-60 fixed top-0 right-0 bg-purple-600 text-white 
        transform transition-transform duration-300 ease-in-out
        ${Navbaropen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      Navbar
    </div>
  )
}

export default Navbar

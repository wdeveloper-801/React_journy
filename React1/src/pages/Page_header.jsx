
import React from 'react'
import { Link } from 'react-router-dom'

const Pagesh = () => {
  return (
    <div className='w-full h-24 bg-emerald-500 flex justify-center items-center'>
        <Link className='m-2 text-2xl font-serif' to='/'>Home</Link>
        <Link className='m-2 text-2xl font-serif' to='/About'>About</Link>
        <Link className='m-2 text-2xl font-serif' to='/Contact'>contact</Link>
    </div>
  )
}

export default Pagesh
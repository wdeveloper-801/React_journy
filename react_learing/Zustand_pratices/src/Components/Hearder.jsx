import React from 'react'
import { Link } from 'react-router-dom'
import { TextAlignJustify } from 'lucide-react'
import zustand_st1 from './zustand Store/zustand1'

const Header = () => {
    const { Navbar } = zustand_st1() // Zustand toggle function

    return (
        <div className='w-full h-10 bg-blue-500 flex justify-around items-center px-4'>
            <Link to="/page1" className='text-white font-semibold'>Page 1</Link>
            <button onClick={Navbar} className='text-white cursor-pointer'>
                <TextAlignJustify />
            </button>
        </div>
    )
}

export default Header
